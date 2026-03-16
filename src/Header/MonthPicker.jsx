import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";

// Assets
import appliance from "../assets/begin.png";
import electronics from "../assets/begin3.png";
import combo from "../assets/begin3.png";

const cards = [
  {
    id: 1,
    title: "Celebrate Festive Savings for Every New Beginning",
    subtitle: "Up to 48%* off | Cashback up to 22.5%* off",
    button: "Buy Appliances",
    image: appliance,
    bg: "bg-[#fde9ad]", // Lighter festive yellow
    isCombo: false,
  },
  {
    id: 2,
    title: "Celebrate Festive Savings for Every New Beginning",
    subtitle: "Up to 51%* off | Cashback up to 10%* off",
    button: "Buy Electronics & IT",
    image: electronics,
    bg: "bg-[#fde9ad]",
    isCombo: false,
  },
  {
    id: 3,
    title: "Extra upto 10%* off, with max savings of ₹20,000* on LG TV + Soundbar Combo",
    subtitle: "",
    button: "Buy Now",
    image: combo,
    bg: "bg-gradient-to-b from-[#e11d48] to-[#9f1239]", // Premium crimson gradient
    isCombo: true,
  },
];

const MonthHandpicks = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <section className="bg-[#f2ebe3] py-24 px-6 md:px-16 font-sans">
      {/* Title with larger, bolder style */}
      <h2 className="text-[44px] font-extrabold text-black mb-12 tracking-tight">
        Our Month’s Handpicks
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".handpick-next",
          prevEl: ".handpick-prev",
        }}
        onSlideChange={(s) => setCurrentIndex(s.realIndex + 1)}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div
              className={`rounded-[40px] h-145 flex flex-col overflow-hidden transition-transform duration-300 hover:scale-[1.02] shadow-sm ${card.bg}`}
            >
              {/* Product Visual Area */}
              <div className="relative h-[60%] flex items-center justify-center p-8">
                {card.isCombo && (
                  <div className="absolute top-6 right-8 bg-black/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Combo Offer
                  </div>
                )}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>

              {/* Text Content Area */}
              <div className={`flex-1 p-10 flex flex-col items-center text-center ${card.isCombo ? "text-white" : "text-black"}`}>
                <h3 className={`text-[24px] font-bold leading-[1.2] mb-3 max-w-[90%] ${card.isCombo ? "text-white" : "text-gray-900"}`}>
                  {card.title}
                </h3>

                {card.subtitle && (
                  <p className="text-[15px] font-medium opacity-80 mb-8">
                    {card.subtitle}
                  </p>
                )}

                <button
                  className={`mt-auto px-8 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg 
                  ${card.isCombo 
                    ? "bg-white text-black hover:bg-gray-100" // Buy Now for combo
                    : "bg-[#ea1917] text-white hover:bg-[#c41513] shadow-red-500/20"
                  }`}
                >
                  {card.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation - Minimalist Style */}
      <div className="flex justify-center items-center gap-8 mt-4">
        <div className="flex items-center gap-4">
          <button className="handpick-prev w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-black hover:text-black transition-all">
            <FiChevronLeft size={24} />
          </button>
          
          <div className="text-[18px] font-medium text-gray-400">
            <span className="text-black">{currentIndex}</span> / 2
          </div>

          <button className="handpick-next w-12 h-12 rounded-full border border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all">
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MonthHandpicks;