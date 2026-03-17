import React, { useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight, FiHeart } from "react-icons/fi";
import { BiGitCompare } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

import tv from "../assets/tv.jpeg";
import ac from "../assets/ac.png";
import wash from "../assets/washing.png";

const productsData = [
  {
    id: 1,
    category: "Best Deal",
    model: "55UAB2006LA",
    title: "LG 139 cm (55) 4K UHD AI UA8200 Smart TV",
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
    title: "LG 3 Star (1.5) Split AC, AI Convertible",
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
    title: "LG 9Kg Front Load Washing Machine",
    rating: 4.8,
    reviews: 44,
    variants: ["7.0", "8.0", "9.0"],
    price: 39990,
    mrp: 53990,
    img: wash,
    tag: "CASHBACK | BEST SELLER"
  }
];

// ⭐ Star Rating
const StarRating = ({ rating }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        size={10}
        className={i < Math.floor(rating) ? "text-yellow-400" : "text-gray-200"}
      />
    ))}
  </div>
);

// 🛒 Product Card
const ProductCard = ({ item, onLearnMore }) => {
  const [selectedVariant, setSelectedVariant] = useState(item.variants[0]);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-5 md:p-6 flex flex-col h-full shadow-sm hover:shadow-md transition">

      {/* Icons */}
      <div className="flex justify-end gap-3 mb-2">
        <FiHeart
          size={18}
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`cursor-pointer ${
            isWishlisted ? "text-red-500 fill-red-500" : "text-gray-300"
          }`}
        />
        <BiGitCompare className="text-gray-300 cursor-pointer" size={18} />
      </div>

      {/* Tag */}
      <span className="text-[10px] text-red-600 font-bold uppercase">
        {item.tag}
      </span>

      {/* Model */}
      <div className="text-[11px] text-gray-400 mt-1">{item.model}</div>

      {/* Title */}
      <h3 className="text-sm sm:text-base font-semibold mt-2 line-clamp-2">
        {item.title}
      </h3>

      {/* Rating */}
      <div className="flex items-center gap-2 mt-2">
        <StarRating rating={item.rating} />
        <span className="text-xs text-gray-500">
          {item.rating} ({item.reviews})
        </span>
      </div>

      {/* Variants */}
      <div className="flex flex-wrap gap-2 mt-3">
        {item.variants.map((v) => (
          <button
            key={v}
            onClick={() => setSelectedVariant(v)}
            className={`px-2 py-1 text-xs border rounded ${
              selectedVariant === v
                ? "border-black text-black"
                : "border-gray-300 text-gray-400"
            }`}
          >
            {v}
          </button>
        ))}
      </div>

      {/* Image */}
      <div className="flex justify-center items-center my-4">
        <img
          src={item.img}
          alt={item.title}
          className="h-28 sm:h-32 md:h-36 object-contain"
        />
      </div>

      {/* Price */}
      <div className="mt-auto">
        <div className="text-xs text-gray-500 line-through">
          ₹{item.mrp.toLocaleString()}
        </div>

        <div className="text-xl sm:text-2xl font-bold">
          ₹{item.price.toLocaleString()}
        </div>

        <div className="text-xs text-gray-500 mb-3">
          EMI ₹{Math.round(item.price / 12)}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => onLearnMore(item)}
            className="w-full border border-gray-300 py-2 rounded-lg text-xs"
          >
            Learn More
          </button>

          <button className="w-full bg-red-600 text-white py-2 rounded-lg text-xs">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

// 🧠 Main Section
const PicksForYou = () => {
  const [activeTab, setActiveTab] = useState("Best Deal");
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  const tabs = ["Best Deal", "Recently Viewed", "Most Popular", "Newest"];

  const addToRecentlyViewed = (product) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((p) => p.id !== product.id);
      return [product, ...filtered].slice(0, 4);
    });
  };

  const filteredProducts = useMemo(() => {
    if (activeTab === "Recently Viewed") return recentlyViewed;
    return productsData.filter(
      (p) => p.category === activeTab || activeTab === "Best Deal"
    );
  }, [activeTab, recentlyViewed]);

  return (
    <section className="bg-[#f4efe9] py-10 sm:py-14 px-4 sm:px-8 md:px-16">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-8">

        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            PICKS FOR YOU
          </h2>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-semibold ${
                  activeTab === tab ? "text-black border-b-2 border-red-500" : "text-gray-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between md:justify-end gap-4">
          <span className="text-gray-500 text-sm">
            {currentIndex}/{filteredProducts.length || 1}
          </span>

          <div className="flex gap-2">
            <button className="p-prev w-9 h-9 border rounded-full flex items-center justify-center">
              <FiChevronLeft />
            </button>
            <button className="p-next w-9 h-9 border rounded-full flex items-center justify-center">
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Swiper */}
      {filteredProducts.length > 0 ? (
        <Swiper
          modules={[Navigation]}
          navigation={{ nextEl: ".p-next", prevEl: ".p-prev" }}
          onSlideChange={(s) => setCurrentIndex(s.realIndex + 1)}
          spaceBetween={16}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
        >
          {filteredProducts.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCard item={item} onLearnMore={addToRecentlyViewed} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="text-center text-gray-400 py-20">
          No items in {activeTab}
        </div>
      )}
    </section>
  );
};

export default PicksForYou;