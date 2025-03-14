import { useState, useEffect } from "react";
import { useLocale } from 'next-intl'
import { navItems } from "../navItems"
import "../../../styles/globals.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white outline-none outline-1 outline-black flex justify-center items-center outline-offset-0 rounded-full p-4 fixed bottom-[20px] left-1/2 transform -translate-x-1/2 w-[100px] h-[45px] select-none">
      <div className="">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-7 py-5 rounded text-black" id="font-gbold"
      >
        MENU
      </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed left-0 w-full bg-opacity-50 flex items-center justify-center bottom-[80px]">
          <div className="bg-white rounded-lg p-6 w-[125px] outline-offset-0 outline-none outline-1 outline-black">
            <ul className="space-y-4 text-center">
              {navItems.map((item) => (
                <button key={item.label}>{item.label}</button>
              ))}
              {navItems
                .find((n) => n.label === "Other")?.subItems.map((sub) => (
                  <button key={sub.label}>{sub.label}</button>
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