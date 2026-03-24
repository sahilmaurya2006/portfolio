"use client";
import React, { Suspense, memo, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = memo(function Earth({ scale }) {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <primitive object={earth.scene} scale={scale} position-y={0} rotation-y={0} />
  );
});

// Preload the model
useGLTF.preload("./planet/scene.gltf");

const EarthCanvas = memo(function EarthCanvas() {
  const [isMobile, setIsMobile] = useState(false);
  const [scale, setScale] = useState(2.5);
  const [cameraPos, setCameraPos] = useState([-4, 3, 6]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      if (mobile) {
        setScale(1.5);
        setCameraPos([-3, 2, 4]);
      } else {
        setScale(2.5);
        setCameraPos([-4, 3, 6]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      className="cursor-move"
      frameloop="demand"
      dpr={[1, 1.5]}
      gl={{
        antialias: false,
        powerPreference: "high-performance",
        preserveDrawingBuffer: false,
      }}
      camera={{
        fov: isMobile ? 50 : 45,
        near: 0.1,
        far: 200,
        position: cameraPos,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.25} />
        <Earth scale={scale} />
      </Suspense>
    </Canvas>
  );
});

export default EarthCanvas;