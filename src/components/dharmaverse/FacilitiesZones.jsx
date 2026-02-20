import React from "react";
import { motion } from "framer-motion";
import LuxuryCard from "../common/LuxuryCard";
import CTAButton from "../common/CTAButton";
import { NavLink } from "react-router-dom";
import facility from "../../assets/facility.jpeg"

const facilities = [
  {
    title: "Meditation Halls",
    description:
      "Luminous sanctums of stillness where sacred geometry, ambient sound, and subtle light create immersive spaces for contemplative practice aligned with the Sacred Calendar.",
  },
  {
    title: "Prayer Sanctums",
    description:
      "Inner ceremonial chambers inspired by traditional temple architecture, reserved for devotional participation and festival-aligned sacred rituals.",
  },
  {
    title: "Learning Halls",
    description:
      "A digital knowledge space where the Codex of Dharmaverse expands — presenting Sanatan philosophy, symbolism, and structured cultural exploration.",
  },
  {
    title: "Offering Chambers",
    description:
      "Ceremonial spaces hosting festival releases, sacred relics, and limited activations that appear during aligned sacred windows.",
  },
  {
    title: "Sacred Gardens",
    description:
      "Contemplative outdoor realms blending architecture, nature, and water elements — evolving visually with seasonal sacred cycles.",
  },
  {
    title: "Festival Arenas",
    description:
      "Large ceremonial environments that transform during major sacred cycles such as Diwali, Navratri, and Maha Shivratri.",
  },
  {
    title: "Citizen Lounges",
    description:
      "Tier-based gathering spaces symbolizing belonging, offering priority access, ceremonial privileges, and exclusive environment variations.",
  },
  {
    title: "Offerings Pavilion",
    description:
      "A curated ceremonial pavilion where sacred articles, temple relics, and commemorative editions are released in alignment with sacred cycles.",
  },
  {
    title: "Rides & Experiences",
    description:
      "Immersive journeys including aerial realm travel, ceremonial processions, and guided explorations of the Temple Complex.",
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

export default function FacilitiesZones() {
  return (
    <section className="relative w-full bg-[#05070C] text-white overflow-hidden">
{/* ================= HERO ================= */}
<div className="relative w-full min-h-[70vh] md:min-h-[90vh] flex items-center justify-center text-center overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${facility})` }}
  />

  {/* Dark Overlay */}
<div className="absolute inset-x-0 bottom-0 h-40 md:h-64 bg-gradient-to-b from-transparent via-[#05070C]/70 to-[#05070C]" />

  {/* Subtle Gold Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_-10%,rgba(212,175,55,0.25),transparent_70%)]" />

  {/* Content */}
  <motion.div
    className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6"
    initial="hidden"
    whileInView="show"
    viewport={{ amount: 0.3 }}
    variants={fadeUp}
  >
    <p className="mb-3 text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/70 font-['Cormorant_Garamond']">
      Facilities & Zones
    </p>

    <h1 className="text-3xl md:text-6xl font-light tracking-[0.18em] md:tracking-[0.25em] uppercase font-['Cormorant_Garamond'] leading-tight">
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
            <motion.div key={facility.title} variants={fadeUp}>
              <LuxuryCard className="h-full text-center p-6 md:p-8">
                <div className="mx-auto mb-4 h-1 w-8 md:w-10 rounded-full bg-[#D4AF37]/80" />

                <h3 className="mb-2 text-base md:text-lg uppercase tracking-wide font-['Cormorant_Garamond']">
                  {facility.title}
                </h3>

                <p className="text-xs md:text-sm text-white/65 font-['Cormorant_Garamond'] leading-relaxed">
                  {facility.description}
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
