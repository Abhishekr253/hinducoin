import React from "react";
import { motion } from "framer-motion";
import LuxuryCard from "../common/LuxuryCard";
import CTAButton from "../common/CTAButton";
import { NavLink } from "react-router-dom";

const zonesPhase1 = [
  "Main Sanctum",
  "Ritual Courtyard",
  "Pilgrim Entry Hall",
  "Festival Assembly Grounds",
];

const zonesFuture = [
  "Meditation Forest",
  "Learning Mandapam",
  "River Ghats",
  "Inner Sanctum Chambers",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TempleComplex() {
  return (
    <section className="relative w-full bg-[#05070C] text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <div className="relative py-36 md:py-44 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_-10%,rgba(212,175,55,0.2),transparent_70%)]" />

        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/60 font-['Cormorant_Garamond']">
            Temple Complex
          </p>

          <h1 className="text-3xl md:text-5xl font-light tracking-[0.25em] uppercase font-['Cormorant_Garamond']">
            Sacred Spaces of the
            <br />
            <span className="text-[#D4AF37]">Dharmaverse</span>
          </h1>
        </motion.div>
      </div>

      {/* ================= INTERACTIVE MAP ================= */}
      <motion.div
        className="max-w-6xl mx-auto px-6 mb-28"
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.3 }}
        variants={fadeUp}
      >
        <LuxuryCard className="text-center">
          <h3 className="mb-4 text-xl uppercase tracking-[0.25em] font-light font-['Cormorant_Garamond']">
            Interactive Temple Map
          </h3>

          <div className="mt-6 h-64 md:h-80 rounded-xl border border-white/10 flex items-center justify-center text-white/50 font-['Cormorant_Garamond']">
            Interactive map coming online with clickable zones
          </div>
        </LuxuryCard>
      </motion.div>

      {/* ================= ZONES LIST ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Phase 1 */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          variants={fadeUp}
        >
          <LuxuryCard>
            <h3 className="mb-6 text-lg uppercase tracking-[0.25em] font-light font-['Cormorant_Garamond'] text-[#D4AF37]">
              Coming in Phase 1
            </h3>

            <ul className="space-y-4">
              {zonesPhase1.map((zone) => (
                <li
                  key={zone}
                  className="text-sm text-white/80 font-['Cormorant_Garamond'] flex items-center gap-3"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                  {zone}
                </li>
              ))}
            </ul>
          </LuxuryCard>
        </motion.div>

        {/* Future */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          variants={fadeUp}
        >
          <LuxuryCard>
            <h3 className="mb-6 text-lg uppercase tracking-[0.25em] font-light font-['Cormorant_Garamond'] text-white/60">
              Future Expansions
            </h3>

            <ul className="space-y-4">
              {zonesFuture.map((zone) => (
                <li
                  key={zone}
                  className="text-sm text-white/50 font-['Cormorant_Garamond'] flex items-center gap-3"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                  {zone}
                </li>
              ))}
            </ul>
          </LuxuryCard>
        </motion.div>

      </div>

      {/* ================= CTA ================= */}
      <motion.div
        className="text-center pb-36"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <NavLink to={"/dharmaverse/facilities"} >
        <CTAButton variant="gold">
          Explore Facilities
        </CTAButton>
        </NavLink>
      </motion.div>

    </section>
  );
}
