import React, { useState, useEffect } from "react";
import {
  Search, User, ShoppingCart, Refrigerator, Microwave, 
  Droplets, AirVent, Wind, Tv, LayoutGrid, Pause, Menu
} from "lucide-react";
import { FaSoap } from "react-icons/fa";
import { GiWashingMachine } from "react-icons/gi";
import { Upgrade } from "./Upgrade";
import { PicksSection } from "./ProductCard";
import { InfoSection } from "./InfoSection";

const categories = [
  { name: "Refrigerators", icon: Refrigerator },
  { name: "Microwave Ovens", icon: Microwave },
  { name: "Water Purifiers", icon: Droplets },
  { name: "Washing Machines", icon: GiWashingMachine },
  { name: "Air Conditioners", icon: AirVent },
  { name: "Air Purifiers", icon: Wind },
  { name: "TVs", icon: Tv },
  { name: "Signage", icon: LayoutGrid },
  { name: "Dishwashers", icon: FaSoap },
];

const slides = [
  {
    tag: "Upgrade your Water Purifier",
    title: <>LG Water Purifier <br className="hidden md:block" /> Accessories</>,
    description: "Shop LG authorized water purifier accessories for seamless compatibility. See which accessories are right for your LG water purifier and buy them easily online.",
    bgColor: "bg-[#dcecf5]",
    images: ["https://m.media-amazon.com/images/I/81bgbTPOcKL._AC_UF894,1000_QL80_.jpg", "https://ankurelectricals.com/cdn/shop/files/4_9fa9235d-6d36-4348-b49b-d49930e00517.jpg?v=1728119001&width=1000"],
    type: "duo" 
  },
  {
    tag: "Upgrade your Air Conditioner",
    title: <>LG Air Conditioner <br className="hidden md:block" /> Accessories</>,
    description: "Shop LG authorized air conditioner accessories for seamless compatibility. See which accessories are right for your LG air conditioner and buy them easily online.",
    bgColor: "bg-[#e5e7eb]",
    images: ["https://cdn1.smartprix.com/rx-i5G0jlfZR-w420-h420/lg-us-q19mwze-1-5-to.webp", "", "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1000"],
    type: "lifestyle" 
  }
];

