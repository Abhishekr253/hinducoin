import React from "react";
import { motion } from "framer-motion";
import CTAButton from "../common/CTAButton";
import LuxuryCard from "../common/LuxuryCard";
import symbol from "../../assets/symbols.jpeg"

/* ------------------ DATA ------------------ */

const deities = [
  {
    name: "Shiva",
    title: "The Transformer",
    description:
      "Embodiment of stillness, dissolution of illusion, and cosmic rhythm.",
  },
  {
    name: "Vishnu",
    title: "The Preserver",
    description:
      "Sustainer of cosmic order through balance, avatars, and compassion.",
  },
  {
    name: "Devi",
    title: "The Supreme Energy",
    description:
      "The primordial force manifesting as wisdom, power, and protection.",
  },
  {
    name: "Ganesha",
    title: "Remover of Obstacles",
    description:
      "Guardian of beginnings, thresholds, and sacred intelligence.",
  },
];

const symbols = [
  { symbol: "ॐ", name: "Om", meaning: "Primordial vibration of existence" },
  { symbol: "🔱", name: "Trishul", meaning: "Creation, preservation, and dissolution in balance" },
  { symbol: "🪷", name: "Lotus", meaning: "Purity rising above chaos" },
  { symbol: "🔥", name: "Agni", meaning: "Sacred fire and transformation" },
];

/* ------------------ ANIMATION ------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ------------------ COMPONENT ------------------ */

export default function DeitiesSymbols() {
  return (
    <section className="relative w-full bg-[#05070C] text-white overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_50%_-10%,#141B2D_0%,transparent_70%)]" />

      {/* ================= HERO (FULL WIDTH) ================= */}
      <motion.div
        className="relative min-h-screen w-full flex items-center justify-center text-center overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.3 }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: `url(${symbol})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-[#05070C]" />

        {/* Hero Content */}
        <motion.div
          className="relative z-10 px-6 max-w-3xl mx-auto"
          variants={fadeUp}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/60 font-['Cormorant_Garamond']">
            Deities & Symbols
          </p>

          <h1 className="mb-6 text-3xl md:text-5xl uppercase tracking-[0.25em] font-light font-['Cormorant_Garamond']">
            Consciousness{" "}
            <span className="text-[#D4AF37]">Personified</span>
          </h1>

          <p className="text-sm md:text-base text-white/75 leading-relaxed font-['Cormorant_Garamond']">
            Deities are not mythology — they are symbolic interfaces through
            which consciousness reveals itself.
          </p>
        </motion.div>
      </motion.div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* DEITY GALLERY */}
        <section className="py-32">
          <h2 className="text-center mb-20 text-xl md:text-3xl uppercase tracking-[0.25em] font-light font-['Cormorant_Garamond']">
            Deity <span className="text-[#D4AF37]">Forms</span>
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            {deities.map((d) => (
              <motion.div
                key={d.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.3 }}
              >
                <LuxuryCard>
                  <h3 className="mb-2 text-lg uppercase tracking-wide text-[#F6E27A] font-['Cormorant_Garamond']">
                    {d.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]/80 mb-4 font-['Cormorant_Garamond']">
                    {d.title}
                  </p>
                  <p className="text-sm text-white/70 leading-relaxed font-['Cormorant_Garamond']">
                    {d.description}
                  </p>
                </LuxuryCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SYMBOL GLOSSARY */}
        <section className="py-32">
          <h2 className="text-center mb-20 text-xl md:text-3xl uppercase tracking-[0.25em] font-light font-['Cormorant_Garamond']">
            Sacred <span className="text-[#D4AF37]">Symbols</span>
          </h2>

          <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
            {symbols.map((s) => (
              <motion.div
                key={s.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.3 }}
              >
                <LuxuryCard className="text-center">
                  <div className="text-4xl mb-4">{s.symbol}</div>
                  <h4 className="text-sm uppercase tracking-wide text-[#F6E27A] font-['Cormorant_Garamond']">
                    {s.name}
                  </h4>
                  <p className="mt-2 text-xs text-white/65 leading-relaxed font-['Cormorant_Garamond']">
                    {s.meaning}
                  </p>
                </LuxuryCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* DHARMAVERSE */}
        <section className="py-32">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
          >
            <h2 className="mb-6 text-xl md:text-3xl uppercase tracking-[0.25em] font-light font-['Cormorant_Garamond']">
              Symbolism in <span className="text-[#D4AF37]">Dharmaverse</span>
            </h2>

            <p className="text-sm md:text-base text-white/75 leading-relaxed font-['Cormorant_Garamond']">
              Symbols are functional interfaces —
              <br />
              activating realms, guiding rituals, and shaping journeys.
            </p>

            <div className="mt-14">
              <CTAButton variant="gold">Enter the Symbol System</CTAButton>
            </div>
          </motion.div>
        </section>
      </div>
    </section>
  );
}
