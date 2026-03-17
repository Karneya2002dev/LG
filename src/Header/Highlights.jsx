import React, { useState } from "react";

const HighlightStory = () => {
  const [activeTab, setActiveTab] = useState("Washing Machine");

  const tabs = [
    "Washing Machine",
    "LG OLED evo",
    "Refrigerator",
    "Computing",
    "LG Core-Tech",
  ];

  const tabContent = {
    "Washing Machine": {
      title: "Appliance of the Year 2025",
      subtitle: "Most Energy Efficient Washing Machine",
      banner:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600",
      features: [
        {
          title: "New Form of Laundry",
          subtitle: "Presenting LG WashTower",
          desc: "Unibody Washer & Dryer",
          img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1",
        },
        {
          title: "The New Way of Washing & Drying",
          subtitle: "Presenting LG Washer Dryer",
          desc: "Get Washed & Completely Dry Clothes",
          img: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1",
        },
        {
          title: "AI Direct Drive",
          subtitle: "Smart Washing",
          desc: "Smart Fabric Protection",
          img: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
        },
      ],
    },

    "LG OLED evo": {
      title: "LG OLED evo TV",
      subtitle: "Next-Level OLED Experience",
      banner:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1600",
      features: [
        {
          title: "OLED Display",
          subtitle: "Brighter & Sharper",
          desc: "Next-gen panel",
          img: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
        },
        {
          title: "AI Processor",
          subtitle: "Smart Performance",
          desc: "Auto enhancement",
          img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
        },
        {
          title: "Dolby Vision",
          subtitle: "Cinema Experience",
          desc: "Ultra HDR",
          img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        },
      ],
    },

    Refrigerator: {
      title: "Smart Cooling Technology",
      subtitle: "Keep Food Fresh Longer",
      banner:
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1600",
      features: [
        {
          title: "Inverter Compressor",
          subtitle: "Energy Efficient",
          desc: "Low power usage",
          img: "https://images.unsplash.com/photo-1581091215367-59ab6b3f6a8b",
        },
        {
          title: "Door Cooling+",
          subtitle: "Fast Cooling",
          desc: "Uniform cooling",
          img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
        },
        {
          title: "Smart Diagnosis",
          subtitle: "AI Tech",
          desc: "Easy troubleshooting",
          img: "https://images.unsplash.com/photo-1581091012184-5c3b44e9c8f6",
        },
      ],
    },

    Computing: {
      title: "LG Gram Laptops",
      subtitle: "Powerful & Lightweight",
      banner:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600",
      features: [
        {
          title: "Ultra Lightweight",
          subtitle: "Portable",
          desc: "Easy carry",
          img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
        },
        {
          title: "Long Battery",
          subtitle: "All Day Use",
          desc: "20 hours battery",
          img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        },
        {
          title: "High Performance",
          subtitle: "Fast Speed",
          desc: "Intel powered",
          img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
        },
      ],
    },

    "LG Core-Tech": {
      title: "Advanced AI Technology",
      subtitle: "Innovation at Core",
      banner:
        "https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=1600",
      features: [
        {
          title: "AI Technology",
          subtitle: "Smart Living",
          desc: "Automation",
          img: "https://images.unsplash.com/photo-1507149833265-60c372daea22",
        },
        {
          title: "Energy Saving",
          subtitle: "Eco Friendly",
          desc: "Low consumption",
          img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
        },
        {
          title: "Smart App",
          subtitle: "ThinQ",
          desc: "Mobile control",
          img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        },
      ],
    },
  };

  const current =
    tabContent[activeTab] || tabContent["Washing Machine"];

  return (
    <div className="bg-[#f4f1ea] min-h-screen px-4 py-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold mb-4">Highlight Story</h1>

        {/* Tabs */}
        <div className="flex gap-6 border-b pb-2 mb-6 text-sm overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 whitespace-nowrap ${
                activeTab === tab
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Banner */}
        <div
          className="rounded-3xl p-10 text-white mb-8 min-h-75 flex items-center"
          style={{
            backgroundImage: `url(${current.banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black/40 p-6 rounded-xl max-w-lg">
            <p className="text-xs mb-2">{current.subtitle}</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {current.title}
            </h2>
            <button className="bg-white text-black px-5 py-2 rounded-full">
              Learn more
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {current.features.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>

        {/* ✅ NEW SECTION */}
        <div className="bg-[#e9e5dd] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
          
          {/* Left Image */}
          <div className= "p-4  md:w-1/2">
            <img
              src="https://www.lg.com/content/dam/channel/wcms/in/images/banner/Platter.jpg"
              alt="LG Products"
              className="w-full object-contain rounded-3xl "
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              HOW TO SHOP ON LG.COM/IN?
            </h2>
            <p className="text-gray-600 mb-4">
              Click the button below to get step-by-step guidance for shopping on LG.com/in,
              making your experience smooth, simple and quick.
            </p>
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg">
              Watch Now
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

const FeatureCard = ({ title, subtitle, desc, img }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm">
    <img src={img} className="w-full h-48 object-cover" alt="" />
    <div className="p-4">
      <p className="text-xs text-gray-500">{subtitle}</p>
      <h3 className="font-bold mt-1">{title}</h3>
      <p className="text-xs text-gray-500 mt-2">{desc}</p>
      <button className="bg-red-600 text-white px-3 py-1 text-xs mt-3 rounded">
        Watch Video
      </button>
    </div>
  </div>
);

export default HighlightStory;