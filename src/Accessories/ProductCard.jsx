import React, { useRef, useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Use placeholder if pic is not available
import pic from "../assets/pick1.avif";

const productsData = [
  {
    id: "CLS31460001",
    name: "LG Washing Machine ScaleGo 3-Pack Tub Cleaner",
    price: "₹704",
    old: "₹799",
    img: pic,
    rating: 4.6,
    tab: "deals"
  },
  {
    id: "CLS31020007",
    name: "Outdoor Air Conditioner Wall Mounting Bracket",
    price: "₹1180",
    old: "₹1499",
    img: "https://www.lg.com/content/dam/channel/wcms/in/accessories_parts/lg-com/accessories/air-conditioners/others/cls31020007/gallery/air-conditioners-others-cls31020007-basic-large-image-01.jpg/jcr:content/renditions/thum-350x350.jpeg",
    rating: 3.8,
    tab: "deals"
  },
  {
    id: "CLS31460004",
    name: "Liquid Detergent for Cloth Washing",
    price: "₹369",
    old: "₹399",
    img: "https://www.lg.com/content/dam/channel/wcms/in/accessories_parts/lg-com/accessories/washing-machine/others/cls31460004/gallery/RP-LABEL-1--450x450.jpg/jcr:content/renditions/thum-350x350.jpeg",
    rating: 4.5,
    tab: "popular"
  },
  {
    id: "AGM75891901",
    name: "Mineral Booster Filter for LG Purifiers",
    price: "₹866",
    old: "₹1199",
    img: "https://www.lg.com/content/dam/channel/wcms/in/accessories_parts/lg-com/accessories/water-purifiers/filter/agm75891901/gallery/water-purifiers-filter-agm75891901-basic-large-01.jpg/jcr:content/renditions/thum-350x350.jpeg",
    rating: 5.0,
    tab: "newest"
  },
  // Added more items so the slider actually slides
  { id: "X1", name: "LG Remote Control", price: "₹450", old: "₹600", img: pic, rating: 4.0, tab: "deals" },
  { id: "X2", name: "LG Microwave Tray", price: "₹900", old: "₹1200", img: pic, rating: 4.2, tab: "deals" },
  { id: "X3", name: "LG Filter Pro", price: "₹1500", old: "₹1800", img: pic, rating: 4.9, tab: "deals" },
];

export function PicksSection() {
  const swiperRef = useRef(null);
  const [activeTab, setActiveTab] = useState("deals");
  const [activeIndex, setActiveIndex] = useState(1);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // 🔥 Filter products based on activeTab
  const products = useMemo(() => {
    return productsData.filter(p => p.tab === activeTab);
  }, [activeTab]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={14}
        fill={i < Math.floor(rating) ? "#ffb400" : "none"}
        stroke={i < Math.floor(rating) ? "#ffb400" : "#d1d5db"}
      />
    ));
  };

  return (
    <div className="bg-[#e9e3da] py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-4xl font-semibold">Picks for you</h2>
            <div className="flex gap-6 mt-4 text-sm font-semibold uppercase tracking-wider">
              {["deals", "popular", "newest"].map((tab) => (
                <span
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setActiveIndex(1); // Reset index on tab change
                  }}
                  className={`cursor-pointer pb-1 transition-all border-b-2 ${
                    activeTab === tab ? "border-black text-black" : "border-transparent text-gray-400"
                  }`}
                >
                  {tab === "deals" ? "BEST DEALS" : tab === "popular" ? "Most Popular" : "NEWEST"}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 self-end md:self-auto">
            <span className="text-sm font-medium">
              {activeIndex} / {products.length}
            </span>

            <button
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
              className={`w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition ${
                isBeginning ? "opacity-30 cursor-not-allowed" : "hover:bg-white"
              }`}
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
              className={`w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition ${
                isEnd ? "opacity-30 cursor-not-allowed" : "hover:bg-white"
              }`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          key={activeTab} 
          spaceBetween={20}
          slidesPerView={4}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex + 1);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-4"
        >
          {products.map((p, i) => (
            <SwiperSlide key={p.id || i}>
              <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition h-full flex flex-col">
                <p className="text-[10px] text-gray-400 font-mono mb-1">{p.id || 'N/A'}</p>

                <h3 className="text-[13px] font-semibold mb-2 line-clamp-2 h-10 leading-snug">
                  {p.name}
                </h3>

                <div className="flex items-center gap-1 mb-4">
                  <div className="flex">{renderStars(p.rating)}</div>
                  <span className="text-xs text-gray-400 ml-1 font-bold">{p.rating}</span>
                </div>

                <div className="grow flex items-center justify-center mb-6">
                    <img src={p.img} alt={p.name} className="h-36 w-full object-contain" />
                </div>

                <div className="mt-auto">
                    <p className="text-[11px] text-gray-500 mb-1">
                      MRP (Incl. of all taxes) <span className="line-through ml-1">{p.old}</span>
                    </p>
                    <p className="text-xl font-bold mb-4">{p.price}</p>

                    <div className="flex gap-2">
                      <button className="border border-black text-black font-bold py-2 rounded-lg text-[11px] w-full hover:bg-black hover:text-white transition">
                        Learn More
                      </button>
                      <button className="bg-[#a50034] text-white font-bold py-2 rounded-lg text-[11px] w-full hover:bg-[#87002a] transition">
                        Buy Now
                      </button>
                    </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}