export default function LGHeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hideIcons, setHideIcons] = useState(false); // 🔥 NEW STATE

  // 🔥 SCROLL DETECTION
  useEffect(() => {
    const handleScroll = () => {
      setHideIcons(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const current = slides[currentIndex];

  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full font-sans text-[#333]">
        
        {/* 1. TOP MAIN HEADER */}
        <header className="w-full bg-[#f6f3eb] border-b border-gray-200 px-4 md:px-6 py-6 md:py-10">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4 md:gap-10">
              
              {/* 🔥 Hide menu icon on scroll */}
              {!hideIcons && (
                <Menu className="lg:hidden block cursor-pointer" size={24} />
              )}
              
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-[#a50034] rounded-full flex items-center justify-center text-white font-bold text-[10px] md:text-xs">LG</div>
                <span className="text-xl md:text-2xl font-bold tracking-tighter">LG</span>
              </div>
              
              <nav className="hidden lg:flex gap-6 text-[14px] font-medium text-gray-800">
                {["Shop", "TV/Audio/Video", "Home Appliances", "Air Solutions", "Computing", "Accessories", "Support"].map((link) => (
                  <a key={link} href="#" className={`hover:underline ${link === 'Accessories' ? 'border-b-2 border-black pb-1' : ''}`}>{link}</a>
                ))}
              </nav>
            </div>

            {/* 🔥 Hide right icons on scroll */}
            {!hideIcons && (
              <div className="flex items-center gap-3 md:gap-6">
                <div className="relative hidden sm:block">
                  <input type="text" placeholder="Search" className="bg-white border border-gray-300 rounded-full py-1.5 px-4 pl-10 text-sm w-40 md:w-64 focus:outline-none" />
                  <Search className="absolute left-3 top-2 text-gray-400" size={16} />
                </div>
                <User size={20} className="cursor-pointer" />
                <ShoppingCart size={20} className="cursor-pointer" />
              </div>
            )}
          </div>
        </header>

        {/* 2. CATEGORY NAV */}
       <nav className="w-full bg-[#f6f3eb] border-b border-gray-200 overflow-x-auto fixed top-25 z-20">
  <div className="flex justify-start md:justify-between px-4 py-6 md:py-8 min-w-max md:min-w-0 md:max-w-6xl mx-auto">
    
    {categories.map((item, i) => (
      <div
        key={i}
        className="flex flex-col items-center justify-center cursor-pointer 
        px-5 py-4 rounded-2xl transition-all duration-300
        hover:bg-white hover:shadow-sm group"
      >
        
        {/* ICON */}
        {!hideIcons && (
          <item.icon
            size={42}
            strokeWidth={1.5}
            className="text-gray-600 group-hover:text-black transition-colors duration-300"
          />
        )}

        {/* TEXT */}
        <span
  className="text-[13px] mt-3 font-semibold text-gray-500 uppercase tracking-tight
  group-hover:text-black transition-colors duration-300
  whitespace-nowrap"
>
  {item.name}
</span>
      </div>
    ))}

  </div>
</nav>

        {/* 3. DYNAMIC HERO SECTION */}
        <section className={`top-20 relative w-full min-h-125 md:min-h-137.5 ${current.bgColor} transition-colors duration-700 flex items-center`}>
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 py-12 md:py-20 z-10">
            
            {/* Left Content */}
            <div className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
              <span className="text-xs md:text-md font-bold text-gray-800 mb-2">{current.tag}</span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 md:mb-6 tracking-tight">
                {current.title}
              </h1>
              <p className="text-gray-700 text-sm md:text-[15px] max-w-sm leading-relaxed mb-8 md:mb-10">
                {current.description}
              </p>

              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <div 
                    key={i} 
                    onClick={() => setCurrentIndex(i)}
                    className={`h-0.5 w-12 md:w-16 cursor-pointer transition-all ${currentIndex === i ? "bg-black" : "bg-gray-300 hover:bg-gray-400"}`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="relative flex items-center justify-center lg:justify-end order-1 lg:order-2">
              {current.type === "lifestyle" ? (
                <div className="relative w-full max-w-75 md:max-w-100 h-75 md:h-100 flex items-center justify-center lg:justify-end">
                   <div className="absolute w-70 h-70 md:w-112.5 md:h-112.5 rounded-full overflow-hidden border-8 md:border-16 border-white/20">
                      <img src={current.images[2]} alt="bg" className="w-full h-full object-cover" />
                   </div>
                   <div className="relative z-20 bg-white rounded-full p-6 md:p-12 shadow-xl">
                      <img src={current.images[0]} alt="Accessory" className="w-20 md:w-32" />
                   </div>
                </div>
              ) : (
                <div className="relative z-10 flex items-end gap-2 pb-6 md:pb-10">
                  <img src={current.images[0]} alt="Filters" className="w-32 md:w-48 animate-in fade-in slide-in-from-bottom-4" />
                  <img src={current.images[1]} alt="Purifier" className="w-48 md:w-72 animate-in fade-in slide-in-from-bottom-8" />
                </div>
              )}
              
              {/* Arrows - Positioned better for mobile */}
              <div className="absolute -bottom-6 lg:bottom-10 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-0 flex items-center gap-3 bg-white/90 rounded-full px-4 py-1.5 shadow-sm z-30">
                <button onClick={prevSlide} className="text-xl font-light hover:text-red-700 px-2">{"<"}</button>
                <Pause size={12} className="fill-current" />
                <button onClick={nextSlide} className="text-xl font-light hover:text-red-700 px-2">{">"}</button>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#f6f3eb] py-4 px-4 text-center">
           <p className="text-[10px] text-gray-500 leading-tight">*The product images featured are for illustrative purposes only and may differ from actual product.</p>
        </footer>
      </div>

      <Upgrade />
      <PicksSection />
      <InfoSection />
    </div>
  );
}