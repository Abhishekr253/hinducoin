import React from "react";
import { motion } from "framer-motion";
import LuxuryCard from "../common/LuxuryCard";
import CTAButton from "../common/CTAButton";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FestivalsLivingWorld() {
  return (
    <section className="relative w-full bg-[#05070C] text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <div className="relative py-36 md:py-44 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_-10%,rgba(212,175,55,0.22),transparent_70%)]" />

        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/60 font-['Cormorant_Garamond']">
            Festivals & Living World
          </p>

          <h1 className="mb-6 text-3xl md:text-5xl font-light tracking-[0.25em] uppercase font-['Cormorant_Garamond']">
            The Dharmaverse
            <br />
            <span className="text-[#D4AF37]">Changes Constantly</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-white/75 font-['Cormorant_Garamond'] leading-relaxed">
            Time, seasons, rituals, and festivals dynamically reshape the world.
            Nothing here is static — the Dharmaverse breathes, evolves, and responds
            to collective participation.
          </p>
        </motion.div>
      </div>

      {/* ================= SYSTEM SECTIONS ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-32 space-y-24">

        {/* Festival Unlock System */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ amount: 0.3 }}>
          <LuxuryCard className="text-center">
            <h3 className="mb-4 text-xl uppercase tracking-[0.25em] font-light font-['Cormorant_Garamond']">
              Festival Unlock System
            </h3>
            <p className="text-sm text-white/70 font-['Cormorant_Garamond'] leading-relaxed max-w-3xl mx-auto">
              Major festivals unlock new regions, temple states, rituals, quests,
              and experiences. Participation influences how the festival manifests
              within the world — no two cycles are identical.
            </p>
          </LuxuryCard>
        </motion.div>

        {/* Seasonal Expansions */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ amount: 0.3 }}>
          <LuxuryCard className="text-center">
            <h3 className="mb-4 text-xl uppercase tracking-[0.25em] font-light font-['Cormorant_Garamond']">
              Seasonal Expansions
            </h3>
            <p className="text-sm text-white/70 font-['Cormorant_Garamond'] leading-relaxed max-w-3xl mx-auto">
              Each season introduces visual shifts, environmental changes,
              narrative arcs, and sacred opportunities aligned with cosmic and
              calendrical cycles.
            </p>
          </LuxuryCard>
        </motion.div>

        {/* Ritual Schedules */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ amount: 0.3 }}>
          <LuxuryCard className="text-center">
            <h3 className="mb-4 text-xl uppercase tracking-[0.25em] font-light font-['Cormorant_Garamond']">
              Ritual Schedules
            </h3>
            <p className="text-sm text-white/70 font-['Cormorant_Garamond'] leading-relaxed max-w-3xl mx-auto">
              Rituals follow precise temporal windows. Some are daily, others
              lunar, seasonal, or festival-bound. Missing a window means waiting
              for the next cosmic alignment.
            </p>
          </LuxuryCard>
        </motion.div>

        {/* Limited-time Sacred Offerings */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ amount: 0.3 }}>
          <LuxuryCard className="text-center">
            <h3 className="mb-4 text-xl uppercase tracking-[0.25em] font-light font-['Cormorant_Garamond']">
              Limited-Time Sacred Offerings
            </h3>
            <p className="text-sm text-white/70 font-['Cormorant_Garamond'] leading-relaxed max-w-3xl mx-auto">
              Certain offerings, blessings, artifacts, and symbolic NFTs are
              available only during specific ritual periods. Once the moment
              passes, they may never return in the same form.
            </p>
          </LuxuryCard>
        </motion.div>

      </div>

      {/* ================= CTA BLOCK ================= */}
      <motion.div
        className="relative text-center pb-36"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <CTAButton variant="gold">See Festival Calendar</CTAButton>
          <CTAButton variant="outline">See Annual Calendar</CTAButton>
          <CTAButton variant="dark">Join Citizenship</CTAButton>
        </div>
      </motion.div>

    </section>
  );
}
