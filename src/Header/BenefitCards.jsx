import React from 'react';
import { Percent, Award, Truck } from 'lucide-react';

const BenefitCard = ({ title, subTitle, description, Icon }) => {
  return (
    <div className="bg-white rounded-4xl p-8 flex flex-col h-full shadow-sm">
      <div className="flex justify-between items-start mb-10">
        <div>
          <h3 className="text-2xl font-light text-gray-900 leading-tight">
            {title}
          </h3>
          <h3 className="text-2xl font-light text-gray-900 leading-tight">
            {subTitle}
          </h3>
        </div>
        <div className="text-gray-900">
          <Icon size={40} strokeWidth={1} />
        </div>
      </div>
      
      <p className="text-sm text-gray-700 leading-relaxed max-w-60">
        {description}
      </p>
    </div>
  );
};

const MembershipSection = () => {
  const benefits = [
    {
      title: "No Cost EMI*",
      subTitle: "On Select products",
      description: "Enjoy easy upgrades with No Cost EMI-pay in flexible installments with zero interest or hidden charges.",
      Icon: Percent
    },
    {
      title: "Discounted LG Best",
      subTitle: "Care (AMC)",
      description: "Get Discounted LG Best Care (AMC) to ensure long-lasting life for your LG products.",
      Icon: Award
    },
    {
      title: "Free shipping",
      subTitle: "",
      description: "Avail Free & Safe shipping in serviceable pin codes, whenever you shop form https://www.lg.com/in We take pride in delivering most of our orders on priority",
      Icon: Truck
    }
  ];

  return (
    <section className="bg-[#f2efe9] px-8 py-16 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-2">
              Become an LG member
            </h2>
            <p className="text-gray-600 text-lg">
              Enjoy all the benefits of free LG membership, from special discounts to exclusive services and offers.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
  {/* White Button -> Turns Red on Hover */}
  <button className="px-8 py-3 bg-white border border-gray-300 text-gray-900 rounded-full font-medium 
    transition-all duration-300 
    hover:bg-[#e61919] hover:text-white hover:border-[#e61919]">
    Sign in
  </button>

  {/* Red Button -> Turns White on Hover */}
  <button className="px-8 py-3 bg-[#e61919] text-white border border-[#e61919] rounded-full font-medium 
    transition-all duration-300 
    hover:bg-white hover:text-[#e61919]">
    Join us
  </button>
</div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;