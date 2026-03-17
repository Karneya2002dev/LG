import React, { useState, useMemo, useRef } from 'react';
import { ChevronRight, ChevronLeft, Star } from 'lucide-react';
import all from "../assets/Alll.svg";
import app from "../assets/applicance.svg";
import audio from "../assets/audio.svg";
import computer from "../assets/computer.svg";

const products = [
  { id: 1, category: 'TV & Soundbars', rank: "1", title: "LG 108 cm (43) 4K UHD AI UA8250...", rating: 5.0, img: "https://www.lg.com/content/dam/channel/wcms/in/images/tv-images/new/newone/43UA82506LA-2010X1334.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800", price: "36660", mrp: "46000" },
  { id: 2, category: 'TV & Soundbars', rank: "2", title: "LG 108 cm (43) 4K UHD AI UA8200...", rating: 4.6, img: "https://www.lg.com/content/dam/channel/wcms/in/images/tv-images/new/newone/43UA82006LA-450X450.jpg/jcr:content/renditions/thum-350x350.jpeg", price: "30990", mrp: "46000" },
  { id: 3, category: 'Audio', rank: "3", title: "LG Soundbar Dolby Atmos...", rating: 4.3, img: "https://www.lg.com/content/dam/channel/wcms/in/images/audio.jpg", price: "19990", mrp: "29990" },
  { id: 4, category: 'Monitors', rank: "4", title: "LG UltraWide Monitor...", rating: 4.5, img: "https://www.lg.com/content/dam/channel/wcms/in/images/monitor.jpg", price: "14990", mrp: "21240" },
];

export default function LGTopSellers() {

  const [activeCategory, setActiveCategory] = useState("TV/Audio/Video");
  const [activeTab, setActiveTab] = useState("All");

  const sliderRef = useRef();

  const categoryData = {
    "Appliances": ['All', 'Refrigerators', 'Washing Machines'],
    "TV/Audio/Video": ['All', 'TV & Soundbars', 'Audio'],
    "Computing": ['All', 'Monitors'],
    "Air Solutions": ['All', 'Air Conditioners']
  };

  const tabs = categoryData[activeCategory] || ['All'];

  // 🔥 FILTER LOGIC
  const filteredProducts = useMemo(() => {
    if (activeTab === 'All') return products;
    return products.filter(p => p.category === activeTab);
  }, [activeTab]);

  // 🔥 SCROLL FUNCTIONS (LG style arrows)
  const scroll = (dir) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="bg-[#f2efe9] px-4 md:px-16 py-10">

      {/* 🔥 Categories */}
      <div className="flex justify-center gap-10 mb-8 overflow-x-auto">

        {["Appliances", "TV/Audio/Video", "Computing", "Air Solutions"].map((cat, i) => (
          <CategoryItem
            key={i}
            src={[all, app, audio, computer][i]}
            label={cat}
            active={activeCategory === cat}
            onClick={() => {
              setActiveCategory(cat);
              setActiveTab("All");
            }}
          />
        ))}

      </div>

      {/* 🔥 Tabs */}
      <div className="flex items-center border-b mb-8">

        <div className="flex gap-6 overflow-x-auto text-sm font-medium pb-3">

          {tabs.map((tab) => (
            <span
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer whitespace-nowrap ${
                activeTab === tab
                  ? "text-black border-b-2 border-red-500 pb-2"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </span>
          ))}

        </div>

      </div>

      {/* 🔥 Heading + Arrows */}
      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Our Top Sellers</h2>
          <p className="text-gray-500 text-sm">Trending favourites based on purchases.</p>
        </div>

        <div className="flex gap-2">
          <button onClick={() => scroll("left")} className="p-2 border rounded-full">
            <ChevronLeft />
          </button>
          <button onClick={() => scroll("right")} className="p-2 border rounded-full">
            <ChevronRight />
          </button>
        </div>

      </div>

      {/* 🔥 HORIZONTAL SLIDER (like LG) */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {filteredProducts.map((p) => (
          <div key={p.id} className="min-w-55 bg-white rounded-2xl p-4 shadow-sm">

            <span className="text-xs bg-red-600 text-white px-2 py-1 rounded">
              #{p.rank}
            </span>

            <h3 className="text-sm font-semibold mt-2">{p.title}</h3>

            <div className="flex items-center text-yellow-400 text-xs mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} fill={i < Math.floor(p.rating) ? "currentColor" : "none"} />
              ))}
              <span className="text-gray-500 ml-1">{p.rating}</span>
            </div>

            <div className="flex justify-center my-3">
              <img src={p.img} className="h-20 object-contain" />
            </div>

            <div className="text-xs text-gray-400 line-through">₹{p.mrp}</div>
            <div className="font-bold text-lg">₹{p.price}</div>

            <div className="flex gap-2 mt-3">
              <button className="flex-1 border rounded-md py-1 text-xs">Learn</button>
              <button className="flex-1 bg-red-600 text-white rounded-md py-1 text-xs">Buy</button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

function CategoryItem({ src, label, active, onClick }) {
  return (
    <div onClick={onClick} className="flex flex-col items-center text-xs cursor-pointer">
      <div className={`w-14 h-14 rounded-full flex items-center justify-center ${active ? "bg-white shadow" : ""}`}>
        <img src={src} className="w-6 h-6" />
      </div>
      <span className={`mt-2 ${active ? "text-black font-semibold" : "text-gray-500"}`}>
        {label}
      </span>
    </div>
  );
}