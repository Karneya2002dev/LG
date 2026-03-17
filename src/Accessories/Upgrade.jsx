import { ChevronLeft, ChevronRight } from "lucide-react";
import lgac from "../assets/lgac.png"
import waterpurifier from "../assets/waterpurifier.png"
import remote from "../assets/remote.png"

const cards = [
  {
    title: "Air Conditioner\nWall Mount Bracket",
    img: lgac,
    bg: "bg-[#7a1c0c]",
  },
  {
    title: "Water Purifier\nFilter",
    img: waterpurifier,
    bg: "bg-[#002f2f]",
  },
  {
    title: "TV\nRemote Controller",
    img: remote,
    bg: "bg-[#4a3f36]",
  },
];

export function Upgrade() {
  return (
    <div className="bg-[#e9e3da] py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-semibold">Upgrade your Experience</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm">2 / 2</span>
            <button className="w-10 h-10 rounded-full border flex items-center justify-center">
              <ChevronLeft size={18} />
            </button>
            <button className="w-10 h-10 rounded-full border flex items-center justify-center opacity-40">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="rounded-3xl overflow-hidden relative"
            >
              <img src={card.img} className="w-full h-65 object-cover" />

              <div className={`${card.bg} text-white p-6 h-45 flex flex-col justify-between`}>
                <h3 className="text-2xl whitespace-pre-line">
                  {card.title}
                </h3>

                <button className="bg-white text-black px-4 py-2 rounded-md w-fit text-sm hover:bg-red-600 hover:text-white transition">
  Shop Now
</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}