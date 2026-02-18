import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
// import Link from "next/link"
import CTAButton from "../components/common/CTAButton";
import LuxuryCard from "../components/common/LuxuryCard";

export default function DharmaverseTiers() {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    address: "",
    phone: "",
    email: "",
    tier: "CITIZEN", // Default tier
  });

  const tiers = [
    { id: "CITIZEN", name: "🔱 CITIZEN", active: true },
    { id: "DEVOTEE", name: "🪔 DEVOTEE", active: false },
    { id: "GUARDIAN", name: "🛡 GUARDIAN", active: false },
    { id: "PATRON", name: "👑 PATRON", active: false },
  ];

  const handleTierClick = (tierId) => {
    const selectedTier = tiers.find((t) => t.id === tierId);

    if (!selectedTier?.active) return; // 🚫 Prevent click if inactive

    setFormData({ ...formData, tier: tierId });
    setShowForm(true);

    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckout = async () => {
    setLoading(true);

    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/create-checkout-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    }

    setLoading(false);
  };

  return (
    <section className="py-24 bg-[#050b17] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-20">
          Citizenship Tiers
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* ================= TIER 1 — CITIZEN ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <LuxuryCard className="border-[#D4AF37]/50 shadow-[0_0_40px_rgba(212,175,55,0.25)]">
              <h3 className="text-2xl font-semibold text-[#D4AF37] mb-1">
                🔱 CITIZEN (Nāgarika)
              </h3>

              <p className="text-gray-300 mb-2 italic">
                “Your identity within the sacred civilization.”
              </p>

              <p className="text-xs text-gray-400 mb-6">
                Sanskrit: Nāgarika (नागरिक) — one who belongs to a civilization.
              </p>

              <ul className="space-y-3 text-gray-200 mb-8 text-sm">
                <li>• Official Citizen Badge / Identity NFT</li>
                <li>• Serialized Citizen Identification</li>
                <li>• Entry into the Dharmaverse Citizen Registry</li>
                <li>• Access to core Dharmaverse zones</li>
                <li>• Access to public festival ceremonies</li>
                <li>• Citizen news & updates feed</li>
                <li>• Ability to purchase selected offerings and NFTs</li>
                <li>• Night access privileges (permitted zones)</li>
                <li>• Five complimentary Khatola rides (up to 3 guests)</li>
              </ul>

              <div className="bg-[#0f1b2e] p-4 rounded-xl border border-[#D4AF37]/30 mb-6 text-sm text-gray-300">
                <p className="text-[#D4AF37] font-semibold mb-2">Enrollment</p>
                <p>$5.99</p>
                <p className="mt-2">
                  Structured Release Allocation: 2,000,000 Citizens
                </p>
                <p className="mt-2 text-xs text-gray-400">
                  Approximately 0.20% of global Hindu population (1B reference).
                </p>
              </div>

              <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                Dharmaverse Citizenship is an identity of belonging. It is not
                an investment product and carries no financial guarantees.
              </p>

              <CTAButton
                variant="gold"
                className="w-full"
                onClick={() => handleTierClick("CITIZEN")}
              >
                APPLY NOW
              </CTAButton>
            </LuxuryCard>
          </motion.div>

          {/* ================= TIER 2 — DEVOTEE ================= */}
          <LuxuryCard className="opacity-40 pointer-events-none relative flex flex-col h-full">
            <span
              className="absolute top-4 right-2 text-xs px-3 py-1 rounded-full 
                 bg-[#D4AF37]/10 border border-[#D4AF37]/30 
                 text-[#D4AF37] tracking-wider"
            >
              Coming Soon
            </span>

            <h3 className="text-2xl font-semibold mb-2">🪔 DEVOTEE</h3>

            <p className="text-gray-400 mb-6 italic">
              “More than access — participation with devotion.”
            </p>

            <ul className="space-y-3 text-gray-400 mb-6">
              <li>Everything in Citizen, plus:</li>
              <li>• Devotee-only sanctums</li>
              <li>• Priority festival entry</li>
              <li>• Devotional ritual sessions</li>
              <li>• Devotee-exclusive offerings</li>
              <li>• Early access to drops</li>
            </ul>

            <div className="bg-[#0f1b2e] p-4 rounded-xl border border-white/10 mb-6 text-sm text-gray-400">
              Phase 1 Unlocks:
              <div className="mt-2 space-y-1">
                <p>• Devotee sanctum areas</p>
                <p>• Festival priority entry</p>
                <p>• Exclusive ritual sessions</p>
              </div>
            </div>

            <CTAButton
              variant="whiteGold"
              className="w-full opacity-50 cursor-not-allowed"
              disabled
            >
              Coming Soon
            </CTAButton>
          </LuxuryCard>

          {/* ================= TIER 3 — GUARDIAN ================= */}

          <LuxuryCard className="opacity-40 pointer-events-none relative flex flex-col h-full">
            <span
              className="absolute top-4 right-1 text-xs px-2 py-1 rounded-full 
                 bg-[#D4AF37]/10 border border-[#D4AF37]/30 
                 text-[#D4AF37] tracking-wider"
            >
              Coming Soon
            </span>

            <h3 className="text-2xl font-semibold mb-2">🛡 GUARDIAN</h3>

            <p className="text-gray-400 mb-6 italic">
              “Protector of the Dharmaverse expansion.”
            </p>

            <ul className="space-y-3 text-gray-400 mb-6">
              <li>Everything in Devotee, plus:</li>
              <li>• Guardian emblem</li>
              <li>• Guardian-only facilities</li>
              <li>• Realm early access</li>
              <li>• Guardian festival ceremonies</li>
              <li>• Higher allocation for limited offerings</li>
            </ul>

            <div className="bg-[#0f1b2e] p-4 rounded-xl border border-white/10 mb-6 text-sm text-gray-400">
              Phase 1 Unlocks:
              <div className="mt-2 space-y-1">
                <p>• Guardian halls</p>
                <p>• Realm early access windows</p>
                <p>• Guardian ceremony participation</p>
              </div>
            </div>

            <CTAButton
              variant="whiteGold"
              className="w-full opacity-50 cursor-not-allowed"
              disabled
            >
              Coming Soon
            </CTAButton>
          </LuxuryCard>

          {/* ================= TIER 4 — PATRON ================= */}
          <LuxuryCard className="opacity-40 pointer-events-none relative flex flex-col h-full">
            <span
              className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full 
                 bg-[#D4AF37]/10 border border-[#D4AF37]/30 
                 text-[#D4AF37] tracking-wider"
            >
              Coming Soon
            </span>

            <h3 className="text-2xl font-semibold mb-2">👑 PATRON</h3>

            <p className="text-gray-400 mb-6 italic">
              “Legacy-tier citizenship.”
            </p>

            <ul className="space-y-3 text-gray-400 mb-6">
              <li>Everything in Guardian, plus:</li>
              <li>• Patron legacy badge</li>
              <li>• Patron-only zones</li>
              <li>• Private ceremonies</li>
              <li>• Priority relic NFT allocation</li>
              <li>• Reserved future facility access</li>
              <li>• Optional recognition display</li>
            </ul>

            <div className="bg-[#0f1b2e] p-4 rounded-xl border border-white/10 mb-6 text-sm text-gray-400">
              Phase 1 Unlocks:
              <div className="mt-2 space-y-1">
                <p>• Patron sanctum lounge</p>
                <p>• Patron ceremony access</p>
                <p>• Patron drops priority</p>
              </div>
            </div>

            <CTAButton
              variant="whiteGold"
              className="w-full opacity-50 cursor-not-allowed"
              disabled
            >
              Coming Soon
            </CTAButton>
          </LuxuryCard>
        </div>

        {/* Registration Form - Always visible below tiers */}
        <div ref={formRef} className="mt-16 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8 text-[#D4AF37]">
            Begin Your Citizenship Journey
          </h3>

          <div className="space-y-4 bg-[#0a1424] p-8 rounded-2xl border border-[#D4AF37]/30 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
            {/* Tier Selection Dropdown - Full Width */}
            <select
              name="tier"
              value={formData.tier}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#0f1b2e] border border-[#D4AF37]/50 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
            >
              {tiers.map((tier) => (
                <option key={tier.id} value={tier.id} className="bg-[#0f1b2e]">
                  {tier.name}
                </option>
              ))}
            </select>

            <div>
              <label className="block mb-2 text-sm text-white/70">
                Full Name – <span className="text-[#D4AF37]">AVATAR</span>{" "}
                (choose a name to display)
              </label>

              <input
                name="name"
                placeholder="Enter your full name / avatar name"
                value={formData.name}
                className="w-full px-4 py-3 rounded-lg bg-[#0f1b2e] border border-white/20 focus:border-[#D4AF37] focus:outline-none transition-colors"
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="date"
                name="date"
                value={formData.date}
                className="w-full px-4 py-3 rounded-lg bg-[#0f1b2e] border border-white/20 focus:border-[#D4AF37] focus:outline-none transition-colors"
                onChange={handleChange}
              />

              <input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                className="w-full px-4 py-3 rounded-lg bg-[#0f1b2e] border border-white/20 focus:border-[#D4AF37] focus:outline-none transition-colors"
                onChange={handleChange}
              />
            </div>

            <input
              name="address"
              placeholder="Address"
              value={formData.address}
              className="w-full px-4 py-3 rounded-lg bg-[#0f1b2e] border border-white/20 focus:border-[#D4AF37] focus:outline-none transition-colors"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              className="w-full px-4 py-3 rounded-lg bg-[#0f1b2e] border border-white/20 focus:border-[#D4AF37] focus:outline-none transition-colors"
              onChange={handleChange}
            />

            <CTAButton
              variant="gold"
              className="w-full mt-4"
              onClick={handleCheckout}
              disabled={loading}
            >
              {loading ? "Processing..." : "Proceed to Payment"}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
