import React from 'react';
import { 
  PlusCircle, 
  Monitor, 
  ClipboardList, 
  Wrench, 
  MessageSquare, 
  Phone, 
  Mail, 
  PhoneCall, 
  ArrowRight 
} from 'lucide-react';

const HelpCard = ({ title, description, Icon }) => {
  return (
    <div className="bg-white rounded-4xl p-8 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-light text-gray-900 leading-tight pr-4">
          {title}
        </h3>
        <div className="text-gray-800">
          <Icon size={32} strokeWidth={1} />
        </div>
      </div>
      
      <p className="text-[13px] text-gray-600 leading-relaxed mb-8 grow">
        {description}
      </p>

      {/* Circle Arrow Button */}
      <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-red-700 group-hover:text-white transition-all duration-300">
        <ArrowRight size={18} strokeWidth={1.5} />
      </div>
    </div>
  );
};

const HelpSection = () => {
  const helpItems = [
    {
      title: "Product registration",
      description: "Registering your product will help you get faster support.",
      Icon: PlusCircle
    },
    {
      title: "Product support",
      description: "Find manual, troubleshoot and warranty of your LG product.",
      Icon: Monitor
    },
    {
      title: "Order support",
      description: "Track your order and check order FAQ.",
      Icon: ClipboardList
    },
    {
      title: "Repair request",
      description: "Request repair service conveniently online.",
      Icon: Wrench
    },
    {
      title: "Live chat",
      description: "Chat with LG Product Experts for shopping assistance, discounts and offers in real time",
      Icon: MessageSquare
    },
    {
      title: "WhatsApp",
      description: "Chat with LG Service Support using the most popular messenger",
      Icon: Phone
    },
    {
      title: "Email us",
      description: "Send an Email to LG Service Support",
      Icon: Mail
    },
    {
      title: "Call Us",
      description: "FOR CONSUMERS: For any customer assistance, our support team is available 24/7, except on national holidays. Call 08069379999 anytime.",
      Icon: PhoneCall
    }
  ];

  return (
    <section className="bg-[#f2efe9] px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h2 className="text-5xl font-semibold text-gray-900 mb-4">Need help?</h2>
            <p className="text-gray-700 text-lg">We're here to provide all the help you need.</p>
          </div>
          <button className="px-6 py-2 bg-white border border-gray-300 rounded-xl font-medium text-sm hover:bg-gray-50 transition-colors shadow-sm">
            Get support
          </button>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {helpItems.map((item, index) => (
            <HelpCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSection;