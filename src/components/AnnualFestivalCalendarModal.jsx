import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const festivalData = {
  January: { 14: "Makar Sankranti", 26: "Republic Day" },
  February: { 14: "Vasant Panchami" },
  March: { 8: "Holi" },
  April: { 13: "Baisakhi" },
  May: { 23: "Buddha Purnima" },
  June: { 20: "Rath Yatra" },
  July: { 21: "Guru Purnima" },
  August: { 15: "Independence Day", 19: "Raksha Bandhan" },
  September: { 7: "Ganesh Chaturthi" },
  October: { 12: "Dussehra" },
  November: { 1: "Diwali" },
  December: { 25: "Christmas" },
};

const months = Object.keys(festivalData);

export default function AnnualCalendarModal({ isOpen, onClose }) {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const [year, setYear] = useState(new Date().getFullYear());

  const monthName = months[selectedMonth];

  const daysInMonth = new Date(year, selectedMonth + 1, 0).getDate();
  const firstDay = new Date(year, selectedMonth, 1).getDay();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative w-[90%] md:w-[620px]   /* Smaller width */
             max-h-[80vh] overflow-y-auto
             bg-[#05070C] 
             border border-[#D4AF37]/30   
             rounded-2xl 
             shadow-[0_0_40px_rgba(212,175,55,0.15)]"
      >
        {/* Header */}
        <div className="relative px-4 sm:px-6 py-4 sm:py-5 border-b border-[#D4AF37]/20">
          {/* Main Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
            {/* YEAR SELECTOR */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setYear((prev) => prev - 1)}
                className="text-[#D4AF37] hover:scale-110 transition"
              >
                <ChevronLeft size={20} />
              </button>

              <span className="text-base sm:text-lg md:text-xl text-white tracking-widest min-w-[70px] text-center">
                {year}
              </span>

              <button
                onClick={() => setYear((prev) => prev + 1)}
                className="text-[#D4AF37] hover:scale-110 transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* MONTH SELECTOR */}
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  setSelectedMonth((prev) => (prev === 0 ? 11 : prev - 1))
                }
                className="text-[#D4AF37] hover:scale-110 transition"
              >
                <ChevronLeft size={20} />
              </button>

              <span className="text-base sm:text-lg md:text-xl text-white tracking-widest uppercase min-w-[110px] sm:min-w-[120px] text-center">
                {monthName}
              </span>

              <button
                onClick={() =>
                  setSelectedMonth((prev) => (prev === 11 ? 0 : prev + 1))
                }
                className="text-[#D4AF37] hover:scale-110 transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 sm:right-6 top-4 sm:top-5 text-white/60 hover:text-[#D4AF37] transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Month Selector */}
        <div className="p-4 sm:p-6">
          {/* Week Days */}
          <div className="grid grid-cols-7 text-center text-[10px] sm:text-xs md:text-sm text-white/60 mb-3 sm:mb-4">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          {/* Calendar Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${monthName}-${year}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-7 gap-1 sm:gap-2"
            >
              {/* Empty spaces before first day */}
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}

              {Array.from({ length: daysInMonth }).map((_, day) => {
                const date = day + 1;
                const festival = festivalData[monthName]?.[date];

                return (
                  <div
                    key={date}
                    className="min-h-[70px] sm:min-h-[85px] 
                       p-1.5 sm:p-2 
                       rounded-lg
                       border border-[#D4AF37]/10
                       hover:border-[#D4AF37]/40
                       transition
                       flex flex-col"
                  >
                    {/* Date */}
                    <div className="text-xs sm:text-sm md:text-base font-semibold text-white">
                      {date}
                    </div>

                    {/* Festival Text */}
                    {festival && (
                      <div
                        className="mt-1 text-[10px] sm:text-xs md:text-sm 
                           font-medium text-[#D4AF37]
                           leading-snug break-words"
                      >
                        {festival}
                      </div>
                    )}
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
