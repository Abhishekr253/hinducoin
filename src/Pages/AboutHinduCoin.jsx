import { motion } from "framer-motion";
import LuxuryCard from "../components/common/LuxuryCard";
import CTAButton from "../components/common/CTAButton";
import { Link } from "react-router-dom";

export default function AboutHinduCoin() {
  return (
    <div className="min-h-screen bg-[#050b17] text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-[#D4AF37] mb-5 md:mb-6 leading-tight">
            About The Hindu Coin
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
            A digital asset created to power a living spiritual metaverse
            inspired by Sanatan Dharma.
          </p>
        </motion.div>

        {/* ================= SECTION 1 ================= */}
        <LuxuryCard className="mb-12 md:mb-16 border-[#D4AF37]/40">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-5 md:mb-6">
            Why The Hindu Coin Exists
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            <p>
              The Hindu Coin was created with a simple but ambitious vision: to
              build a long-term digital ecosystem rooted in heritage, powered by
              technology, and designed to expand for generations.
            </p>

            <p>
              While many digital tokens focus on speculation, trends, or
              short-term hype, The Hindu Coin was designed as a foundational
              asset — intended to power a growing metaverse called Dharmaverse.
            </p>

            <p>
              It is not positioned as a meme. It is not built around hype
              cycles. It is built around continuity, expansion, and cultural
              depth.
            </p>
          </div>
        </LuxuryCard>

        {/* ================= SECTION 2 ================= */}
        <LuxuryCard className="mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-6">
            What Makes It Different
          </h2>

          <div className="space-y-6 md:space-y-8 text-sm sm:text-base text-gray-300 leading-relaxed">
            <div className="border-l border-[#D4AF37]/30 pl-4">
              <h3 className="font-semibold text-white mb-2 tracking-wide">
                1. Purpose
              </h3>
              <p>
                It powers access, offerings, and participation within
                Dharmaverse.
              </p>
            </div>

            <div className="border-l border-[#D4AF37]/30 pl-4">
              <h3 className="font-semibold text-white mb-2 tracking-wide">
                2. Permanence
              </h3>
              <p>
                Supply is capped. Minting is closed. The ecosystem is designed
                to grow through structured development phases.
              </p>
            </div>

            <div className="border-l border-[#D4AF37]/30 pl-4">
              <h3 className="font-semibold text-white mb-2 tracking-wide">
                3. Expansion
              </h3>
              <p>
                Dharmaverse evolves continuously — especially through festivals,
                sacred calendar cycles, and new realm expansions. This creates a
                living model — not a static product.
              </p>
            </div>
          </div>
        </LuxuryCard>

        {/* ================= SECTION 3 ================= */}
        <LuxuryCard className="mb-12 md:mb-16 border-[#D4AF37]/30">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-5 md:mb-6">
            About Dharmaverse
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            <p>
              Dharmaverse is a digital spiritual civilization inspired by
              Sanatan Dharma.
            </p>

            <p>
              Phase 1 is currently under development and is expected to take
              approximately 12 months to complete.
            </p>
          </div>

          {/* Phase Box */}
          <div className="mt-8 bg-[#0f1b2e]/70 backdrop-blur-sm p-5 sm:p-6 rounded-xl border border-[#D4AF37]/30">
            <p className="font-semibold text-[#D4AF37] mb-4 tracking-wide">
              Phase 1 Includes
            </p>

            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li>• A central temple complex</li>
              <li>• Citizenship systems</li>
              <li>• Ritual and prayer environments</li>
              <li>• NFT-based sacred collectibles</li>
              <li>• Early interactive experiences</li>
            </ul>
          </div>

          <p className="mt-8 text-sm sm:text-base text-gray-300 leading-relaxed">
            Dharmaverse does not “finish.” It expands through festivals, sacred
            cycles, new facilities, and evolving realms. It is designed as a
            living world.
          </p>
        </LuxuryCard>

        {/* ================= SECTION 4 ================= */}
        <LuxuryCard className="mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-5 md:mb-6">
            Sanatan Dharma Inspiration
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
            Sanatan Dharma is one of the world’s oldest living philosophical
            traditions.
          </p>

          {/* Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
            {["Dharma", "Karma", "Bhakti", "Moksha"].map((item, i) => (
              <div
                key={i}
                className="
          py-4 px-3
          rounded-xl
          bg-[#0f1b2e]/70 backdrop-blur-sm
          border border-[#D4AF37]/20
          text-sm sm:text-base font-medium
          text-gray-200
          shadow-[0_0_20px_rgba(212,175,55,0.12)]
          hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]
          transition-all duration-300
        "
              >
                {item}
              </div>
            ))}
          </div>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mt-8">
            Dharmaverse draws inspiration from this timeless heritage —
            presenting it in a respectful, educational, and experiential format
            for a global audience.
          </p>
        </LuxuryCard>

        {/* ================= SECTION 5 ================= */}
        <LuxuryCard className="mb-12 md:mb-16 border-[#D4AF37]/30">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-6">
            Citizenship Model
          </h2>

          <ul className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            {[
              "Identity within Dharmaverse",
              "Access to sacred zones and facilities",
              "Participation in festival evolutions",
              "Unlock offerings and ceremonial experiences",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </LuxuryCard>

        {/* ================= SECTION 6 ================= */}
        <LuxuryCard className="mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-6">
            Long-Term Vision
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            The objective is to build a sustainable digital ecosystem, a growing
            metaverse infrastructure, and a structured roadmap rooted in respect
            and continuity.
          </p>

          <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            The Hindu Coin is intended to support expansion over years — not
            weeks.
          </p>
        </LuxuryCard>

        {/* ================= TRANSPARENCY ================= */}
        <LuxuryCard className="mb-16 md:mb-20 border border-red-500/20">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-6">
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

        {/* ================= FOUNDER MESSAGE ================= */}
        <LuxuryCard className="border-[#D4AF37]/40 mb-24">
          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#D4AF37] mb-10 text-center">
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
              This is not a static metaverse. It is a living world that expands
              through festivals, realms, rituals, and generations.
            </p>

            <p>
              Citizenship is not about speculation. It is about belonging to
              something that grows with time.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-8 text-right">
            <p className="text-[#D4AF37] font-semibold tracking-wide text-sm md:text-base">
              — Founder
              <br />
              The Hindu Coin
            </p>
          </div>
        </LuxuryCard>

        {/* ================= CTA ================= */}
        <div className="text-center mt-12">
          <Link to="/citizenship">
            <CTAButton
              variant="gold"
              className="text-lg px-8 py-4 shadow-[0_0_24px_rgba(212,175,55,0.5)] hover:shadow-[0_0_36px_rgba(212,175,55,0.7)] transition-all duration-300"
            >
              Explore Citizenship
            </CTAButton>
          </Link>
          <p className="mt-3 text-gray-400 text-sm">
            Join the Dharmaverse and unlock sacred experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
