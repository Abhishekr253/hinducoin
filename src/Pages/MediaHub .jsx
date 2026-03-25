import { motion } from "framer-motion";
import img1 from "../assets/dharmaverse1.jpeg";
import img2 from "../assets/dharmaverse2.jpeg";
import img3 from "../assets/dharmaverse3.jpeg";
import img4 from "../assets/dharmaverse4.jpeg";

const MediaHub = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const sectionContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const staticImages = [img1, img2, img3, img4];

  return (
    <section className="w-full bg-[#05070C] text-white overflow-hidden">
      {/* ================= HERO TITLE WITH BG IMAGE ================= */}
      <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center">
        {/* Background Image */}
        <img
          src="https://img.freepik.com/premium-photo/lord-vishnu-preserver-universe-protector-dharma_1319351-32644.jpg"
          alt="Media Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Title Content */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          className="relative z-10 px-6"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/60 font-['Cormorant_Garamond']">
            Media Hub
          </p>

          <h2 className="text-4xl md:text-5xl font-light uppercase tracking-[0.25em] font-['Cormorant_Garamond']">
            Visual Archives
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-sm md:text-base text-white/70 font-['Cormorant_Garamond']">
            Cinematic clips and sacred visuals documenting the evolution of the
            Dharmaverse and The Hindu Coin.
          </p>
        </motion.div>
      </div>

      {/* ================= CONTENT ================= */}
      <motion.div
        className="max-w-[1400px] mx-auto px-6 py-20"
        variants={sectionContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* ---------- CLIPS ---------- */}
          <motion.div variants={fadeUp}>
            <h3 className="mb-6 text-lg uppercase tracking-wide font-['Cormorant_Garamond']">
              Clips
            </h3>

            <div className="grid grid-cols-2 gap-5">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="group relative aspect-video rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-700"
                >
                  <img
                    src="https://img.freepik.com/premium-photo/lord-vishnu-preserver-universe-protector-dharma_1319351-32644.jpg"
                    alt="Clip"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-14 w-14 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-all">
                      ▶
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ---------- STATICS ---------- */}
          <motion.div variants={fadeUp}>
            <h3 className="mb-6 text-lg uppercase tracking-wide font-['Cormorant_Garamond']">
              Statics
            </h3>

            <div className="grid grid-cols-2 gap-5">
              {staticImages.map((image, i) => (
                <div
                  key={i}
                  className="group relative aspect-video rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-700"
                >
                  <img
                    src={image}
                    alt={`Visual ${i}`}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div className="mt-20 text-center" variants={fadeUp}>
          <button className="px-10 py-3 bg-[#D4AF37] text-black rounded-lg hover:scale-105 transition">
            Open Media Hub
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MediaHub;
