import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#F6F6F6] text-black p-6 flex flex-col items-center text-center md:flex-row md:justify-between md:px-[408px] md:py-8">
      {/* Left Section */}
      <div className="mb-4 md:mb-0 text-left text-lg font-medium md:max-w-md">
        <p className="block leading-1.8">Google Developer Groups (GDG) on Campus at Mongolian University of Science and Technology</p>
      </div>

      {/* Right Section */}
      <div className="space-y-4">
        {/* Input Fields */}
        <div className="flex flex-col md:flex-row md:gap-4">
          <input
            type="text"
            placeholder="Your name:"
            className="border rounded-full px-4 py-2 w-full md:w-60 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email address:"
            className="border rounded-full px-4 py-2 w-full md:w-60 focus:outline-none"
          />
        </div>
        <textarea
          placeholder="Message:"
          className="border rounded-lg px-4 py-2 w-full h-28 focus:outline-none"
        ></textarea>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center gap-2 mt-6 md:mt-0">
        <div className="flex gap-4 text-xl">
          <FaFacebook />
          <AiFillInstagram />
          <FaLinkedinIn />
        </div>
        <p>Ulaanbaatar, Mongolia</p>
        <p className="text-sm">
          Made with <span className="text-red-500">❤</span> in UB © 2025 GDG on Campus MUST
        </p>
        <p className="text-sm">
          Designed by <strong>roaziy & Telmen</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
