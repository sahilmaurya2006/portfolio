"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";

import { services } from "../constants/constants";
import { SectionWrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motion";
import astronaut from "../assets/header.svg";

const ServiceCard = ({ index, title, icon, isMobile }) => {
  const content = (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.18, 0.7)}
      style={{
        background: "linear-gradient(135deg, rgba(99,102,241,0.35) 0%, rgba(139,92,246,0.2) 100%)",
        padding: "1px",
        borderRadius: "16px",
      }}
    >
      <div style={{
        background: "linear-gradient(145deg, rgba(13,11,34,0.98) 0%, rgba(18,16,44,0.98) 100%)",
        borderRadius: "15px",
        padding: isMobile ? "24px 16px" : "32px 20px",
        minHeight: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "18px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Top shimmer */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.6), transparent)",
        }} />

        {/* Icon glow */}
        <div style={{
          width: "70px", height: "70px", position: "relative",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{
            position: "absolute", inset: 0, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.18), transparent 70%)",
            filter: "blur(8px)",
          }} />
          <Image src={icon} alt={title} width={52} height={52} className="object-contain relative z-10" />
        </div>

        <h3 style={{
          color: "#f1f5f9", fontSize: isMobile ? "15px" : "16px", fontWeight: 800,
          textAlign: "center", letterSpacing: "0.02em",
        }}>
          {title}
        </h3>
      </div>
    </motion.div>
  );

  if (isMobile) {
    return <div className="xs:w-[220px] w-full">{content}</div>;
  }

  return (
    <Tilt
      className="xs:w-[220px] w-full"
      glareEnable={true}
      glareMaxOpacity={0.12}
      glareColor="#818cf8"
      glarePosition="all"
      glareBorderRadius="16px"
      tiltMaxAngleX={14}
      tiltMaxAngleY={14}
      tiltEnable={true}
      perspective={1000}
    >
      {content}
    </Tilt>
  );
};

const About = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <div className="relative overflow-hidden lg:overflow-visible">
        <motion.div variants={textVariant()}>
          <p style={{
            fontSize: isMobile ? "10px" : "11px", fontWeight: 700, letterSpacing: "0.38em",
            textTransform: "uppercase", color: "#6366f1", marginBottom: "10px",
          }}>
            Introduction
          </p>
          <h2 style={{
            fontSize: isMobile ? "clamp(28px, 5vw, 42px)" : "clamp(32px, 5vw, 60px)", fontWeight: 900,
            letterSpacing: "-0.02em", lineHeight: 1.1,
            background: "linear-gradient(135deg, #fff 30%, #a5b4fc 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text", marginBottom: "20px",
          }}>
            Overview.
          </h2>
        </motion.div>

        {/* Bio card */}
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          style={{
            position: "relative",
            background: "linear-gradient(145deg, rgba(13,11,34,0.7) 0%, rgba(18,16,44,0.7) 100%)",
            border: "1px solid rgba(99,102,241,0.14)",
            borderRadius: isMobile ? "14px" : "16px",
            padding: isMobile ? "20px 20px" : "28px 32px",
            maxWidth: "680px",
            backdropFilter: "blur(12px)",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "1.5px",
            background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.6), rgba(196,181,253,0.5), transparent)",
          }} />

          <p style={{ color: "#94a3b8", fontSize: isMobile ? "14px" : "15px", lineHeight: 1.85, fontWeight: 400 }}>
            I&apos;m a passionate{" "}
            <span style={{ color: "#a5b4fc", fontWeight: 700 }}>Cybersecurity enthusiast</span>
            {" "}and{" "}
            <span style={{ color: "#c084fc", fontWeight: 700 }}>Full-Stack Developer</span>
            {" "}who enjoys building secure, scalable, and high-performance applications.
            My primary focus is on understanding system security, ethical hacking, and secure coding
            practices while continuously improving my technical skills. I love creating modern web
            applications with clean UI, efficient backend systems, and strong performance.
          </p>

          <p style={{ color: "#64748b", fontSize: isMobile ? "13px" : "14px", lineHeight: 1.8, marginTop: "14px" }}>
            I enjoy creative thinking, generating new ideas, and solving complex problems logically.
            Always eager to learn emerging technologies, experiment with innovative projects,
            and contribute to impactful solutions that combine security, functionality, and great UX. ⚙️
          </p>
        </motion.div>

        {/* Floating astronaut */}
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", right: "-20px", top: "60px", zIndex: -1 }}
        >
          <Image
            src={astronaut}
            alt="astronaut"
            width={320}
            height={320}
            className="opacity-70 hidden lg:block"
            style={{ filter: "drop-shadow(0 0 32px rgba(99,102,241,0.25))" }}
          />
        </motion.div>
      </div>

      {/* Service cards */}
      <div className={isMobile ? "mt-12 flex flex-wrap justify-center gap-4" : "mt-16 flex flex-wrap justify-center gap-7"}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} isMobile={isMobile} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");