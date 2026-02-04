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

export default function Explore() {
  return (
    <main className="w-full text-white bg-[#05070C]">

      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-center px-6
        bg-[radial-gradient(1200px_600px_at_50%_-10%,#141B2D_0%,#070B12_55%,#05070C_100%)]"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/60 font-['Cormorant_Garamond']">
            Explore
          </p>

          <h1 className="text-3xl md:text-5xl font-light tracking-[0.2em] uppercase font-['Cormorant_Garamond']">
            Explore the Ecosystem
          </h1>
        </motion.div>
      </section>

      {/* ================= SECTION 2: WHAT IS HINDU COIN ================= */}
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
            className="mb-6 text-2xl md:text-3xl uppercase tracking-widest font-['Cormorant_Garamond']"
          >
            What is Hindu Coin?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-white/70 leading-relaxed max-w-3xl mx-auto"
          >
            Hindu Coin is a sacred digital asset designed as the foundational
            utility of the Dharmaverse. It enables offerings, access,
            participation, and cultural continuity across spiritual digital
            experiences — without speculation as its core purpose.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= SECTION 3: WHY SOLANA ================= */}
      <section className="py-24 px-6 bg-[#070B12]">
        <motion.div
          variants={sectionContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Speed & Scale",
              desc: "Solana enables near-instant finality, allowing offerings and interactions to feel seamless and human.",
            },
            {
              title: "Low Fees",
              desc: "Micropayments make spiritual participation accessible without economic friction.",
            },
            {
              title: "Future-Ready",
              desc: "Solana’s ecosystem supports NFTs, identity layers, and immersive experiences at scale.",
            },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <LuxuryCard className="h-full text-center">
                <h3 className="mb-3 uppercase tracking-wide font-['Cormorant_Garamond']">
                  {item.title}
                </h3>
                <p className="text-sm text-white/70">{item.desc}</p>
              </LuxuryCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= SECTION 4: TRANSPARENCY & SECURITY ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          variants={sectionContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <motion.div variants={fadeUp}>
            <h3 className="mb-4 uppercase tracking-widest font-['Cormorant_Garamond']">
              Transparency
            </h3>
            <p className="text-white/70">
              Supply caps, mint status, and on-chain data are verifiable by anyone.
              No hidden mechanisms. No silent inflation.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="mb-4 uppercase tracking-widest font-['Cormorant_Garamond']">
              Security
            </h3>
            <p className="text-white/70">
              Built using standard Solana token programs with immutable
              contracts once finalized.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= SECTION 5: ECOSYSTEM MAP ================= */}
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
            Ecosystem Flow
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/80"
          >
            {[
              "Hindu Coin",
              "Dharmaverse",
              "Digital Citizenship",
              "Offerings & Rituals",
            ].map((step, i) => (
              <div
                key={i}
                className="px-6 py-4 border border-white/10 rounded-full"
              >
                {step}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show">
          <CTAButton variant="gold" to="/buy">
            Start with How to Buy
          </CTAButton>
        </motion.div>
      </section>

    </main>
  );
}
