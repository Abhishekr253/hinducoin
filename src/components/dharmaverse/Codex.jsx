import React from "react";
import { motion } from "framer-motion";
import CTAButton from "../common/CTAButton";
import LuxuryCard from "../common/LuxuryCard";

const codexSections = [
  {
    title: "Foundations of Sanatan Dharma",
    items: ["Dharma", "Karma", "Moksha", "Bhakti", "Cosmic Order"],
  },
  {
    title: "Gods, Deities & Forces",
    items: ["Trimurti", "Devi Shakti", "Avatars", "Celestial Beings"],
  },
  {
    title: "Epics & Sacred Stories",
    items: ["Ramayana", "Mahabharata", "Puranas", "Lost Legends"],
  },
  {
    title: "Hidden & Forbidden Lore",
    items: ["Sealed Manuscripts", "Forgotten Realms", "Future Revelations"],
    locked: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function Codex() {
  return (
    <section className="relative w-full bg-[#05070C] text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <div className="relative py-16 md:py-36 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(700px_350px_at_50%_-10%,rgba(212,175,55,0.15),transparent_70%)]" />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="mb-3 text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/60 font-['Cormorant_Garamond']">
            Codex
          </p>

          <h1 className="text-2xl md:text-5xl font-light tracking-[0.18em] md:tracking-[0.25em] uppercase font-['Cormorant_Garamond'] leading-tight">
            Sacred Lore
            <br />
            <span className="text-[#D4AF37]">Stories of the Eternal World</span>
          </h1>
        </motion.div>
      </div>

      {/* ================= CODEX ROWS ================= */}
      <div className="space-y-12 md:space-y-20 pb-16 md:pb-36">
        {codexSections.map((section) => (
          <motion.div
            key={section.title}
            className="max-w-6xl mx-auto px-4 sm:px-6"
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="mb-4 md:mb-6 text-sm md:text-lg uppercase tracking-wide font-['Cormorant_Garamond'] text-[#D4AF37] text-center md:text-left">
              {section.title}
            </h2>

            <div className="flex gap-4 md:gap-6 overflow-x-auto md:overflow-x-visible scrollbar-hide pb-2">
              {section.items.map((item) => (
                <LuxuryCard
                  key={item}
                  className={`min-w-[180px] md:min-w-[220px] h-[120px] md:h-[140px] flex flex-col justify-center items-center text-center p-4 md:p-6 ${
                    section.locked ? "opacity-50" : ""
                  }`}
                >
                  <h3 className="uppercase tracking-wide font-['Cormorant_Garamond'] text-sm md:text-base mb-1">
                    {item}
                  </h3>

                  <p className="text-[10px] md:text-xs text-white/50">
                    {section.locked ? "Locked Lore" : "Explore Chapter"}
                  </p>
                </LuxuryCard>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= CTA ================= */}
      <motion.div
        className="text-center pb-16 md:pb-36 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-xs mx-auto">
          <CTAButton
            variant="gold"
            className="w-full text-sm md:text-base py-2 md:py-3"
          >
            Unlock More Lore
          </CTAButton>
        </div>
      </motion.div>
    </section>
  );
}
