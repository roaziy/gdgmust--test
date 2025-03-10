import { useState, useEffect } from "react";
import { useLocale } from 'next-intl'
import { navItems } from "../navItems"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white outline-none outline-1 outline-black flex justify-between items-center rounded-full p-4">
      <div className="">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded"
        >
          MENU
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="top-[50px] fixed bg-opacity-50 flex items-center justify-center outline-none outline-1 outline-black">
          <div className="bg-white rounded-lg p-6 w-[100px]">
            <ul className="space-y-4 text-center">
              {navItems.map((item) => (
                <li key={item.label}>{item.label}</li>
              ))}
              {navItems
                .find((n) => n.label === "Other")?.subItems.map((sub) => (
                  <li key={sub.label}>{sub.label}</li>
                ))}
            </ul>
            <button onClick={() => setIsOpen(false)} className="items-center rounded-full mt-4 block mx-auto bg-gray-300 px-4 py-2">Close</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
