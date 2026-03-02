  import React from "react";
  import { motion } from "framer-motion";
  import LuxuryCard from "../common/LuxuryCard";
  import CTAButton from "../common/CTAButton";
  import rituals from "../../assets/rituals.jpeg";

  const sections = [
  {
    title: "Meaning of Rituals",
    description: `
Rituals within Dharmaverse are inspired by the living traditions of Sanatan Dharma.

In their essence, rituals are structured expressions of intention — moments of reflection, gratitude, prayer, and alignment. They are not performances, but participatory experiences rooted in symbolism and sacred discipline.

Within Dharmaverse, rituals are presented with dignity and clarity. Each ritual includes contextual understanding — explaining its meaning, timing, and purpose — so participants from any geographic location may engage with awareness and respect.

As the Sacred Calendar evolves, ritual themes expand to reflect major festivals and ceremonial cycles.

Rituals are not transactional.
They are intentional.
`,
  },
  {
    title: "Digital Participation",
    description: `
Dharmaverse enables global participation in sacred experiences through structured digital environments.

Participants may join rituals from anywhere in the world — individually, as a family, or as a community group.

Features include:
• Scheduled ceremonial gatherings  
• Interactive prayer environments  
• Real-time participation during festival activations  
• Private sanctum bookings for personalized ceremonies  

Citizens may reserve dedicated rooms within Dharmaverse where a qualified pujari or ritual guide conducts a specialized prayer sequence on behalf of the participant or group.

This allows families across continents to gather in one sacred digital space — united in time, intention, and ceremony.

Digital participation does not replace tradition.
It extends accessibility.
`,
  },
  {
    title: "Sacred Offerings",
    description: `
Sacred Offerings within Dharmaverse represent acts of participation aligned with ceremonial moments.

Offerings may include:
• Festival-bound digital relics  
• Temple expansion contributions  
• Ceremonial participation tokens  
• Physical sacred articles linked to specific rituals  

Offerings are presented respectfully and aligned with sacred cycles.
Some offerings may be available only during specific festival windows.

Citizens may access exclusive offerings depending on their tier and ceremonial participation level.

Offerings support the continued construction and expansion of Dharmaverse.

They symbolize contribution — not purchase.
`,
  },
  {
    title: "Festival Rituals",
    description: `
Festival Rituals are the living heartbeat of Dharmaverse.

As each major sacred festival arrives — such as Diwali, Navratri, or Maha Shivratri — Dharmaverse evolves visually and ceremonially.

Festival Rituals may include:
• Large-scale ceremonial gatherings  
• Thematic sanctum transformations  
• Special festival prayer sequences  
• Community participation halls  
• Limited-time sacred offerings  
• Group and family bookings  

Families, friends, and entire communities may gather together inside Dharmaverse to celebrate — regardless of physical location.

Certain tiers may unlock priority access, private festival rooms, or extended ceremonial privileges.

Festival Rituals reinforce that Dharmaverse is not static.
It evolves with sacred time.
`,
  },
];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  export default function RitualsPrayers() {
    return (
      <section className="relative w-full bg-[#05070C] text-white overflow-hidden">
        {/* ================= HERO ================= */}
        <section className="relative w-full h-[85vh] md:h-screen flex items-center justify-center text-center overflow-hidden">
          {/* Background Image */}
          <img
            src={rituals}
            alt="Rituals & Prayers"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/65" />

          {/* Sacred Gold Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_-10%,rgba(212,175,55,0.18),transparent_70%)]" />

          {/* Bottom Fade Into Page */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#05070C] via-[#05070C]/80 to-transparent" />

          {/* Content */}
          <motion.div
            className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6"
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
            variants={fadeUp}
          >
            <p className="mb-3 text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/70 font-['Cormorant_Garamond']">
              Rituals & Prayers
            </p>

            <h1 className="text-2xl md:text-5xl font-light tracking-[0.18em] md:tracking-[0.25em] uppercase font-['Cormorant_Garamond'] leading-tight">
              Sacred Acts
              <br />
              <span className="text-[#D4AF37]">Of Intention & Devotion</span>
            </h1>
          </motion.div>
        </section>

        {/* ================= CONTENT SECTIONS ================= */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 md:pb-32">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
          >
            {sections.map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <LuxuryCard className="p-6 md:p-8 text-center md:text-left">
                  <h3 className="mb-3 text-base md:text-xl uppercase tracking-wide font-['Cormorant_Garamond']">
                    {item.title}
                  </h3>

                  <p className="text-xs md:text-sm text-white/70 leading-relaxed whitespace-pre-line font-['Cormorant_Garamond']">
                    {item.description}
                  </p>
                </LuxuryCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ================= CTA ================= */}
        <motion.div
          className="text-center pb-16 md:pb-36 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-xs mx-auto">
            <CTAButton
              variant="gold"
              className="w-full text-sm md:text-base py-2 md:py-3"
            >
              See Offerings
            </CTAButton>
          </div>
        </motion.div>
      </section>
    );
  }
