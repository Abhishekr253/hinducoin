import React from "react";
import { motion } from "framer-motion";
import CTAButton from "../common/CTAButton";
import LuxuryCard from "../common/LuxuryCard";
// import glossaryBg from "../../assets/glossary-bg.jpeg";

/* ------------------ COMPLETE GLOSSARY DATA ------------------ */

// Core Philosophy (1-10)
const corePhilosophy = [
  {
    term: "Sanātana Dharma",
    definition:
      "Eternal law or timeless way. A continuous spiritual tradition that seeks to understand reality, consciousness, duty, and liberation through lived experience and spiritual realization.",
  },
  {
    term: "Dharma",
    definition:
      "Principles that sustain cosmic order and guide righteous living. Maintains harmony between individual, society, nature, and cosmos.",
  },
  {
    term: "Karma",
    definition:
      "Universal law of cause and effect. Every action generates consequences, emphasizing responsibility and conscious action.",
  },
  {
    term: "Samsara",
    definition:
      "Cycle of birth, death, and rebirth through which the soul evolves for spiritual learning until liberation.",
  },
  {
    term: "Moksha",
    definition:
      "Ultimate spiritual liberation from Samsara; realization of unity between Atman and Brahman.",
  },
  {
    term: "Atman",
    definition:
      "True Self or inner soul beyond body and mind. Eternal, unchanging, and divine in nature.",
  },
  {
    term: "Brahman",
    definition:
      "Ultimate reality underlying the universe. Infinite, timeless, pure consciousness, truth, and bliss.",
  },
  {
    term: "Maya",
    definition:
      "Cosmic illusion causing perception of material world as ultimate reality, veiling the unity of existence.",
  },
  {
    term: "Lila",
    definition:
      "Divine play; universe and its processes as expressions of the divine's creative energy.",
  },
  {
    term: "Rta",
    definition:
      "Cosmic order governing the universe; natural harmony ensuring balance in nature, society, and spiritual life.",
  },
];

// Purushartha Framework (11-15)
const purusharthaFramework = [
  {
    term: "Purushartha",
    definition:
      "Four fundamental aims of human life: Dharma (duty), Artha (prosperity), Kama (pleasure), and Moksha (liberation).",
  },
  {
    term: "Artha",
    definition:
      "Pursuit of material prosperity and resources for sustaining life, guided by Dharma.",
  },
  {
    term: "Kama",
    definition:
      "Enjoyment of life including emotional fulfillment, love, and aesthetic pleasure in harmony with Dharma.",
  },
  {
    term: "Dharma (as Purushartha)",
    definition:
      "Guiding principle ensuring pursuit of Artha and Kama remains ethical and balanced.",
  },
  {
    term: "Moksha (as Purushartha)",
    definition:
      "Highest purpose: liberation from ignorance and union with the divine.",
  },
];

// Yoga & Spiritual Practices (16-25)
const yogaPractices = [
  {
    term: "Yoga",
    definition:
      "Spiritual discipline uniting individual consciousness with universal consciousness through meditation, ethics, and self-awareness.",
  },
  {
    term: "Karma Yoga",
    definition:
      "Path of selfless action; performing duties without attachment to personal reward.",
  },
  {
    term: "Bhakti Yoga",
    definition:
      "Path of devotion through love, surrender, prayer, chanting, and worship.",
  },
  {
    term: "Jnana Yoga",
    definition:
      "Path of knowledge and wisdom through deep inquiry and philosophical reflection.",
  },
  {
    term: "Raja Yoga",
    definition:
      "Path of meditation and mastery of the mind through discipline and concentration.",
  },
  {
    term: "Sadhana",
    definition:
      "Disciplined spiritual practices including meditation, prayer, study, ethical living, and service.",
  },
  {
    term: "Tapas",
    definition:
      "Spiritual discipline and self-control to purify the mind and strengthen inner awareness.",
  },
  {
    term: "Samadhi",
    definition:
      "Highest state of meditative absorption where distinction between meditator and object dissolves.",
  },
  {
    term: "Dhyana",
    definition:
      "Practice of meditation leading to sustained awareness and mental clarity.",
  },
  {
    term: "Vairagya",
    definition:
      "Detachment from material desires while maintaining inner freedom from dependency on outcomes.",
  },
];

