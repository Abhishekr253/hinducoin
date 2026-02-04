import React from "react";
import { motion } from "framer-motion";
import LuxuryCard from "../common/LuxuryCard";
import CTAButton from "../common/CTAButton";
import { NavLink } from "react-router-dom";

const pillars = [
  {
    title: "Dharma",
    desc: "Righteous living aligned with cosmic order, duty, and ethical balance.",
  },
  {
    title: "Karma",
    desc: "The law of cause and effect governing actions, intentions, and outcomes.",
  },
  {
    title: "Bhakti",
    desc: "Devotion rooted in love, surrender, and a personal connection to the divine.",
  },
  {
    title: "Moksha",
    desc: "Liberation from the cycle of birth and rebirth through self-realization.",
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

export default function SanatanFoundations() {
  return (
    <section className="relative w-full bg-[#05070C] text-white py-32 overflow-hidden">
      {/* Soft ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_50%_-10%,#141B2D_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ================= WHAT IS SANATAN DHARMA ================= */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-28"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/60 font-['Cormorant_Garamond']">
            Foundations
          </p>

          <h2 className="mb-6 text-2xl md:text-4xl uppercase tracking-[0.25em] font-light font-['Cormorant_Garamond']">
            What is <span className="text-[#D4AF37]">Sanatan Dharma?</span>
          </h2>

          <p className="text-sm md:text-base text-white/75 leading-relaxed font-['Cormorant_Garamond']">
            Sanatan Dharma represents the eternal principles that govern life,
            consciousness, and the universe. It is not bound by time, geography,
            or belief systems, but offers a framework for living in harmony with
            oneself, society, and the cosmos.
          </p>
        </motion.div>

        {/* ================= FOUR PILLARS ================= */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-28"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
        >
          {pillars.map((pillar) => (
            <motion.div key={pillar.title} variants={fadeUp}>
              <LuxuryCard className="h-full text-center">
                <div className="mx-auto mb-6 h-1 w-10 rounded-full bg-[#D4AF37]/80" />

                <h3 className="mb-3 text-lg uppercase tracking-wide font-['Cormorant_Garamond'] text-white">
                  {pillar.title}
                </h3>

                <p className="text-sm text-white/65 leading-relaxed font-['Cormorant_Garamond']">
                  {pillar.desc}
                </p>
              </LuxuryCard>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= WHY IT MATTERS TODAY ================= */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-24"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          variants={fadeUp}
        >
          <h3 className="mb-6 text-xl md:text-3xl uppercase tracking-[0.25em] font-light font-['Cormorant_Garamond']">
            Why It Matters <span className="text-[#D4AF37]">Today</span>
          </h3>

          <p className="text-sm md:text-base text-white/75 leading-relaxed font-['Cormorant_Garamond']">
            In a rapidly changing world facing ethical, environmental, and
            existential challenges, Sanatan Dharma offers timeless insights on
            responsibility, balance, compassion, and purpose. Its principles
            resonate globally, transcending culture, religion, and ideology.
          </p>
        </motion.div>

        {/* ================= CTA ================= */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <NavLink to="/sanatan/history">
            <CTAButton variant="gold">Explore History & Heritage</CTAButton>
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
}
