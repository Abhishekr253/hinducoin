import { motion } from "framer-motion";

export default function ProductCard({ item }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className="relative group border border-[#D4AF37]/20 bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-xl rounded-2xl p-6 text-center"
    >
      {/* Gold Accent Line */}
      <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-[#D4AF37]/80" />

      <h4 className="font-['Cormorant_Garamond'] uppercase tracking-wide text-sm md:text-base">
        {item.name}
      </h4>

      {/* Premium Tag */}
      {item.premium && (
        <div className="mt-3 text-[10px] tracking-widest text-[#D4AF37] uppercase">
          Premium Edition
        </div>
      )}

      {/* Exclusive Tag */}
      {item.exclusive && (
        <div className="mt-2 text-[10px] tracking-widest text-blue-400 uppercase">
          Citizen Exclusive
        </div>
      )}

      {/* Subtle Glow Hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_70%)]" />
    </motion.div>
  );
}