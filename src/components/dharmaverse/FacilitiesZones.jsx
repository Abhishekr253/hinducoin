import React from "react";
import { motion } from "framer-motion";
import LuxuryCard from "../common/LuxuryCard";
import CTAButton from "../common/CTAButton";
import { NavLink } from "react-router-dom";

const facilities = [
  "Meditation Halls",
  "Prayer Sanctums",
  "Learning Halls",
  "Offering Chambers",
  "Sacred Gardens",
  "Festival Arenas",
  "Citizen Lounges",
  "Shopping Zone",
  "Rides & Experiences",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FacilitiesZones() {
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
            Facilities & Zones
          </p>

          <h1 className="text-2xl md:text-5xl font-light tracking-[0.18em] md:tracking-[0.25em] uppercase font-['Cormorant_Garamond'] leading-tight">
            Spaces of Experience
            <br />
            <span className="text-[#D4AF37]">Within the Dharmaverse</span>
          </h1>
        </motion.div>
      </div>

      {/* ================= FACILITY CARDS ================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 md:pb-32">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
        >
          {facilities.map((facility) => (
            <motion.div key={facility} variants={fadeUp}>
              <LuxuryCard className="h-full text-center p-6 md:p-8">
                <div className="mx-auto mb-4 h-1 w-8 md:w-10 rounded-full bg-[#D4AF37]/80" />

                <h3 className="mb-2 text-base md:text-lg uppercase tracking-wide font-['Cormorant_Garamond']">
                  {facility}
                </h3>

                <p className="text-xs md:text-sm text-white/65 font-['Cormorant_Garamond'] leading-relaxed">
                  Purpose-built spaces designed to support ritual, learning,
                  reflection, celebration, and community within the Dharmaverse.
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
        <NavLink to={"/dharmaverse/rituals"} className="block max-w-xs mx-auto">
          <CTAButton
            variant="gold"
            className="w-full text-sm md:text-base py-2 md:py-3"
          >
            View Rituals & Prayers
          </CTAButton>
        </NavLink>
      </motion.div>
    </section>
  );
}
