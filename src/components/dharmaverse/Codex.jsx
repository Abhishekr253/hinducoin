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
      <div className="relative py-36 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_-10%,rgba(212,175,55,0.15),transparent_70%)]" />

        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/60 font-['Cormorant_Garamond']">
            Codex
          </p>

          <h1 className="text-3xl md:text-5xl font-light tracking-[0.25em] uppercase font-['Cormorant_Garamond']">
            Sacred Lore
            <br />
            <span className="text-[#D4AF37]">Stories of the Eternal World</span>
          </h1>
        </motion.div>
      </div>

      {/* ================= CODEX ROWS ================= */}
      <div className="space-y-20 pb-36">

        {codexSections.map((section) => (
          <motion.div
            key={section.title}
            className="max-w-7xl mx-auto px-6"
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="mb-6 text-lg uppercase tracking-wide font-['Cormorant_Garamond'] text-[#D4AF37]">
              {section.title}
            </h2>

            <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
              {section.items.map((item) => (
                <LuxuryCard
                  key={item}
                  className={`min-w-[220px] h-[140px] flex flex-col justify-center items-center text-center ${
                    section.locked ? "opacity-50" : ""
                  }`}
                >
                  <h3 className="uppercase tracking-wide font-['Cormorant_Garamond'] mb-2">
                    {item}
                  </h3>

                  <p className="text-xs text-white/50">
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
        className="text-center pb-36"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <CTAButton variant="gold">
          Unlock More Lore
        </CTAButton>
      </motion.div>

    </section>
  );
}
