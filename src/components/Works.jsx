"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "./hoc";
import { projects } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import { HiLink } from "react-icons/hi";
import { ImGithub } from "react-icons/im";
import Image from "next/image";
import color_sharp from "../assets/color_sharp.png";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  features,
  live_link,
}) => {
  const refLiveLink = React.useRef(null);
  const refSourceCodeLink = React.useRef(null);
  const [positionLiveLink, setPositionLiveLink] = React.useState({
    x: 0,
    y: 0,
  });
  const [positionSourceCodeLink, setPositionSourceCodeLink] = React.useState({
    x: 0,
    y: 0,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const onMouseMoveLiveLink = (e) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } =
      refLiveLink.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPositionLiveLink({ x, y });
  };

  const onMouseMoveSourceCodeLink = (e) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } =
      refSourceCodeLink.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPositionSourceCodeLink({ x, y });
  };

  const onMouseLeave = () => {
    setPositionLiveLink({ x: 0, y: 0 });
    setPositionSourceCodeLink({ x: 0, y: 0 });
  };

  const mobilePadding = isMobile ? "20px" : "32px";
  const mobileMarginBottom = isMobile ? "18px" : "24px";
  const mobileFontSize = isMobile ? "22px" : "26px";
  const mobileDescSize = isMobile ? "13.5px" : "14.5px";
  const mobileGap = isMobile ? "16px" : "28px";
  const gridColumns = isMobile ? "1fr" : "1fr auto";
  const buttonsDisplay = isMobile ? "grid" : "flex";
  const buttonsGridCols = isMobile ? "1fr 1fr" : undefined;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="group relative w-full"
      style={{
        background: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.08))",
        border: "1px solid rgba(99,102,241,0.2)",
        borderRadius: isMobile ? "24px" : "28px",
        overflow: "hidden",
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.1)",
        transition: "all 0.3s ease",
        padding: mobilePadding,
        boxSizing: "border-box",
      }}
      onMouseEnter={(e) => {
        if (!isMobile) {
          e.currentTarget.style.background = "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))";
          e.currentTarget.style.boxShadow = "0 12px 48px rgba(99,102,241,0.15), inset 0 1px 0 rgba(255,255,255,0.1)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isMobile) {
          e.currentTarget.style.background = "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.08))";
          e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.1)";
        }
      }}
    >
      {/* Top accent gradient line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #6366f1, #8b5cf6, #c084fc)",
        }}
      />

      {/* Project header with title and description */}
      <div style={{ marginBottom: mobileMarginBottom }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "12px", flexWrap: "wrap" }}>
          <h3 style={{
            fontSize: mobileFontSize,
            fontWeight: "800",
            color: "#f1f5f9",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            letterSpacing: "-0.5px",
            margin: 0,
          }}>
            {name}
            <HiLink size={isMobile ? 18 : 22} style={{ color: "#a5b4fc", flexShrink: 0 }} />
          </h3>
        </div>
        
        <p style={{
          fontSize: mobileDescSize,
          color: "#cbd5e1",
          lineHeight: "1.6",
          margin: 0,
          fontWeight: "500",
        }}>
          {description}
        </p>
      </div>

      {/* Main content grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: gridColumns,
        gap: mobileGap,
        alignItems: isMobile ? "stretch" : "start",
        marginBottom: mobileMarginBottom,
      }}>
        {/* Image section */}
        {isMobile ? (
          <div
            style={{
              position: "relative",
              borderRadius: "18px",
              overflow: "hidden",
              border: "1px solid rgba(99,102,241,0.2)",
              boxShadow: "0 8px 32px rgba(99,102,241,0.1)",
              transition: "all 0.3s ease",
              aspectRatio: "4/3",
            }}
          >
            <img
              src={image.src}
              alt={name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
            />
          </div>
        ) : (
          <Tilt>
            <div
              style={{
                position: "relative",
                borderRadius: "22px",
                overflow: "hidden",
                border: "1px solid rgba(99,102,241,0.2)",
                boxShadow: "0 10px 40px rgba(99,102,241,0.12)",
                transition: "all 0.3s ease",
                aspectRatio: "4/3",
              }}
              className="group/image hover:shadow-2xl"
            >
              <img
                src={image.src}
                alt={name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
                className="group-hover/image:scale-105"
              />
              {/* Hover overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.2)",
                  backdropFilter: "blur(0px)",
                  transition: "backdrop-filter 0.3s ease",
                  opacity: 0,
                }}
                className="group-hover/image:opacity-100 group-hover/image:backdrop-blur-sm"
              />
            </div>
          </Tilt>
        )}

        {/* Buttons and info section */}
        <div style={{
          display: buttonsDisplay,
          gridTemplateColumns: buttonsGridCols,
          flexDirection: isMobile ? undefined : "column",
          gap: isMobile ? "10px" : "12px",
          minWidth: isMobile ? undefined : "140px",
        }}>
          <motion.div
            ref={refLiveLink}
            onMouseMove={onMouseMoveLiveLink}
            onMouseLeave={onMouseLeave}
            animate={{ x: isMobile ? 0 : positionLiveLink.x, y: isMobile ? 0 : positionLiveLink.y }}
            transition={{
              type: "spring",
              stiffness: 130,
              damping: 50,
              mass: 0.1,
            }}
          >
            <button
              onClick={() => window.open(live_link, "_blank")}
              style={{
                width: "100%",
                padding: isMobile ? "10px 14px" : "11px 16px",
                borderRadius: "12px",
                border: "1.5px solid rgba(99,102,241,0.4)",
                background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.05))",
                color: "#a5b4fc",
                fontSize: isMobile ? "12px" : "13px",
                fontWeight: "700",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.6)";
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(139,92,246,0.15))";
                  e.currentTarget.style.boxShadow = "0 0 16px rgba(99,102,241,0.35)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.05))";
                  e.currentTarget.style.boxShadow = "none";
                }
              }}
            >
              <HiLink size={isMobile ? 14 : 16} />
              <span>{isMobile ? "Live" : "Live"}</span>
            </button>
          </motion.div>

          <motion.div
            ref={refSourceCodeLink}
            onMouseMove={onMouseMoveSourceCodeLink}
            onMouseLeave={onMouseLeave}
            animate={{ x: isMobile ? 0 : positionSourceCodeLink.x, y: isMobile ? 0 : positionSourceCodeLink.y }}
            transition={{
              type: "spring",
              stiffness: 130,
              damping: 50,
              mass: 0.1,
            }}
          >
            <button
              onClick={() => window.open(source_code_link, "_blank")}
              style={{
                width: "100%",
                padding: isMobile ? "10px 14px" : "11px 16px",
                borderRadius: "12px",
                border: "1.5px solid rgba(99,102,241,0.4)",
                background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.05))",
                color: "#a5b4fc",
                fontSize: isMobile ? "12px" : "13px",
                fontWeight: "700",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.6)";
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(139,92,246,0.15))";
                  e.currentTarget.style.boxShadow = "0 0 16px rgba(99,102,241,0.35)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.05))";
                  e.currentTarget.style.boxShadow = "none";
                }
              }}
            >
              <ImGithub size={isMobile ? 14 : 16} />
              <span>Code</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div style={{
        height: "1px",
        background: "linear-gradient(90deg, rgba(99,102,241,0.2), rgba(99,102,241,0.05), transparent)",
        marginBottom: isMobile ? "16px" : "20px",
      }} />

      {/* Features and tags section */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? "16px" : "20px",
      }}>
        {/* Features */}
        {features && features.length > 0 && (
          <div>
            <p style={{
              fontSize: isMobile ? "10px" : "11px",
              fontWeight: "700",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#818cf8",
              marginBottom: "8px",
            }}>
              Key Features
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {features.slice(0, isMobile ? 2 : 2).map((feature, idx) => (
                <li
                  key={idx}
                  style={{
                    fontSize: isMobile ? "12px" : "12.5px",
                    color: "#cbd5e1",
                    marginBottom: "5px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "6px",
                    fontWeight: "500",
                  }}
                >
                  <span style={{ color: "#6366f1", fontSize: "13px", marginTop: "1px", flexShrink: 0 }}>✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        <div>
          <p style={{
            fontSize: isMobile ? "10px" : "11px",
            fontWeight: "700",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#818cf8",
            marginBottom: "8px",
          }}>
            Technologies
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: isMobile ? "5px" : "6px" }}>
            {tags.slice(0, isMobile ? 2 : 3).map((tag, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: isMobile ? "10px" : "11px",
                  fontWeight: "700",
                  padding: isMobile ? "4px 10px" : "5px 12px",
                  borderRadius: "18px",
                  background: "rgba(99,102,241,0.15)",
                  color: "#a5b4fc",
                  border: "1px solid rgba(99,102,241,0.25)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
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
      {/* Premium Header Section */}
      <div style={{
        background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.04))",
        borderRadius: isMobile ? "24px" : "32px",
        border: "1px solid rgba(99,102,241,0.1)",
        padding: isMobile ? "32px 24px" : "56px 48px",
        marginBottom: isMobile ? "40px" : "56px",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}>
        {/* Decorative orbs */}
        <div style={{
          position: "absolute",
          top: isMobile ? "-60px" : "-80px",
          right: isMobile ? "-100px" : "-120px",
          width: isMobile ? "200px" : "320px",
          height: isMobile ? "200px" : "320px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.12), transparent)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          bottom: isMobile ? "-50px" : "-60px",
          left: isMobile ? "-80px" : "-100px",
          width: isMobile ? "180px" : "280px",
          height: isMobile ? "180px" : "280px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.08), transparent)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <motion.div variants={textVariant()}>
            <p style={{
              fontSize: isMobile ? "10px" : "12px",
              fontWeight: "700",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#818cf8",
              marginBottom: "14px",
              margin: 0,
            }}>
              Excellence in Code
            </p>
            <h2 style={{
              fontSize: isMobile ? "clamp(28px, 5vw, 42px)" : "clamp(36px, 6vw, 60px)",
              fontWeight: "900",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg, #fff 20%, #a5b4fc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "18px",
              margin: 0,
            }}>
              Featured Projects.
            </h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "spring", 0.2, 0.75)}
            style={{
              fontSize: isMobile ? "14px" : "15px",
              color: "#cbd5e1",
              lineHeight: "1.8",
              maxWidth: "640px",
              fontWeight: "500",
              margin: 0,
            }}
          >
            A curated selection of my best work. Each project demonstrates my expertise in building scalable, 
            performant applications with modern technologies and best practices.
          </motion.p>
        </div>
      </div>

      {/* Projects Grid Container */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(100%, 1fr))",
        gap: isMobile ? "24px" : "32px",
        width: "100%",
      }}>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
