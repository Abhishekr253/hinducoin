import React from "react";
import { motion } from "framer-motion";
import LuxuryCard from "../common/LuxuryCard";
import CTAButton from "../common/CTAButton";
import map from "../../assets/map.jpeg";

const realms = [
  { name: "Main Hub", status: "active" },
  { name: "Floating Islands", status: "active" },
  { name: "Sacred Realms", status: "locked" },
  { name: "Ancient Dimensions", status: "locked" },
  { name: "Future Expansions", status: "future" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const statusStyles = {
  active: "border-[#D4AF37] text-[#D4AF37]",
  locked: "border-white/20 text-white/50",
  future: "border-dashed border-white/30 text-white/40",
};

export default function WorldMap() {
  return (
    <section className="relative w-full bg-[#05070C] text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <div className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${map})` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Gold Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_-10%,rgba(212,175,55,0.18),transparent_70%)]" />

        {/* Bottom Fade Blend */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#05070C]" />

        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/70 font-['Cormorant_Garamond']">
            World Map
          </p>

          <h1 className="text-3xl md:text-5xl font-light tracking-[0.25em] uppercase font-['Cormorant_Garamond']">
            Realm Explorer
            <br />
            <span className="text-[#D4AF37]">Navigate the Living World</span>
          </h1>
        </motion.div>
      </div>

      {/* ================= INTERACTIVE MAP (ABSTRACT) ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          className="relative h-[420px] rounded-3xl border border-white/10 overflow-hidden bg-gradient-to-br from-[#0A0F1F] to-[#05070C]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          {/* Glow nodes */}
          <div className="absolute top-20 left-1/4 h-4 w-4 rounded-full bg-[#D4AF37] shadow-[0_0_20px_#D4AF37]" />
          <div className="absolute top-1/2 right-1/4 h-3 w-3 rounded-full bg-white/60" />
          <div className="absolute bottom-24 left-1/2 h-3 w-3 rounded-full bg-white/40" />

          <p className="absolute bottom-6 w-full text-center text-xs text-white/50 font-['Cormorant_Garamond'] tracking-wide">
            Interactive map coming in Phase 1
          </p>
        </motion.div>
      </div>

      {/* ================= REALM LIST ================= */}
      <div className="max-w-6xl mx-auto px-6 pb-32">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
        >
          {realms.map((realm) => (
            <motion.div key={realm.name} variants={fadeUp}>
              <LuxuryCard className="text-center">
                <div
                  className={`mx-auto mb-6 h-2 w-2 rounded-full border ${statusStyles[realm.status]}`}
                />

                <h3 className="text-lg uppercase tracking-wide font-['Cormorant_Garamond'] mb-2">
                  {realm.name}
                </h3>

                <p className="text-xs uppercase tracking-wider text-white/50 font-['Cormorant_Garamond']">
                  {realm.status === "active" && "Accessible"}
                  {realm.status === "locked" && "Locked"}
                  {realm.status === "future" && "Future Phase"}
                </p>
              </LuxuryCard>
            </motion.div>
          ))}
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
        <CTAButton variant="gold">Begin Exploration</CTAButton>
      </motion.div>
    </section>
  );
}
