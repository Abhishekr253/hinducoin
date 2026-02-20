import React from "react";
import { motion } from "framer-motion";
import CTAButton from "../common/CTAButton";
import { Link } from "react-router-dom";
import overview from "../../assets/overview.jpeg";

/* ------------------ ANIMATION ------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ------------------ COMPONENT ------------------ */

export default function DharmaverseOverview() {
  return (
    <section className="relative w-full bg-[#05070C] text-white overflow-hidden">
      {/* Ambient Sacred Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_-10%,#141B2D_0%,transparent_70%)]" />

      {/* ================= HEADER ================= */}
      <section className="relative w-full h-[95vh] md:h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <img
          src={overview}
          alt="Dharmaverse Overview"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Sacred Gold Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_-10%,rgba(212,175,55,0.15),transparent_70%)]" />

        {/* Bottom Fade Into Page */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#05070C] via-[#05070C]/80 to-transparent" />

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-3xl px-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/70 font-cormorant">
            Dharmaverse Overview
          </p>

          <h1 className="mb-6 text-3xl md:text-5xl uppercase tracking-[0.25em] font-light font-cormorant">
            A Living <span className="text-[#D4AF37]">Civilization</span>
          </h1>

          <p className="text-sm md:text-base text-white/80 leading-relaxed font-cormorant">
            Dharmaverse is not an experience you play.
            <br />
            It is a system you enter.
          </p>
        </motion.div>
      </section>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        {/* ================= SECTIONS ================= */}
        <div className="grid gap-24">
          {/* 1. WHAT IT IS */}
          <motion.section
            className="max-w-4xl mx-auto text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
          >
            <h2 className="mb-6 text-xl md:text-2xl uppercase tracking-[0.25em] font-light font-cormorant">
              What <span className="text-[#D4AF37]">It Is</span>
            </h2>

            <p className="text-sm md:text-base text-white/75 leading-relaxed font-cormorant">
              Dharmaverse is a persistent sacred digital realm structured around
              Hindu cosmology. Temples operate as functional institutions,
              rituals trigger real system states, and citizens participate in
              evolving dharmic order.
            </p>
          </motion.section>

          {/* 2. WHY IT EXISTS */}
          <motion.section
            className="max-w-4xl mx-auto text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
          >
            <h2 className="mb-6 text-xl md:text-2xl uppercase tracking-[0.25em] font-light font-cormorant">
              Why <span className="text-[#D4AF37]">It Exists</span>
            </h2>

            <p className="text-sm md:text-base text-white/75 leading-relaxed font-cormorant">
              Modern systems reward speed, consumption, and extraction.
              Dharmaverse exists to reintroduce balance, continuity, and sacred
              responsibility — not as belief, but as infrastructure.
            </p>
          </motion.section>

          {/* 3. WHAT MAKES IT DIFFERENT */}
          <motion.section
            className="max-w-5xl mx-auto text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
          >
            <h2 className="mb-10 text-xl md:text-2xl uppercase tracking-[0.25em] font-light font-cormorant">
              What Makes It <span className="text-[#D4AF37]">Different</span>
            </h2>

            <div className="grid gap-8 md:grid-cols-3 text-sm text-white/70 font-cormorant">
              <div className="border border-white/10 rounded-xl p-8">
                <p className="uppercase tracking-widest text-xs text-[#D4AF37] mb-3">
                  Not a Game
                </p>
                <p>
                  There are no levels, no dopamine loops, and no fictional
                  rewards. Actions carry consequence and continuity.
                </p>
              </div>

              <div className="border border-white/10 rounded-xl p-8">
                <p className="uppercase tracking-widest text-xs text-[#D4AF37] mb-3">
                  Not a DAO Gimmick
                </p>
                <p>
                  Governance is not crowd-voted chaos. Authority flows through
                  dharmic structure, not speculation or hype.
                </p>
              </div>

              <div className="border border-white/10 rounded-xl p-8">
                <p className="uppercase tracking-widest text-xs text-[#D4AF37] mb-3">
                  Not Metaverse Theater
                </p>
                <p>
                  This is not visual novelty. It is a functional symbolic system
                  built for long-term civilizational continuity.
                </p>
              </div>
            </div>
          </motion.section>

          {/* 4. POWERED BY HINDU COIN */}
          <motion.section
            className="max-w-4xl mx-auto text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
          >
            <div className="mb-6 text-center">
              {/* Big Token Symbol */}
              <div
                className="text-4xl sm:text-5xl md:text-6xl 
                  font-semibold tracking-[0.35em] 
                  text-[#D4AF37]"
              >
                $HINDU
              </div>

              {/* Powered By Text */}
              <h2
                className="mt-4 text-sm sm:text-base md:text-xl 
                 uppercase tracking-[0.25em] 
                 font-light font-cormorant text-white"
              >
                Powered by <span className="text-[#D4AF37]">Hindu Coin</span>
              </h2>
            </div>

            <p className="text-sm md:text-base text-white/75 leading-relaxed font-cormorant">
              Hindu Coin is not purely a speculative currency.
              <br />
              It is a dharmic energy unit used to activate temples, sustain
              rituals, and maintain system equilibrium across the Dharmaverse.
            </p>
          </motion.section>
        </div>

        {/* ================= CTA ================= */}
        <motion.div
          className="mt-32 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
        >
          <Link to="/dharmaverse/development">
            <CTAButton variant="gold">View Development Status</CTAButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
