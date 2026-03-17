import {
  Refrigerator,
  Microwave,
  Droplets,
  // ❌ may not exist in your version
  AirVent,
  Wind,
  Tv,
  LayoutGrid,
} from "lucide-react";

// ✅ Replace invalid icons manually
import { FaSoap } from "react-icons/fa"; // for Dishwasher
import { GiWashingMachine } from "react-icons/gi"; // washing machine

const categories = [
  { name: "Refrigerators", icon: Refrigerator },
  { name: "Microwave Ovens", icon: Microwave },
  { name: "Water Purifiers", icon: Droplets },
  { name: "Washing Machines", icon: GiWashingMachine }, // ✅ fixed
  { name: "Air Conditioners", icon: AirVent },
  { name: "Air Purifiers", icon: Wind },
  { name: "TVs", icon: Tv },
  { name: "Signage", icon: LayoutGrid },
  { name: "Dishwashers", icon: FaSoap }, // ✅ fixed
];

export default function CategoryBar() {
  return (
    <div className="w-full bg-[#e9e3da] py-4 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {categories.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex flex-col items-center gap-2 text-gray-700 hover:text-black cursor-pointer"
            >
              <Icon size={36} />
              <p className="text-sm font-medium text-center">
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}