import React from "react";
import hero from "../assets/citizenship.jpg";
import LuxuryCard from "../components/common/LuxuryCard";
import CTAButton from "../components/common/CTAButton";
import { motion } from "framer-motion";

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
        className="relative min-h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050b17]/90 via-[#050b17]/70 to-[#050b17]" />

        {/* Content */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-semibold tracking-wide text-white">
            Become a Citizen of Dharmaverse.
          </h1>
        </motion.div>
      </div>

      {/* ================= SECTION 2A — TITLE BLOCK ================= */}
      <motion.div
        className="relative max-w-6xl mx-auto px-6 py-32 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-wide mb-8">
          Citizenship is your place in the Dharmaverse.
        </h2>

        {/* Subheadline */}
        <div className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-300 space-y-2">
          <p>Citizenship is not a donation.</p>
          <p>Not a subscription.</p>
          <p>Not just an NFT.</p>

          <p className="pt-6">
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
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <LuxuryCard className="text-center p-12">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
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
        className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-3 gap-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {pillars.map((card, i) => (
          <motion.div key={i} variants={fadeUp}>
            <LuxuryCard key={i} className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-200 mb-6">{card.text}</p>
              <ul className="space-y-2 text-sm text-gray-300">
                {card.bullets.map((b, j) => (
                  <li key={j}>• {b}</li>
                ))}
              </ul>
            </LuxuryCard>
          </motion.div>
        ))}
      </motion.div>

      {/* ================= SECTION 2D — AUDIENCE ================= */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <h3 className="text-3xl font-semibold text-center mb-14">
          Citizenship is designed for:
        </h3>

        <motion.div
          className="grid md:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {audienceTiles.map((tile, i) => (
            <motion.div key={i} variants={fadeUp}>
              <LuxuryCard key={i} className="p-6 text-center">
                <h4 className="font-semibold mb-2">{tile.title}</h4>
                <p className="text-sm text-gray-300">{tile.desc}</p>
              </LuxuryCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ================= SECTION 2E — WHY ================= */}
      <motion.div
        className="max-w-4xl mx-auto px-6 py-24"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-semibold text-center mb-10">
          Why Citizenship Exists
        </h3>

        <p className="text-gray-300 text-center leading-relaxed mb-6">
          Dharmaverse is not a one-time project. It is a world being built in
          phases — continuously evolving with rituals and festivals.
        </p>

        <LuxuryCard className="p-8">
          <ul className="text-gray-200 text-left space-y-3 list-disc list-inside">
            <li>Establish belonging in the ecosystem</li>
            <li>Power continuous development</li>
            <li>Unlock experiences tied to heritage, not hype</li>
          </ul>
          <p className="text-gray-400 mt-6 text-center">
            This is the heart of the{" "}
            <span className="font-medium">“civilization model”</span>.
          </p>
        </LuxuryCard>
      </motion.div>

      {/* ================= SECTION 2F — PHASE 1 ================= */}
      <motion.div
        className="max-w-4xl mx-auto px-6 py-24"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-semibold mb-10 text-center">
          What to expect in Phase 1
        </h3>

        <LuxuryCard className="p-8">
          <ul className="text-gray-200 space-y-3 list-disc list-inside">
            <li>Phase 1 under construction (~12 months)</li>
            <li>
              Citizens will unlock:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-300">
                <li>Temple complex entry</li>
                <li>Early festival ceremonies</li>
                <li>Ritual halls</li>
                <li>Offerings access</li>
                <li>Limited collectibles</li>
              </ul>
            </li>
          </ul>

          <p className="mt-6 text-sm text-gray-400 text-center">
            ✅ Dharmaverse evolves forever — every festival, every season, every
            expansion adds new experiences for Citizens.
          </p>
        </LuxuryCard>
      </motion.div>

      {/* ================= SECTION 2G — RESPECT ================= */}
      <motion.div
        className="max-w-4xl mx-auto px-6 text-center py-24"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-semibold mb-6">
          Citizenship comes with respect.
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Dharmaverse is inspired by sacred heritage, rituals, and traditions
          that have endured for thousands of years. Citizenship is not ownership
          — it is an invitation to participate with reverence and devotion.
          <br />
          <br />
          Citizens are expected to engage with dignity, respect, and
          mindfulness, ensuring that the sanctity of this civilization is
          preserved as it grows and evolves into the digital future. By honoring
          these principles, participation remains meaningful and spiritually
          authentic, not just a collectible or transaction.
        </p>
      </motion.div>

      {/* ================= SECTION 2H — CTA ================= */}
      <motion.div
        className="bg-gradient-to-r from-yellow-500/10 to-transparent py-20 text-center"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl font-semibold mb-8">Become a Citizen</h3>

        <div className="flex justify-center gap-6">
          <CTAButton variant="blueGlass">View Citizenship Tiers</CTAButton>

          <CTAButton variant="gold">Buy Citizenship</CTAButton>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          Citizenship supply may be limited by phases. Early Citizens receive
          priority access to the earliest facilities and festival experiences.
        </p>
      </motion.div>

      {/* Badge Row */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 py-12 text-sm text-gray-300"
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
          <motion.span key={i} variants={fadeUp}>
            ✅ {badge}
          </motion.span>
        ))}
      </motion.div>

      <div className="relative py-16">
  {/* Subtle divider glow */}
  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="flex flex-wrap justify-center gap-4 px-6"
  >
    {badgeItems.map((label, i) => (
      <motion.div
        key={i}
        custom={i}
        variants={badgeFade}
        className="
          flex items-center gap-2
          px-5 py-2.5
          rounded-full
          bg-blue-900/20 backdrop-blur-md
          border border-yellow-500/30
          text-sm font-medium tracking-wide
          text-gray-200
          shadow-[0_0_18px_rgba(212,175,55,0.18)]
          hover:shadow-[0_0_28px_rgba(212,175,55,0.35)]
          transition-all duration-300
        "
      >
        <span className="text-yellow-400">✓</span>
        {label}
      </motion.div>
    ))}
  </motion.div>
</div>
    </section>
  );
}