// Components of Mind (26-30)
const mindComponents = [
  {
    term: "Chitta",
    definition:
      "Storehouse of memories, impressions, and subconscious tendencies; purified through spiritual practice.",
  },
  {
    term: "Manas",
    definition:
      "Sensory mind processing perceptions and emotions; coordinates information from senses.",
  },
  {
    term: "Buddhi",
    definition:
      "Faculty of intellect and discernment; distinguishes truth from illusion.",
  },
  {
    term: "Ahamkara",
    definition:
      "Ego or sense of 'I' that identifies with body and personality; can obscure spiritual awareness.",
  },
  {
    term: "Chaitanya",
    definition:
      "Pure consciousness permeating all existence; divine awareness underlying the universe.",
  },
];

// Subtle Energy System (31-35)
const subtleEnergy = [
  {
    term: "Prana",
    definition:
      "Vital life force sustaining living beings; flows through subtle energy channels.",
  },
  {
    term: "Kundalini",
    definition:
      "Latent spiritual energy at spine's base; when awakened, rises through chakras to expanded consciousness.",
  },
  {
    term: "Nadi",
    definition:
      "Subtle energy channels (Ida, Pingala, Sushumna) through which Prana flows.",
  },
  {
    term: "Chakra",
    definition:
      "Energy centers regulating physical, emotional, and spiritual energies in the subtle body.",
  },
  {
    term: "Sushumna",
    definition:
      "Central energy channel through which Kundalini rises during spiritual awakening.",
  },
];

// Cosmology & Time Cycles (36-43)
const cosmology = [
  {
    term: "Loka",
    definition:
      "Realms or planes of existence corresponding to various states of consciousness.",
  },
  {
    term: "Yuga",
    definition:
      "Vast cycles of cosmic time describing rise and decline of spiritual awareness.",
  },
  {
    term: "Satya Yuga",
    definition: "Golden age of truth, harmony, and spiritual wisdom.",
  },
  {
    term: "Treta Yuga",
    definition:
      "Age of gradual decline in spiritual purity, though Dharma remains strong.",
  },
  {
    term: "Dvapara Yuga",
    definition:
      "Further decline in spiritual awareness; rise of conflict and complexity.",
  },
  {
    term: "Kali Yuga",
    definition:
      "Current age of moral decline and materialism; rapid spiritual progress possible through devotion.",
  },
  {
    term: "Kalpa",
    definition:
      "Vast cosmic period equivalent to one 'day' in Brahma's life; cycles of creation and dissolution.",
  },
  {
    term: "Pralaya",
    definition:
      "Dissolution of universe at end of cosmic cycles; return to unmanifest state.",
  },
];

// Deities & Divine Aspects (44, 79-88)
const deities = [
  {
    term: "Trimurti",
    definition:
      "Divine trinity: Brahma (creator), Vishnu (preserver), and Shiva (transformer).",
  },
  {
    term: "Brahma",
    definition: "Creator aspect of the divine in Hindu cosmology.",
  },
  { term: "Vishnu", definition: "Preserver who maintains cosmic order." },
  {
    term: "Shiva",
    definition: "Representation of transformation and spiritual awakening.",
  },
  {
    term: "Devi",
    definition: "Divine feminine energy representing creative power.",
  },
  {
    term: "Lakshmi",
    definition: "Goddess of prosperity, abundance, and good fortune.",
  },
  {
    term: "Saraswati",
    definition: "Goddess of knowledge, learning, and the arts.",
  },
  {
    term: "Durga",
    definition: "Divine power that protects the universe from evil.",
  },
  {
    term: "Ganesha",
    definition: "Remover of obstacles; patron of wisdom and new beginnings.",
  },
  { term: "Hanuman", definition: "Symbol of devotion, courage, and strength." },
  {
    term: "Ishvara",
    definition: "Personal form of the divine that devotees can worship.",
  },
];

// Three Gunas (45-48)
const gunas = [
  {
    term: "Gunas",
    definition:
      "Three fundamental qualities influencing all matter and consciousness.",
  },
  {
    term: "Sattva",
    definition:
      "Purity, harmony, wisdom, balance; clarity of mind and spiritual awareness.",
  },
  {
    term: "Rajas",
    definition:
      "Activity, passion, ambition, movement; necessary for progress but can lead to restlessness.",
  },
  {
    term: "Tamas",
    definition:
      "Inertia, ignorance, darkness; lethargy, confusion, and resistance to change.",
  },
];

