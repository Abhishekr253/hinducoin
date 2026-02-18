import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const festivalData = {
  January: {
    14: "Makar Sankranti",
    15: "Pongal",
    13: "Lohri",
    26: "Republic Day",
  },
  February: {
    14: "Vasant Panchami",
    18: "Maha Shivratri",
  },
  March: {
    8: "Holi",
    30: "Ram Navami",
  },
  April: {
    13: "Baisakhi",
    4: "Mahavir Jayanti",
  },
  May: {
    23: "Buddha Purnima",
  },
  June: {
    20: "Rath Yatra",
  },
  July: {
    21: "Guru Purnima",
  },
  August: {
    19: "Raksha Bandhan",
    26: "Janmashtami",
    15: "Independence Day",
  },
  September: {
    7: "Ganesh Chaturthi",
  },
  October: {
    12: "Dussehra",
  },
  November: {
    1: "Diwali",
  },
  December: {
    25: "Christmas",
  },
};

const months = Object.keys(festivalData);

export default function FestivalCalendar({ isOpen, onClose }) {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(
    new Date().getMonth()
  );

  const currentMonth = months[currentMonthIndex];
  const year = new Date().getFullYear();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  const daysInMonth = new Date(year, currentMonthIndex + 1, 0).getDate();
  const firstDay = new Date(year, currentMonthIndex, 1).getDay();

  const prevMonth = () =>
    setCurrentMonthIndex((prev) => (prev === 0 ? 11 : prev - 1));

  const nextMonth = () =>
    setCurrentMonthIndex((prev) => (prev === 11 ? 0 : prev + 1));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
   <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  className="
    relative
    w-[92%] sm:w-[95%] md:w-[850px]
    max-h-[85vh]
    overflow-hidden
    bg-[#05070C]
    border border-[#D4AF37]/30
    rounded-xl sm:rounded-2xl
    shadow-[0_0_40px_rgba(212,175,55,0.12)]
  "
>


        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 border-b border-[#D4AF37]/20">
  <div className="flex items-center gap-3 sm:gap-4">
    <button
      onClick={prevMonth}
      className="text-[#D4AF37] hover:scale-110 transition"
    >
      <ChevronLeft size={20} />
    </button>

    <h2 className="text-sm sm:text-lg md:text-2xl tracking-[0.12em] sm:tracking-[0.18em] uppercase font-light text-white text-center">
      {currentMonth} {year}
    </h2>

    <button
      onClick={nextMonth}
      className="text-[#D4AF37] hover:scale-110 transition"
    >
      <ChevronRight size={20} />
    </button>
  </div>

  <button
    onClick={onClose}
    className="text-white/60 hover:text-[#D4AF37] transition"
  >
    <X size={20} />
  </button>
</div>


        {/* Calendar Grid */}
        <div className="p-3 sm:p-6 overflow-y-auto max-h-[calc(100vh-120px)] sm:max-h-none">
  {/* Week Days */}
  <div className="grid grid-cols-7 text-center text-[10px] sm:text-xs md:text-sm text-white/60 mb-3 sm:mb-4">
    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
      <div key={d}>{d}</div>
    ))}
  </div>

  <AnimatePresence mode="wait">
    <motion.div
      key={currentMonth}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-7 gap-1 sm:gap-2 md:gap-3"
    >
      {Array.from({ length: firstDay }).map((_, i) => (
        <div key={`empty-${i}`} />
      ))}

      {Array.from({ length: daysInMonth }).map((_, day) => {
        const date = day + 1;
        const festival = festivalData[currentMonth]?.[date];

        return (
          <div
            key={date}
            className="
              min-h-[60px] sm:min-h-[75px] md:min-h-[90px]
              p-1.5 sm:p-2
              rounded-lg
              border border-[#D4AF37]/10
              hover:border-[#D4AF37]/40
              transition
              flex flex-col
            "
          >
            <div className="text-[10px] sm:text-xs md:text-sm text-white/70">
              {date}
            </div>

            {festival && (
              <div className="
                mt-1
                text-[9px] sm:text-[10px] md:text-xs
                text-[#D4AF37]
                leading-snug
                break-words
              ">
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
