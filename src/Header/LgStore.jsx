import React, { useState, useMemo } from 'react';
import { ChevronRight, ChevronLeft, Star } from 'lucide-react';
import all from "../assets/Alll.svg";
import app from "../assets/applicance.svg";
import audio from "../assets/audio.svg";
import computer from "../assets/computer.svg";

const products = [
  { id: 1, category: 'TV & Soundbars', rank: "1", model: "43UA82506LA", title: "LG 108 cm (43) 4K UHD AI UA8250 Smart TV with α7...", rating: 5.0, reviews: 7, img: "https://www.lg.com/content/dam/channel/wcms/in/images/tv-images/new/newone/43UA82506LA-2010X1334.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800", price: "39990", mrp: "66290" },
  { id: 2, category: 'TV & Soundbars', rank: "2", model: "43UA82006LA", title: "LG 108 cm (43) 4K UHD AI UA8200 Smart TV with α7...", rating: 4.6, reviews: 154, img: "https://www.lg.com/content/dam/channel/wcms/in/images/tv-images/new/newone/43UA82006LA-450X450.jpg/jcr:content/renditions/thum-350x350.jpeg", price: "39390", mrp: "75190" },
  { id: 3, category: 'Refrigerators', rank: "3", model: "55UA82006LA", title: "LG 139 cm (55) 4K UHD AI UA8200 Smart TV with α7...", rating: 4.6, reviews: 154, img: "https://www.lg.com/content/dam/channel/wcms/in/images/tv-images/gallery/32LR570B6LA-450X450.jpg/jcr:content/renditions/thum-350x350.jpeg", price: "39990", mrp: "53990" },
  { id: 4, category: 'Washing Machines', rank: "4", model: "32LR570B6LA", title: "LG 80 cm (32) Smart TV (LR57), α5 Gen6 AI...", rating: 4.6, reviews: 27, img: "https://www.lg.com/content/dam/channel/wcms/in/images/tv-images/new/newone/55UA82506LA-450X450.jpg/jcr:content/renditions/thum-350x350.jpeg", price: "28899", mrp: "37099" },
];

