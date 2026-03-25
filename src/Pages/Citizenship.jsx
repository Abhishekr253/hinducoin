import React from "react";
import hero from "../assets/citizen.jpeg";
import LuxuryCard from "../components/common/LuxuryCard";
import CTAButton from "../components/common/CTAButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Citizenship() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const badgeItems = [
    "Citizen = Festival Access",
    "Citizen = Sacred Drops",
    "Citizen = Entry Privileges",
    "Citizen = Early World Access",
  ];

  const badgeFade = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const pillars = [
    {
      title: "A Name in the Civilization",
      text: "Citizenship gives you an identity in Dharmaverse — a permanent place as the world expands. You are not just watching the universe being built… you are inside it.",
      bullets: [
        "Citizen ID / Badge",
        "Profile access (future dashboard)",
        "Participation recognition",
      ],
    },
    {
      title: "Enter Sacred Zones",
      text: "Certain zones, facilities and festival experiences are reserved for Citizens. This is not limitation — it is sanctity and privilege.",
      bullets: [
        "Entry to restricted zones",
        "Special festival access",
        "Priority participation in rituals",
      ],
    },
    {
      title: "Sacred Drops & Offerings",
      text: "Citizens receive access to special offerings — digital collectibles that hold meaning, not just rarity.",
      bullets: [
        "Festival-based offerings",
        "Limited drops",
        "Early access to rare collections",
      ],
    },
  ];

  const audienceTiles = [
    {
      title: "Believers & Seekers",
      desc: "People who feel Sanatan Dharma is timeless and worth preserving globally.",
    },
    {
      title: "Builders & Early Supporters",
      desc: "Those who want to be early in a world that becomes historic in the future.",
    },
    {
      title: "Collectors",
      desc: "Those who value meaning-driven collectibles: temple bricks, relics, festival offerings.",
    },
    {
      title: "Global Culture Participants",
      desc: "Not only Hindus — anyone who respects the heritage and wants to participate.",
    },
  ];
  return (
    <section className="bg-[#050b17] text-white">
      {/* ================= SECTION 1 — HERO ================= */}
      <div
        className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center text-center bg-cover bg-center px-4"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050b17]/90 via-[#050b17]/75 to-[#050b17]" />

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-6xl font-light tracking-wide md:tracking-wider text-white leading-tight">
            Become a Citizen of Dharmaverse.
          </h1>
        </motion.div>
      </div>

      {/* ================= SECTION 2A — TITLE BLOCK ================= */}
      <motion.div
        className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-32 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-light tracking-wide mb-5 md:mb-8 leading-tight">
          Citizenship is your place in the Dharmaverse.
        </h2>

        {/* Subheadline */}
        <div className="max-w-2xl mx-auto text-sm sm:text-base md:text-xl leading-relaxed text-gray-300 space-y-1 md:space-y-2">
          <p>Citizenship is not a donation.</p>
          <p>Not a subscription.</p>
          <p>Not just an NFT.</p>

          <p className="pt-4 md:pt-6">
            It is a{" "}
            <span className="text-yellow-400 font-medium">
              spiritual identity
            </span>{" "}
            + an <span className="text-yellow-400 font-medium">access key</span>{" "}
            into a sacred digital civilization — built on Sanatan heritage and
            designed to expand forever.
          </p>
        </div>
      </motion.div>

      {/* ================= SECTION 2B — DEFINITION CARD ================= */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <LuxuryCard className="text-center p-6 sm:p-8 md:p-12">
            <p className="text-sm sm:text-base md:text-xl text-gray-200 leading-relaxed">
              A Citizen is recognized as an{" "}
              <span className="text-yellow-400 font-medium">
                official participant of Dharmaverse
              </span>{" "}
              — with access privileges, festival experiences, and sacred
              offerings that are not publicly open.
            </p>
          </LuxuryCard>
        </motion.div>
      </div>

      {/* ================= SECTION 2C — 3 PILLARS ================= */}
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-28 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {pillars.map((card, i) => (
          <motion.div key={i} variants={fadeUp}>
            <LuxuryCard className="p-6 sm:p-7 md:p-8 text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-light mb-3 md:mb-4">
                {card.title}
              </h3>

              <p className="text-sm md:text-base text-gray-200 mb-4 md:mb-6 leading-relaxed">
                {card.text}
              </p>

              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-300">
                {card.bullets.map((b, j) => (
                  <li key={j}>• {b}</li>
                ))}
              </ul>
            </LuxuryCard>
          </motion.div>
        ))}
      </motion.div>

      {/* ================= SECTION 2D — AUDIENCE ================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-24">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-center mb-8 md:mb-14 leading-tight">
          Citizenship is designed for:
        </h3>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {audienceTiles.map((tile, i) => (
            <motion.div key={i} variants={fadeUp}>
              <LuxuryCard className="p-5 sm:p-6 text-center">
                <h4 className="font-light mb-2 text-sm sm:text-base">
                  {tile.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {tile.desc}
                </p>
              </LuxuryCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ================= SECTION 2E — WHY ================= */}
      <motion.div
        className="max-w-3xl mx-auto px-4 sm:px-6 py-14 md:py-24"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-center mb-6 md:mb-10 leading-tight">
          Why Citizenship Exists
        </h3>

        <p className="text-sm sm:text-base text-gray-300 text-center leading-relaxed mb-4 md:mb-6">
          Dharmaverse is not a one-time project. It is a world being built in
          phases — continuously evolving with rituals and festivals.
        </p>

        <LuxuryCard className="p-6 sm:p-7 md:p-8">
          <ul className="text-sm md:text-base text-gray-200 text-left space-y-2 md:space-y-3 list-disc list-inside">
            <li>Establish belonging in the ecosystem</li>
            <li>Power continuous development</li>
            <li>Unlock experiences tied to heritage, not hype</li>
          </ul>

          <p className="text-xs sm:text-sm text-gray-400 mt-4 md:mt-6 text-center">
            This is the heart of the{" "}
            <span className="font-medium">“civilization model”</span>.
          </p>
        </LuxuryCard>
      </motion.div>

      {/* ================= SECTION 2F — PHASE 1 ================= */}
      <motion.div
        className="max-w-3xl mx-auto px-4 sm:px-6 py-14 md:py-24"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-6 md:mb-10 text-center leading-tight">
          What to expect in Phase 1
        </h3>

        <LuxuryCard className="p-6 sm:p-7 md:p-8">
          <ul className="text-sm md:text-base text-gray-200 space-y-2 md:space-y-3 list-disc list-inside">
            <li>Phase 1 under construction (Coming soon)</li>

            <li>
              Citizens will unlock:
              <ul className="list-disc list-inside ml-4 md:ml-6 mt-2 space-y-1 text-xs sm:text-sm text-gray-300">
                <li>Temple complex entry</li>
                <li>Early festival ceremonies</li>
                <li>Ritual halls</li>
                <li>Offerings access</li>
                <li>Limited collectibles</li>
              </ul>
            </li>
          </ul>

          <p className="mt-4 md:mt-6 text-xs sm:text-sm text-gray-400 text-center leading-relaxed">
            ✅ Dharmaverse evolves forever — every festival, every season, every
            expansion adds new experiences for Citizens.
          </p>
        </LuxuryCard>
      </motion.div>

      {/* ================= SECTION 2G — RESPECT ================= */}
      <motion.div
        className="max-w-3xl mx-auto px-4 sm:px-6 text-center py-14 md:py-24"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-4 md:mb-6 leading-tight">
          Citizenship comes with respect.
        </h3>

        <p className="text-sm sm:text-base text-gray-300 leading-relaxed space-y-4">
          Dharmaverse is inspired by sacred heritage, rituals, and traditions
          that have endured for thousands of years. Citizenship is not ownership
          — it is an invitation to participate with reverence and devotion.
        </p>

        <p className="text-sm sm:text-base text-gray-300 leading-relaxed mt-4">
          Citizens are expected to engage with dignity, respect, and
          mindfulness, ensuring that the sanctity of this civilization is
          preserved as it grows and evolves into the digital future. By honoring
          these principles, participation remains meaningful and spiritually
          authentic — not just a collectible or transaction.
        </p>
      </motion.div>

      {/* ================= SECTION 2H — CTA ================= */}
      <motion.div
        className="bg-gradient-to-r from-yellow-500/10 to-transparent py-14 md:py-20 px-4 sm:px-6 text-center"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-light mb-5 md:mb-8 leading-tight">
          Become a Citizen
        </h3>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <Link to="/citizenship/buy" className="w-full sm:w-auto max-w-xs">
            <CTAButton
              variant="gold"
              className="w-full text-sm sm:text-base py-2 sm:py-3"
            >
              AQUIRE CITIZENSHIP
            </CTAButton>
          </Link>
        </div>

        <p className="mt-4 md:mt-6 text-xs sm:text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
          Citizenship supply may be limited by phases. Early Citizens receive
          priority access to the earliest facilities and festival experiences.
        </p>
      </motion.div>

      {/* Badge Row */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 sm:gap-4 py-8 md:py-12 px-4 text-xs sm:text-sm text-gray-300"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          "Festival Access",
          "Sacred Drops",
          "Entry Privileges",
          "Early World Access",
        ].map((badge, i) => (
          <motion.span
            key={i}
            variants={fadeUp}
            className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
          >
            ✅ {badge}
          </motion.span>
        ))}
      </motion.div>

      <div className="relative py-12 md:py-16">
        {/* Subtle divider glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4 sm:px-6"
        >
          {badgeItems.map((label, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={badgeFade}
              className="
          flex items-center gap-2
          px-4 sm:px-5
          py-2
          rounded-full
          bg-blue-900/20 backdrop-blur-md
          border border-yellow-500/25
          text-xs sm:text-sm font-medium tracking-wide
          text-gray-200
          shadow-[0_0_14px_rgba(212,175,55,0.15)]
          hover:shadow-[0_0_24px_rgba(212,175,55,0.3)]
          transition-all duration-300
        "
            >
              <span className="text-yellow-400 text-sm">✓</span>
              {label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ================= SECTION 3C — TIER COMPARISON ================= */}
      {/* <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-28"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl md:text-4xl font-light text-center mb-8 md:mb-16 leading-tight">
            Citizenship Tiers & Privileges
          </h3>

          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="min-w-[720px] w-full border-collapse text-xs sm:text-sm md:text-base">
              <thead>
                <tr className="bg-gradient-to-r from-yellow-500/10 to-transparent text-yellow-400">
                  <th className="p-3 md:p-4 text-left border-b border-yellow-500/20"></th>
                  <th className="p-3 md:p-4 border-b border-yellow-500/20">
                    Citizen
                  </th>
                  <th className="p-3 md:p-4 border-b border-yellow-500/20">
                    Devotee
                  </th>
                  <th className="p-3 md:p-4 border-b border-yellow-500/20">
                    Guardian
                  </th>
                  <th className="p-3 md:p-4 border-b border-yellow-500/20">
                    Patron
                  </th>
                </tr>
              </thead>

              <tbody className="text-gray-300">
                {[
                  [
                    "Badge / Identity",
                    "✓",
                    "Enhanced Badge",
                    "Elite Insignia",
                    "Founders Crest",
                  ],
                  [
                    "Temple Access Level",
                    "Standard",
                    "Priority Entry",
                    "Inner Sanctum",
                    "Private Access",
                  ],
                  [
                    "Festival Access Level",
                    "General",
                    "Priority",
                    "VIP",
                    "Private Ceremonial",
                  ],
                  [
                    "Ritual Privileges",
                    "Participation",
                    "Priority Slots",
                    "Reserved Rituals",
                    "Custom Ritual Access",
                  ],
                  [
                    "Offering / Drops Privileges",
                    "Public + Citizen Drops",
                    "Early Access",
                    "Exclusive Drops",
                    "Private Allocations",
                  ],
                  [
                    "Realm Early Access",
                    "Phase Access",
                    "Early Phase",
                    "Pre-Launch Entry",
                    "Founders Access",
                  ],
                  [
                    "Private Zones",
                    "—",
                    "Limited",
                    "Guardian Chambers",
                    "Private Realms",
                  ],
                  [
                    "Priority Allocations",
                    "Standard",
                    "Priority",
                    "High Allocation",
                    "Guaranteed Allocation",
                  ],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/5 hover:bg-blue-900/20 transition-all duration-300"
                  >
                    <td className="p-3 md:p-4 font-medium text-white whitespace-nowrap">
                      {row[0]}
                    </td>
                    <td className="p-3 md:p-4 text-center">{row[1]}</td>
                    <td className="p-3 md:p-4 text-center">{row[2]}</td>
                    <td className="p-3 md:p-4 text-center">{row[3]}</td>
                    <td className="p-3 md:p-4 text-center text-yellow-400 font-medium">
                      {row[4]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[10px] sm:text-xs text-gray-500 mt-4 md:mt-6 text-center">
            Privilege levels may expand as Dharmaverse evolves across phases.
          </p>
        </motion.div> */}

      {/* ================= FOOTNOTE ================= */}
      <motion.div
        className="relative py-12 md:py-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Subtle Divider */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

        <p className="max-w-4xl mx-auto px-6 text-sm sm:text-base md:text-lg font-medium text-gray-300 leading-relaxed">
          Dharmaverse Citizenship progresses through{" "}
          <span className="text-yellow-400">service</span>,{" "}
          <span className="text-yellow-400">practice</span>,{" "}
          <span className="text-yellow-400">discipline</span>, and{" "}
          <span className="text-yellow-400">realization</span> — reflecting the
          timeless journey of <span className="italic">Sanātana Dharma</span>{" "}
          within a modern sacred digital civilization.
        </p>
        <CTAButton className="mx-auto mt-2" variant="blueGlass">
          View FAQs
        </CTAButton>
      </motion.div>
    </section>
  );
}
