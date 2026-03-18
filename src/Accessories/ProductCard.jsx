import React, { useRef, useState, useMemo, useEffect } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight, Star, ShoppingCart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function PicksSection() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef(null);

  const [activeTab, setActiveTab] = useState("deals");
  const [activeIndex, setActiveIndex] = useState(1);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProductsData(res.data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const products = useMemo(() => {
    return productsData.filter(
      (p) => p.tab?.toLowerCase().trim() === activeTab.toLowerCase()
    );
  }, [productsData, activeTab]);

  const renderStars = (rating = 0) => {
    const rate = Number(rating) || 0;
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={12}
            fill={i < Math.floor(rate) ? "#ffb400" : "none"}
            stroke={i < Math.floor(rate) ? "#ffb400" : "#d1d5db"}
          />
        ))}
      </div>
    );
  };

  if (loading) return <div className="py-20 text-center animate-pulse text-gray-400">Updating picks...</div>;

  return (
    <div className="bg-[#f8f6f3] py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="w-full md:w-auto">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Picks for you</h2>
            <div className="flex gap-8 mt-6 border-b border-gray-200">
              {["deals", "popular", "newest"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setActiveIndex(1); }}
                  className={`pb-3 text-xs font-bold uppercase tracking-widest transition-all relative ${
                    activeTab === tab ? "text-black" : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab}
                  {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#a50034]" />}
                </button>
              ))}
            </div>
          </div>

          {/* CONTROLS */}
          <div className="flex items-center gap-4">
            <div className="text-xs font-mono text-gray-500 mr-2">
              {String(products.length > 0 ? activeIndex : 0).padStart(2, '0')} / {String(products.length).padStart(2, '0')}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={isBeginning}
                className={`p-3 rounded-full border transition-all ${isBeginning ? "opacity-20" : "hover:bg-white border-gray-300 shadow-sm"}`}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                disabled={isEnd}
                className={`p-3 rounded-full border transition-all ${isEnd ? "opacity-20" : "hover:bg-white border-gray-300 shadow-sm"}`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* SWIPER */}
        <Swiper
          key={activeTab}
          spaceBetween={24}
          onSwiper={(s) => { swiperRef.current = s; setIsBeginning(s.isBeginning); setIsEnd(s.isEnd); }}
          onSlideChange={(s) => { setActiveIndex(s.activeIndex + 1); setIsBeginning(s.isBeginning); setIsEnd(s.isEnd); }}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {products.map((p) => {
            const discount = p.old_price ? Math.round(((p.old_price - p.price) / p.old_price) * 100) : 0;
            
            return (
              <SwiperSlide key={p.id || p.product_id} className="pb-4">
                <div className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-transparent hover:border-gray-100">
                  
                  {/* TOP TAGS */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold bg-gray-100 px-2 py-1 rounded text-gray-500 uppercase tracking-tighter">
                      {p.product_id || "LG-UNIT"}
                    </span>
                    {discount > 0 && (
                      <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-1 rounded">
                        SAVE {discount}%
                      </span>
                    )}
                  </div>

                  {/* IMAGE */}
                  <div className="relative h-48 mb-6 overflow-hidden flex items-center justify-center">
                    <img
                      src={p.image || "/placeholder.png"}
                      alt={p.name}
                      className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="grow">
                    <h3 className="text-sm font-bold text-gray-800 leading-tight mb-2 line-clamp-2 h-10">
                      {p.name}
                    </h3>
                    
                    {/* NEW: Description Teaser */}
                    <p className="text-[11px] text-gray-500 line-clamp-2 mb-3 leading-relaxed">
                      {p.description || "Premium quality accessory designed for maximum compatibility and performance."}
                    </p>

                    <div className="flex items-center gap-2 mb-4">
                      {renderStars(p.rating)}
                      <span className="text-[10px] font-bold text-gray-400">({p.rating})</span>
                    </div>

                    {/* NEW: Color Selection Mockup */}
                    {p.colors && (
                      <div className="flex gap-1.5 mb-5">
                        {p.colors.map((c, i) => (
                          <div 
                            key={i} 
                            className="w-4 h-4 rounded-full border border-gray-200 cursor-pointer hover:ring-1 ring-offset-1 ring-gray-400"
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* BOTTOM SECTION */}
                  <div className="pt-4 border-t border-gray-50">
                    <div className="mb-4">
                      {p.old_price && (
                        <span className="text-xs text-gray-400 line-through block">₹{p.old_price}</span>
                      )}
                      <span className="text-2xl font-black text-[#a50034]">₹{p.price}</span>
                    </div>

                    <div className="grid grid-cols-5 gap-2">
                      <button className="col-span-4 bg-gray-900 text-white text-[10px] font-bold py-3 rounded-xl hover:bg-black transition-colors flex items-center justify-center gap-2 uppercase">
                        <ShoppingCart size={14} /> Buy Now
                      </button>
                      <button className="col-span-1 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}