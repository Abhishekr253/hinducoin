import React from "react";
import { motion } from "framer-motion";
import CTAButton from "../components/common/CTAButton";
import LuxuryCard from "../components/common/LuxuryCard";
import sanatan from "../assets/sanatan.jpeg";
import { Link } from "react-router-dom";

const tiles = [
  {
    title: "Foundations",
    path: "/sanatan/foundations",
  },
  {
    title: "History & Heritage",
    path: "/sanatan/history",
  },
  {
    title: "Festivals & Calendar",
    path: "/sanatan/festivals",
  },
  {
    title: "Deities & Symbols",
    path: "/sanatan/deities",
  },
  {
    title: "Epics & Sacred Stories",
    path: "/sanatan/epics",
  },
  {
    title: "Glossary",
    path: "/sanatan/glossary",
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

export default function SanatanHero() {
  return (
    <section className="relative w-full text-white bg-[#05070C]">
      {/* ================= HEADING SECTION ================= */}
      <div className="relative min-h-[100vh] overflow-hidden">
        {/* Background Image */}
        <img
          src={sanatan}
          alt="Sanatan Dharma"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-[#05070C]" />

        {/* Golden glow */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_450px_at_50%_-10%,rgba(212,175,55,0.25),transparent_70%)]" />

        {/* Heading Content */}
        <div className="relative z-10 flex min-h-[100vh] items-center justify-center">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3 }}
              variants={fadeUp}
            >
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/70 font-['Cormorant_Garamond']">
                Sanatan Dharma
              </p>

              <h1 className="mb-6 text-3xl md:text-5xl font-light tracking-[0.25em] uppercase font-['Cormorant_Garamond']">
                IT IS NOT A RELIGION.
                <br />
                <span className="text-[#D4AF37]">IT IS A WAY OF LIFE.</span>
              </h1>

              <p className="max-w-xl mx-auto text-sm md:text-base text-white/80 leading-relaxed font-['Cormorant_Garamond']">
                Timeless knowledge. Living heritage.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= TILES SECTION ================= */}
      {/* ================= TILES SECTION ================= */}
      <div className="relative max-w-7xl mx-auto px-6 py-32">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
        >
          {tiles.map((item) => (
            <motion.div key={item.title} variants={fadeUp}>
              <Link to={item.path} className="group block h-full">
                <div
                  className="
              relative h-full rounded-2xl border border-white/10
              bg-white/[0.03] backdrop-blur-md
              px-8 py-10 text-center
              transition-all duration-500
              hover:-translate-y-2
              hover:border-[#D4AF37]/40
              hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.25)]
            "
                >
                  {/* Gold top accent */}
                  <div className="mx-auto mb-8 h-[2px] w-14 bg-[#D4AF37]/80 transition-all duration-500 group-hover:w-24" />

                  <h3 className="mb-4 text-lg uppercase tracking-[0.2em] font-['Cormorant_Garamond'] text-white">
                    {item.title}
                  </h3>

                  <p className="mb-10 text-sm text-white/60 font-['Cormorant_Garamond'] leading-relaxed">
                    Explore curated knowledge preserved with accuracy,
                    reverence, and timeless depth.
                  </p>

                  {/* Explore CTA */}
                  <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#D4AF37] opacity-70 transition-opacity group-hover:opacity-100">
                    Explore →
                  </span>

                  {/* Subtle glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(400px_200px_at_50%_0%,rgba(212,175,55,0.12),transparent_70%)]" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <CTAButton variant="gold">Start Learning</CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
