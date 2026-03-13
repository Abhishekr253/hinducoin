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

  const tiers = [{ id: "CITIZEN", name: "🔱 CITIZEN", active: true }];

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

        <div className="max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <LuxuryCard className="border border-[#D4AF37]/40 shadow-[0_0_50px_rgba(212,175,55,0.15)] rounded-2xl p-10">
              {/* Header */}
              <div className="text-center mb-10">
                <h3 className="text-3xl font-semibold text-[#D4AF37] mb-2">
                  🔱 CITIZEN (Nāgarika)
                </h3>

                <p className="text-gray-300 italic mb-2">
                  “Your identity within the sacred civilization.”
                </p>

                <p className="text-sm text-gray-400">
                  Sanskrit: Nāgarika (नागरिक) — one who belongs to a
                  civilization.
                </p>
              </div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-10 items-start">
                {/* Left — Benefits */}
                <div>
                  <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
                    Citizen Benefits
                  </h4>

                  <ul className="space-y-3 text-gray-200 text-sm">
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
                </div>

                {/* Right — Enrollment */}
                <div className="bg-[#0f1b2e] p-6 rounded-xl border border-[#D4AF37]/30 text-center">
                  <p className="text-[#D4AF37] font-semibold mb-2">
                    Enrollment
                  </p>

                  <p className="text-4xl font-bold text-white mb-3">$5.99</p>

                  <p className="text-sm text-gray-300 mb-3">
                    Structured Release Allocation:
                  </p>

                  <p className="text-[#D4AF37] font-medium">
                    2,000,000 Citizens
                  </p>

                  <p className="text-xs text-gray-400 mt-3">
                    Approximately 0.20% of global Hindu population (1B
                    reference)
                  </p>

                  <CTAButton
                    variant="gold"
                    className="mt-6 px-6 py-2 text-sm"
                    onClick={() => handleTierClick("CITIZEN")}
                  >
                    Apply Now
                  </CTAButton>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-gray-400 text-center mt-10 max-w-2xl mx-auto">
                Dharmaverse Citizenship is an identity of belonging. It is not
                an investment product and carries no financial guarantees.
              </p>
            </LuxuryCard>
          </motion.div>
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
