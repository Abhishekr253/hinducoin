import React from "react";
import { motion } from "framer-motion";
import CTAButton from "../common/CTAButton";
import symbol from "../../assets/symbols.jpeg";
import shiva from "../../assets/shiva.jpeg";
import vishnu from "../../assets/vishnu.jpeg";
import lakshmi from "../../assets/lakshmi.jpeg";
import ganesha from "../../assets/ganesh.jpeg";

/* ------------------ THEME ------------------ */
/* Washed palette taken from reference image:
   sky mist  #EAF1F6 | ivory #FBF8F2 | temple blue #7FB3CF
   gold #C9A24D | deep gold #A67C2E | slate text #3A4A5C */

const goldText =
  "bg-gradient-to-b from-[#E6CC8F] via-[#C9A24D] to-[#A67C2E] bg-clip-text text-transparent";

/* ------------------ DATA ------------------ */

const deities = [
  {
    name: "Shiva",
    image: shiva,
    title: "The Transformer",
    description:
      "Embodiment of stillness, dissolution of illusion, and cosmic rhythm.",
  },
  {
    name: "Vishnu",
    image: vishnu,
    title: "The Preserver",
    description:
      "Sustainer of cosmic order through balance, avatars, and compassion.",
  },
  {
    name: "Lakshmi",
    image: lakshmi,
    title: "The Supreme Energy",
    description:
      "The primordial force manifesting as wisdom, power, and protection.",
  },
  {
    name: "Ganesha",
    image: ganesha,
    title: "Remover of Obstacles",
    description: "Guardian of beginnings, thresholds, and sacred intelligence.",
  },
];

const symbols = [
  { symbol: "ॐ", name: "Om", meaning: "Primordial vibration of existence" },
  {
    symbol: "🔱",
    name: "Trishul",
    meaning: "Creation, preservation, and dissolution in balance",
  },
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

/* ------------------ WASHED CARD ------------------ */

function WashCard({ children, className = "" }) {
  return (
    <div
      className={`h-full rounded-2xl border border-[#C9A24D]/25 bg-white/70 backdrop-blur-md p-6
      shadow-[0_10px_40px_-15px_rgba(127,179,207,0.45)]
      transition duration-500 hover:-translate-y-1 hover:border-[#C9A24D]/60
      hover:shadow-[0_18px_50px_-15px_rgba(201,162,77,0.45)] ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------ COMPONENT ------------------ */

export default function DeitiesSymbols() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#EAF1F6] via-[#F4F7F9] to-[#FBF8F2] text-[#3A4A5C] overflow-hidden">
      {/* Ambient light glow */}
      <div className="absolute inset-0 bg-[radial-gradient(900px_450px_at_50%_-10%,rgba(255,255,255,0.9)_0%,transparent_70%)] pointer-events-none" />

      {/* ================= HERO ================= */}
      <motion.div
        className="relative min-h-screen w-full flex items-start justify-center text-center overflow-hidden pt-28 md:pt-66"
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.3 }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${symbol})` }}
        />

        {/* White wash overlay: mist at top for text, fades into page bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#EAF1F6]/90 via-white/55 to-[#F4F7F9]" />

        {/* Hero Content */}
        <motion.div
          className="relative z-10 px-6 max-w-3xl mx-auto"
          variants={fadeUp}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#3A4A5C]/70 font-['Cormorant_Garamond']">
            Deities & Symbols
          </p>

          <h1 className="mb-6 text-3xl md:text-5xl uppercase tracking-[0.25em] font-light font-['Cormorant_Garamond'] drop-shadow-[0_2px_6px_rgba(255,255,255,0.8)]">
            Consciousness <span className={goldText}>Personified</span>
          </h1>

          <div className="mx-auto mb-6 h-px w-32 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

          <p className="text-sm md:text-lg text-[#3A4A5C]/85 leading-relaxed font-['Cormorant_Garamond']">
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
            Deity <span className={goldText}>Forms</span>
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
                <WashCard>
                  <div className="w-full h-[280px] flex justify-center items-center overflow-hidden rounded-xl mb-5 bg-gradient-to-b from-[#EAF1F6] to-white">
                    <img
                      src={d.image}
                      alt={d.name}
                      className="h-full object-contain object-top rounded-xl"
                    />
                  </div>

                  <h3 className="mb-2 text-lg uppercase tracking-wide text-[#A67C2E] font-['Cormorant_Garamond']">
                    {d.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#5E8FAE] mb-4 font-['Cormorant_Garamond']">
                    {d.title}
                  </p>
                  <p className="text-sm text-[#3A4A5C]/80 leading-relaxed font-['Cormorant_Garamond']">
                    {d.description}
                  </p>
                </WashCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SYMBOL GLOSSARY */}
        <section className="py-32">
          <h2 className="text-center mb-20 text-xl md:text-3xl uppercase tracking-[0.25em] font-light font-['Cormorant_Garamond']">
            Sacred <span className={goldText}>Symbols</span>
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
                <WashCard className="text-center">
                  <div className="text-4xl mb-4 text-[#C9A24D]">{s.symbol}</div>
                  <h4 className="text-sm uppercase tracking-wide text-[#A67C2E] font-['Cormorant_Garamond']">
                    {s.name}
                  </h4>
                  <p className="mt-2 text-xs text-[#3A4A5C]/75 leading-relaxed font-['Cormorant_Garamond']">
                    {s.meaning}
                  </p>
                </WashCard>
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
              Symbolism in <span className={goldText}>Dharmaverse</span>
            </h2>

            <p className="text-sm md:text-base text-[#3A4A5C]/85 leading-relaxed font-['Cormorant_Garamond']">
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
  );x
}