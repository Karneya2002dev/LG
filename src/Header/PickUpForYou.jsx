import React, { useState, useMemo, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight, FiHeart } from "react-icons/fi";
import { BiGitCompare } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

// Assets (Ensure these paths match your project structure)
import tv from "../assets/tv.jpeg";
import ac from "../assets/ac.png";
import wash from "../assets/washing.png";
import fridge from "../assets/fridge.png";

const productsData = [
  {
    id: 1,
    category: "Best Deal",
    model: "55UAB2006LA",
    title: "LG 139 cm (55) 4K UHD AI UA8200 Smart TV with α7 Gen5 AI Processor",
    rating: 4.6,
    reviews: 154,
    variants: ["65", "55", "50", "43"],
    price: 39990,
    mrp: 66290,
    img: tv,
    tag: "CASHBACK | BEST SELLER"
  },
  {
    id: 2,
    category: "Newest",
    model: "AS-Q18JNXE",
    title: "LG 3 Star (1.5) Split AC, AI Convertible 6-in-1 Cooling, 2026 Model",
    rating: 4.7,
    reviews: 3,
    variants: ["1.0", "1.5", "2.0"],
    price: 39390,
    mrp: 75190,
    img: ac,
    tag: "CASHBACK | 2026 Model"
  },
  {
    id: 3,
    category: "Most Popular",
    model: "FHP1209Z5M",
    title: "LG 9Kg Front Load Washing Machine, AI Direct Drive™, Steam™",
    rating: 4.8,
    reviews: 44,
    variants: ["7.0", "8.0", "9.0"],
    price: 39990,
    mrp: 53990,
    img: wash,
    tag: "CASHBACK | BEST SELLER"
  }
];

// Reusable Star Component
const StarRating = ({ rating }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} size={11} className={i < Math.floor(rating) ? "text-yellow-400" : "text-gray-200"} />
    ))}
  </div>
);

const ProductCard = ({ item, onLearnMore }) => {
  const [selectedVariant, setSelectedVariant] = useState(item.variants[1]); // Default to second variant
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="bg-white rounded-4xl p-7 h-155 flex flex-col relative group shadow-sm border border-transparent hover:border-gray-100 transition-all">
      {/* Interaction Icons */}
      <div className="absolute top-6 right-6 flex flex-col gap-4 z-10">
        <FiHeart 
          size={20} 
          className={`cursor-pointer transition ${isWishlisted ? "text-red-500 fill-red-500" : "text-gray-300 hover:text-red-500"}`} 
          onClick={() => setIsWishlisted(!isWishlisted)}
        />
        <BiGitCompare size={20} className="text-gray-300 cursor-pointer hover:text-black transition" />
      </div>

      <div className="mb-1">
        <span className="text-red-600 text-[10px] font-extrabold tracking-widest uppercase">{item.tag}</span>
        <div className="text-gray-400 text-[11px] font-medium mt-1 uppercase flex items-center gap-1">
          {item.model} <span className="cursor-pointer">❐</span>
        </div>
      </div>

      <h3 className="text-[17px] font-bold leading-tight mb-2 line-clamp-2 min-h-10">{item.title}</h3>

      <div className="flex items-center gap-1.5 mb-4">
        <StarRating rating={item.rating} />
        <span className="text-[11px] text-gray-500 font-bold mt-0.5">{item.rating} ({item.reviews}) ⌵</span>
      </div>

      {/* Variant Selection Logic */}
      <div className="flex gap-1.5 mb-6">
        {item.variants?.map((v) => (
          <button 
            key={v} 
            onClick={() => setSelectedVariant(v)}
            className={`min-w-9 h-6 text-[10px] font-bold border rounded flex items-center justify-center transition
            ${selectedVariant === v ? 'border-black bg-white text-black' : 'border-gray-200 text-gray-400'}`}
          >
            {v}
          </button>
        ))}
      </div>

      <div className="flex-1 flex items-center justify-center mb-6">
        <img src={item.img} alt={item.title} className="max-h-44 w-auto object-contain" />
      </div>

      <div className="mt-auto">
        <div className="text-[11px] text-gray-500 mb-1">
          MRP (Incl. of all taxes) <span className="line-through">₹{item.mrp.toLocaleString()}</span> 
          <span className="text-black font-bold ml-1">Save ₹{(item.mrp - item.price).toLocaleString()}</span>
        </div>
        <div className="text-[32px] font-black leading-none mb-1">₹{item.price.toLocaleString()}</div>
        <div className="text-[12px] text-gray-600 font-medium mb-6 underline decoration-gray-300 underline-offset-4">
          No Cost EMI starts from ₹{Math.round(item.price/12).toLocaleString()}/month
        </div>

        <div className="flex gap-2">
          <button 
            onClick={() => onLearnMore(item)}
            className="flex-1 py-3.5 border border-gray-300 rounded-xl text-xs font-bold hover:bg-gray-50 transition"
          >
            Learn More
          </button>
          <button className="flex-1 py-3.5 bg-[#ea1917] text-white rounded-xl text-xs font-bold hover:bg-[#c41513] transition shadow-lg shadow-red-500/10">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

const PicksForYou = () => {
  const [activeTab, setActiveTab] = useState("Best Deal");
  const [currentIndex, setCurrentIndex] = useState(1);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  
  const tabs = ["Best Deal", "Recently Viewed", "Most Popular", "Newest"];

  // Handle Recently Viewed Logic
  const addToRecentlyViewed = (product) => {
    setRecentlyViewed(prev => {
      const filtered = prev.filter(p => p.id !== product.id);
      return [product, ...filtered].slice(0, 4); // Keep last 4
    });
  };

  const filteredProducts = useMemo(() => {
    if (activeTab === "Recently Viewed") return recentlyViewed;
    return productsData.filter(p => p.category === activeTab || activeTab === "Best Deal");
  }, [activeTab, recentlyViewed]);

  return (
    <section className="bg-[#f4efe9] py-16 px-6 md:px-20 font-sans tracking-tight">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-[42px] font-bold mb-6">PICKS FOR YOU:</h2>
          <div className="flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-[15px] font-bold transition-all relative ${
                  activeTab === tab ? "text-black" : "text-gray-400"
                }`}
              >
                {tab}
                {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600" />}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-5">
          <span className="text-2xl font-light text-gray-400">
            <span className="text-black">{currentIndex}</span>/{filteredProducts.length || 1}
          </span>
          <div className="flex gap-2">
            <button className="p-prev w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-300 hover:border-black hover:text-black transition">
              <FiChevronLeft size={24} />
            </button>
            <button className="p-next w-12 h-12 rounded-full border border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition">
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <Swiper
          modules={[Navigation]}
          navigation={{ nextEl: ".p-next", prevEl: ".p-prev" }}
          onSlideChange={(s) => setCurrentIndex(s.realIndex + 1)}
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{ 320: { slidesPerView: 1.2 }, 768: { slidesPerView: 2.5 }, 1024: { slidesPerView: 4 } }}
        >
          {filteredProducts.map((item) => (
            <SwiperSlide key={`${activeTab}-${item.id}`}>
              <ProductCard item={item} onLearnMore={addToRecentlyViewed} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="h-100 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-4xl text-gray-400 font-bold">
          No items to show in {activeTab}
        </div>
      )}
    </section>
  );
};

export default PicksForYou;