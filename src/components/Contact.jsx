"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "./hoc";
import { slideIn } from "../utils/motion";
import EarthCanvas from "./canvas/Earth";

// ─── Shared styles ────────────────────────────────────────────────────────────

const inputBase = {
  width: "100%",
  background: "rgba(99,102,241,0.06)",
  border: "1px solid rgba(99,102,241,0.18)",
  borderRadius: "10px",
  padding: "13px 16px",
  color: "#f1f5f9",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 0.2s ease, background 0.2s ease",
  fontFamily: "inherit",
  boxSizing: "border-box",
};

const labelBase = {
  display: "block",
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#818cf8",
  marginBottom: "8px",
};

// ─── Input field with focus effect ───────────────────────────────────────────

function Field({ label, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label style={labelBase}>{label}</label>
      {children}
    </div>
  );
}

function StyledInput({ ...props }) {
  const handleFocus = (e) => {
    e.target.style.borderColor = "rgba(99,102,241,0.55)";
    e.target.style.background = "rgba(99,102,241,0.1)";
  };
  const handleBlur = (e) => {
    e.target.style.borderColor = "rgba(99,102,241,0.18)";
    e.target.style.background = "rgba(99,102,241,0.06)";
  };
  return (
    <input
      {...props}
      style={inputBase}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}

function StyledTextarea({ ...props }) {
  const handleFocus = (e) => {
    e.target.style.borderColor = "rgba(99,102,241,0.55)";
    e.target.style.background = "rgba(99,102,241,0.1)";
  };
  const handleBlur = (e) => {
    e.target.style.borderColor = "rgba(99,102,241,0.18)";
    e.target.style.background = "rgba(99,102,241,0.06)";
  };
  return (
    <textarea
      {...props}
      style={{
        ...inputBase,
        resize: "vertical",
        minHeight: "130px",
        lineHeight: 1.7,
      }}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}

// ─── Success state ────────────────────────────────────────────────────────────

function SuccessState({ onReset }) {
  return (
    <div style={{ textAlign: "center", padding: "48px 0" }}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14 }}
        style={{ fontSize: "52px", marginBottom: "18px" }}
      >
        ✅
      </motion.div>
      <h3 style={{ color: "#f1f5f9", fontSize: "20px", fontWeight: 800, marginBottom: "8px" }}>
        Message Sent!
      </h3>
      <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "24px" }}>
        Thanks for reaching out — I&apos;ll get back to you soon.
      </p>
      <button
        onClick={onReset}
        style={{
          padding: "10px 26px", borderRadius: "10px", border: "none",
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          color: "#fff", fontWeight: 700, fontSize: "13px", cursor: "pointer",
          letterSpacing: "0.04em",
        }}
      >
        Send Another →
      </button>
    </div>
  );
}

