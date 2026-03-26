import { useEffect, useState, useRef } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function ScrollButtons() {
  const [direction, setDirection] = useState("down");
  const [isTop, setIsTop] = useState(true);
  const [isBottom, setIsBottom] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      setDirection(currentY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = currentY;

      setIsTop(currentY < 50);
      setIsBottom(currentY + windowHeight >= fullHeight - 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  // 🎯 Common button style (clean & reusable)
  const baseStyle =
    "p-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300";

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* 🔚 Bottom → UP */}
      {isBottom && (
        <button onClick={scrollToTop} className={baseStyle}>
          <ArrowUp size={18} />
        </button>
      )}

      {/* ⬇️ Scrolling down */}
      {!isTop && !isBottom && direction === "down" && (
        <button onClick={scrollToNext} className={baseStyle}>
          <ArrowDown size={18} />
        </button>
      )}

      {/* ⬆️ Scrolling up */}
      {!isTop && !isBottom && direction === "up" && (
        <button onClick={scrollToTop} className={baseStyle}>
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}