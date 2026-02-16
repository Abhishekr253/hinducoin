import React from "react";
import { motion } from "framer-motion";
import CTAButton from "../common/CTAButton";
import festival from "../../assets/festival.png";
import { Link } from "react-router-dom";

/* ------------------ DATA ------------------ */

const festivals = [
  {
    name: "Diwali",
    month: "October / November",
    meaning: "Victory of light over darkness and wisdom over ignorance.",
    symbolism: "Lamps, fire, prosperity rituals, inner illumination.",
    impact:
      "Realm illumination events, prosperity mechanics, limited offering drops.",
  },
  {
    name: "Navratri",
    month: "September / October",
    meaning: "Nine nights of divine feminine power and transformation.",
    symbolism: "Goddess forms, colors, rhythm, sacred dance.",
    impact:
      "Goddess realm visuals, energy amplification cycles, special devotion events.",
  },
  {
    name: "Maha Shivratri",
    month: "February / March",
    meaning: "Night of transcendence and union with Shiva consciousness.",
    symbolism: "Darkness, stillness, ascetic fire, cosmic balance.",
    impact:
      "Night-based rituals, Shiva realm access, deep meditation mechanics.",
  },
  {
    name: "Holi",
    month: "March",
    meaning: "Celebration of renewal, joy, and the burning of ego.",
    symbolism: "Colors, fire, collective joy.",
    impact: "Community-wide harmony boosts, emotion-based visual effects.",
  },
  {
    name: "Janmashtami",
    month: "August",
    meaning: "Manifestation of divine play and conscious action.",
    symbolism: "Midnight birth, flute, devotion.",
    impact:
      "Krishna realm narratives, leela-based challenges, devotion quests.",
  },
  {
    name: "Makar Sankranti",
    month: "January",
    meaning: "Transition of cosmic energies toward growth and clarity.",
    symbolism: "Sun, harvest, flight.",
    impact: "Seasonal reset mechanics, solar-aligned progression bonuses.",
  },
];

/* ------------------ ANIMATION VARIANTS ------------------ */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ------------------ COMPONENT ------------------ */

export default function FestivalsCalendar() {
  return (
    <section className="relative w-full bg-[#05070C] text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <motion.div
        className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.3 }}
        variants={container}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-top "
          style={{ backgroundImage: `url(${festival})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#05070C]" />

        {/* Hero Content */}
        <motion.div
          className="relative z-10 px-6 max-w-3xl"
          variants={container}
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-xs uppercase tracking-[0.35em] text-white/60 font-['Cormorant_Garamond']"
          >
            Festivals & Calendar
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mb-6 text-3xl md:text-5xl uppercase tracking-[0.25em] font-light font-['Cormorant_Garamond']"
          >
            Festivals Are{" "}
            <span className="text-[#D4AF37]">Spiritual Technology</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-2xl mx-auto text-sm md:text-base text-white/75 leading-relaxed font-['Cormorant_Garamond']"
          >
            Sacred time is engineered. Each festival activates consciousness,
            community, and cosmic alignment.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* FESTIVAL GRID */}
        <section className="py-32">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
            className="text-center mb-20 text-xl md:text-3xl uppercase tracking-[0.25em] font-light font-['Cormorant_Garamond']"
          >
            The Sacred <span className="text-[#D4AF37]">Calendar</span>
          </motion.h2>

          <motion.div
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
          >
            {festivals.map((f) => (
              <motion.div
                key={f.name}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl bg-white/[0.03] p-8 backdrop-blur border border-white/10"
              >
                <div className="mb-5 h-1 w-12 rounded-full bg-[#D4AF37]/80" />

                <h3 className="text-lg uppercase tracking-wide font-['Cormorant_Garamond'] mb-1">
                  {f.name}
                </h3>

                <p className="text-xs text-white/50 mb-4 font-['Cormorant_Garamond']">
                  {f.month}
                </p>

                <div className="space-y-3">
                  <p className="text-sm text-white/70 font-['Cormorant_Garamond']">
                    <span className="text-[#D4AF37]">Meaning:</span> {f.meaning}
                  </p>

                  <p className="text-sm text-white/70 font-['Cormorant_Garamond']">
                    <span className="text-[#D4AF37]">Symbolism:</span>{" "}
                    {f.symbolism}
                  </p>

                  <p className="text-sm text-white/70 font-['Cormorant_Garamond']">
                    <span className="text-[#D4AF37]">Dharmaverse Impact:</span>{" "}
                    {f.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA */}
        <motion.div
          className="text-center pb-32"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
        >
          <Link to="/sanatan/deities">
            <CTAButton variant="gold">Explore Deities & Symbols</CTAButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
