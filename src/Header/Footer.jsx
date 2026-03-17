import React from 'react';
import { Globe, Facebook, Instagram, Youtube, Linkedin, MessageCircle, ChevronUp } from 'lucide-react';

const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className="text-[13px] text-gray-700 hover:underline leading-6">
      {children}
    </a>
  </li>
);

const FooterSection = ({ title, links }) => (
  <div className="flex flex-col gap-2">
    <h3 className="text-[15px] font-semibold text-gray-900 mb-2">{title}</h3>
    <ul className="space-y-1">
      {links.map((link, idx) => (
        <FooterLink key={idx} href={link.href}>{link.label}</FooterLink>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const sections = [
    {
      title: "Shop",
      links: [
        { label: "Shop The Latest", href: "#" },
        { label: "Promotions", href: "#" },
        { label: "LG Special Customer Discount Programs", href: "#" },
        { label: "Small & Medium Business", href: "#" },
      ],
      extra: {
        title: "Corporate",
        links: [
          { label: "Investor Relations", href: "#" },
          { label: "Smart ODR", href: "#" },
          { label: "SEBI New Investor Website", href: "#" },
        ]
      }
    },
    {
      title: "TV/Audio/Video",
      links: [
        { label: "TV & Soundbars", href: "#" },
        { label: "Lifestyle Screens", href: "#" },
        { label: "Wireless Earbuds", href: "#" },
        { label: "Audio", href: "#" },
        { label: "All Projectors", href: "#" },
      ]
    },
    {
      title: "Home Appliances",
      links: [
        { label: "Refrigerators", href: "#" },
        { label: "Laundry", href: "#" },
        { label: "All Dishwashers", href: "#" },
        { label: "Vacuum Cleaners", href: "#" },
        { label: "Microwave Ovens", href: "#" },
        { label: "Commercial Washing Machine", href: "#" },
        { label: "All Water Purifiers", href: "#" },
        { label: "All Home Appliances Accessories", href: "#" },
      ]
    },
    {
      title: "Air Solutions",
      links: [
        { label: "Air Conditioners", href: "#" },
        { label: "All Air Cares", href: "#" },
      ],
      extra: {
        title: "Computing",
        links: [
          { label: "Monitors", href: "#" },
          { label: "Laptop", href: "#" },
          { label: "All Computer Accessories", href: "#" },
        ]
      }
    },
    {
      title: "About LG",
      links: [
        { label: "Press & Media", href: "#" },
        { label: "Media Contacts", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Corporate Social Responsibility", href: "#" },
        { label: "Job Disclaimer and Notification", href: "#" },
      ],
      extraLabel: "LG Magazine"
    },
    {
      title: "Support",
      links: [
        { label: "Product Registration", href: "#" },
        { label: "Manuals & Softwares", href: "#" },
        { label: "Troubleshoot", href: "#" },
        { label: "Warranty Information", href: "#" },
        { label: "Repair Request", href: "#" },
        { label: "Recycling", href: "#" },
      ]
    }
  ];

  return (
    <footer className="w-full font-sans">
      {/* TOP SECTION */}
      <div className="bg-[#f2efe9] pt-16 pb-12 px-6 md:px-16 border-t">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {sections.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <FooterSection title={section.title} links={section.links} />

              {section.extra && (
                <FooterSection title={section.extra.title} links={section.extra.links} />
              )}

              {section.extraLabel && (
                <h3 className="text-[15px] font-semibold text-gray-900">{section.extraLabel}</h3>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* LANGUAGE + SOCIAL */}
      <div className="bg-[#f2efe9] py-6 px-6 md:px-16 border-t border-gray-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-sm font-medium cursor-pointer text-gray-800 hover:underline">
            <Globe size={18} />
            <span>IN, English</span>
          </div>

          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Youtube, Linkedin, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 bg-[#333] rounded-full flex items-center justify-center text-white hover:bg-gray-700">
                <Icon size={18} />
              </a>
            ))}

            {/* X Icon */}
            <a href="#" className="w-10 h-10 bg-[#333] rounded-full flex items-center justify-center text-white hover:bg-gray-700">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
              </svg>
            </a>

            {/* LG Mag */}
            <div className="w-10 h-10 bg-[#333] rounded-full flex items-center justify-center text-white text-[10px] font-bold leading-none">
              LG<br/>Mag
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#2d2d2d] text-gray-300 text-xs px-6 md:px-16 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            {[
              "For Business", "Sitemap", "LGE Service Terms of Use",
              "Privacy Policy", "Cookie Policy", "Legal", "FAQ",
              "Accessibility Help", "Terms and Conditions of Purchase"
            ].map((item, i) => (
              <span key={i} className="hover:underline cursor-pointer">{item}</span>
            ))}
          </div>

          <p className="text-gray-400">
            © 2026 LG Electronics India Limited. All Rights Reserved
          </p>
        </div>
      </div>

      {/* SCROLL BUTTON */}
      <button className="fixed bottom-24 right-8 w-12 h-12 bg-white border rounded-full shadow-md flex items-center justify-center hover:bg-gray-100">
        <ChevronUp size={22} />
      </button>
    </footer>
  );
};

export default Footer;