// src/pages/Gateway.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import hinduCoinImg from "../assets/hinducoin.jpeg";
import dharmaverseImg from "../assets/dharmaverse.jpg";
import logo from "../assets/logo1.png";

export default function Gateway() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050816] to-[#0B1F3A] text-white flex flex-col px-6 py-10">
      {/* LOGO */}
      <div className="w-full flex justify-center ">
        <div className="relative flex items-center justify-center">
          {/* Soft Glow (smaller & tighter) */}
          <div className="absolute mb-8 w-26 h-26 bg-[#D4AF37]/25 blur-xl rounded-full" />

          {/* Logo Container */}
          <div className="relative p-2 rounded-full ">
            <img src={logo} alt="Logo" className="h-35 w-35 object-contain" />
          </div>
        </div>
      </div>

      {/* CENTER CONTENT */}
      <motion.div
        className="flex-grow flex flex-col justify-center text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* HEADLINE */}
        <h2 className="text-5xl font-light md:text-6xl font-cormorant bg-gradient-to-r from-[#D4AF37] to-[#F7E7A1] text-transparent bg-clip-text mb-6">
          Enter the Ecosystem
        </h2>

        {/* SUBTEXT */}
        <p className="text-[#EAEAEA] font-light text-sm md:text-lg mb-10 max-w-xl mx-auto">
          A digital ecosystem structured across distinct layers of technology,
          culture, and experience.
        </p>

        {/* BUTTONS */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {/* HINDU COIN */}
          <motion.div
            whileHover={{ y: -6 }}
            onClick={() =>
              navigate("/hindu-coin", {
                state: { loadingText: "Loading Hindu Coin..." },
              })
            }
            className="cursor-pointer group"
          >
            {/* IMAGE */}
            <div className="overflow-hidden rounded-2xl border border-[#D4AF37]/30">
              <img
                src={hinduCoinImg}
                alt="Hindu Coin"
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* TEXT (SEPARATE) */}
            <div className="mt-4 text-left px-1 ">
              <h3 className="text-[#D4AF37] text-xl font-semibold mb-1">
                Hindu Coin
              </h3>
              <p className="text-sm text-gray-400">Digital Utility Token</p>
            </div>
          </motion.div>

          {/* DHARMAVERSE */}
          <motion.div
            whileHover={{ y: -6 }}
            onClick={() =>
              navigate("/home", {
                state: { loadingText: "Entering Dharmaverse..." },
              })
            }
            className="cursor-pointer group"
          >
            {/* IMAGE */}
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img
                src={dharmaverseImg}
                alt="Dharmaverse"
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* TEXT (SEPARATE) */}
            <div className="mt-4 text-left px-1">
              <h3 className="text-white text-xl font-light mb-1">
                Dharmaverse
              </h3>
              <p className="text-sm text-gray-400">
                Digital World & Experiences
              </p>
            </div>
          </motion.div>
        </div>

        {/* LEGAL LINE */}
        <p className="text-[12px] text-[#9CA3AF] mb-10">
          You are entering either the Hindu Coin information portal or the
          Dharmaverse platform. These operate through separate entities with
          distinct functions.
        </p>

        {/* OPTIONAL EXPLANATION */}
        <div className="grid md:grid-cols-2 gap-6 text-left text-[#CFCFCF] text-sm">
          <div>
            <h4 className="font-semibold mb-1">Hindu Coin</h4>
            <p>A digital utility token used within the ecosystem.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Dharmaverse</h4>
            <p>
              A platform for digital experiences, assets, and participation.
            </p>
          </div>
        </div>
      </motion.div>

      {/* FOOTER */}
      <p className="text-[13px] text-[#8A8A8A] text-center max-w-md mx-auto mt-12 md:mt-10">
        This gateway provides access to different components of a broader
        digital ecosystem. Please proceed to your intended section.
      </p>
    </div>
  );
}
