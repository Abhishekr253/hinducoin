import React from "react";
import { motion } from "framer-motion";
import CTAButton from "../components/common/CTAButton";
import video from "../assets/Herovideo.mp4";
import LuxuryCard from "../components/common/LuxuryCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const headline = "The Hindu Coin";
const luxuryEase = [0.22, 1, 0.36, 1];

const sectionContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: luxuryEase,
    },
  },
};

const nftItems = [
  {
    title: "Brick NFTs",
    subtitle: "Temple Foundations",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Glass Panel NFTs",
    subtitle: "Sacred Architecture",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2a6d",
  },
  {
    title: "Festival Offerings",
    subtitle: "Ritual Participation",
    image: "https://images.unsplash.com/photo-1608889175123-8ee6a2e0b07b",
  },
  {
    title: "Relics",
    subtitle: "Eternal Artifacts",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0",
  },
];

function Home() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return;

    const onWheel = (e) => {
      // Normal scroll → page scrolls
      if (!e.shiftKey) return;

      // Shift + scroll → horizontal gallery scroll
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, []);
  return (
    <main className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="relative sticky top-0 h-screen w-full overflow-hidden text-white">
        {/* 1️⃣ SKY GRADIENT (Base Layer) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050C22] via-[#0B1F4D] to-[#1E4FA3]" />

        {/* Subtle cinematic vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.55)_100%)]" />

        {/* 2️⃣ DIVINE LIGHT RAYS */}
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div
            className="w-[1100px] h-[650px] mt-10
      bg-[radial-gradient(circle,rgba(212,175,55,0.20)_0%,rgba(212,175,55,0.08)_40%,transparent_75%)]
      blur-3xl opacity-80"
          />
        </div>

        {/* 3️⃣ TEMPLE (Sharp + Monumental) */}
        {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1050px] max-w-[95%] z-10">
    <img
      src="/temple.png"   // Use clean high-res PNG
      alt="White Marble Temple"
      className="w-full object-contain
      drop-shadow-[0_35px_100px_rgba(0,0,0,0.75)]"
    />
  </div> */}

        {/* 4️⃣ COIN (Very Slow, Subtle Rotation) */}
        <motion.div
          className="absolute top-[14%] left-1/2 -translate-x-1/2 z-20"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 120, ease: "linear" }} // VERY slow
        >
          <div className="relative">
            {/* <img
        src="/coin.png"  
        alt="Hindu Coin"
        className="w-44 md:w-64
        drop-shadow-[0_0_40px_rgba(212,175,55,0.7)]"
      /> */}

            {/* Gold + Blue Halo Aura */}
            <div
              className="absolute inset-0 rounded-full
        bg-[radial-gradient(circle,rgba(212,175,55,0.5)_0%,rgba(30,79,163,0.35)_50%,transparent_75%)]
        blur-3xl -z-10 opacity-90"
            />
          </div>
        </motion.div>

        {/* 5️⃣ SUBTLE GOLD SPARKLE DRIFT */}
        <div className="absolute inset-0 pointer-events-none z-30">
          <div className="absolute w-1 h-1 bg-[#D4AF37] rounded-full opacity-40 animate-pulse top-[25%] left-[30%]" />
          <div className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse top-[40%] left-[60%]" />
          <div className="absolute w-1 h-1 bg-[#D4AF37] rounded-full opacity-30 animate-pulse top-[65%] left-[45%]" />
        </div>

        {/* 6️⃣ TEXT OVERLAY */}
        <div className="relative z-40 flex h-full flex-col items-center justify-center text-center px-6">
          {/* Sanskrit (Gold Authority) */}
          <motion.p
            className="text-[#D4AF37] text-lg md:text-xl tracking-[0.28em]
      font-['Cormorant_Garamond'] mb-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            एकं सत् विप्रा बहुधा वदन्ति
          </motion.p>

          {/* Translation */}
          <motion.p
            className="text-white/70 text-sm md:text-base mb-10
      font-['Cormorant_Garamond']"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Truth is One. The wise describe it in many ways.
          </motion.p>

          {/* Main Title */}
          <motion.h1
            className="text-4xl md:text-7xl uppercase tracking-[0.3em]
      font-light mb-6 font-['Cormorant_Garamond']
      drop-shadow-[0_6px_25px_rgba(0,0,0,0.6)]"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            The Hindu Coin
          </motion.h1>

          {/* Subline */}
          <motion.p
            className="max-w-2xl text-white/85 mb-14 text-sm md:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Powering <span className="text-[#D4AF37]">Dharmaverse</span> — A
            Living Spiritual Civilization
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Link to="/citizenship">
              <button
                className="px-8 py-3 rounded-full
          bg-[#D4AF37] text-black font-medium tracking-wide
          hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Become a Citizen
              </button>
            </Link>

            <Link to="/dharmaverse">
              <button
                className="px-8 py-3 rounded-full
          border border-white/40 backdrop-blur-md
          text-white hover:bg-white/10
          transition-all duration-300"
              >
                Explore Dharmaverse
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2 — WHAT IS HINDU COIN ================= */}
      <section
        className="
    relative z-10 w-full
    bg-[radial-gradient(1200px_600px_at_50%_-10%,#141B2D_0%,#070B12_55%,#05070C_100%)]
    text-white py-12 md:py-28
  "
      >
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 will-change-transform"
          variants={sectionContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
        >
          {/* Heading */}
          <motion.div
            className="mb-10 md:mb-16 text-center transform-gpu"
            variants={fadeUp}
          >
            <p className="mb-3 text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/60 font-['Cormorant_Garamond']">
              What is Hindu Coin?
            </p>

            <h2 className="text-2xl md:text-4xl font-light tracking-[0.15em] md:tracking-[0.2em] uppercase font-['Cormorant_Garamond']">
              A Sacred Digital Foundation
            </h2>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8"
            variants={sectionContainer}
          >
            {[
              {
                title: "A Capped Digital Asset",
                desc: "A finite-supply token designed to preserve long-term value and digital sovereignty within the Hindu ecosystem.",
              },
              {
                title: "A Utility Currency for Offerings",
                desc: "Used for digital offerings, rituals, temple services, and sacred participation across platforms.",
              },
              {
                title: "A Gateway to Dharmaverse Experiences",
                desc: "Unlock immersive spiritual spaces, exclusive access, and participatory experiences inside the Dharmaverse.",
              },
            ].map((card, i) => (
              <motion.div key={i} variants={fadeUp} className="transform-gpu">
                <LuxuryCard className="text-center h-full p-6 md:p-8">
                  <div className="mx-auto mb-4 md:mb-6 h-1 w-10 md:w-12 rounded-full bg-[#D4AF37]/80" />

                  <h3 className="mb-3 md:mb-4 text-base md:text-lg uppercase tracking-wide font-['Cormorant_Garamond'] text-white">
                    {card.title}
                  </h3>

                  <p className="text-xs md:text-sm leading-relaxed text-white/70 font-['Cormorant_Garamond']">
                    {card.desc}
                  </p>
                </LuxuryCard>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-10 md:mt-16 text-center transform-gpu"
            variants={fadeUp}
          >
            <CTAButton
              variant="gold"
              className="text-sm md:text-base px-6 py-2 md:px-8 md:py-3"
            >
              View Tokenomics
            </CTAButton>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= SECTION 3 — DHARMAVERSE STATUS ================= */}
      <section className="relative w-full bg-[#05070C] text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* IMAGE */}
          <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0"
              alt="Dharmaverse Temple"
              decoding="async"
              loading="eager"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            <div className="absolute top-5 left-5 rounded-full border border-white/20 bg-black/50 px-4 py-1 text-xs tracking-wide backdrop-blur-md">
              Latest Update
            </div>
          </div>

          {/* CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3, once: true }}
            transition={{ delay: 0.15 }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/60 font-['Cormorant_Garamond']">
              Dharmaverse
            </p>

            <h2 className="mb-6 text-3xl md:text-4xl font-light uppercase tracking-[0.2em] font-['Cormorant_Garamond']">
              Under Construction
            </h2>

            <p className="mb-4 text-sm md:text-base leading-relaxed text-white/80 font-['Cormorant_Garamond']">
              Phase 1 of the Dharmaverse is currently being built — a sacred
              digital world inspired by Sanatan Dharma.
            </p>

            <p className="mb-8 text-sm leading-relaxed text-white/60 font-['Cormorant_Garamond']">
              Dharmaverse expands forever. The world evolves with festivals,
              rituals, seasons, and collective participation.
            </p>

            <div className="mb-2 flex justify-between text-xs uppercase tracking-wide text-white/60">
              <span>Phase 1 Progress</span>
              <span>Coming soon</span>
            </div>

            <div className="mb-10 h-2 w-full rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.35)]"
                initial={{ width: 0 }}
                whileInView={{ width: "35%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: luxuryEase }}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/dharmaverse/development">
                <CTAButton variant="gold">Development Status</CTAButton>
              </Link>
              <CTAButton variant="blueGlass">Roadmap</CTAButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 4 — SANATAN DHARMA KNOWLEDGE HUB ================= */}
      <section
        className="relative w-full bg-[#05070C]
 text-white py-24 md:py-32 overflow-hidden"
      >
        {/* Subtle sacred grid texture */}
        <div className="absolute inset-0 opacity-[0.04] " />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/60 font-['Cormorant_Garamond']">
              Knowledge Hub
            </p>

            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.25em] font-['Cormorant_Garamond']">
              Sanatan Dharma
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-white/70 font-['Cormorant_Garamond']">
              A timeless archive of philosophy, history, rituals, and sacred
              wisdom — preserved with accuracy, reverence, and depth.
            </p>
          </motion.div>

          {/* Knowledge Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Foundations",
              "History & Heritage",
              "Festivals & Calendar",
              "Deities & Symbols",
              "Glossary",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
            relative
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-md
            px-8
            py-10
            hover:border-[#D4AF37]/40
            hover:bg-white/[0.05]
            transition-all
            duration-500
            group
          "
              >
                {/* Gold Accent */}
                <div className="mb-6 h-1 w-10 rounded-full bg-[#D4AF37]/70 group-hover:w-16 transition-all duration-500" />

                <h3 className="text-lg uppercase tracking-wide font-['Cormorant_Garamond'] text-white mb-3">
                  {item}
                </h3>

                <p className="text-sm text-white/60 font-['Cormorant_Garamond'] leading-relaxed">
                  Curated knowledge presented with historical accuracy and
                  spiritual integrity.
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/sanatan-hub">
              <CTAButton variant="gold">Enter Sanatan Dharma Hub</CTAButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 5 — CITIZENSHIP ================= */}
      <section
        className="
    relative w-full
    bg-[#05070C]
    text-white
    py-14 md:py-32
    overflow-hidden
  "
      >
        {/* Subtle divider */}
        <div className="absolute top-0 left-0 w-full h-px" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            className="mb-12 md:mb-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-3 text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/60 font-['Cormorant_Garamond']">
              Citizenship
            </p>

            <h2 className="text-2xl md:text-4xl font-light uppercase tracking-[0.18em] md:tracking-[0.25em] font-['Cormorant_Garamond']">
              Become a Citizen of Dharmaverse
            </h2>

            <p className="mt-4 md:mt-6 max-w-xl mx-auto text-xs md:text-base leading-relaxed text-white/70 font-['Cormorant_Garamond']">
              Citizenship grants participation, privileges, and long-term
              alignment with the evolution of the Dharmaverse.
            </p>
          </motion.div>

          {/* Tiers + Privileges */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-14 lg:items-center">
            {/* LEFT — Citizenship Tiers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {[
                { name: "Seeker", note: "Entry Citizenship" },
                { name: "Sadhak", note: "Active Participant" },
              ].map((tier, i) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ delay: i * 0.12, duration: 0.9 }}
                >
                  <LuxuryCard className="text-center h-full p-6 md:p-8">
                    <div className="mb-4 md:mb-6 mx-auto h-1 w-10 md:w-12 rounded-full bg-[#D4AF37]/80" />
                    <h3 className="mb-1 text-base md:text-lg uppercase tracking-wide font-['Cormorant_Garamond']">
                      {tier.name}
                    </h3>
                    <p className="text-xs md:text-sm text-white/60 font-['Cormorant_Garamond']">
                      {tier.note}
                    </p>
                  </LuxuryCard>
                </motion.div>
              ))}

              {/* ACHARYA */}
              <motion.div
                className="sm:col-span-2 flex justify-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ delay: 0.3, duration: 0.9 }}
              >
                <div className="w-full sm:max-w-[260px]">
                  <LuxuryCard className="text-center h-full p-6 md:p-8">
                    <div className="mb-4 md:mb-6 mx-auto h-1 w-10 md:w-12 rounded-full bg-[#D4AF37]/80" />
                    <h3 className="mb-1 text-base md:text-lg uppercase tracking-wide font-['Cormorant_Garamond']">
                      Acharya
                    </h3>
                    <p className="text-xs md:text-sm text-white/60 font-['Cormorant_Garamond']">
                      Elder Tier
                    </p>
                  </LuxuryCard>
                </div>
              </motion.div>
            </div>

            {/* RIGHT — Citizen Privileges */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 1 }}
            >
              <LuxuryCard className="h-full p-6 md:p-8">
                <h3 className="mb-4 md:mb-6 text-base md:text-lg uppercase tracking-wide font-['Cormorant_Garamond']">
                  Citizen Privileges
                </h3>

                <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-white/70 font-['Cormorant_Garamond']">
                  {[
                    "Access to Dharmaverse worlds and events",
                    "Participation in rituals, offerings, and festivals",
                    "Eligibility for future governance mechanisms",
                    "Priority access to new experiences and releases",
                    "Recognition within the Dharmaverse ecosystem",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </LuxuryCard>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            className="mt-12 md:mt-20 flex flex-col sm:flex-row justify-center gap-3 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.9 }}
          >
            <Link to="/citizenship" className="w-full sm:w-auto">
              <CTAButton
                variant="gold"
                className="w-full sm:w-auto text-sm md:text-base py-2 md:py-3"
              >
                Become a Citizen
              </CTAButton>
            </Link>

            <CTAButton
              variant="blueGlass"
              className="w-full sm:w-auto text-sm md:text-base py-2 md:py-3"
            >
              View Citizenship Benefits
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 6 — NFTs & OFFERINGS ================= */}
      <section
        className="relative w-full bg-[#05070C]
 text-white py-24 md:py-32 overflow-hidden"
      >
        {/* Subtle sacred grid */}
        <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[length:36px_36px]" />

        <motion.div
          className="relative max-w-7xl mx-auto px-6"
          variants={sectionContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
        >
          {/* Header */}
          <motion.div className="mb-16 text-center" variants={fadeUp}>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/60 font-['Cormorant_Garamond']">
              Sacred Assets
            </p>

            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.25em] font-['Cormorant_Garamond']">
              NFTs & Offerings
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-sm md:text-base text-white/70 font-['Cormorant_Garamond'] leading-relaxed">
              Digitally preserved offerings, architectural elements, and sacred
              artifacts — each NFT represents participation in the Dharmaverse.
            </p>
          </motion.div>

          {/* ===== GALLERY WITH CHEVRONS ===== */}
          <div className="relative">
            {/* LEFT CHEVRON */}
            <button
              onClick={() =>
                galleryRef.current?.scrollBy({ left: -360, behavior: "smooth" })
              }
              className="
          absolute left-0 top-1/2 -translate-y-1/2 z-20
          hidden md:flex
          h-12 w-12 items-center justify-center
          rounded-full
          border border-white/20
          bg-black/40 backdrop-blur-md
          text-white/80
          hover:border-[#D4AF37]/50
          hover:text-[#D4AF37]
          transition-all
        "
            >
              <ChevronLeft size={22} />
            </button>

            {/* RIGHT CHEVRON */}
            <button
              onClick={() =>
                galleryRef.current?.scrollBy({ left: 360, behavior: "smooth" })
              }
              className="
          absolute right-0 top-1/2 -translate-y-1/2 z-20
          hidden md:flex
          h-12 w-12 items-center justify-center
          rounded-full
          border border-white/20
          bg-black/40 backdrop-blur-md
          text-white/80
          hover:border-[#D4AF37]/50
          hover:text-[#D4AF37]
          transition-all
        "
            >
              <ChevronRight size={22} />
            </button>

            {/* SCROLL CONTAINER */}
            <motion.div
              ref={galleryRef}
              className="
          flex gap-6
          overflow-x-scroll
          scroll-smooth
          pb-6
          px-1
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
            >
              {nftItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="
              min-w-[280px] md:min-w-[340px]
              group
              relative
              rounded-2xl
              overflow-hidden
              border border-white/10
              bg-white/[0.02]
              backdrop-blur-md
              transition-all duration-700
              hover:border-[#D4AF37]/40
              hover:-translate-y-1
            "
                >
                  {/* Image */}
                  <div className="relative h-[360px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                  h-full w-full object-cover
                  transition-transform duration-[1400ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:scale-105
                "
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative p-6">
                    <div className="mb-3 h-1 w-10 rounded-full bg-[#D4AF37]/70 group-hover:w-16 transition-all duration-700" />
                    <h3 className="text-lg uppercase tracking-wide font-['Cormorant_Garamond'] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/60 font-['Cormorant_Garamond']">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div className="mt-20 text-center" variants={fadeUp}>
            <Link to="/nfts">
              <CTAButton variant="gold">View NFT Gallery</CTAButton>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= SECTION 7 — MEDIA HUB ================= */}
      <section
        className="relative w-full bg-[#05070C]
 text-white py-24 md:py-32 overflow-hidden"
      >
        {/* Sacred texture */}
        <div className="absolute inset-0 opacity-[0.035] " />

        <motion.div
          className="relative max-w-7xl mx-auto px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          variants={sectionContainer}
        >
          {/* Header */}
          <motion.div className="mb-20 text-center" variants={fadeUp}>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/60 font-['Cormorant_Garamond']">
              Media Hub
            </p>

            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.25em] font-['Cormorant_Garamond']">
              Visual Archives
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-sm md:text-base text-white/70 font-['Cormorant_Garamond'] leading-relaxed">
              Cinematic clips and sacred visuals documenting the evolution of
              the Dharmaverse and The Hindu Coin.
            </p>
          </motion.div>

          {/* === MEDIA BLOCKS === */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* ---------- CLIPS ---------- */}
            <motion.div variants={fadeUp}>
              <h3 className="mb-6 text-lg uppercase tracking-wide font-['Cormorant_Garamond']">
                Clips
              </h3>

              <div className="grid grid-cols-2 gap-5">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="
                group
                relative
                aspect-video
                rounded-2xl
                overflow-hidden
                border border-white/10
                bg-white/[0.03]
                hover:border-[#D4AF37]/40
                transition-all duration-700
              "
                  >
                    {/* Thumbnail */}
                    <img
                      src={`https://img.freepik.com/premium-photo/lord-vishnu-preserver-universe-protector-dharma_1319351-32644.jpg`}
                      alt="Clip"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Play Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-14 w-14 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-all">
                        ▶
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ---------- STATICS ---------- */}
            <motion.div variants={fadeUp}>
              <h3 className="mb-6 text-lg uppercase tracking-wide font-['Cormorant_Garamond']">
                Statics
              </h3>

              <div className="grid grid-cols-2 gap-5">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="
                group
                relative
                aspect-[3/4]
                rounded-2xl
                overflow-hidden
                border border-white/10
                bg-white/[0.03]
                hover:border-[#D4AF37]/40
                transition-all duration-700
              "
                  >
                    <img
                      src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Jk2u2g4DQLr9GDcnhsSVbCv154zkKvNNzA&s`}
                      alt="Poster"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div className="mt-20 text-center" variants={fadeUp}>
            <CTAButton variant="gold">Open Media Hub</CTAButton>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= SECTION 8 — BUY HINDU COIN ================= */}
      <section
        className="relative w-full bg-[#05070C]
 text-white py-20 md:py-24 overflow-hidden"
      >
        {/* Soft divider */}
        <div className="absolute top-0 left-0 w-full h-px " />

        <div className="relative max-w-7xl mx-auto px-6">
          <LuxuryCard className="px-8 md:px-12 py-12 md:py-14">
            {/* Header */}
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.9, ease: luxuryEase }}
            >
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/60 font-['Cormorant_Garamond']">
                Buy Hindu Coin
              </p>

              <h2 className="text-2xl md:text-3xl font-light uppercase tracking-[0.25em] font-['Cormorant_Garamond']">
                Enter the Dharmaverse
              </h2>
            </motion.div>

            {/* Conversion Strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
              {/* WALLET LOGOS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <p className="mb-4 text-sm uppercase tracking-wide text-white/60 font-['Cormorant_Garamond']">
                  Supported Wallets
                </p>

                <div className="flex justify-center gap-4 flex-wrap">
                  {["Phantom", "Solflare", "Backpack"].map((wallet) => (
                    <div
                      key={wallet}
                      className="
                  px-4 py-2
                  rounded-full
                  border border-white/15
                  bg-white/5
                  text-xs
                  tracking-wide
                  backdrop-blur-md
                "
                    >
                      {wallet}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CONTRACT COPY */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="text-center"
              >
                <p className="mb-4 text-sm uppercase tracking-wide text-white/60 font-['Cormorant_Garamond']">
                  Contract Address
                </p>

                <button
                  className="
              inline-flex items-center justify-center
              rounded-full
              border border-[#D4AF37]/40
              px-6 py-2
              text-sm
              hover:bg-[#D4AF37]/10
              hover:border-[#D4AF37]/70
              transition-all
            "
                >
                  Copy Contract
                </button>
              </motion.div>

              {/* WHERE TO BUY */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-center"
              >
                <p className="mb-4 text-sm uppercase tracking-wide text-white/60 font-['Cormorant_Garamond']">
                  Where to Buy
                </p>

                <div className="flex justify-center gap-4 flex-wrap">
                  {["DEX", "Aggregator", "Launchpad"].map((place) => (
                    <span
                      key={place}
                      className="
                  px-4 py-1
                  rounded-full
                  border border-white/15
                  text-xs
                  tracking-wide
                "
                    >
                      {place}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* CTA Row */}
            <motion.div
              className="mt-14 flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.9 }}
            >
              <CTAButton variant="gold">Buy Now</CTAButton>
              <CTAButton variant="blueGlass">How to Buy</CTAButton>
              <CTAButton variant="blueGlass">Make a Wallet</CTAButton>
            </motion.div>
          </LuxuryCard>
        </div>
      </section>

      {/* ================= SECTION 9 — TRANSPARENCY PANEL ================= */}
      <section
        className="relative w-full bg-[#05070C]
 text-white py-24 md:py-28 overflow-hidden"
      >
        {/* Soft top divider */}
        <div className="absolute top-0 left-0 w-full h-px" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/60 font-['Cormorant_Garamond']">
              Transparency
            </p>

            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.25em] font-['Cormorant_Garamond']">
              Built on Trust
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-sm md:text-base text-white/70 font-['Cormorant_Garamond']">
              Every aspect of Hindu Coin is verifiable, capped, and publicly
              auditable. No hidden mechanics. No silent minting.
            </p>
          </motion.div>

          {/* TRUST PANEL */}
          <LuxuryCard className="px-8 md:px-12 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* LEFT — DATA */}
              <div className="space-y-8">
                {/* Contract */}
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/60 font-['Cormorant_Garamond'] mb-2">
                    Contract Address
                  </p>

                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-sm tracking-wide text-white/80 break-all">
                      0x••••••••••••••••••••••••••••••••
                    </span>

                    <button className="text-xs border border-[#D4AF37]/40 px-3 py-1 rounded-full hover:bg-[#D4AF37]/10 transition">
                      Copy
                    </button>
                  </div>
                </div>

                {/* Explorer */}
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/60 font-['Cormorant_Garamond'] mb-2">
                    Explorer
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-[#D4AF37] hover:underline"
                  >
                    View on Solana Explorer
                  </a>
                </div>

                {/* Supply */}
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/60 font-['Cormorant_Garamond'] mb-2">
                    Supply Cap
                  </p>

                  <p className="text-sm text-white/80">
                    Fixed & capped. No inflation. No future minting.
                  </p>
                </div>

                {/* Mint Closed */}
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/60 font-['Cormorant_Garamond'] mb-2">
                    Mint Status
                  </p>

                  <p className="text-sm text-white/80">
                    Mint permanently closed.
                  </p>
                </div>
              </div>

              {/* RIGHT — WARNING */}
              <div className="relative">
                <div className="h-full rounded-xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md">
                  <p className="mb-4 text-sm uppercase tracking-wide text-[#D4AF37] font-['Cormorant_Garamond']">
                    Anti-Scam Notice
                  </p>

                  <p className="text-sm leading-relaxed text-white/75 font-['Cormorant_Garamond']">
                    Hindu Coin will never ask for your private keys, seed
                    phrases, or direct wallet access. Beware of impersonators,
                    unofficial links, and unsolicited messages.
                  </p>

                  <p className="mt-4 text-sm text-white/60 font-['Cormorant_Garamond']">
                    Always verify the contract address from this page or the
                    official explorer link.
                  </p>
                </div>
              </div>
            </div>
          </LuxuryCard>
        </div>
      </section>
    </main>
  );
}

export default Home;
