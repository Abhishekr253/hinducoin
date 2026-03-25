import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Loader = () => {
  const location = useLocation();

  const loadingText =
    location.state?.loadingText || "Loading experience...";

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050b17]">
      
      {/* Glow */}
      <div className="absolute w-40 h-40 bg-[#D4AF37]/20 blur-3xl rounded-full" />

      {/* Spinner */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        className="w-16 h-16 border-4 border-[#D4AF37] border-t-transparent rounded-full"
      />

      {/* Text */}
      <motion.p
        key={loadingText}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 text-[#D4AF37] text-sm tracking-widest"
      >
        {loadingText}
      </motion.p>
    </div>
  );
};

export default Loader;