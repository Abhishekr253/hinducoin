import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CopyButton from "../components/CopyButton";
import LuxuryCard from "../components/common/LuxuryCard";
import CTAButton from "../components/common/CTAButton";

const HinduCoinHero = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const contract = "HNDUx7y8z9A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6";

  const handleCopy = () => {
    navigator.clipboard.writeText(contract);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Sticky Header
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll function
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 100;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "What is Hindu Coin", id: "what-is" },
    { name: "Tokenomics", id: "tokenomics" },
    { name: "How to Acquire", id: "how-to-acquire" },
    { name: "Transparency", id: "transparency" },
    { name: "Docs", id: "docs" },
  ];

  const luxuryEase = [0.22, 1, 0.36, 1];

const sectionContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: luxuryEase,
    },
  },
};

  return (
    <div className="bg-[#050b17] text-white min-h-screen overflow-x-hidden">
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSticky
            ? "bg-[#050b17]/95 backdrop-blur-xl border-b border-[#D4AF37]/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* LOGO */}
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer text-[#D4AF37] text-lg sm:text-xl tracking-wide font-light"
          >
            Hindu Coin
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-6 lg:gap-8 text-sm text-gray-300">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() =>
                  item.name === "Home"
                    ? window.scrollTo({ top: 0, behavior: "smooth" })
                    : scrollToSection(item.id)
                }
                className="hover:text-[#D4AF37] transition whitespace-nowrap"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Dharmaverse */}
            <button
              onClick={() => navigate("/home")}
              className="hidden sm:flex items-center gap-1 text-gray-300 hover:text-[#D4AF37] transition text-sm"
            >
              <span>🌐</span>
              <span className="hidden lg:inline">Explore Dharmaverse</span>
              <span className="inline lg:hidden">Dharmaverse</span>
            </button>

            {/* Acquire */}
            <button
              onClick={() => scrollToSection("how-to-acquire")}
              className="px-3 sm:px-5 py-1.5 sm:py-2 bg-[#D4AF37] text-black rounded-lg font-semibold hover:scale-105 transition text-sm sm:text-base"
            >
              Acquire
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#D4AF37] text-2xl p-2"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#050b17]/95 backdrop-blur-xl border-b border-[#D4AF37]/20 py-4 px-6 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() =>
                  item.name === "Home"
                    ? window.scrollTo({ top: 0, behavior: "smooth" })
                    : scrollToSection(item.id)
                }
                className="text-gray-300 hover:text-[#D4AF37] transition py-2 text-left"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                navigate("/home");
                setMobileMenuOpen(false);
              }}
              className="text-gray-300 hover:text-[#D4AF37] transition py-2 text-left"
            >
              🌐 Explore Dharmaverse
            </button>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center text-center px-4 sm:px-6 relative pt-20"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816] to-[#0B1F3A]" />

        {/* Glow */}
        <div className="absolute w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-[#D4AF37]/20 blur-[150px] rounded-full top-1/4" />

        {/* Content */}
        <motion.div
  variants={sectionContainer}
  initial="hidden"
  animate="show"
  className="relative z-10 max-w-3xl w-full"
>
          {/* HEADLINE */}
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#D4AF37] mb-4 sm:mb-6 tracking-wide">
  HINDU COIN
</motion.h1>

<motion.p variants={fadeUp} className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-3 sm:mb-4 px-2">
  The digital currency powering the Dharmaverse
</motion.p>

<motion.p variants={fadeUp} className="text-gray-350 text-xs sm:text-sm md:text-base mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
  A utility token designed for use within a global digital ecosystem of culture, experiences, and digital assets.
</motion.p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 px-2">
            {/* PRIMARY */}
            <button
              onClick={() => scrollToSection("how-to-acquire")}
              className="px-5 sm:px-8 py-2.5 sm:py-3 bg-[#D4AF37] text-black rounded-lg font-semibold hover:scale-105 transition text-sm sm:text-base"
            >
              Acquire Hindu Coin
            </button>

            {/* SECONDARY */}
            <button
              onClick={() => scrollToSection("tokenomics")}
              className="px-5 sm:px-8 py-2.5 sm:py-3 border border-[#D4AF37] text-[#D4AF37] rounded-lg hover:bg-[#D4AF37]/10 transition text-sm sm:text-base"
            >
              View Tokenomics
            </button>

            {/* TERTIARY */}
            <button
              onClick={() => navigate("/home")}
              className="px-5 sm:px-8 py-2.5 sm:py-3 border border-gray-500 text-gray-300 rounded-lg hover:border-[#D4AF37] hover:text-[#D4AF37] transition text-sm sm:text-base"
            >
              Explore Dharmaverse
            </button>
          </div>

          {/* DISCLAIMER */}
          <p className="text-xs font-bold text-gray-400 max-w-md mx-auto px-4">
            Hindu Coin is a digital utility token and does not represent
            ownership, equity, or rights in any entity.
          </p>
        </motion.div>
      </section>

      {/* ================= WHAT IS HINDU COIN ================= */}
      <motion.section
  id="what-is"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  variants={sectionContainer}
  className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#050b17] text-white overflow-hidden"