// Sacred Texts (49-58)
const sacredTexts = [
  {
    term: "Vedas",
    definition:
      "Oldest sacred texts containing hymns, rituals, and philosophical foundations.",
  },
  {
    term: "Upanishads",
    definition:
      "Philosophical texts exploring reality, self, and unity between Atman and Brahman.",
  },
  {
    term: "Vedanta",
    definition:
      "Philosophical system from Upanishads focusing on consciousness and ultimate reality.",
  },
  {
    term: "Bhagavad Gita",
    definition:
      "Sacred dialogue between Arjuna and Krishna on duty, devotion, and liberation.",
  },
  {
    term: "Mahabharata",
    definition:
      "Epic narrative exploring duty, justice, family, and cosmic order.",
  },
  {
    term: "Ramayana",
    definition:
      "Epic of Lord Rama emphasizing righteousness, loyalty, and devotion.",
  },
  {
    term: "Puranas",
    definition:
      "Ancient texts with myths, legends, cosmology, and genealogies.",
  },
  {
    term: "Shastra",
    definition:
      "Sacred scriptures providing guidance on philosophy, ethics, and rituals.",
  },
  {
    term: "Shruti",
    definition:
      "That which is heard; divine revelations, particularly the Vedas.",
  },
  {
    term: "Smriti",
    definition:
      "That which is remembered; traditional texts interpreting Shruti teachings.",
  },
];

// Spiritual Guides & Practitioners (59-63)
const spiritualGuides = [
  {
    term: "Guru",
    definition:
      "Spiritual teacher guiding seekers toward knowledge and enlightenment.",
  },
  {
    term: "Acharya",
    definition:
      "Respected teacher and scholar interpreting and transmitting spiritual knowledge.",
  },
  {
    term: "Rishi",
    definition:
      "Ancient sages who realized spiritual truths through deep meditation.",
  },
  {
    term: "Sadhu",
    definition:
      "Spiritual renunciant dedicated to meditation, devotion, and liberation.",
  },
  {
    term: "Sannyasi",
    definition:
      "One who renounces worldly attachments for spiritual realization.",
  },
];

// Rituals & Practices (64-72)
const rituals = [
  {
    term: "Puja",
    definition:
      "Ritual worship with offerings, prayers, and symbolic gestures to honor the divine.",
  },
  {
    term: "Yajna",
    definition: "Sacred offerings or rituals for spiritual and cosmic harmony.",
  },
  {
    term: "Aarti",
    definition: "Ritual offering of light to a deity as reverence symbol.",
  },
  {
    term: "Mantra",
    definition:
      "Sacred sound or phrase for meditation and prayer to focus mind and invoke spiritual energy.",
  },
  {
    term: "Japa",
    definition: "Repeated recitation of a mantra as meditative practice.",
  },
  {
    term: "Prasad",
    definition:
      "Blessed food or offerings shared among devotees after rituals.",
  },
  {
    term: "Darshan",
    definition:
      "Seeing and being seen by the divine; encountering a deity or sacred image.",
  },
  {
    term: "Seva",
    definition:
      "Selfless service performed for others without expectation of reward.",
  },
  {
    term: "Bhajan",
    definition:
      "Devotional songs expressing love and reverence for the divine.",
  },
];

// Sacred Spaces (73-78)
const sacredSpaces = [
  {
    term: "Mandir",
    definition: "Hindu temple for worship, meditation, and spiritual learning.",
  },
  {
    term: "Garbhagriha",
    definition: "Inner sanctum of temple where main deity resides.",
  },
  {
    term: "Shikhara",
    definition:
      "Towering structure above temple sanctum representing spiritual ascent.",
  },
  {
    term: "Ashram",
    definition:
      "Spiritual retreat or community dedicated to meditation and learning.",
  },
  {
    term: "Tirtha",
    definition: "Sacred pilgrimage sites with spiritual significance.",
  },
  {
    term: "Yatra",
    definition: "Pilgrimage journey undertaken to sacred places.",
  },
];

// Ethical Principles (89-93)
const ethics = [
  { term: "Ahimsa", definition: "Non-violence toward all living beings." },
  { term: "Satya", definition: "Truthfulness in thought, speech, and action." },
  {
    term: "Asteya",
    definition: "Refraining from stealing or taking what is not freely given.",
  },
  {
    term: "Aparigraha",
    definition: "Non-possessiveness and freedom from excessive accumulation.",
  },
  { term: "Karuna", definition: "Compassion and empathy toward others." },
];

