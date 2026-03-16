import React from 'react';
import { ChevronLeft, ChevronRight, Star, Copy } from 'lucide-react';

const products = [
  {
    id: 1,
    model: "SC9S",
    name: "LG Soundbar for OLED C Series with 3.1.3Ch, 400W,...",
    rating: 4.5,
    reviews: 167,
    mrp: 89990,
    price: 32490,
    save: 57500,
    emi: 1591,
    image: "https://www.lg.com/content/dam/channel/wcms/in/images/audio/sc9s_dindllk_eail_in_c/lSC9S-450.jpg/jcr:content/renditions/thum-350x350.jpeg", // Replace with actual LG image URL
  },
  {
    id: 2,
    model: "SC9S",
    name: "LG Soundbar for OLED C Series with 3.1.3Ch, 400W,...",
    rating: 4.5,
    reviews: 167,
    mrp: 89990,
    price: 32490,
    save: 57500,
    emi: 1591,
    image: "https://www.lg.com/content/dam/channel/wcms/in/images/audio/s40t-dindllk-eail-in-c/gallery/S40T-450.jpg/jcr:content/renditions/thum-350x350.jpeg", // Replace with actual LG image URL
  },
  {
    id: 3,
    model: "SC9S",
    name: "LG Soundbar for OLED C Series with 3.1.3Ch, 400W,...",
    rating: 4.5,
    reviews: 167,
    mrp: 89990,
    price: 32490,
    save: 57500,
    emi: 1591,
    image: "https://www.lg.com/content/dam/channel/wcms/in/images/dishwasher/dfb424fp_apzpeil_eail_in_c/01-Thumb_450.jpg/jcr:content/renditions/thum-350x350.jpeg", // Replace with actual LG image URL
  },
  {
    id: 4,
    model: "SC9S",
    name: "LG Soundbar for OLED C Series with 3.1.3Ch, 400W,...",
    rating: 4.5,
    reviews: 167,
    mrp: 89990,
    price: 32490,
    save: 57500,
    emi: 1591,
    image: "https://www.lg.com/content/dam/channel/wcms/in/images/audio/sc9s_dindllk_eail_in_c/lSC9S-450.jpg/jcr:content/renditions/thum-350x350.jpeg", // Replace with actual LG image URL
  },
  
];

const ProductCard = ({ product, rank }) => {
  return (
    <div className="relative flex flex-col bg-white rounded-2xl p-6 shadow-sm border border-gray-100 min-w-70 max-w-75">
      {/* Rank Badge */}
      <div className="absolute top-0 left-0 bg-red-600 text-white px-3 py-1 font-bold rounded-tl-xl rounded-br-xl">
        #{rank}
      </div>

      {/* Header Info */}
      <div className="mt-4 flex items-center gap-1 text-gray-500 text-xs font-semibold">
        {product.model} <Copy size={12} className="cursor-pointer" />
      </div>
      <h3 className="text-sm font-medium mt-1 leading-tight h-10 line-clamp-2">
        {product.name}
      </h3>

      {/* Rating */}
      <div className="flex items-center mt-2 gap-1">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill={i < 4 ? "currentColor" : "none"} />
          ))}
        </div>
        <span className="text-xs text-gray-600 font-bold">{product.rating} ({product.reviews})</span>
        <ChevronRight size={14} className="text-gray-400 rotate-90" />
      </div>

      {/* Product Image */}
      <div className="my-8 flex justify-center items-center h-40">
        <img src={product.image} alt={product.name} className="object-contain max-h-full" />
      </div>

      {/* Pricing Section */}
      <div className="mt-auto">
        <div className="text-[10px] text-gray-500">
          MRP (Incl. of all taxes) <span className="line-through">₹{product.mrp}</span> 
          <span className="text-black font-bold ml-1 text-xs">Save ₹{product.save}</span>
        </div>
        <div className="text-2xl font-bold mt-1">₹{product.price}</div>
        <div className="text-[11px] text-blue-800 underline mt-1 cursor-pointer">
          Standard EMI starts from ₹{product.emi}/month with 15.99
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <button className="flex-1 border border-black rounded-lg py-2 text-sm font-semibold hover:bg-gray-50 transition">
            Learn More
          </button>
          <button className="flex-1 bg-red-600 text-white rounded-lg py-2 text-sm font-semibold hover:bg-red-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ProductCarousel() {
  return (
    <div className="bg-[#f4f1ea] p-10 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Our Top-Trusted Picks</h1>
            <p className="text-lg text-gray-700 mt-2">The ultimate favorites & the most recommended.</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 font-medium">1 / 8</span>
            <div className="flex gap-2">
              <button className="p-3 rounded-full border border-gray-300 hover:bg-white transition">
                <ChevronLeft size={24} />
              </button>
              <button className="p-3 rounded-full border border-gray-300 hover:bg-white transition">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Grid Container */}
        <div className="flex gap-4 overflow-x-auto pb-6 no-scrollbar">
          {products.map((p, index) => (
            <ProductCard key={p.id} product={p} rank={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}