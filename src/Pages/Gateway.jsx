// src/pages/Gateway.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Gateway() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050816] to-[#0B1F3A] text-white flex flex-col px-6 py-10">

      {/* LOGO */}
      <div className="w-full flex justify-center">
        <h1 className="text-xl tracking-widest text-[#D4AF37]">LOGO</h1>
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
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
          
          {/* HINDU COIN */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            onClick={() =>
              navigate("/hindu-coin", {
                state: { loadingText: "Loading Hindu Coin..." },
              })
            }
            className="w-full md:w-auto px-8 py-4 border border-[#D4AF37] text-[#D4AF37] rounded-lg transition duration-200 hover:bg-[#D4AF37] hover:text-[#050816]"
          >
            <div className="font-semibold">HINDU COIN</div>
            <div className="text-xs opacity-80">Digital Utility Token</div>
          </motion.button>

          {/* DHARMAVERSE */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            onClick={() =>
              navigate("/home", {
                state: { loadingText: "Entering Dharmaverse..." },
              })
            }
            className="w-full md:w-auto px-8 py-4 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition duration-200"
          >
            <div className="font-thin">DHARMAVERSE</div>
            <div className="text-xs opacity-80 font-light">
              Digital World & Experiences
            </div>
          </motion.button>
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