// Dharmaverse Concepts (94-99)
const dharmaverse = [
  {
    term: "Dharmaverse",
    definition:
      "Digital ecosystem inspired by Sanatan philosophy for exploring spiritual knowledge and sacred environments.",
  },
  {
    term: "Sacred Realm",
    definition:
      "Virtual environment representing spiritual landscapes or symbolic spaces.",
  },
  {
    term: "Temple Complex",
    definition:
      "Digital temple environments for ritual participation and learning.",
  },
  {
    term: "Ritual Environment",
    definition:
      "Interactive spaces for performing ceremonies and devotional activities.",
  },
  {
    term: "Realm Explorer",
    definition:
      "Navigation system for exploring different areas of the Dharmaverse.",
  },
  {
    term: "Sacred Calendar",
    definition:
      "System organizing spiritual events according to traditional cycles.",
  },
];

// Web3 & Crypto Concepts (100-109)
const web3 = [
  {
    term: "Blockchain",
    definition:
      "Distributed ledger technology recording transactions securely across multiple computers.",
  },
  {
    term: "Cryptocurrency",
    definition:
      "Digital currency secured by cryptographic technology and decentralized networks.",
  },
  {
    term: "Token",
    definition:
      "Digital asset representing value or utility within a blockchain ecosystem.",
  },
  {
    term: "Utility Token",
    definition:
      "Token granting access to services or features within a platform.",
  },
  {
    term: "Smart Contract",
    definition:
      "Self-executing code that automatically enforces agreements on blockchain.",
  },
  {
    term: "Wallet",
    definition: "Digital tool used to store and manage cryptocurrency.",
  },
  {
    term: "NFT",
    definition:
      "Non-Fungible Token; unique digital asset representing ownership of specific items.",
  },
  {
    term: "Minting",
    definition: "Process of creating a token or NFT on the blockchain.",
  },
  {
    term: "Decentralization",
    definition:
      "System where control is distributed among participants rather than central authority.",
  },
  {
    term: "DAO",
    definition:
      "Decentralized Autonomous Organization governed by community voting.",
  },
];

/* ------------------ CATEGORIES FOR DISPLAY ------------------ */
const categories = [
  {
    id: "core",
    title: "Core Philosophy",
    icon: "🕉️",
    data: corePhilosophy,
    color: "from-amber-900/20",
  },
  {
    id: "purushartha",
    title: "Purushartha",
    icon: "🎯",
    data: purusharthaFramework,
    color: "from-emerald-900/20",
  },
  {
    id: "yoga",
    title: "Yoga & Practices",
    icon: "🧘",
    data: yogaPractices,
    color: "from-blue-900/20",
  },
  {
    id: "mind",
    title: "Components of Mind",
    icon: "🧠",
    data: mindComponents,
    color: "from-purple-900/20",
  },
  {
    id: "energy",
    title: "Subtle Energy",
    icon: "⚡",
    data: subtleEnergy,
    color: "from-red-900/20",
  },
  {
    id: "cosmology",
    title: "Cosmology",
    icon: "🌌",
    data: cosmology,
    color: "from-indigo-900/20",
  },
  {
    id: "deities",
    title: "Deities",
    icon: "🔱",
    data: deities,
    color: "from-yellow-900/20",
  },
  {
    id: "gunas",
    title: "Three Gunas",
    icon: "⚖️",
    data: gunas,
    color: "from-orange-900/20",
  },
  {
    id: "texts",
    title: "Sacred Texts",
    icon: "📜",
    data: sacredTexts,
    color: "from-teal-900/20",
  },
  {
    id: "guides",
    title: "Spiritual Guides",
    icon: "👳",
    data: spiritualGuides,
    color: "from-violet-900/20",
  },
  {
    id: "rituals",
    title: "Rituals",
    icon: "🔥",
    data: rituals,
    color: "from-rose-900/20",
  },
  {
    id: "spaces",
    title: "Sacred Spaces",
    icon: "🏛️",
    data: sacredSpaces,
    color: "from-cyan-900/20",
  },
  {
    id: "ethics",
    title: "Ethical Principles",
    icon: "💎",
    data: ethics,
    color: "from-lime-900/20",
  },
  {
    id: "dharmaverse",
    title: "Dharmaverse",
    icon: "🌐",
    data: dharmaverse,
    color: "from-fuchsia-900/20",
  },
  {
    id: "web3",
    title: "Web3 & Crypto",
    icon: "⛓️",
    data: web3,
    color: "from-sky-900/20",
  },
];

