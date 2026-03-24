"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

const VerticalTimeline = dynamic(
  () => import("react-vertical-timeline-component").then((m) => m.VerticalTimeline),
  { ssr: false }
);
const VerticalTimelineElement = dynamic(
  () => import("react-vertical-timeline-component").then((m) => m.VerticalTimelineElement),
  { ssr: false }
);

import { styles } from "../styles";
import { experiences } from "../constants/constants";
import { SectionWrapper } from "./hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "linear-gradient(145deg, rgba(15,13,36,0.97) 0%, rgba(20,17,48,0.97) 100%)",
      color: "#fff",
      borderRadius: "18px",
      border: "1px solid rgba(99,102,241,0.14)",
      boxShadow: "0 8px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
      backdropFilter: "blur(16px)",
      padding: "30px 28px",
      position: "relative",
      overflow: "hidden",
    }}
    contentArrowStyle={{ borderRight: "8px solid rgba(99,102,241,0.25)" }}
    date={
      <span style={{
        color: "#818cf8", fontWeight: 700, fontSize: "12px",
        letterSpacing: "0.08em", textTransform: "uppercase",
      }}>
        {experience.date}
      </span>
    }
    iconStyle={{
      background: experience.iconBg,
      border: "2px solid rgba(99,102,241,0.35)",
      boxShadow: "0 0 0 4px rgba(99,102,241,0.08), 0 0 24px rgba(99,102,241,0.25)",
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon?.src || experience.icon}
          alt={experience.company_name}
          className="w-[58%] h-[58%] object-contain"
        />
      </div>
    }
  >
    {/* Top shimmer line */}
    <div style={{
      position: "absolute", top: 0, left: 0, right: 0, height: "1.5px",
      background: "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.7) 40%, rgba(196,181,253,0.7) 60%, transparent 100%)",
    }} />

    {/* Number badge */}
    <div style={{
      position: "absolute", top: "20px", right: "20px",
      width: "28px", height: "28px", borderRadius: "8px",
      background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.22)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: "11px", fontWeight: 800, color: "#818cf8", letterSpacing: "0.02em",
    }}>
      {String(index + 1).padStart(2, "0")}
    </div>

    {/* Title */}
    <h3 style={{ color: "#f1f5f9", fontSize: "19px", fontWeight: 800, lineHeight: 1.2, paddingRight: "40px", marginBottom: "4px" }}>
      {experience.title}
    </h3>
    <p style={{ color: "#818cf8", fontSize: "12px", fontWeight: 600, letterSpacing: "0.03em" }}>
      {experience.company_name}
    </p>

    {/* Divider */}
    <div style={{
      margin: "16px 0",
      height: "1px",
      background: "linear-gradient(90deg, rgba(99,102,241,0.3) 0%, transparent 80%)",
    }} />

    {/* Points */}
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
      {experience.points.map((point, i) => (
        <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
          <span style={{
            marginTop: "7px", width: "5px", height: "5px", borderRadius: "50%", flexShrink: 0,
            background: "linear-gradient(135deg, #6366f1, #a78bfa)",
            boxShadow: "0 0 6px rgba(99,102,241,0.6)",
          }} />
          <span style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7 }}>{point}</span>
        </li>
      ))}
    </ul>

    {/* Tags */}
    {experience.tags && (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "18px" }}>
        {experience.tags.map((tag, i) => (
          <span key={i} style={{
            fontSize: "10px", fontWeight: 700, padding: "4px 10px", borderRadius: "100px",
            background: "rgba(99,102,241,0.08)", color: "#a5b4fc",
            border: "1px solid rgba(99,102,241,0.18)", letterSpacing: "0.04em", textTransform: "uppercase",
          }}>
            {tag}
          </span>
        ))}
      </div>
    )}

    {/* Links */}
    {experience.links && (
      <div style={{ display: "flex", gap: "8px", marginTop: "14px", flexWrap: "wrap" }}>
        {experience.links.map((link, i) => (
          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
            style={{
              fontSize: "12px", fontWeight: 700, padding: "6px 14px", borderRadius: "8px",
              background: "rgba(99,102,241,0.1)", color: "#a5b4fc",
              border: "1px solid rgba(99,102,241,0.28)", textDecoration: "none",
              transition: "all 0.2s ease", display: "inline-flex", alignItems: "center", gap: "4px",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(99,102,241,0.22)";
              e.currentTarget.style.borderColor = "rgba(99,102,241,0.55)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(99,102,241,0.1)";
              e.currentTarget.style.borderColor = "rgba(99,102,241,0.28)";
            }}>
            {link.label} <span style={{ opacity: 0.7 }}>↗</span>
          </a>
        ))}
      </div>
    )}
  </VerticalTimelineElement>
);

const Experience = () => {
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
      <motion.div variants={textVariant()}>
        <p style={{
          textAlign: "center", fontSize: isMobile ? "10px" : "12px", fontWeight: 700,
          letterSpacing: "0.35em", textTransform: "uppercase", color: "#6366f1", marginBottom: "10px",
        }}>
          What I have done so far
        </p>
        <h2 style={{
          textAlign: "center", fontSize: isMobile ? "clamp(24px, 5vw, 42px)" : "clamp(32px, 5vw, 56px)", fontWeight: 900,
          background: "linear-gradient(135deg, #fff 30%, #a5b4fc 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          letterSpacing: "-0.02em", lineHeight: 1.1,
        }}>
          Work Experience.
        </h2>
      </motion.div>

      <div style={{ marginTop: isMobile ? "48px" : "80px" }}>
        <VerticalTimeline lineColor="rgba(99,102,241,0.2)">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} experience={exp} index={i} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");