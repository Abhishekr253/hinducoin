"use client"

import { motion } from "framer-motion"
import CTAButton from "../components/common/CTAButton"
import LuxuryCard from "../components/common/LuxuryCard"
import { CheckCircle } from "lucide-react"
import { Link } from "react-router-dom";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#050b17] flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl"
      >
        <LuxuryCard className="text-center border-[#D4AF37]/50 shadow-[0_0_50px_rgba(212,175,55,0.2)]">

          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <CheckCircle size={64} className="text-[#D4AF37]" />
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl font-semibold text-[#D4AF37] mb-4">
            Payment Successful
          </h1>

          {/* Subtext */}
          <p className="text-gray-300 mb-8 leading-relaxed">
            Welcome, Citizen of Dharmaverse.
            <br />
            Your sacred identity has been successfully initiated.
          </p>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mb-8" />

          {/* Next Steps */}
          <div className="text-gray-400 text-sm mb-10 space-y-2">
            <p>• A confirmation email has been sent to you.</p>
            <p>• Your Citizen badge will be activated shortly.</p>
            <p>• Festival access unlocks according to Phase 1 privileges.</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dharmaverse">
              <CTAButton variant="gold">
                Enter Dharmaverse
              </CTAButton>
            </Link>

            <Link to="/">
              <CTAButton variant="whiteGold">
                Return Home
              </CTAButton>
            </Link>
          </div>

        </LuxuryCard>
      </motion.div>

    </div>
  )
}
