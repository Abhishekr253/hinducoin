import { motion } from "framer-motion";
import LuxuryCard from "../components/common/LuxuryCard";
import CTAButton from "../components/common/CTAButton";
import { Link } from "react-router-dom";
import heroImage from "../assets/hinducoin.jpeg";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function AboutHinduCoin() {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <div className="min-h-screen bg-[#050b17] text-white">
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center">
          <button
            onClick={() => navigate("/hindu-coin")}
            className="inline-flex items-center gap-2 
                 px-3 py-1.5 sm:px-4 sm:py-2
                 text-[11px] sm:text-xs md:text-sm 
                 text-[#D4AF37]
                 border border-[#D4AF37]/40 
                 rounded-md
                 bg-black/20 backdrop-blur-md
                 hover:bg-[#D4AF37]/10 
                 transition-all duration-300"
          >
            <ArrowLeft size={14} className="sm:size-4" />
            <span className="whitespace-nowrap">Back to Hindu Coin</span>
          </button>
        </div>
      </header>
      {/* ================= HERO ================= */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <motion.img
          src={heroImage}
          alt="Hindu Coin"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-[#D4AF37] mb-6">
            About The Hindu Coin
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            A digital asset created to power a living spiritual metaverse
            inspired by Sanatan Dharma.
          </p>
        </motion.div>
      </section>
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* ================= SECTION 1 ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <LuxuryCard className="mb-12 md:mb-16 border-[#D4AF37]/40">
            <h2 className="text-xl sm:text-2xl font-light text-[#D4AF37] mb-5 md:mb-6">
              Why The Hindu Coin Exists
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              <p>
                The Hindu Coin was created with a simple but ambitious vision:
                to build a long-term digital ecosystem rooted in heritage,
                powered by technology, and designed to expand for generations.
              </p>

              <p>
                While many digital tokens focus on speculation, trends, or
                short-term hype, The Hindu Coin was designed as a foundational
                asset — intended to power a growing metaverse called
                Dharmaverse.
              </p>

              <p>
                It is not positioned as a meme. It is not built around hype
                cycles. It is built around continuity, expansion, and cultural
                depth.
              </p>
            </div>
          </LuxuryCard>
        </motion.div>

        {/* ================= SECTION 2 ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <LuxuryCard className="mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl font-light text-[#D4AF37] mb-6">
              What Makes It Different
            </h2>

            <div className="space-y-6 md:space-y-8 text-sm sm:text-base text-gray-300 leading-relaxed">
              <div className="border-l border-[#D4AF37]/30 pl-4">
                <h3 className="font-light text-white mb-2 tracking-wide">
                  1. Purpose
                </h3>
                <p>
                  It powers access, offerings, and participation within
                  Dharmaverse.
                </p>
              </div>

              <div className="border-l border-[#D4AF37]/30 pl-4">
                <h3 className="font-light text-white mb-2 tracking-wide">
                  2. Permanence
                </h3>
                <p>
                  Supply is capped. Minting is closed. The ecosystem is designed
                  to grow through structured development phases.
                </p>
              </div>

              <div className="border-l border-[#D4AF37]/30 pl-4">
                <h3 className="font-light text-white mb-2 tracking-wide">
                  3. Expansion
                </h3>
                <p>
                  Dharmaverse evolves continuously — especially through
                  festivals, sacred calendar cycles, and new realm expansions.
                  This creates a living model — not a static product.
                </p>
              </div>
            </div>
          </LuxuryCard>
        </motion.div>

        {/* ================= SECTION 3 ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <LuxuryCard className="mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl font-light text-[#D4AF37] mb-6">
              Long-Term Vision
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              The objective is to build a sustainable digital ecosystem, a
              growing metaverse infrastructure, and a structured roadmap rooted
              in respect and continuity.
            </p>

            <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              The Hindu Coin is intended to support expansion over years — not
              weeks.
            </p>
          </LuxuryCard>
        </motion.div>
        {/* ================= TRANSPARENCY ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <LuxuryCard className="mb-16 md:mb-20 border border-red-500/20">
            <h2 className="text-xl sm:text-2xl font-light text-[#D4AF37] mb-6">
              Transparency & Responsibility
            </h2>

            <ul className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              {[
                "Verify official contract addresses",
                "Use only official links",
                "Conduct independent research",
                "Participate responsibly",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Digital assets involve risk. Participation should be approached
                with awareness, discipline, and independent judgment.
              </p>
            </div>
          </LuxuryCard>
        </motion.div>
        {/* ================= FOUNDER MESSAGE ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <LuxuryCard className="border-[#D4AF37]/40 mb-24">
            {/* Header */}
            <h2 className="text-3xl md:text-4xl font-light text-[#D4AF37] mb-10 text-center">
              Founder’s Message
            </h2>

            {/* Message Body */}
            <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
              <p>
                When we began shaping The Hindu Coin, it was never meant to be
                just another digital asset. It was conceived as a foundation — a
                base layer for something much larger.
              </p>

              <p>
                Dharmaverse is being built deliberately. Phase 1 alone requires
                approximately twelve months of development — because permanence
                demands discipline.
              </p>

              <p>
                This is not a static metaverse. It is a living world that
                expands through festivals, realms, rituals, and generations.
              </p>

              <p>
                Citizenship is not about speculation. It is about belonging to
                something that grows with time.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 text-right">
              <p className="text-[#D4AF37] font-light tracking-wide text-sm md:text-base">
                — Founder
                <br />
                The Hindu Coin
              </p>
            </div>
          </LuxuryCard>
        </motion.div>
      </div>
    </div>
  );
}
