import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FiChevronLeft, FiChevronRight, FiPause } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../assets/111.jpg";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

import { NavLink } from "react-router-dom";
import promoImg from "../assets/promo.webp";
import bestImg from "../assets/best.svg";
import latestImg from "../assets/latest.svg";
import amcImg from "../assets/amc.svg";
import access from "../assets/access.svg";
import corp from "../assets/coorporate.svg";
import business from "../assets/business.svg";
import contact from "../assets/conntact.svg";

const slides = [
  { img: img1, alt: "LG AC Offer" },
  { img: img2, alt: "Summer Offer" },
  { img: img3, alt: "TV Combo Offer" },
];

const LGLandingPage = () => {
  return (
    
    <div className="bg-[#f4efe9]  text-white min-h-screen font-sans selection:bg-red-600">

      {/* HERO SLIDER */}
      <section className="relative overflow-hidden">

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          className="w-full h-87.5 sm:h-112.5 md:h-137.5 lg:h-162.5"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full flex items-center justify-center bg-black">

                <img
                  src={slide.img}
                  alt={slide.alt}
                  loading="lazy"
                  className="
                    w-full
                    h-full
                    object-contain
                    md:object-cover
                    transition-all
                    duration-700
                  "
                />

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* BOTTOM CONTROLS */}
        <div className="absolute bottom-6 left-4 md:left-16 right-4 md:right-16 flex items-center justify-between z-40">

          {/* Pagination */}
          <div className="custom-pagination flex gap-4 flex-1 max-w-md h-0.75 bg-white/20"></div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-6 text-white/70 ml-10">

            <button className="swiper-prev hover:text-white transition cursor-pointer">
              <FiChevronLeft size={28} />
            </button>

            <button className="hover:text-white transition">
              <FiPause size={20} />
            </button>

            <button className="swiper-next hover:text-white transition cursor-pointer">
              <FiChevronRight size={28} />
            </button>

          </div>
        </div>

      </section>
      

      {/* FOOTER QUICK NAV */}
    <nav className="py-10 px-4 md:px-20 flex flex-wrap justify-center md:flex-nowrap gap-4 md:gap-8 items-start border-t border-gray-200">

  <NavItem img={promoImg} label="All Promotions" to="/promotions" />

  <NavItem img={bestImg} label="Best Sellers" to="/best-sellers" />
  <NavItem img={latestImg} label="Shop the Latest" to="/latest" />
  <NavItem img={amcImg} label="Buy AMC" to="/amc" />
  <NavItem img={access} label="Accessories Sale" to="/accessories" />
  <NavItem img={corp} label="Corporate Employee" to="/corporate" />
  <NavItem img={business} label="Benefits for your business" to="/business" />
  <NavItem img={contact} label="Contact us" to="/contact" />

</nav>
    </div>
  );
};

const NavItem = ({ img, label, to }) => (
  <NavLink
    to={to}
    className="flex flex-col items-center gap-3 cursor-pointer group w-24 md:w-32"
  >

    {/* Icon Container */}
    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white border border-gray-100 rounded-full shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">

      <img
        src={img}
        alt={label}
        className="w-8 h-8 md:w-10 md:h-10 object-contain"
      />

    </div>

    {/* Label */}
    <span className="text-[11px] md:text-[13px] font-medium leading-tight text-center text-gray-800 px-1">
      {label}
    </span>

  </NavLink>
);

export default LGLandingPage;