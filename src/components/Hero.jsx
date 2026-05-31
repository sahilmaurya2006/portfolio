"use client";

import { memo, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import heroImg from "../assets/user.svg";
import { useIntro } from "./IntroWrapper";

const Hero = memo(function Hero() {
  const { introComplete } = useIntro();
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const xPercentRef = useRef(0);
  const directionRef = useRef(-1);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.5,
          start: 0,
          end: window.innerHeight,
          onUpdate: (e) => (directionRef.current = e.direction * -1),
        },
        x: "-500px",
      });
    });
    let animationId;
    const animate = () => {
      if (xPercentRef.current < -100) xPercentRef.current = 0;
      if (xPercentRef.current > 0) xPercentRef.current = -100;
      if (firstText.current && secondText.current) {
        gsap.set(firstText.current, { xPercent: xPercentRef.current });
        gsap.set(secondText.current, { xPercent: xPercentRef.current });
      }
      xPercentRef.current += 0.25 * directionRef.current;
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => {
      ctx.revert();
      cancelAnimationFrame(animationId);
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative w-full min-h-screen sm:h-screen mx-auto overflow-hidden">

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Orbs */}
      <div
        className="absolute top-[15%] left-[5%] w-[300px] h-[300px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.12), transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(167,139,250,0.1), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── DESKTOP layout ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={introComplete ? "show" : "hidden"}
        className="hidden sm:flex w-full px-14 flex-row items-start gap-5 pt-[100px]"
      >
        {/* Accent line */}
        <motion.div
          variants={item}
          className="flex flex-col justify-center items-center mt-5 flex-shrink-0"
        >
          <div
            className="w-3 h-3 rounded-full"
            style={{
              background: "#818cf8",
              boxShadow: "0 0 18px rgba(129,140,248,1), 0 0 40px rgba(129,140,248,0.4)",
            }}
          />
          <div
            className="w-px h-80"
            style={{
              background: "linear-gradient(to bottom, #818cf8, rgba(139,92,246,0.3), transparent)",
            }}
          />
        </motion.div>

        {/* Text content */}
        <div className="flex flex-col ml-5">
          <motion.p
            variants={item}
            className="mt-10 mb-2 text-[12px] tracking-[0.4em] uppercase font-semibold"
            style={{ color: "#6366f1" }}
          >
            Full Stack Developer · Cybersecurity Researcher
          </motion.p>

          <motion.h1
            variants={item}
            className="font-black text-white leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(72px, 10vw, 120px)" }}
          >
            Hi, I&apos;m{" "}
            <span
              className="block"
              style={{
                background: "linear-gradient(125deg, #a5b4fc 0%, #818cf8 35%, #c084fc 70%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              SAHIL
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-[560px] text-[17px] leading-[1.8]"
            style={{ color: "#94a3b8" }}
          >
            Passionate about building{" "}
            <span style={{ color: "#a5b4fc", fontWeight: 600 }}>
              secure, scalable web applications
            </span>{" "}
            and uncovering real-world vulnerabilities through{" "}
            <span style={{ color: "#c084fc", fontWeight: 600 }}>
              bug bounty research
            </span>
            .
          </motion.p>

          {/* Stat badges */}
          <motion.div variants={item} className="flex gap-3 mt-6 flex-wrap">
            {[
              { icon: "⚡", label: "2+ CVE Reports" },
              { icon: "🛡️", label: "High Severity" },
              { icon: "🏆", label: "Top 3% TryHackMe" },
              { icon: "🔥", label: "Bug Bounty" },
            ].map(({ icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-2 text-[13px] font-medium px-4 py-2 rounded-full"
                style={{
                  color: "#cbd5e1",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {icon} {label}
              </span>
            ))}
          </motion.div>

          {/* Social buttons — DESKTOP */}
          <motion.div variants={item} className="mt-8 flex gap-3 flex-wrap relative z-10">
            <a
              href="https://www.linkedin.com/in/sahil-maurya-686179373/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn profile"
              title="LinkedIn"
              className="flex items-center justify-center w-[50px] h-[50px] rounded-full
                transition-all duration-300
                border border-indigo-500/35 bg-[rgba(99,102,241,0.08)] text-indigo-200
                hover:bg-indigo-500/16 hover:border-indigo-300 hover:scale-110"
            >
                <svg className="w-[26px] h-[26px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.667-2.236-1.066 0-1.724.718-2.004 1.412-.103.25-.129.599-.129.948v5.445h-3.523s.043-8.811 0-9.728h3.523v1.377c.43-.664 1.198-1.61 2.914-1.61 2.122 0 3.714 1.388 3.714 4.371l-.004.625zm-15.864-11.02c-1.146 0-1.88-.759-1.88-1.708 0-.954.738-1.708 1.917-1.708 1.178 0 1.879.754 1.897 1.708 0 .949-.719 1.708-1.934 1.708zm-1.611 11.02h3.222v-9.728h-3.222v9.728z" />
              </svg>
            </a>

            <a
              href="https://github.com/sahilmaurya2006"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub profile"
              title="GitHub"
              className="flex items-center justify-center w-[50px] h-[50px] rounded-full
                transition-all duration-300
                border border-indigo-500/35 bg-[rgba(99,102,241,0.08)] text-indigo-200
                hover:bg-indigo-500/16 hover:border-indigo-300 hover:scale-110"
            >
              <svg className="w-[26px] h-[26px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://servify.com/in/security-hall-of-fame/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Security Hall of Fame"
              title="Hall of Fame"
              className="flex items-center justify-center w-[50px] h-[50px] rounded-full
                transition-all duration-300
                border border-indigo-500/35 bg-[rgba(99,102,241,0.08)] text-indigo-200
                hover:bg-indigo-500/16 hover:border-indigo-300 hover:scale-110"
            >
              <svg className="w-[28px] h-[28px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2.5L3.8 5.6V11c0 4.7 3 8.9 8.2 10.9 5.2-2 8.2-6.2 8.2-10.9V5.6L12 2.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                <path d="M9.5 10.2A2.5 2.5 0 0 1 12 7.7a2.5 2.5 0 0 1 2.5 2.5c0 1-.6 1.8-1.4 2.2v1.8h-2.2v-1.8c-.8-.4-1.4-1.2-1.4-2.2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
                <path d="M12 12.4v2.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Desktop: absolutely positioned hero image — bigger size */}
        <motion.div
          variants={item}
          className="absolute bottom-0 right-0"
        >
          <div
            className="absolute inset-0 blur-3xl opacity-20 rounded-full scale-75"
            style={{ background: "radial-gradient(circle, #6366f1, #8b5cf6)" }}
          />
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={heroImg}
              alt="Sahil Maurya"
              priority
              className="w-[680px] lg:w-[820px] opacity-90"
              style={{
                filter: "drop-shadow(0 0 56px rgba(99,102,241,0.4))",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── MOBILE layout ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={introComplete ? "show" : "hidden"}
        className="flex sm:hidden flex-col w-full px-5 pt-[90px] pb-10"
      >
        <motion.p
          variants={item}
          className="text-[10px] tracking-[0.35em] uppercase font-semibold mb-3"
          style={{ color: "#6366f1" }}
        >
          Full Stack · Cybersecurity
        </motion.p>

        <motion.h1
          variants={item}
          className="font-black text-white leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(48px, 13vw, 72px)" }}
        >
          Hi, I&apos;m{" "}
          <span
            className="block"
            style={{
              background: "linear-gradient(125deg, #a5b4fc 0%, #818cf8 35%, #c084fc 70%, #a78bfa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            SAHIL
          </span>
        </motion.h1>

        {/* Hero image — inline on mobile */}
        <motion.div
          variants={item}
          className="relative w-full flex justify-center my-4"
        >
          <div
            className="absolute inset-0 blur-2xl opacity-15 rounded-full"
            style={{ background: "radial-gradient(circle, #6366f1, #8b5cf6)" }}
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={heroImg}
              alt="Sahil Maurya"
              priority
              className="w-[260px] opacity-80 mx-auto"
              style={{
                filter: "drop-shadow(0 0 28px rgba(99,102,241,0.4))",
              }}
            />
          </motion.div>
        </motion.div>

        <motion.p
          variants={item}
          className="text-[14px] leading-[1.8] mb-4"
          style={{ color: "#94a3b8" }}
        >
          Passionate about building{" "}
          <span style={{ color: "#a5b4fc", fontWeight: 600 }}>secure web apps</span>{" "}
          and finding vulnerabilities through{" "}
          <span style={{ color: "#c084fc", fontWeight: 600 }}>bug bounty research</span>.
        </motion.p>

        <motion.div variants={item} className="grid grid-cols-2 gap-2 mb-5">
          {[
            { icon: "⚡", label: "2+ CVE Reports" },
            { icon: "🛡️", label: "High Severity" },
            { icon: "🏆", label: "Top 3% TryHackMe" },
            { icon: "🔥", label: "Bug Bounty" },
          ].map(({ icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1.5 rounded-full"
              style={{
                color: "#cbd5e1",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {icon} {label}
            </span>
          ))}
        </motion.div>

        <motion.div variants={item} className="flex gap-3 justify-center relative z-10">
          <a
            href="https://www.linkedin.com/in/sahil-maurya-686179373/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile"
            title="LinkedIn"
            className="flex items-center justify-center w-[46px] h-[46px] rounded-full
              transition-all duration-300
              border border-indigo-500/35 bg-[rgba(99,102,241,0.08)] text-indigo-200
              hover:bg-indigo-500/16 hover:border-indigo-300 hover:scale-110"
          >
            <svg className="w-[23px] h-[23px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.667-2.236-1.066 0-1.724.718-2.004 1.412-.103.25-.129.599-.129.948v5.445h-3.523s.043-8.811 0-9.728h3.523v1.377c.43-.664 1.198-1.61 2.914-1.61 2.122 0 3.714 1.388 3.714 4.371l-.004.625zm-15.864-11.02c-1.146 0-1.88-.759-1.88-1.708 0-.954.738-1.708 1.917-1.708 1.178 0 1.879.754 1.897 1.708 0 .949-.719 1.708-1.934 1.708zm-1.611 11.02h3.222v-9.728h-3.222v9.728z" />
            </svg>
          </a>

          <a
            href="https://github.com/sahilmaurya2006"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
            title="GitHub"
            className="flex items-center justify-center w-[46px] h-[46px] rounded-full
              transition-all duration-300
              border border-indigo-500/35 bg-[rgba(99,102,241,0.08)] text-indigo-200
              hover:bg-indigo-500/16 hover:border-indigo-300 hover:scale-110"
          >
            <svg className="w-[23px] h-[23px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <a
            href="https://servify.com/in/security-hall-of-fame/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Security Hall of Fame"
            title="Hall of Fame"
            className="flex items-center justify-center w-[46px] h-[46px] rounded-full
              transition-all duration-300
              border border-indigo-500/35 bg-[rgba(99,102,241,0.08)] text-indigo-200
              hover:bg-indigo-500/16 hover:border-indigo-300 hover:scale-110"
          >
            <svg className="w-[25px] h-[25px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2.5L3.8 5.6V11c0 4.7 3 8.9 8.2 10.9 5.2-2 8.2-6.2 8.2-10.9V5.6L12 2.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
              <path d="M9.5 10.2A2.5 2.5 0 0 1 12 7.7a2.5 2.5 0 0 1 2.5 2.5c0 1-.6 1.8-1.4 2.2v1.8h-2.2v-1.8c-.8-.4-1.4-1.2-1.4-2.2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
              <path d="M12 12.4v2.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Marquee bg text */}
      <div
        className="absolute top-[70%] sm:top-[63%] w-full overflow-hidden pointer-events-none select-none z-0"
        style={{ opacity: 0.032 }}
      >
        <div
          ref={slider}
          className="whitespace-nowrap font-black text-white"
          style={{ fontSize: "clamp(60px, 13vw, 170px)", letterSpacing: "-0.03em" }}
        >
          <span ref={firstText}>Cybersecurity · Bug Bounty · Dev · </span>
          <span ref={secondText}>Cybersecurity · Bug Bounty · Dev · </span>
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={introComplete ? { opacity: 1 } : {}}
        transition={{ delay: 1.8 }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10"
      >
        <span
          className="text-[9px] tracking-[0.35em] uppercase"
          style={{ color: "#334155" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, #6366f1, transparent)" }}
        />
      </motion.div>
    </section>
  );
});

export default Hero;