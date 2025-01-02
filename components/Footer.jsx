import React from "react";
import Image from "next/image";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "@/assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-8">
      <div className="container mx-auto px-4 flex justify-between items-center pt-5">
        {/* Left Section */}
        <div>
          <ul className="space-y-4 text-[#AAAAAA] font-bold text-3xl">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Exercises</li>
            <li className="hover:text-white cursor-pointer">Articles</li>
            <li className="hover:text-white cursor-pointer flex items-center">
              <span>←</span>
              <span className="ml-2">Back to Main Site</span>
            </li>
          </ul>
          <Image
                src={logo} // Replace with your logo path
                alt="Logo"
                className="h-12 w-auto ml-0 mt-16"
              />
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center space-y-4">
          <FaLinkedin className="text-5xl" />
          <FaInstagram className="text-5xl" />
          <FaFacebook  className="text-5xl" />
          <FaTwitter  className="text-5xl" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 bg-[#AF7AD5] py-2 text-center text-sm font-medium text-[#101018]">
        <p>Copyright © 2024. Stheno, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