/* ------------------ ANIMATION ------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ------------------ COMPONENT ------------------ */
export default function Glossary() {
  const categoryRefs = React.useRef({});
  const [searchTerm, setSearchTerm] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("all");

  // Filter categories based on search
  const filteredCategories = categories
    .map((cat) => ({
      ...cat,
      data: cat.data.filter(
        (item) =>
          item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.definition.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((cat) =>
      activeCategory === "all"
        ? cat.data.length > 0
        : cat.id === activeCategory,
    );

  return (
    <section className="relative w-full bg-[#05070C] text-white overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,#1A1F30_0%,transparent_70%)]" />

      {/* ================= HERO ================= */}
      <div className="relative min-h-[60vh] w-full flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          //   style={{ backgroundImage: `url(${glossaryBg})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#05070C]" />

        {/* Hero Content */}
        <motion.div
          className="relative z-10 px-6 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/60 font-['Cormorant_Garamond']">
            Sanātana Dharma
          </p>

          <h1 className="mb-6 text-5xl md:text-7xl uppercase tracking-[0.15em] font-light font-['Cormorant_Garamond']">
            Complete <span className="text-[#D4AF37]">Glossary</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto font-['Cormorant_Garamond'] italic">
            "Truth is universal and discoverable through lived experience,
            disciplined inquiry, and spiritual realization"
          </p>

          <div className="mt-12 text-white/50 text-sm font-['Cormorant_Garamond'] tracking-widest">
            109 Sacred Concepts • Philosophy • Practices • Cosmology
          </div>
        </motion.div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Search */}
        <div className="w-full flex justify-center">
          <div className="w-full md:w-[500px]">
            <input
              type="text"
              placeholder="Search terms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full mb-6 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]/50 transition-colors font-['Cormorant_Garamond'] text-center"
            />
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-16 flex flex-col md:flex-row gap-6 items-center justify-between">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-2 rounded-full text-sm uppercase tracking-wider transition-all font-['Cormorant_Garamond'] ${
                activeCategory === "all"
                  ? "bg-[#D4AF37] text-black"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);

                  setTimeout(() => {
                    categoryRefs.current[cat.id]?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }, 100); // small delay to ensure render
                }}
                className={`px-5 py-2 rounded-full text-sm uppercase tracking-wider transition-all font-['Cormorant_Garamond'] ${
                  activeCategory === cat.id
                    ? "bg-[#D4AF37] text-black"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {cat.icon} {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-12 text-white/40 font-['Cormorant_Garamond']">
          {filteredCategories.reduce((acc, cat) => acc + cat.data.length, 0)}{" "}
          concepts found
        </div>

        {/* Glossary Categories */}
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            ref={(el) => (categoryRefs.current[category.id] = el)}
            className="mb-24 last:mb-0"
          >
            {/* Category Header */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.1 }}
              variants={fadeUp}
              className="flex items-center gap-4 mb-12"
            >
              <span className="text-4xl">{category.icon}</span>
              <div>
                <h2 className="text-2xl md:text-3xl uppercase tracking-[0.2em] font-light font-['Cormorant_Garamond'] text-[#D4AF37]">
                  {category.title}
                </h2>
                <div className="h-px w-24 bg-gradient-to-r from-[#D4AF37] to-transparent mt-2" />
              </div>
            </motion.div>

            {/* Terms Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.data.map((item, index) => (
                <motion.div
                  key={item.term}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ amount: 0.1 }}
                  variants={fadeUp}
                  custom={index}
                >
                  <LuxuryCard
                    className={`h-full bg-gradient-to-br ${category.color} to-transparent border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg uppercase tracking-wide text-[#F6E27A] font-['Cormorant_Garamond']">
                        {item.term}
                      </h3>
                      <span className="text-xs text-white/30 font-['Cormorant_Garamond']">
                        #{index + 1}
                      </span>
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed font-['Cormorant_Garamond']">
                      {item.definition}
                    </p>
                  </LuxuryCard>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Footer */}
        <div className="py-32 border-t border-white/5 mt-32">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="mb-6 text-xl md:text-3xl uppercase tracking-[0.25em] font-light font-['Cormorant_Garamond']">
              The <span className="text-[#D4AF37]">Dharmaverse</span>
            </h2>

            <p className="text-base md:text-lg text-white/80 leading-relaxed font-['Cormorant_Garamond'] mb-12">
              A digital ecosystem inspired by Sanatan philosophy where these
              sacred concepts come alive through immersive experiences, virtual
              temples, and spiritual exploration.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CTAButton variant="gold">Explore Sacred Realms</CTAButton>
              <CTAButton variant="outline">View on Blockchain</CTAButton>
            </div>

            <div className="mt-16 text-white/30 text-xs font-['Cormorant_Garamond'] tracking-widest">
              {categories.reduce((acc, cat) => acc + cat.data.length, 0)} Sacred
              Concepts • 15 Categories • Eternal Wisdom
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