export default function LGTopSellers() {
  const [activeCategory, setActiveCategory] = useState("TV/Audio/Video");
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8;

  // --- NAVIGATION DATA MAP ---
  // This ensures that when you click a top icon, the sub-tabs change.
  const categoryData = {
    "Appliances": ['All', 'Refrigerators', 'Washing Machines', 'Microwave Ovens', 'Dishwashers'],
    "TV/Audio/Video": ['All', 'TV & Soundbars', 'Lifestyle Screens', 'Audio', 'Projectors'],
    "Computing": ['All', 'Monitors', 'Laptops', 'Burners & Drives'],
    "Air Solutions": ['All', 'Air Conditioners', 'Air Purifiers', 'Dehumidifiers']
  };

  const tabs = categoryData[activeCategory] || ['All'];

  // --- NAVIGATION HANDLERS ---
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setActiveTab("All"); // Reset sub-tab when main category changes
    setCurrentPage(1);   // Reset pagination
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset pagination on filter change
  };

  // --- FILTERING LOGIC ---
  const filteredProducts = useMemo(() => {
    if (activeTab === 'All') {
      // Logic: Show products belonging to the sub-tabs of the active main category
      return products.filter(p => tabs.includes(p.category) || activeTab === 'All');
    }
    return products.filter(p => p.category === activeTab);
  }, [activeTab, activeCategory, tabs]);

  return (
    <div className="bg-[#f2efe9] min-h-screen font-sans text-[#333] px-6 py-12 md:px-16 select-none">
      
      {/* 1. Main Category Navigation */}
      <nav className="flex justify-center items-center gap-12 mb-10 overflow-x-auto no-scrollbar">
        <CategoryItem 
          src={all} 
          label="All" 
          active={activeCategory === "Appliances"} 
          onClick={() => handleCategoryChange("Appliances")} 
        />
        <CategoryItem 
          src={app} 
          label="TV/Audio/Video" 
          active={activeCategory === "TV/Audio/Video"} 
          onClick={() => handleCategoryChange("TV/Audio/Video")} 
        />
        <CategoryItem 
          src={audio} 
          label="Computing" 
          active={activeCategory === "Computing"} 
          onClick={() => handleCategoryChange("Computing")} 
        />
        <CategoryItem 
          src={computer} 
          label="Air Solutions" 
          active={activeCategory === "Air Solutions"} 
          onClick={() => handleCategoryChange("Air Solutions")} 
        />
      </nav>

      {/* 2. Sub-Category Tabs Navigation */}
      <div className="flex items-center gap-8 border-b border-gray-300 mb-12 relative">
        <div className="flex gap-8 text-[15px] font-bold pb-4 overflow-x-auto no-scrollbar scroll-smooth">
          {tabs.map((tab) => (
            <span 
              key={tab} 
              onClick={() => handleTabChange(tab)}
              className={`cursor-pointer whitespace-nowrap transition-all relative 
                ${activeTab === tab 
                  ? 'text-black after:content-[""] after:absolute after:-bottom-4.25 after:left-0 after:w-full after:h-0.75 after:bg-red-600' 
                  : 'text-gray-500 hover:text-black'}`}
            >
              {tab}
            </span>
          ))}
        </div>
        <div className="ml-auto pb-4 bg-linear-to-l from-[#f2efe9] pl-4">
          <ChevronRight className="text-gray-400 cursor-pointer hover:text-black" size={32} />
        </div>
      </div>

      {/* 3. Header & Pagination Controls */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-[42px] font-bold tracking-tight mb-2">Our Top Sellers</h1>
          <p className="text-[18px] text-gray-600 font-medium">Trending favourites based on purchases.</p>
        </div>
        <div className="flex items-center gap-5">
          <span className="text-lg font-medium text-gray-400">
            <span className="text-black font-semibold">{currentPage}</span> / {totalPages}
          </span>
          <div className="flex gap-2">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all 
                ${currentPage === 1 ? 'border-gray-200 text-gray-200 cursor-not-allowed' : 'border-gray-300 text-gray-400 hover:border-black hover:text-black'}`}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all 
                ${currentPage === totalPages ? 'border-gray-200 text-gray-200 cursor-not-allowed' : 'border-black text-black hover:bg-black hover:text-white'}`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* 4. Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-4xl p-6 flex flex-col relative shadow-sm hover:shadow-md transition-all duration-300 h-130 group">
              <div className="absolute top-0 left-6">
                <div className="bg-[#ea1917] text-white font-bold text-[14px] px-3 py-1 relative z-10 shadow-sm">
                  #{product.rank}
                  <div className="absolute -bottom-1.5 left-0 w-0 h-0 border-l-15 border-l-[#ea1917] border-b-[6px] border-b-transparent"></div>
                </div>
              </div>

              <div className="mt-8 mb-4">
                <div className="flex items-center gap-1 text-gray-400 text-[11px] font-bold uppercase mb-1">
                  {product.model} ❐
                </div>
                <h3 className="text-[15px] font-bold leading-[1.3] h-10 overflow-hidden mb-2 group-hover:text-red-600 transition-colors">
                  {product.title}
                </h3>
                <div className="flex items-center gap-1.5 text-yellow-400">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} stroke="currentColor" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-gray-500 mt-0.5">{product.rating} ({product.reviews}) ⌵</span>
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center py-4">
                <img src={product.img} alt="Product" className="max-h-36 object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>

              <div className="mt-auto">
                <div className="text-[11px] text-gray-500 mb-1">
                  MRP (Incl. of all taxes) <span className="line-through">₹{product.mrp}</span> <span className="text-black font-bold ml-1">Save ₹{parseInt(product.mrp) - parseInt(product.price)}</span>
                </div>
                <div className="text-[28px] font-black mb-1">₹{product.price}</div>
                <div className="text-[12px] text-gray-600 underline decoration-gray-300 underline-offset-4 mb-6">
                  No Cost EMI starts from ₹3166/month
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 py-3 border border-gray-300 rounded-xl text-xs font-bold hover:bg-gray-50 transition">
                    Learn More
                  </button>
                  <button className="flex-1 py-3 bg-[#ea1917] text-white rounded-xl text-xs font-bold hover:bg-[#c41513] transition">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-gray-400">No products found for this selection.</div>
        )}
      </div>
    </div>
  );
}

function CategoryItem({ src, label, active, onClick }) {
  return (
    <div 
      onClick={onClick} 
      className="flex flex-col items-center gap-3 cursor-pointer group shrink-0 relative pb-2"
    >
      <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${active ? 'bg-white shadow-lg border border-gray-100' : 'bg-transparent group-hover:bg-white/50'}`}>
        <img src={src} alt={label} className={`w-8 h-8 ${active ? '' : 'grayscale opacity-50'}`} />
      </div>
      <span className={`text-[12px] font-bold transition-colors ${active ? 'text-black' : 'text-gray-500 group-hover:text-black'}`}>
        {label}
      </span>
      {active && (
        <div className="absolute bottom-0 w-8 h-0.75 bg-red-600 rounded-full transition-all duration-300" />
      )}
    </div>
  );
}