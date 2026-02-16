import React from "react";
import { motion } from "framer-motion";
import LuxuryCard from "../common/LuxuryCard";
import CTAButton from "../common/CTAButton";

const sections = [
  {
    title: "Meaning of Rituals",
    description:
      "Rituals are acts of remembrance, alignment, and intention. In the Dharmaverse, each ritual connects the individual to cosmic rhythms, ancestral wisdom, and shared spiritual continuity.",
  },
  {
    title: "Digital Participation",
    description:
      "Citizens may participate remotely through synchronized rituals, guided prayers, and timed offerings—bridging physical distance with collective intent.",
  },
  {
    title: "Sacred Offerings",
    description:
      "Offerings represent gratitude, surrender, and devotion. Digital offerings within the Dharmaverse activate symbolic blessings, festival access, and community resonance.",
  },
  {
    title: "Festival Rituals",
    description:
      "During sacred festivals, unique rituals unlock—limited in time, amplified in meaning, and woven into the living world of the Dharmaverse.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function RitualsPrayers() {
  return (
    <section className="relative w-full bg-[#05070C] text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <div className="relative py-16 md:py-44 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(700px_350px_at_50%_-10%,rgba(212,175,55,0.18),transparent_70%)]" />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="mb-3 text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/60 font-['Cormorant_Garamond']">
            Rituals & Prayers
          </p>

          <h1 className="text-2xl md:text-5xl font-light tracking-[0.18em] md:tracking-[0.25em] uppercase font-['Cormorant_Garamond'] leading-tight">
            Sacred Acts
            <br />
            <span className="text-[#D4AF37]">Of Intention & Devotion</span>
          </h1>
        </motion.div>
      </div>

      {/* ================= CONTENT SECTIONS ================= */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 md:pb-32">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
        >
          {sections.map((item) => (
            <motion.div key={item.title} variants={fadeUp}>
              <LuxuryCard className="p-6 md:p-8 text-center md:text-left">
                <h3 className="mb-3 text-base md:text-xl uppercase tracking-wide font-['Cormorant_Garamond']">
                  {item.title}
                </h3>

                <p className="text-xs md:text-sm text-white/70 leading-relaxed font-['Cormorant_Garamond']">
                  {item.description}
                </p>
              </LuxuryCard>
            </motion.div>
          ))}
        </motion.div>
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
            See Offerings
          </CTAButton>
        </div>
      </motion.div>
    </section>
  );
}