>
  <div className="max-w-4xl mx-auto text-center">

    {/* Heading */}
    <motion.h2
      variants={fadeUp}
      className="text-2xl sm:text-3xl md:text-4xl font-light text-[#D4AF37] mb-4 sm:mb-6 tracking-wide"
    >
      What is Hindu Coin
    </motion.h2>

    {/* Content */}
    <motion.p
      variants={fadeUp}
      className="text-gray-300 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 leading-relaxed px-2"
    >
      Hindu Coin is a digital utility token used within the Dharmaverse ecosystem.
    </motion.p>

    <motion.p
      variants={fadeUp}
      className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed px-2"
    >
      It enables participation in a new digital environment of experiences, assets, and interaction.
    </motion.p>

    <motion.p
      variants={fadeUp}
      className="text-gray-300 text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed px-2"
    >
      It is not an investment product and does not grant ownership or rights in any entity.
    </motion.p>

    {/* CTA */}
    <motion.button
      variants={fadeUp}
      className="px-6 sm:px-8 py-2.5 sm:py-3 border border-[#D4AF37]/60 text-[#D4AF37] rounded-lg hover:bg-[#D4AF37]/10 transition text-sm sm:text-base"
    >
      Learn More
    </motion.button>

  </div>
</motion.section>

      {/* TOKENOMICS */}
      <motion.section
        id="tokenomics"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionContainer}
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#050b17] text-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* HEADING */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#D4AF37] font-light mb-4 sm:mb-6">
            Tokenomics
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
            Structured distribution designed to support ecosystem growth,
            sustainability, and community participation.
          </p>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { label: "Total Supply", value: "1,000,000,000" },
              { label: "Ecosystem Fund", value: "40%" },
              { label: "Community Rewards", value: "25%" },
              { label: "Development", value: "20%" },
              { label: "Marketing", value: "10%" },
              { label: "Liquidity", value: "5%" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#0f1b2e]/50 border border-[#D4AF37]/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-[#D4AF37]/50 transition-all"
              >
                <p className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">
                  {item.label}
                </p>
                <p className="text-xl sm:text-2xl text-[#D4AF37] font-light">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* POWERED BY DHARMAVERSE */}
     <motion.section
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  variants={sectionContainer}
  className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#050b17] text-white"
>
  <div className="max-w-5xl mx-auto text-center">
    
    {/* HEADING */}
    <motion.h2
      variants={fadeUp}
      className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6 tracking-wide px-2"
    >
      Powered by the <span className="text-[#D4AF37]">Dharmaverse</span>
    </motion.h2>

    {/* CONTENT */}
    <motion.p
      variants={fadeUp}
      className="text-gray-300 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 max-w-2xl mx-auto leading-relaxed px-4"
    >
      Hindu Coin is used as the primary medium of exchange within the
      Dharmaverse.
    </motion.p>

    <motion.p
      variants={fadeUp}
      className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4"
    >
      Users acquire Hindu Coin externally and use it across the ecosystem.
    </motion.p>

    {/* CTA BUTTON */}
    <motion.button
      variants={fadeUp}
      onClick={() => navigate("/home")}
      className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#D4AF37] text-black font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base"
    >
      Enter Dharmaverse →
    </motion.button>

  </div>