// ─── Main Contact component ───────────────────────────────────────────────────

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  fetch("https://formspree.io/f/xbdyygyg", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: form.name,
      email: form.email,
      message: form.message,
    }),
  })
    .then((res) => {
      if (res.ok) {
        setLoading(false);
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
      alert("Something went wrong. Please try again.");
    });
};

  return (
    <>
      {/* ── Section heading ── */}
      <div style={{ textAlign: "center", marginBottom: isMobile ? "40px" : "56px" }}>
        <p style={{
          fontSize: isMobile ? "10px" : "11px", fontWeight: 700, letterSpacing: "0.35em",
          textTransform: "uppercase", color: "#6366f1", marginBottom: "10px",
        }}>
          Get in touch
        </p>
        <h2 style={{
          fontSize: isMobile ? "clamp(28px, 5vw, 42px)" : "clamp(32px, 5vw, 56px)", fontWeight: 900,
          letterSpacing: "-0.02em", lineHeight: 1.1,
          background: "linear-gradient(135deg, #fff 30%, #a5b4fc 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          Contact.
        </h2>
      </div>

      {/* ── Two-column layout ── */}
      <div style={{
        display: "flex",
        gap: isMobile ? "24px" : "40px",
        alignItems: isMobile ? "stretch" : "flex-start",
        flexWrap: "wrap",
      }}>

        {/* ── LEFT: Form card ── */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          style={{
            flex: "1 1 340px",
            minWidth: isMobile ? "100%" : "300px",
            background: "linear-gradient(145deg, rgba(13,11,34,0.98) 0%, rgba(18,16,44,0.98) 100%)",
            border: "1px solid rgba(99,102,241,0.14)",
            borderRadius: isMobile ? "18px" : "20px",
            padding: isMobile ? "24px 20px" : "36px 32px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 8px 48px rgba(0,0,0,0.45)",
            boxSizing: "border-box",
          }}
        >
          {/* Top shimmer */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "1.5px",
            background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.7), rgba(196,181,253,0.6), transparent)",
          }} />

          {/* Quick contact links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "28px" }}>
            {[
              { icon: "✉️", label: "Email", value: "sahilmaurya2575@gmail.com", href: "mailto:sahil@example.com" },
              { icon: "🐙", label: "GitHub", value: "github.com/sahilmaurya2006", href: "https://github.com/sahilmaurya2006" },
            ].map(({ icon, label, value, href }) => {
              const isEmail = label === "Email";
              const Element = isEmail ? "div" : "a";
              return (
                <Element key={label} href={!isEmail ? href : undefined} target={!isEmail ? "_blank" : undefined} rel={!isEmail ? "noopener noreferrer" : undefined}
                  style={{
                    display: "flex", alignItems: "center", gap: "10px",
                    textDecoration: "none", padding: "9px 12px", borderRadius: "9px",
                    border: "1px solid rgba(99,102,241,0.12)",
                    background: isEmail ? "rgba(99,102,241,0.03)" : "rgba(99,102,241,0.05)",
                    transition: "all 0.2s ease",
                    cursor: isEmail ? "not-allowed" : "pointer",
                    opacity: isEmail ? 0.6 : 1,
                  }}
                  onMouseEnter={e => {
                    if (!isEmail) {
                      e.currentTarget.style.background = "rgba(99,102,241,0.12)";
                      e.currentTarget.style.borderColor = "rgba(99,102,241,0.28)";
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isEmail) {
                      e.currentTarget.style.background = "rgba(99,102,241,0.05)";
                      e.currentTarget.style.borderColor = "rgba(99,102,241,0.12)";
                    }
                  }}
                >
                  <span style={{ fontSize: "16px" }}>{icon}</span>
                  <div>
                    <p style={{ color: "#818cf8", fontSize: "10px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</p>
                    <p style={{ color: "#64748b", fontSize: "11px" }}>{value}</p>
                  </div>
                  <span style={{ marginLeft: "auto", color: "#475569", fontSize: "12px" }}>↗</span>
                </Element>
              );
            })}
          </div>

          {/* Divider */}
          <div style={{
            height: "1px", marginBottom: "24px",
            background: "linear-gradient(90deg, rgba(99,102,241,0.25), transparent)",
          }} />

          {/* Form or success */}
          {sent ? (
            <SuccessState onReset={() => setSent(false)} />
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "18px" }}
            >
              <Field label="Your Name">
                <StyledInput
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  required
                />
              </Field>

              <Field label="Your Email">
                <StyledInput
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  required
                />
              </Field>

              <Field label="Your Message">
                <StyledTextarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  required
                  rows={5}
                />
              </Field>

              <button
                type="submit"
                disabled={loading}
                style={{
                  padding: "13px 28px",
                  borderRadius: "10px",
                  border: "none",
                  background: loading
                    ? "rgba(99,102,241,0.3)"
                    : "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  color: loading ? "#64748b" : "#fff",
                  fontWeight: 800,
                  fontSize: "14px",
                  cursor: loading ? "not-allowed" : "pointer",
                  letterSpacing: "0.05em",
                  transition: "opacity 0.2s ease, transform 0.15s ease",
                  boxShadow: loading ? "none" : "0 4px 24px rgba(99,102,241,0.3)",
                }}
                onMouseEnter={e => { if (!loading) e.currentTarget.style.opacity = "0.88"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </form>
          )}
        </motion.div>

        {/* ── RIGHT: Earth canvas ── */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          style={{
            flex: isMobile ? "1 1 100%" : "1 1 340px",
            minWidth: isMobile ? "auto" : "300px",
            height: isMobile ? "320px" : "480px",
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(99,102,241,0.1)",
            background: "rgba(8,6,24,0.6)",
            boxShadow: "0 8px 48px rgba(0,0,0,0.4)",
          }}
        >
          {/* Glow ring behind earth */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at center, rgba(99,102,241,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 1,
          }} />

          {/* Top shimmer */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "1.5px",
            background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), rgba(196,181,253,0.4), transparent)",
            zIndex: 2,
          }} />

          {/* Label */}
          <div style={{
            position: "absolute", bottom: "18px", left: 0, right: 0,
            textAlign: "center", zIndex: 2, pointerEvents: "none",
          }}>
            <span style={{
              fontSize: "10px", fontWeight: 700, letterSpacing: "0.25em",
              textTransform: "uppercase", color: "rgba(129,140,248,0.5)",
            }}>
              Drag to rotate
            </span>
          </div>

          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");