import { motion } from "framer-motion";
import CTAButton from "../components/common/CTAButton";
import LuxuryCard from "../components/common/LuxuryCard";

export default function Explore() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05070C] text-white text-center px-6">
      <div>
        <h1 className="text-2xl md:text-4xl font-light text-[#D4AF37] mb-4 tracking-wide">
          A EXCITING NEW SANATAN REALM COMING SOON
        </h1>

        <p className="text-gray-400 text-sm md:text-base">
          Please check back soon or await announcements
        </p>
      </div>
    </div>
  );
}
