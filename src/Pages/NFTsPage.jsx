import { useState } from "react";
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
      staggerChildren: 0.12,
    },
  },
};

const nftData = [
  {
    id: 1,
    name: "Temple Foundation Brick",
    category: "bricks",
    story:
      "A sacred digital brick representing foundational support for Dharmaverse’s central temple complex.",
    scarcity: "Limited to 1,008 pieces",
    utility:
      "Grants early access to temple zones and special festival ceremonies.",
  },
  {
    id: 2,
    name: "Sacred Glass Panel",
    category: "glass-panels",
    story:
      "A luminous panel symbolizing divine light within the temple structure.",
    scarcity: "Limited to 500 pieces",
    utility: "Unlocks visual enhancements during festival cycles.",
  },
  {
    id: 3,
    name: "Ancient Relic Token",
    category: "relics",
    story:
      "A collectible relic inspired by sacred heritage and philosophical depth.",
    scarcity: "Very limited",
    utility: "Access to sacred archive chambers and lore vaults.",
  },
  {
    id: 4,
    name: "Festival Offering – Diwali",
    category: "festival-offerings",
    story:
      "A ceremonial digital offering released during sacred festival cycles.",
    scarcity: "Seasonal limited mint",
    utility: "Unlocks festival-only environments.",
  },
  {
    id: 5,
    name: "Citizen Badge – Phase 1",
    category: "citizenship-badges",
    story: "Identity badge for early citizens of Dharmaverse.",
    scarcity: "Based on tier",
    utility: "Determines access privileges and participation rights.",
  },
];

const categories = [
  { label: "All", value: "all" },
  { label: "Bricks", value: "bricks" },
  { label: "Glass Panels", value: "glass-panels" },
  { label: "Relics", value: "relics" },
  { label: "Festival Offerings", value: "festival-offerings" },
  { label: "Citizenship Badges", value: "citizenship-badges" },
];

export default function NFTsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredNFTs =
    activeFilter === "all"
      ? nftData
      : nftData.filter((item) => item.category === activeFilter);

  return (
    <main className="w-full text-white bg-[#05070C]">
      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-center px-4 sm:px-6
  bg-[radial-gradient(1200px_600px_at_50%_-10%,#141B2D_0%,#070B12_55%,#05070C_100%)]"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/50 font-['Cormorant_Garamond']">
            Dharmaverse
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-light tracking-[0.15em] md:tracking-[0.2em] uppercase font-['Cormorant_Garamond']">
            Sacred Collectibles & Offerings
          </h1>

          <p className="mt-6 text-sm sm:text-base text-white/60 max-w-xl mx-auto leading-relaxed">
            Digital artifacts carrying meaning, scarcity, and spiritual utility
            — structured to evolve with festival cycles.
          </p>
        </motion.div>
      </section>

      {/* ================= FILTERS ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <motion.div
          variants={sectionContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.value}
              variants={fadeUp}
              onClick={() => setActiveFilter(cat.value)}
              className={`px-5 py-2 text-[11px] tracking-[0.25em] uppercase border rounded-full transition-all duration-300
${
  activeFilter === cat.value
    ? "border-yellow-500 text-yellow-500 bg-yellow-500/5"
    : "border-white/15 text-white/50 hover:border-yellow-500 hover:text-yellow-500 hover:bg-yellow-500/5"
}`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <motion.div
          key={activeFilter}
          variants={sectionContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10"
        >
          {filteredNFTs.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              onClick={() => setSelectedItem(item)}
              className="cursor-pointer"
            >
              <LuxuryCard className="h-full text-center hover:border-yellow-500/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.12)] transition-all duration-300">
                <div className="h-32 bg-white/5 mb-5 rounded-md" />

                <h3 className="uppercase tracking-wide text-sm mb-2">
                  {item.name}
                </h3>
                <p className="text-white/50 text-xs">{item.scarcity}</p>
              </LuxuryCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= MODAL ================= */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-[#0E111A] max-w-xl w-full p-6 sm:p-10 border border-white/10 rounded-xl"
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 text-white/40 hover:text-white"
            >
              ✕
            </button>

            <h2 className="uppercase tracking-widest text-yellow-500 mb-8">
              {selectedItem.name}
            </h2>

            <div className="space-y-6 text-sm text-white/70">
              <div>
                <h4 className="text-white mb-2 uppercase tracking-wide text-xs">
                  Story
                </h4>
                <p>{selectedItem.story}</p>
              </div>

              <div>
                <h4 className="text-white mb-2 uppercase tracking-wide text-xs">
                  Scarcity
                </h4>
                <p>{selectedItem.scarcity}</p>
              </div>

              <div>
                <h4 className="text-white mb-2 uppercase tracking-wide text-xs">
                  Utility
                </h4>
                <p>{selectedItem.utility}</p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <CTAButton variant="gold">View Marketplace Links</CTAButton>
            </div>
          </motion.div>
        </div>
      )}

      {/* ================= CTA ================= */}
      {/* <section className="py-24 text-center bg-[#070B12]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show">
          <CTAButton variant="gold" to="/marketplace">
            Explore Marketplace
          </CTAButton>
        </motion.div>
      </section> */}
    </main>
  );
}
