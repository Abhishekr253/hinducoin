import React from "react";
import { motion } from "framer-motion";
import CTAButton from "../common/CTAButton";
import history from "../../assets/history.jpg";
import { NavLink } from "react-router-dom";

/* ------------------ DATA ------------------ */

const timeline = [
  { title: "Vedic Period", desc: "The earliest foundations of Sanātana Dharma — hymns, rituals, cosmic order." },
  { title: "Upanishads", desc: "Inquiry into the self, Brahman, and liberation through knowledge." },
  { title: "Epics", desc: "Ramayana and Mahabharata shaping ethics, duty, and dharma." },
  { title: "Puranic Age", desc: "Mythology, devotion, cosmology, and cultural continuity." },
  { title: "Bhakti Movement", desc: "Personal devotion beyond caste, language, or region." },
  { title: "Modern Era", desc: "Revival, reform, and global resonance of ancient wisdom." },
];

const contributions = [
  { title: "Philosophy", desc: "Advaita, Dvaita, Samkhya, Yoga — frameworks that shaped global thought." },
  { title: "Yoga Traditions", desc: "Paths of body, breath, discipline, and inner realization." },
  { title: "Architecture", desc: "Temples as cosmic diagrams — geometry aligned with consciousness." },
  { title: "Knowledge Systems", desc: "Astronomy, mathematics, medicine, linguistics, and metaphysics." },
];

const temples = [
  { title: "Nagara Style", image: "/temples/nagara.jpg" },
  { title: "Dravidian Style", image: "/temples/dravidian.jpg" },
  { title: "Vesara Style", image: "/temples/vesara.jpg" },
];

/* ------------------ ANIMATION VARIANTS ------------------ */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeSoft = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

/* ------------------ COMPONENT ------------------ */

export default function HistoryHeritage() {
  return (
    <section className="relative w-full bg-[#05070C] text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <motion.div
        className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.3 }}
        variants={container}
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${history})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#05070C]" />

        {/* Hero Content */}
        <motion.div className="relative z-10 px-6 max-w-3xl" variants={container}>
          <motion.p
            variants={fadeUp}
            className="mb-4 text-xs uppercase tracking-[0.35em] text-white/60 font-['Cormorant_Garamond']"
          >
            History & Heritage
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mb-6 text-3xl md:text-5xl uppercase tracking-[0.25em] font-light font-['Cormorant_Garamond']"
          >
            A Civilization That{" "}
            <span className="text-[#D4AF37]">Never Ended</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-sm md:text-base text-white/75 leading-relaxed font-['Cormorant_Garamond']"
          >
            Sanātana Dharma flows uninterrupted — evolving, adapting, yet eternal.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* TIMELINE */}
        <section className="py-32">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
            className="text-center mb-20 text-xl md:text-3xl uppercase tracking-[0.25em] font-light font-['Cormorant_Garamond']"
          >
            The Flow of <span className="text-[#D4AF37]">Time</span>
          </motion.h2>

          <motion.div
            className="grid gap-10 md:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
          >
            {timeline.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="rounded-2xl bg-white/[0.03] p-8 backdrop-blur"
              >
                <div className="mb-5 h-1 w-10 bg-[#D4AF37]/80 rounded-full" />
                <h3 className="mb-3 text-lg uppercase tracking-wide font-['Cormorant_Garamond']">
                  {item.title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed font-['Cormorant_Garamond']">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CONTRIBUTIONS */}
        <section className="py-32">
          <motion.div
            className="grid md:grid-cols-2 gap-16"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
          >
            {contributions.map((c) => (
              <motion.div key={c.title} variants={fadeUp}>
                <h3 className="mb-4 text-xl uppercase tracking-[0.2em] font-light font-['Cormorant_Garamond']">
                  <span className="text-[#D4AF37]">—</span> {c.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed font-['Cormorant_Garamond']">
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ARCHITECTURE */}
        <section className="py-32">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
            className="text-center mb-20 text-xl md:text-3xl uppercase tracking-[0.25em] font-light font-['Cormorant_Garamond']"
          >
            Sacred <span className="text-[#D4AF37]">Architecture</span>
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
          >
            {temples.map((t) => (
              <motion.div
                key={t.title}
                variants={fadeUp}
                className="relative overflow-hidden rounded-2xl"
              >
                <img
                  src={t.image}
                  alt={t.title}
                  className="h-[420px] w-full object-cover transition duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 flex items-end p-6">
                  <h3 className="text-lg uppercase tracking-wide font-['Cormorant_Garamond']">
                    {t.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA */}
        <motion.section
          className="py-20 text-center"
          variants={fadeSoft}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
        >
          <NavLink to={"/sanatan/festivals"}>
          <CTAButton variant="gold">Explore Festivals & Calendar</CTAButton>
          </NavLink>
        </motion.section>
      </div>
    </section>
  );
}
