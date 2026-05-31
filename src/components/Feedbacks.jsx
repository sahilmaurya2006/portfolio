"use client";
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants/constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
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
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    style={{
      position: "relative",
      background: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.08))",
      padding: "28px",
      borderRadius: "20px",
      border: "1px solid rgba(99,102,241,0.2)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)",
      overflow: "hidden",
      minWidth: isMobile ? "100%" : "280px",
      maxWidth: "380px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      transition: "all 0.3s ease",
      cursor: "pointer",
      boxSizing: "border-box",
    }}
    onHoverStart={() => {}}
    className="hover:shadow-2xl hover:scale-[1.02]"
  >
    {/* Gradient accent line at top */}
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

    {/* Star rating */}
    <div style={{ display: "flex", gap: "6px", marginBottom: "18px", alignItems: "center" }}>
      {[...Array(5)].map((_, i) => (
        <span key={i} style={{ fontSize: "18px", lineHeight: "1" }}>
          ⭐
        </span>
      ))}
    </div>

    {/* Quote mark */}
    <div style={{
      color: "#a5b4fc",
      fontSize: "56px",
      fontWeight: "900",
      lineHeight: "0.8",
      marginBottom: "12px",
      fontFamily: "Georgia, serif",
    }}>
      {"\u201C"}
    </div>

    {/* Testimonial text */}
    <div style={{ marginBottom: "20px" }}>
      <p style={{
        color: "#f1f5f9",
        fontSize: "15px",
        lineHeight: "1.8",
        fontWeight: "500",
      }}>
        {testimonial}
      </p>
    </div>

    {/* Divider */}
    <div style={{
      height: "1px",
      background: "linear-gradient(90deg, rgba(99,102,241,0.2), transparent)",
      marginBottom: "16px",
    }} />

    {/* Author section */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
      <div style={{ flex: 1 }}>
        <p style={{
          color: "#f1f5f9",
          fontSize: "14px",
          fontWeight: "700",
          marginBottom: "4px",
        }}>
          {name}
        </p>
        <p style={{
          color: "#94a3b8",
          fontSize: "12px",
          fontWeight: "500",
        }}>
          {designation}
        </p>
        <p style={{
          color: "#818cf8",
          fontSize: "11px",
          fontWeight: "600",
          marginTop: "2px",
          letterSpacing: "0.05em",
        }}>
          {company}
        </p>
      </div>

      {/* Avatar */}
      <img
        src={image}
        alt={`feedback_by-${name}`}
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid rgba(99,102,241,0.35)",
          boxShadow: "0 4px 12px rgba(99,102,241,0.25)",
        }}
      />
    </div>
  </motion.div>
  );
};

const Feedbacks = () => {
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
    <div style={{
      marginTop: isMobile ? "32px" : "48px",
      background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.04))",
      borderRadius: isMobile ? "20px" : "24px",
      border: "1px solid rgba(99,102,241,0.1)",
      overflow: "hidden",
      boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
      boxSizing: "border-box",
    }}>
      {/* Header section */}
      <div style={{
        background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))",
        borderBottom: "1px solid rgba(99,102,241,0.15)",
        padding: isMobile ? "32px 24px" : "60px 40px",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}>
        {/* Decorative gradient orbs */}
        <div style={{
          position: "absolute",
          top: "-50px",
          right: isMobile ? "-80px" : "-100px",
          width: isMobile ? "220px" : "300px",
          height: isMobile ? "220px" : "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.1), transparent)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }} />
        
        <motion.div variants={textVariant()}>
          <p style={{
            fontSize: isMobile ? "10px" : "12px",
            fontWeight: "700",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#818cf8",
            marginBottom: "12px",
          }}>
            What others say
          </p>
          <h2 style={{
            fontSize: isMobile ? "clamp(24px, 5vw, 42px)" : "clamp(32px, 5vw, 56px)",
            fontWeight: "900",
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            background: "linear-gradient(135deg, #fff 30%, #a5b4fc 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Testimonials.
          </h2>
        </motion.div>
      </div>

      {/* Cards section */}
      <div style={{
        padding: isMobile ? "24px 16px" : "40px",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(320px, 1fr))",
        gap: isMobile ? "20px" : "28px",
        justifyContent: "center",
        alignItems: "stretch",
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box",
      }}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
