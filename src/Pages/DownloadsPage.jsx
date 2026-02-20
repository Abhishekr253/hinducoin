import { motion } from "framer-motion";
import CTAButton from "../components/common/CTAButton";
import LuxuryCard from "../components/common/LuxuryCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const sectionContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function DownloadsPage() {
  return (
    <main className="w-full text-white bg-[#05070C]">
      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center text-center px-6
        bg-[radial-gradient(1200px_600px_at_50%_-10%,#141B2D_0%,#070B12_55%,#05070C_100%)]"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/50 font-['Cormorant_Garamond']">
            Dharmaverse Client
          </p>

          <h1 className="text-3xl md:text-5xl font-light tracking-[0.2em] uppercase font-['Cormorant_Garamond']">
            Games & Downloads
          </h1>

          <div className="mt-8 inline-block border border-yellow-500/40 px-6 py-2 text-yellow-500 text-xs tracking-widest uppercase">
            Coming Soon
          </div>
        </motion.div>
      </section>

      {/* ================= LATEST RELEASE ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          variants={sectionContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          className="text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="mb-12 uppercase tracking-widest font-['Cormorant_Garamond']"
          >
            Latest Release
          </motion.h2>

          <motion.div variants={fadeUp}>
            <LuxuryCard className="text-center">
              <h3 className="mb-4 text-lg uppercase tracking-wide">
                Dharmaverse — Phase I Build
              </h3>

              <p className="text-white/60 mb-2">
                Status: <span className="text-yellow-500">In Development</span>
              </p>

              <p className="text-white/50 text-sm">
                Estimated Development Timeline: 12 Months
              </p>
            </LuxuryCard>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= MAHABHARATA SLAB ================= */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-[#05070C] to-[#070B12] overflow-hidden">
        <motion.div
          variants={sectionContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Primary Title */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-light tracking-[0.35em] uppercase font-['Cormorant_Garamond'] text-white"
          >
            Mahabharata
          </motion.h2>

          {/* Subtle Echo Title */}
          <motion.h3
            variants={fadeUp}
            className="mt-4 text-lg md:text-xl tracking-[0.6em] uppercase text-yellow-500/70 font-['Cormorant_Garamond']"
          >
            Mahabharata
          </motion.h3>

          {/* Divider */}
          <motion.div
            variants={fadeUp}
            className="mt-10 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
          />

          {/* Age Title */}
          <motion.h4
            variants={fadeUp}
            className="mt-10 text-xl md:text-2xl tracking-[0.4em] uppercase text-white/80"
          >
            The Age of Oaths
          </motion.h4>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base md:text-lg text-white/60 font-light"
          >
            Where Dharma Shapes Destiny
          </motion.p>

          {/* Development Badge */}
          <motion.div
            variants={fadeUp}
            className="mt-12 inline-block border border-yellow-500/40 px-6 py-2 text-yellow-500 text-xs tracking-widest uppercase"
          >
            Phase I — Narrative Foundation
          </motion.div>
        </motion.div>
      </section>

      {/* ================= DOWNLOAD SECTION ================= */}
      <section className="py-24 px-6 bg-[#070B12]">
        <motion.div
          variants={sectionContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="mb-12 uppercase tracking-widest font-['Cormorant_Garamond']"
          >
            Downloads
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {["Windows", "macOS", "Android", "iOS"].map((platform, i) => (
              <LuxuryCard key={i} className="text-center opacity-60">
                <p className="uppercase tracking-wide text-sm">{platform}</p>
                <p className="text-xs text-white/40 mt-2">Coming Soon</p>
              </LuxuryCard>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ================= SYSTEM REQUIREMENTS ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          variants={sectionContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
        >
          <motion.h2
            variants={fadeUp}
            className="mb-12 text-center uppercase tracking-widest font-['Cormorant_Garamond']"
          >
            System Requirements
          </motion.h2>

          <motion.div variants={fadeUp}>
            <LuxuryCard>
              <p className="text-white/60 text-center">
                Minimum and recommended specifications will be announced closer
                to the public release.
              </p>
            </LuxuryCard>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= RELEASE NOTES ================= */}
      <section className="py-24 px-6 bg-[#070B12]">
        <motion.div
          variants={sectionContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="mb-12 text-center uppercase tracking-widest font-['Cormorant_Garamond']"
          >
            Release Notes
          </motion.h2>

          <motion.div variants={fadeUp}>
            <LuxuryCard>
              <ul className="space-y-4 text-white/70 text-sm">
                <li>• Central Temple Complex</li>
                <li>• Digital Citizenship Integration</li>
                <li>• Ritual Interaction Framework</li>
                <li>• NFT Sacred Collectibles Support</li>
                <li>• Festival Expansion Architecture</li>
              </ul>
            </LuxuryCard>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= PATCH HISTORY ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          className="text-center"
        >
          <h2 className="mb-8 uppercase tracking-widest font-['Cormorant_Garamond']">
            Patch History
          </h2>

          <LuxuryCard>
            <p className="text-white/50 text-sm">
              No public patches available yet. Updates will be documented here
              following the initial release.
            </p>
          </LuxuryCard>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-[#070B12]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show">
          <CTAButton variant="gold" to="/community">
            Join Community
          </CTAButton>
        </motion.div>
      </section>
    </main>
  );
}
