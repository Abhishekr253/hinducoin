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
    { id: "CITIZEN", name: "🔱 CITIZEN", color: "text-[#D4AF37]" },
    { id: "DEVOTEE", name: "🪔 DEVOTEE", color: "text-gray-300" },
    { id: "GUARDIAN", name: "🛡 GUARDIAN", color: "text-gray-300" },
    { id: "PATRON", name: "👑 PATRON", color: "text-gray-300" },
  ];

  const handleTierClick = (tierId) => {
    setFormData({ ...formData, tier: tierId });
    setShowForm(true);
    // Scroll to form after a tiny delay to ensure form is rendered
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

    const res = await fetch("http://localhost:5000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

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
              <h3 className="text-2xl font-semibold text-[#D4AF37] mb-2">
                🔱 CITIZEN
              </h3>

              <p className="text-gray-300 mb-6 italic">
                “Your identity in the sacred civilization.”
              </p>

              <ul className="space-y-3 text-gray-200 mb-6">
                <li>• Citizen Badge / Identity NFT</li>
                <li>• Entry access to core Dharmaverse zones</li>
                <li>• Access to festival public ceremonies</li>
                <li>• Citizen news + updates feed</li>
                <li>• Ability to purchase selected offerings/NFTs</li>
              </ul>

              <div className="bg-[#0f1b2e] p-4 rounded-xl border border-[#D4AF37]/30 mb-6">
                <p className="text-sm font-semibold text-[#D4AF37] mb-3">
                  Phase 1 Unlocks
                </p>

                <div className="space-y-2 text-sm text-gray-300">
                  <p className="flex items-center gap-2">
                    <Check size={16} className="text-[#D4AF37]" />
                    Temple entry access (core areas)
                  </p>
                  <p className="flex items-center gap-2">
                    <Check size={16} className="text-[#D4AF37]" />
                    Phase 1 citizen hall access
                  </p>
                  <p className="flex items-center gap-2">
                    <Check size={16} className="text-[#D4AF37]" />
                    Festival participation (public)
                  </p>
                </div>
              </div>

              <CTAButton
                variant="gold"
                className="w-full"
                onClick={() => handleTierClick("CITIZEN")}
              >
                Become a Citizen
              </CTAButton>
            </LuxuryCard>
          </motion.div>

          {/* ================= TIER 2 — DEVOTEE ================= */}
          <LuxuryCard className="opacity-60">
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
              className="w-full"
              onClick={() => handleTierClick("DEVOTEE")}
            >
              Become a Devotee
            </CTAButton>
          </LuxuryCard>

          {/* ================= TIER 3 — GUARDIAN ================= */}
          <LuxuryCard className="opacity-60">
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
              className="w-full"
              onClick={() => handleTierClick("GUARDIAN")}
            >
              Become a Guardian
            </CTAButton>
          </LuxuryCard>

          {/* ================= TIER 4 — PATRON ================= */}
          <LuxuryCard className="opacity-60">
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
              className="w-full"
              onClick={() => handleTierClick("PATRON")}
            >
              Become a Patron
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

            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              className="w-full px-4 py-3 rounded-lg bg-[#0f1b2e] border border-white/20 focus:border-[#D4AF37] focus:outline-none transition-colors"
              onChange={handleChange}
            />

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
