import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center gap-4 z-50">

      {/* Scroll To Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="w-14 h-14 rounded-full bg-gray-200 shadow-md flex items-center justify-center hover:scale-105 transition"
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* Chat Button */}
      <button className="relative w-16 h-16 rounded-full bg-linear-to-tr from-pink-500 via-purple-500 to-blue-500 p-1 shadow-lg">

        {/* Glow Pulse */}
        <span className="absolute inset-0 rounded-full bg-linear-to-tr from-pink-500 via-purple-500 to-blue-500 opacity-60 animate-ping"></span>

        {/* Inner Circle */}
        <div className="relative w-full h-full bg-black rounded-full flex items-center justify-center">

          {/* Animated Robot */}
          <span className="text-white text-xl animate-bounce">
            🤖
          </span>

        </div>

      </button>

    </div>
  );
};

export default FloatingButtons;