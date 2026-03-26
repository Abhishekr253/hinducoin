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
  const sectionRefs = React.useRef({});
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
          and ceremonial intention. Nothing here is ornamental. Everything
          carries meaning.
        </p>
      </div>

      {/* TABS */}
      <div className="sticky top-0 z-40 bg-[#05070C]/80 backdrop-blur-md border-b border-white/5 mb-16">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-4 overflow-x-auto">
          {collections.map((col) => (
            <button
              key={col.title}
              onClick={() => {
                sectionRefs.current[col.title]?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="whitespace-nowrap px-5 py-2 rounded-full text-xs uppercase tracking-widest bg-white/5 hover:bg-[#D4AF37] hover:text-black transition"
            >
              {col.title}
            </button>
          ))}
        </div>
      </div>

      {/* COLLECTIONS */}
      <div className="max-w-6xl mx-auto px-6 space-y-24">
        {collections.map((collection) => (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div
              ref={(el) => (sectionRefs.current[collection.title] = el)}
              className="mb-10 text-center scroll-mt-34"
            >
              <h3 className="text-xl md:text-2xl uppercase tracking-wider font-['Cormorant_Garamond'] text-[#D4AF37]">
                {collection.title}
              </h3>

              <p className="text-xs tracking-widest text-white/50 mt-2 uppercase">
                {collection.theme}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {collection.items.map((item) => (
                <div className="w-full sm:w-[48%] lg:w-[30%]">
                  <ProductCard
                    key={item.name}
                    item={item}
                    showNotAvailable={
                      collection.title === "Citizen-Exclusive Relics" &&
                      item.name !== "Nagarik Eco Bracelet"
                    }
                  />
                </div>
              ))}
            </div>

            {/* 🔝 BACK TO TABS */}
            <div className="mt-10 text-center">
              <button
                onClick={() => {
                  window.scrollTo({
                    top: document.querySelector(".sticky")?.offsetTop || 0,
                    behavior: "smooth",
                  });
                }}
                className="text-white/50 hover:text-[#D4AF37] text-xl transition"
              ></button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
