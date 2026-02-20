import React from "react";
import { motion } from "framer-motion";
import CTAButton from "../components/common/CTAButton";
import dharmaverse from "../assets/dharmaverse_og.jpg.jpeg";
import { Link } from "react-router-dom";

/* ------------------ ANIMATION ------------------ */

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const textFade = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ------------------ COMPONENT ------------------ */

export default function DharmaverseHub() {
  return (
    <section className="relative w-full bg-[#05070C] text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <motion.section
        className="relative min-h-screen w-full flex items-center justify-center text-center overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.3 }}
      >
        {/* Cinematic Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${dharmaverse})` }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.06 }}
          transition={{ duration: 24, ease: "linear" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-[#05070C]" />

        {/* Hero Content */}
        <motion.div
          className="relative z-10 max-w-4xl px-6 mx-auto"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={textFade}
            className="mb-4 text-xs uppercase tracking-[0.35em] text-white/60 "
          >
            Dharmaverse Hub
          </motion.p>

          <motion.h1
            variants={textFade}
            className="mb-6 text-4xl md:text-6xl uppercase tracking-[0.25em] font-light font-['Cormorant_Garamond']"
          >
            Where <span className="text-[#D4AF37]">Dharma</span> Becomes a World
          </motion.h1>

          <motion.p
            variants={textFade}
            className="max-w-3xl mx-auto text-sm md:text-base text-white/75 leading-relaxed font-['Cormorant_Garamond']"
          >
            Dharmaverse is a persistent sacred universe — where temples
            function, rituals activate, and citizens participate in an evolving
            civilization.
          </motion.p>

          {/* CTA PATHS */}
          <motion.div
            variants={textFade}
            className="mt-14 flex flex-col md:flex-row gap-6 justify-center"
          >
            <Link to="/dharmaverse/temple">
              <CTAButton variant="gold">Temple Complex</CTAButton>
            </Link>
            <Link to="/citizenship">
              <CTAButton variant="outline">Citizenship</CTAButton>
            </Link>
            <Link to="/dharmaverse/rituals">
              <CTAButton variant="outline">Rituals</CTAButton>
            </Link>
          </motion.div>

          {/* Footer Line */}
          <motion.p
            variants={textFade}
            className="mt-10 text-xs tracking-widest text-white/40 uppercase font-['Cormorant_Garamond']"
          >
            This is not mythology. This is a functioning realm.
          </motion.p>
        </motion.div>
      </motion.section>
    </section>
  );
}
