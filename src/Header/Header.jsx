    import React from "react";
    import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
    import { NavLink } from "react-router-dom";
    import logo1 from "../assets/logo.svg";

    import { Swiper, SwiperSlide } from "swiper/react";
    import "swiper/css";
    import "swiper/css/navigation";

    import { Navigation, Autoplay } from "swiper/modules";

    import deal1 from "../assets/shop1.png";
    import deal2 from "../assets/shop2.png";
    import deal3 from "../assets/shop3.png";
    import deal4 from "../assets/shop4.png";
    import deal5 from "../assets/shop4.png";
    import deal6 from "../assets/shop4.png";

    const Header = () => {
        const navStyle = ({ isActive }) =>
            `relative pb-2 ${isActive
                ? "text-black border-b-2 border-black"
                : "text-gray-700 hover:text-black hover:border-b-2 hover:border-gray-400"
            }`;

        return (
            <header className="w-full border-b bg-[#f4efe9] fixed top-0 left-0 z-50">

                {/* Top Row */}
                <div className="flex items-center justify-between px-10 py-4">
                    <img src={logo1} alt="LG Logo" className="h-10 w-auto" />

                    <a href="#" className="text-sm text-gray-700 hover:underline">
                        For Business ↗
                    </a>
                </div>

                {/* Bottom Row */}
                <div className="flex items-center justify-between px-10 pb-3">

                    {/* Navigation */}
                    <nav className="flex gap-8 text-[16px] font-medium">

                        {/* SHOP Navigations */}

                        <div className="relative group">

                            <NavLink to="/" className={navStyle}>
                                Shop
                            </NavLink>

                            {/* Mega Menu */}
                            <div className="absolute left-0 top-10 hidden group-hover:block w-275 bg-[#f4efe9] shadow-lg p-8 z-50">

                                <div className="grid grid-cols-4 gap-10">

                                    {/* Column 1 */}
                                    <div>
                                        <h3 className="font-semibold mb-3">Offers</h3>
                                        <p className="text-gray-700 hover:underline">Shop The Latest</p>
                                        <p className="text-gray-700 hover:underline">Promotions</p>
                                        <p className="text-gray-700 hover:underline">Best Sellers</p>
                                    </div>

                                    {/* Column 2 */}
                                    <div>
                                        <h3 className="font-semibold mb-3">Why buy from LG</h3>
                                        <p className="text-gray-700 hover:underline">LG Member Benefits</p>

                                        <h3 className="font-semibold mt-5 mb-3">LG Best Care</h3>
                                        <p className="text-gray-700">All LG Best Cares</p>
                                        <p className="text-gray-700">About LG Best Care</p>
                                        <p className="text-gray-700">Buy AMC</p>
                                        <p className="text-gray-700">Buy Cleaning Service</p>
                                    </div>

                                    {/* Column 3 */}
                                    <div>
                                        <h3 className="font-semibold mb-3">LG Special Members Store</h3>
                                        <p className="text-gray-700">LG Special Customer Discount Programs</p>
                                        <p className="text-gray-700">Corporate Employee Store</p>
                                        <p className="text-gray-700">Students' Purchase Program</p>
                                        <p className="text-gray-700">Government Employees Purchase Program</p>
                                    </div>

                                    {/* Column 4 */}
                                    <div>
                                        <h3 className="font-semibold mb-3">LG Business Shop</h3>
                                        <p className="text-gray-700">Small & Medium Business</p>
                                    </div>

                                </div>

                                {/* Bottom Promotional Cards */}
                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    spaceBetween={20}
                                    slidesPerView={4}
                                    navigation
                                    autoplay={{ delay: 3000 }}
                                    loop={true}
                                    className="mt-8"
                                >

                                    <SwiperSlide>
                                        <img
                                            src={deal1}
                                            alt="Appliances Deals"
                                            className="w-full h-20 object-cover rounded-xl"
                                        />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <img
                                            src={deal2}
                                            alt="Electronics Deals"
                                            className="w-full h-20 object-cover rounded-xl"
                                        />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <img
                                            src={deal3}
                                            alt="TV Combo Sale"
                                            className="w-full h-20 object-cover rounded-xl"
                                        />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <img
                                            src={deal4}
                                            alt="Summer Appliances"
                                            className="w-full h-20 object-cover rounded-xl"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img
                                            src={deal5}
                                            alt="Summer Appliances"
                                            className="w-full h-20 object-cover rounded-xl"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img
                                            src={deal6}
                                            alt="Summer Appliances"
                                            className="w-full h-20 object-cover rounded-xl"
                                        />
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                        </div>




                        {/* TV Navigations */}

                        <div className="relative group ">

                <NavLink to="/tv" className={navStyle}>
                TV/Audio/Video
                </NavLink>

                {/* Mega Menu */}
                <div className="absolute left-0 top-10 hidden group-hover:block w-300 bg-[#f4efe9] shadow-xl p-8 z-50">

                {/* Menu Grid */}
                <div className="grid grid-cols-5 gap-10">

                    {/* Discover */}
                    <div className="bg-[#e9e4de] p-5 rounded-xl">
                    <h3 className="font-semibold mb-4">Discover</h3>

                    <p className="mb-2 hover:underline cursor-pointer">TV & Soundbars</p>
                    <p className="mb-2 hover:underline cursor-pointer">Lifestyle Screens</p>
                    <p className="mb-2 hover:underline cursor-pointer">Wireless Earbuds</p>

                    <div className="mt-4">
                        <p className="mb-2 hover:underline cursor-pointer">OLED Innovation</p>
                        <p className="mb-2 hover:underline cursor-pointer">Why QNED evo</p>
                        <p className="mb-2 hover:underline cursor-pointer">
                        webOS for Entertainment
                        <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                            NEW
                        </span>
                        </p>
                        <p className="mb-2 hover:underline cursor-pointer">Why LG AI TV</p>
                    </div>

                    <div className="mt-4">
                        <p className="mb-2 hover:underline cursor-pointer">LG ThinQ</p>
                        <p className="mb-2 hover:underline cursor-pointer">LG Magazine</p>
                        <p className="mb-2 hover:underline cursor-pointer">Life's Good</p>
                    </div>
                    </div>

                    {/* TV & Soundbars */}
                    <div>
                    <h3 className="font-semibold mb-4">TV & Soundbars</h3>

                    <p className="mb-2 hover:underline cursor-pointer">All TV & Soundbars</p>
                    <p className="mb-2 hover:underline cursor-pointer">LG SIGNATURE OLED</p>
                    <p className="mb-2 hover:underline cursor-pointer">OLED evo</p>
                    <p className="mb-2 hover:underline cursor-pointer">OLED</p>
                    <p className="mb-2 hover:underline cursor-pointer">MiniLED</p>
                    <p className="mb-2 hover:underline cursor-pointer">QNED</p>
                    <p className="mb-2 hover:underline cursor-pointer">NanoCell</p>
                    <p className="mb-2 hover:underline cursor-pointer">8K TVs</p>
                    </div>

                    {/* TV by Size */}
                    <div>
                    <h3 className="font-semibold mb-4">TV by Size</h3>

                    <p className="mb-2 hover:underline cursor-pointer">218 cm (86) and larger</p>
                    <p className="mb-2 hover:underline cursor-pointer">195 cm (77) - 215 cm (85)</p>
                    <p className="mb-2 hover:underline cursor-pointer">177 cm (70) - 190 cm (75)</p>
                    <p className="mb-2 hover:underline cursor-pointer">165 cm (65)</p>
                    <p className="mb-2 hover:underline cursor-pointer">139 cm (55)</p>
                    <p className="mb-2 hover:underline cursor-pointer">126 cm (50)</p>

                    <h3 className="font-semibold mt-5 mb-3">Lifestyle Screens</h3>
                    <p className="mb-2 hover:underline cursor-pointer">Gallery Edition</p>
                    <p className="mb-2 hover:underline cursor-pointer">StanbyME</p>
                    </div>

                    {/* Soundbars */}
                    <div>
                    <h3 className="font-semibold mb-4">Soundbars</h3>

                    <p className="mb-2 hover:underline cursor-pointer">Featured Soundbars</p>
                    <p className="mb-2 hover:underline cursor-pointer">All Soundbars</p>
                    <p className="mb-2 hover:underline cursor-pointer">Home Theater Soundbars</p>
                    <p className="mb-2 hover:underline cursor-pointer">Soundbars with Subwoofer</p>

                    <h3 className="font-semibold mt-5 mb-3">Bluetooth Speakers</h3>
                    <p className="mb-2 hover:underline cursor-pointer">All Bluetooth Speakers</p>
                    <p className="mb-2 hover:underline cursor-pointer">Portable Speakers</p>
                    </div>

                    {/* Projectors */}
                    <div>
                    <h3 className="font-semibold mb-4">Projectors</h3>

                    <p className="mb-2 hover:underline cursor-pointer">All Projectors</p>
                    <p className="mb-2 hover:underline cursor-pointer">Home Cinema Projectors</p>
                    <p className="mb-2 hover:underline cursor-pointer">Portable & Lifestyle Projectors</p>

                    <h3 className="font-semibold mt-5 mb-3">Buying Guide</h3>
                    <p className="mb-2 hover:underline cursor-pointer">
                        TV Buying Guide
                        <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        NEW
                        </span>
                    </p>
                    </div>

                </div>

                {/* IMAGE CAROUSEL */}
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    className="mt-8"
                >

                    <SwiperSlide>
                    <img src={deal1} className="w-full h-20 object-cover rounded-xl hover:scale-105 transition" />
                    </SwiperSlide>

                    <SwiperSlide>
                    <img src={deal2} className="w-full h-20 object-cover rounded-xl hover:scale-105 transition" />
                    </SwiperSlide>

                    <SwiperSlide>
                    <img src={deal3} className="w-full h-20 object-cover rounded-xl hover:scale-105 transition" />
                    </SwiperSlide>

                    <SwiperSlide>
                    <img src={deal4} className="w-full h-20 object-cover rounded-xl hover:scale-105 transition" />
                    </SwiperSlide>

                    <SwiperSlide>
                    <img src={deal5} className="w-full h-20 object-cover rounded-xl hover:scale-105 transition" />
                    </SwiperSlide>

                    <SwiperSlide>
                    <img src={deal6} className="w-full h-20 object-cover rounded-xl hover:scale-105 transition" />
                    </SwiperSlide>

                </Swiper>

                </div>

            </div>


                      {/* HOME APPLIANCES */}


  {/* Mega Menu */}
 {/* HOME APPLIANCES */}

<div className="relative group">

  <NavLink to="/appliances" className={navStyle}>
    Home Appliances
  </NavLink>

  {/* Mega Menu */}
  <div className="
    absolute left-10 top-10
    hidden group-hover:block
    w-screen max-w-325
    bg-[#f4efe9] shadow-xl
    p-6 md:p-8
    z-50
  ">

    <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-5
      gap-8
      text-[14px]
      max-h-[70vh]
      overflow-y-auto
    ">

      {/* Discover Panel */}
      <div className="bg-[#e9e4de] p-5 rounded-xl">
        <h3 className="font-semibold mb-4">Discover</h3>

        <p className="mb-2 hover:underline cursor-pointer">Refrigerators</p>
        <p className="mb-2 hover:underline cursor-pointer">Laundry</p>
        <p className="mb-2 hover:underline cursor-pointer">Microwave Ovens</p>
        <p className="mb-2 hover:underline cursor-pointer">Commercial Washing Machine</p>

        <div className="mt-4">
          <p className="mb-2 hover:underline cursor-pointer">LG ThinQ</p>
          <p className="mb-2 hover:underline cursor-pointer">LG Magazine</p>
          <p className="mb-2 hover:underline cursor-pointer">Life's Good</p>
        </div>
      </div>


      {/* Refrigerators */}
      <div>
        <h3 className="font-semibold mb-4">Refrigerators</h3>

        <p className="mb-2 hover:underline cursor-pointer">All Refrigerators</p>
        <p className="mb-2 hover:underline cursor-pointer">MoodUP®</p>
        <p className="mb-2 hover:underline cursor-pointer">French Door Refrigerators</p>
        <p className="mb-2 hover:underline cursor-pointer">Side by Side Refrigerators</p>
        <p className="mb-2 hover:underline cursor-pointer">Double Door Refrigerators</p>
        <p className="mb-2 hover:underline cursor-pointer">Single Door Refrigerators</p>

        <h3 className="font-semibold mt-6 mb-3">Laundry</h3>
        <p className="mb-2 hover:underline cursor-pointer">All Washing Machines</p>
        <p className="mb-2 hover:underline cursor-pointer">Wash Tower</p>
        <p className="mb-2 hover:underline cursor-pointer">Dryers</p>
        <p className="mb-2 hover:underline cursor-pointer">Washer Dryers</p>
        <p className="mb-2 hover:underline cursor-pointer">Front Loading Washing Machines</p>
        <p className="mb-2 hover:underline cursor-pointer">Top Loading Washing Machines</p>
        <p className="mb-2 hover:underline cursor-pointer">Semi Automatic Washing Machines</p>
      </div>


      {/* Dishwashers + Microwave */}
      <div>
        <h3 className="font-semibold mb-4">Dishwashers</h3>

        <p className="mb-4 hover:underline cursor-pointer">All Dishwashers</p>

        <h3 className="font-semibold mb-3">Microwave Ovens</h3>
        <p className="mb-2 hover:underline cursor-pointer">All Microwave Ovens</p>
        <p className="mb-2 hover:underline cursor-pointer">Convertible Oven</p>
        <p className="mb-2 hover:underline cursor-pointer">Scan To Cook Charcoal Convection Microwave</p>
        <p className="mb-2 hover:underline cursor-pointer">Charcoal Convection Microwave</p>
        <p className="mb-2 hover:underline cursor-pointer">Convection Microwave</p>
        <p className="mb-2 hover:underline cursor-pointer">Grill/Solo Microwave</p>
      </div>


      {/* Water Purifiers */}
      <div>
        <h3 className="font-semibold mb-4">Water Purifiers</h3>

        <p className="mb-6 hover:underline cursor-pointer">All Water Purifiers</p>

        <h3 className="font-semibold mb-3">Home Appliances Accessories</h3>
        <p className="mb-6 hover:underline cursor-pointer">
          All Home Appliances Accessories
        </p>

        <h3 className="font-semibold mb-3">Commercial Washing Machine</h3>
        <p className="mb-2 hover:underline cursor-pointer">Commercial Washer</p>
        <p className="mb-2 hover:underline cursor-pointer">Commercial Dryer</p>
        <p className="mb-2 hover:underline cursor-pointer">Multi Housing - Self Laundry</p>
      </div>


      {/* Essential Series */}
      <div>
        <h3 className="font-semibold mb-4">Essential Series</h3>

        <p className="mb-6 hover:underline cursor-pointer">LG Essential Series</p>

        <h3 className="font-semibold mb-3">Buying Guide</h3>
        <p className="hover:underline cursor-pointer">Laundry Buying Guide</p>
      </div>

    </div>

  </div>
</div>

 



                        <NavLink to="/air" className={navStyle}>Air Solutions</NavLink>
                        <NavLink to="/computing" className={navStyle}>Computing</NavLink>
                        <NavLink to="/accessories" className={navStyle}>Accessories</NavLink>
                        <NavLink to="/support" className={navStyle}>Support</NavLink>
                        <NavLink to="/ai" className={navStyle}>LG AI</NavLink>
                        <NavLink to="/investor" className={navStyle}>Investor Relations</NavLink>

                    </nav>

                    {/* Search + Icons */}
                    <div className="flex items-center gap-6">

                        <div className="flex items-center bg-white rounded-full px-4 py-2 w-56 shadow-sm">
                            <FiSearch className="text-gray-500 mr-2" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="outline-none w-full text-sm"
                            />
                        </div>

                        <FiUser className="text-xl cursor-pointer" />
                        <FiShoppingCart className="text-xl cursor-pointer" />

                    </div>

                </div>

            </header>
        );
    };

    export default Header;