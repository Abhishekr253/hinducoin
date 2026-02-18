import {useState} from "react";
import { motion } from "framer-motion";
import LuxuryCard from "../common/LuxuryCard";
import CTAButton from "../common/CTAButton";
import FestivalCalendar from "../common/FestivalCalendar";
import { Link } from "react-router-dom";
import AnnualFestivalCalendarModal from "../AnnualFestivalCalendarModal";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FestivalsLivingWorld() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

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
            Festivals & Living World
          </p>

          <h1 className="mb-4 text-2xl md:text-5xl font-light tracking-[0.18em] md:tracking-[0.25em] uppercase font-['Cormorant_Garamond'] leading-tight">
            The Dharmaverse
            <br />
            <span className="text-[#D4AF37]">Changes Constantly</span>
          </h1>

          <p className="max-w-xl mx-auto text-xs md:text-base text-white/75 font-['Cormorant_Garamond'] leading-relaxed">
            Time, seasons, rituals, and festivals dynamically reshape the world.
            Nothing here is static — the Dharmaverse breathes, evolves, and
            responds to collective participation.
          </p>
        </motion.div>
      </div>

      {/* ================= SYSTEM SECTIONS ================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 md:pb-32 space-y-12 md:space-y-24">
        {[
          {
            title: "Festival Unlock System",
            desc: "Major festivals unlock new regions, temple states, rituals, quests, and experiences. Participation influences how the festival manifests within the world — no two cycles are identical.",
          },
          {
            title: "Seasonal Expansions",
            desc: "Each season introduces visual shifts, environmental changes, narrative arcs, and sacred opportunities aligned with cosmic and calendrical cycles.",
          },
          {
            title: "Ritual Schedules",
            desc: "Rituals follow precise temporal windows. Some are daily, others lunar, seasonal, or festival-bound. Missing a window means waiting for the next cosmic alignment.",
          },
          {
            title: "Limited-Time Sacred Offerings",
            desc: "Certain offerings, blessings, artifacts, and symbolic NFTs are available only during specific ritual periods. Once the moment passes, they may never return in the same form.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
          >
            <LuxuryCard className="text-center p-6 md:p-10">
              <h3 className="mb-3 text-base md:text-xl uppercase tracking-[0.18em] md:tracking-[0.25em] font-light font-['Cormorant_Garamond']">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-white/70 font-['Cormorant_Garamond'] leading-relaxed max-w-2xl mx-auto">
                {item.desc}
              </p>
            </LuxuryCard>
          </motion.div>
        ))}
      </div>

      {/* ================= CTA BLOCK ================= */}
      <motion.div
        className="relative text-center pb-16 md:pb-36 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center max-w-md sm:max-w-none mx-auto">
            <CTAButton
        className="w-full sm:w-auto text-sm md:text-base py-2 md:py-3"
        variant="gold"
        onClick={() => setIsCalendarOpen(true)}
      >
        See Festival Calendar
      </CTAButton>

      <FestivalCalendar
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
      />

          <CTAButton
        className="w-full sm:w-auto text-sm md:text-base py-2 md:py-3"
        variant="outline"
        onClick={() => setShowCalendar(true)}
      >
        See Annual Calendar
      </CTAButton>

      <AnnualFestivalCalendarModal
        isOpen={showCalendar}
        onClose={() => setShowCalendar(false)}
      />


          <Link to="/citizenship">
          <CTAButton
            className="w-full sm:w-auto text-sm md:text-base py-2 md:py-3 hover:cursor-pointer"
            variant="dark"
          >
            Join Citizenship
          </CTAButton>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
