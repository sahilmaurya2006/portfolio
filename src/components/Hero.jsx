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
    return () => { ctx.revert(); cancelAnimationFrame(animationId); };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    /*
      Mobile  (<sm): min-h-screen, flex-col — text block on top, image below, no absolute positioning
      Desktop (sm+): h-screen, image absolutely positioned bottom-right
    */
    <section className="relative w-full min-h-screen sm:h-screen mx-auto overflow-hidden">

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)`,
        backgroundSize: "72px 72px",
      }} />
      {/* Orbs */}
      <div className="absolute top-[15%] left-[5%] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12), transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(167,139,250,0.1), transparent 70%)", filter: "blur(60px)" }} />

      {/* ── DESKTOP layout: text + accent line side by side, image absolute ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={introComplete ? "show" : "hidden"}
        className="hidden sm:flex max-w-7xl mx-auto px-16 flex-row items-start gap-5 pt-[110px]"
      >
        {/* Accent line */}
        <motion.div variants={item} className="flex flex-col justify-center items-center mt-5">
          <div className="w-3 h-3 rounded-full"
            style={{ background: "#818cf8", boxShadow: "0 0 18px rgba(129,140,248,1), 0 0 40px rgba(129,140,248,0.4)" }} />
          <div className="w-px h-80"
            style={{ background: "linear-gradient(to bottom, #818cf8, rgba(139,92,246,0.3), transparent)" }} />
        </motion.div>

        <div className="flex flex-col">
          <motion.p variants={item} className="mt-10 mb-2 text-[11px] tracking-[0.4em] uppercase font-semibold"
            style={{ color: "#6366f1" }}>
            Full Stack Developer · Cybersecurity Researcher
          </motion.p>

          <motion.h1 variants={item} className="font-black text-white leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(52px, 8vw, 92px)" }}>
            Hi, I&apos;m{" "}
            <span className="block" style={{
              background: "linear-gradient(125deg, #a5b4fc 0%, #818cf8 35%, #c084fc 70%, #a78bfa 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              SAHIL
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-4 max-w-[460px] text-[15px] leading-[1.8]"
            style={{ color: "#94a3b8" }}>
            Passionate about building{" "}
            <span style={{ color: "#a5b4fc", fontWeight: 600 }}>secure, scalable web applications</span>{" "}
            and uncovering real-world vulnerabilities through{" "}
            <span style={{ color: "#c084fc", fontWeight: 600 }}>bug bounty research</span>.
          </motion.p>

          <motion.div variants={item} className="flex gap-2 mt-5 flex-wrap">
            {[
              { icon: "⚡", label: "2+ CVE Reports" },
              { icon: "🛡️", label: "High Severity" },
              { icon: "🏆", label: "Top 3% TryHackMe" },
              { icon: "🔥", label: "Bug Bounty" },
            ].map(({ icon, label }) => (
              <span key={label} className="flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-full"
                style={{ color: "#cbd5e1", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                {icon} {label}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Desktop: absolutely positioned hero image */}
        <motion.div variants={item} className="absolute bottom-[60px] right-[20px]">
          <div className="absolute inset-0 blur-3xl opacity-20 rounded-full scale-75"
            style={{ background: "radial-gradient(circle, #6366f1, #8b5cf6)" }} />
          <motion.div animate={{ y: [0, -16, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
            <Image src={heroImg} alt="Sahil Maurya" priority
              className="w-[560px] lg:w-[700px] opacity-80"
              style={{ filter: "drop-shadow(0 0 48px rgba(99,102,241,0.35))" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── MOBILE layout: stacked, no absolute image ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={introComplete ? "show" : "hidden"}
        className="flex sm:hidden flex-col max-w-7xl mx-auto px-6 pt-[90px] pb-10"
      >
        {/* Label */}
        <motion.p variants={item} className="text-[10px] tracking-[0.35em] uppercase font-semibold mb-3"
          style={{ color: "#6366f1" }}>
          Full Stack · Cybersecurity
        </motion.p>

        {/* Heading */}
        <motion.h1 variants={item} className="font-black text-white leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(38px, 11vw, 58px)" }}>
          Hi, I&apos;m{" "}
          <span className="block" style={{
            background: "linear-gradient(125deg, #a5b4fc 0%, #818cf8 35%, #c084fc 70%, #a78bfa 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            SAHIL
          </span>
        </motion.h1>

        {/* Hero image — inline on mobile, centred */}
        <motion.div variants={item} className="relative w-full flex justify-center my-4">
          <div className="absolute inset-0 blur-2xl opacity-15 rounded-full"
            style={{ background: "radial-gradient(circle, #6366f1, #8b5cf6)" }} />
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            <Image src={heroImg} alt="Sahil Maurya" priority
              className="w-[220px] opacity-75 mx-auto"
              style={{ filter: "drop-shadow(0 0 28px rgba(99,102,241,0.4))" }}
            />
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.p variants={item} className="text-[13px] leading-[1.8] mb-4"
          style={{ color: "#94a3b8" }}>
          Passionate about building{" "}
          <span style={{ color: "#a5b4fc", fontWeight: 600 }}>secure web apps</span>{" "}
          and finding vulnerabilities through{" "}
          <span style={{ color: "#c084fc", fontWeight: 600 }}>bug bounty research</span>.
        </motion.p>

        {/* Stat badges — 2×2 grid on mobile */}
        <motion.div variants={item} className="grid grid-cols-2 gap-2 mb-5">
          {[
            { icon: "⚡", label: "2+ CVE Reports" },
            { icon: "🛡️", label: "High Severity" },
            { icon: "🏆", label: "Top 3% TryHackMe" },
            { icon: "🔥", label: "Bug Bounty" },
          ].map(({ icon, label }) => (
            <span key={label} className="flex items-center gap-1.5 text-[10px] font-medium px-2.5 py-1.5 rounded-full"
              style={{ color: "#cbd5e1", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              {icon} {label}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Marquee bg text */}
      <div className="absolute top-[70%] sm:top-[63%] w-full overflow-hidden pointer-events-none select-none" style={{ opacity: 0.032 }}>
        <div ref={slider} className="whitespace-nowrap font-black text-white"
          style={{ fontSize: "clamp(60px, 13vw, 170px)", letterSpacing: "-0.03em" }}>
          <span ref={firstText}>Cybersecurity · Bug Bounty · Dev · </span>
          <span ref={secondText}>Cybersecurity · Bug Bounty · Dev · </span>
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={introComplete ? { opacity: 1 } : {}}
        transition={{ delay: 1.8 }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-[9px] tracking-[0.35em] uppercase" style={{ color: "#334155" }}>Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8" style={{ background: "linear-gradient(to bottom, #6366f1, transparent)" }} />
      </motion.div>
    </section>
  );
});

export default Hero;