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
      <div className="relative py-16 md:py-44 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_-10%,rgba(212,175,55,0.18),transparent_70%)]" />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="mb-3 text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/60 font-['Cormorant_Garamond']">
            Temple Complex
          </p>

          <h1 className="text-2xl md:text-5xl font-light tracking-[0.18em] md:tracking-[0.25em] uppercase font-['Cormorant_Garamond'] leading-tight">
            Sacred Spaces of the
            <br />
            <span className="text-[#D4AF37]">Dharmaverse</span>
          </h1>
        </motion.div>
      </div>

      {/* ================= INTERACTIVE MAP ================= */}
      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 mb-12 md:mb-28"
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.3 }}
        variants={fadeUp}
      >
        <LuxuryCard className="text-center p-6 md:p-10">
          <h3 className="mb-3 text-base md:text-xl uppercase tracking-[0.18em] md:tracking-[0.25em] font-light font-['Cormorant_Garamond']">
            Interactive Temple Map
          </h3>

          <div className="mt-4 h-40 md:h-80 rounded-xl border border-white/10 flex items-center justify-center text-xs md:text-base text-white/50 font-['Cormorant_Garamond']">
            Interactive map coming online with clickable zones
          </div>
        </LuxuryCard>
      </motion.div>

      {/* ================= ZONES LIST ================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 md:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Phase 1 */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          variants={fadeUp}
        >
          <LuxuryCard className="p-6 md:p-10">
            <h3 className="mb-4 text-base md:text-lg uppercase tracking-[0.18em] md:tracking-[0.25em] font-light font-['Cormorant_Garamond'] text-[#D4AF37]">
              Coming in Phase 1
            </h3>

            <ul className="space-y-3">
              {zonesPhase1.map((zone) => (
                <li
                  key={zone}
                  className="text-xs md:text-sm text-white/80 font-['Cormorant_Garamond'] flex items-center gap-2"
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
          <LuxuryCard className="p-6 md:p-10">
            <h3 className="mb-4 text-base md:text-lg uppercase tracking-[0.18em] md:tracking-[0.25em] font-light font-['Cormorant_Garamond'] text-white/60">
              Future Expansions
            </h3>

            <ul className="space-y-3">
              {zonesFuture.map((zone) => (
                <li
                  key={zone}
                  className="text-xs md:text-sm text-white/50 font-['Cormorant_Garamond'] flex items-center gap-2"
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
        className="text-center pb-16 md:pb-36 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <NavLink
          to={"/dharmaverse/facilities"}
          className="block max-w-xs mx-auto"
        >
          <CTAButton
            variant="gold"
            className="w-full text-sm md:text-base py-2 md:py-3"
          >
            Explore Facilities
          </CTAButton>
        </NavLink>
      </motion.div>
    </section>
  );
}
