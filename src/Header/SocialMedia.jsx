import React from "react";
import { ChevronLeft, ChevronRight, Play, Instagram } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const SocialCard = ({ image, description, date }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col">
      
      {/* Image */}
      <div className="relative h-64 overflow-hidden group cursor-pointer">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <div className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
            <Play className="text-white fill-white" size={20} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        <p className="text-gray-800 text-sm mb-6 line-clamp-3">
          {description}
        </p>

        <div className="mt-auto pt-4 border-t flex justify-between items-center">
          <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-yellow-400 via-red-500 to-purple-600 p-0.5">
            <div className="bg-white w-full h-full rounded-md flex items-center justify-center">
              <Instagram size={18} className="text-pink-600" />
            </div>
          </div>
          <span className="text-gray-500 text-xs">{date}</span>
        </div>
      </div>
    </div>
  );
};

const SocialMedia = () => {
  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
      description: "Presenting the All New LG Essential Air Conditioners...",
      date: "16/03/2026",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800",
      description: "Experience Brilliance, Built by Intelligence...",
      date: "15/03/2026",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
      description: "One person? Two people? The whole family...",
      date: "15/03/2026",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800",
      description: "Heavy lehengas require more than just a wash...",
      date: "14/03/2026",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800",
      description: "Perfect care for delicate fabrics...",
      date: "14/03/2026",
    },
  ];

  return (
    <div className="bg-[#f2efe9] min-h-screen p-8 md:p-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-4xl font-semibold mb-2">Life's Good</h1>
            <p className="text-gray-600">Social Feed</p>
          </div>

          {/* Custom Navigation Buttons */}
          <div className="flex gap-3">
            <button className="prev-btn p-3 border rounded-full">
              <ChevronLeft size={22} />
            </button>
            <button className="next-btn p-3 border rounded-full">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <SocialCard {...post} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default SocialMedia;