</motion.section>

      {/* HOW TO ACQUIRE */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionContainer}
        id="how-to-acquire"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#050b17] text-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* HEADING */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#D4AF37] mb-4 sm:mb-6">
            How to Acquire
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
            Follow these simple steps to acquire Hindu Coin and start
            participating in the Dharmaverse ecosystem.
          </p>

          {/* STEPS */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "Create a Wallet",
                desc: "Set up a Solana wallet such as Phantom or Solflare.",
                icon: "👜",
              },
              {
                step: "02",
                title: "Fund Your Wallet",
                desc: "Add SOL to your wallet for transaction fees.",
                icon: "💰",
              },
              {
                step: "03",
                title: "Acquire Hindu Coin",
                desc: "Swap tokens on supported DEX platforms or partners.",
                icon: "🔄",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-[#0f1b2e]/50 border border-[#D4AF37]/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-[#D4AF37]/50 transition-all duration-300 backdrop-blur-md"
              >
                {/* STEP NUMBER */}
                <p className="text-xs text-gray-500 mb-2 tracking-widest">
                  STEP {item.step}
                </p>

                {/* ICON */}
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-lg sm:text-xl font-light text-[#D4AF37] mb-2 sm:mb-3">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* TRANSPARENCY AND DOCUMENTATION */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionContainer}
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#050b17] text-white"
      >
        <div className="max-w-6xl mx-auto">
          {/* HEADING */}
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#D4AF37] mb-3 sm:mb-4">
              Transparency & Documentation
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
              Ensuring clarity, accountability, and access to essential
              information about the Hindu Coin ecosystem.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* TRANSPARENCY */}
            <div
              id="transparency"
              className="group bg-[#0f1b2e]/50 backdrop-blur-md border border-[#D4AF37]/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-[#D4AF37]/50 transition-all duration-300"
            >
              {/* ICON */}
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🛡️</div>

              {/* TITLE */}
              <h3 className="text-xl sm:text-2xl font-light text-[#D4AF37] mb-2 sm:mb-3">
                Transparency
              </h3>

              {/* CONTENT */}
              <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                Regular updates, clear token allocation, and open communication
                ensure trust within the ecosystem.
              </p>

              {/* ACTION */}
              <button className="text-[#D4AF37] hover:text-[#c4a02e] transition text-sm sm:text-base">
                View Reports →
              </button>
            </div>

            {/* DOCUMENTATION */}
            <div
              id="docs"
              className="group bg-[#0f1b2e]/50 backdrop-blur-md border border-[#D4AF37]/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-[#D4AF37]/50 transition-all duration-300"
            >
              {/* ICON */}
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📘</div>

              {/* TITLE */}
              <h3 className="text-xl sm:text-2xl font-light text-[#D4AF37] mb-2 sm:mb-3">
                Documentation
              </h3>

              {/* CONTENT */}
              <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                Access whitepapers, technical specifications, and detailed
                guides for using Hindu Coin within the ecosystem.
              </p>

              {/* ACTION */}
              <button
                onClick={() => window.open("/docs", "_blank")}
                className="text-[#D4AF37] hover:text-[#c4a02e] transition text-sm sm:text-base"
              >
                Read Docs →
              </button>
            </div>
          </div>
        </div>
      </motion.section>

{/* =================BUY HINDU COIN ================= */}
<motion.section
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  variants={sectionContainer}
  className="relative w-full bg-[#05070C] text-white py-20 md:py-24 overflow-hidden"
>
  <div className="relative max-w-7xl mx-auto px-6">
    <LuxuryCard className="px-8 md:px-12 py-12 md:py-14">

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

        {/* WALLET */}
        <motion.div variants={fadeUp} className="text-center">
          <p className="mb-4 text-sm uppercase tracking-wide text-white/60">
            Supported Wallets
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            {["Phantom", "Solflare", "Backpack"].map((wallet) => (
              <div
                key={wallet}
                className="px-4 py-2 rounded-full border border-white/15 bg-white/5 text-xs backdrop-blur-md"
              >
                {wallet}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CONTRACT */}
        <motion.div variants={fadeUp} className="text-center">
          <p className="mb-4 text-sm uppercase tracking-wide text-white/60">
            Contract Address
          </p>

          <button
            onClick={handleCopy}
            className="inline-flex items-center justify-center rounded-full border border-[#D4AF37]/40 px-6 py-2 text-sm hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/70 transition-all"
          >
            {copied ? "Copied ✓" : "Copy Contract"}
          </button>
        </motion.div>

        {/* WHERE TO BUY */}
        <motion.div variants={fadeUp} className="text-center">
          <p className="mb-4 text-sm uppercase tracking-wide text-white/60">
            How to Aquire
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            {["DEX", "Aggregator", "Launchpad"].map((place) => (
              <span
                key={place}
                className="px-4 py-1 rounded-full border border-white/15 text-xs"
              >
                {place}
              </span>
            ))}
          </div>
        </motion.div>

      </div>

      {/* CTA */}
      <motion.div
        variants={fadeUp}
        className="mt-14 flex flex-col sm:flex-row justify-center gap-4"
      >
      </motion.div>

    </LuxuryCard>
  </div>
</motion.section>

      {/* LEGAL POSITIONING */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionContainer}
        className="border-t border-[#D4AF37]/20 mt-12 sm:mt-20 pt-8 sm:pt-10 pb-12 sm:pb-16 px-4 sm:px-6"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] sm:text-xs md:text-sm text-gray-400 leading-relaxed text-center">
            Hindu Coin is issued by an independent foundation and operates
            separately from the Dharmaverse platform. This token is designed
            solely for utility within the ecosystem and does not constitute a
            security, investment product, or ownership in any entity. ©{" "}
            {new Date().getFullYear()} Hindu Coin Foundation. All rights
            reserved.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default HinduCoinHero;
