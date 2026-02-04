import React from "react";
import { motion } from "framer-motion";
import CTAButton from "../common/CTAButton";
import LuxuryCard from "../common/LuxuryCard";

const progressItems = [
  { label: "Environment Building", value: 45 },
  { label: "Temple Architecture", value: 35 },
  { label: "Ritual Systems", value: 25 },
  { label: "Citizenship Access", value: 40 },
  { label: "NFT Integration", value: 20 },
  { label: "Game / Experience Downloads", value: 15 },
];

const updates = [
  "Initial world terrain and lighting pass completed",
  "Temple design language finalized",
  "Ritual interaction system in prototyping phase",
  "Citizenship access rules under review",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function DharmaverseDevelopment() {
  return (
    <section className="relative w-full bg-[#05070C] text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <div className="relative py-32 md:py-40 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_50%_-10%,rgba(212,175,55,0.18),transparent_70%)]" />
        
        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/60 font-['Cormorant_Garamond']">
            Dharmaverse Development
          </p>

          <h1 className="text-3xl md:text-5xl font-light tracking-[0.25em] uppercase font-['Cormorant_Garamond']">
            Phase 1 is <span className="text-[#D4AF37]">Under Construction</span>
          </h1>
        </motion.div>
      </div>

      {/* ================= PHASE ESTIMATE ================= */}
      <motion.div
        className="max-w-4xl mx-auto text-center px-6 mb-28"
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.3 }}
        variants={fadeUp}
      >
        <h2 className="mb-4 text-xl md:text-3xl uppercase tracking-[0.25em] font-light font-['Cormorant_Garamond']">
          Phase 1 Estimate
        </h2>

        <p className="text-sm md:text-base text-white/75 font-['Cormorant_Garamond']">
          Approximately <span className="text-[#D4AF37]">12 months</span> to build
          and stabilize Phase 1 of the Dharmaverse experience.
        </p>
      </motion.div>

      {/* ================= PROGRESS PANELS ================= */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
        >
          {progressItems.map((item) => (
            <motion.div key={item.label} variants={fadeUp}>
              <LuxuryCard>
                <h3 className="mb-4 text-sm uppercase tracking-wide font-['Cormorant_Garamond'] text-white">
                  {item.label}
                </h3>

                {/* Progress bar */}
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-[#D4AF37]"
                    style={{ width: `${item.value}%` }}
                  />
                </div>

                <p className="mt-3 text-xs text-white/60 font-['Cormorant_Garamond']">
                  {item.value}% complete
                </p>
              </LuxuryCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ================= LATEST UPDATES ================= */}
      <motion.div
        className="max-w-4xl mx-auto px-6 mb-24"
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.3 }}
        variants={fadeUp}
      >
        <h3 className="mb-10 text-center text-xl md:text-3xl uppercase tracking-[0.25em] font-light font-['Cormorant_Garamond']">
          Latest Updates
        </h3>

        <div className="space-y-4">
          {updates.map((update, i) => (
            <LuxuryCard key={i}>
              <p className="text-sm text-white/75 font-['Cormorant_Garamond']">
                {update}
              </p>
            </LuxuryCard>
          ))}
        </div>
      </motion.div>

      {/* ================= CTA ================= */}
      <motion.div
        className="text-center pb-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <CTAButton variant="gold">
          Open Announcements
        </CTAButton>
      </motion.div>

    </section>
  );
}
