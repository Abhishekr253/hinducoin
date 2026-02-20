import React from "react";
import { motion } from "framer-motion";
import { collections } from "./productsData";
import ProductCard from "./ProductCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function OfferingsPavilion() {
  return (
    <section className="w-full bg-[#05070C] text-white py-24 md:py-36">
      
      {/* HERO HEADER */}
      <div className="text-center max-w-4xl mx-auto px-6 mb-20">
        <p className="text-xs tracking-[0.3em] uppercase text-white/50 font-['Cormorant_Garamond']">
          Offerings Pavilion
        </p>

        <h2 className="text-3xl md:text-5xl font-light tracking-[0.2em] uppercase font-['Cormorant_Garamond']">
          Sacred Articles & Curated Relics
        </h2>

        <p className="mt-6 text-white/60 text-sm md:text-base leading-relaxed">
          Each offering is designed in alignment with heritage, sacred geometry,
          and ceremonial intention. Nothing here is ornamental. Everything carries meaning.
        </p>
      </div>

      {/* COLLECTIONS */}
      <div className="max-w-6xl mx-auto px-6 space-y-24">
        {collections.map((collection) => (
          <motion.div
            key={collection.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="mb-10 text-center">
              <h3 className="text-xl md:text-2xl uppercase tracking-wider font-['Cormorant_Garamond'] text-[#D4AF37]">
                {collection.title}
              </h3>

              <p className="text-xs tracking-widest text-white/50 mt-2 uppercase">
                {collection.theme}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {collection.items.map((item) => (
                <ProductCard key={item.name} item={item} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}