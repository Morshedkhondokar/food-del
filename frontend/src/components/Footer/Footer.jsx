import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 p-5 pt-20 mt-20">
      {/* footer content */}
      <div className="w-full grid md:grid-cols-[2fr_1fr_1fr]  gap-20">
        {/* footer content left */}
        <div className="flex flex-col items-start gap-5">
          <img src={assets.logo} alt="" />
          <p>
            Choose from a diverse menu filled with fresh ingredients, authentic
            recipes, and culinary expertise. Every dish is crafted to create a
            delightful dining journey—one that satisfies your cravings and
            brings people together around the table.
          </p>
          <div className="flex">
            <img className="w-8.5 ml-4" src={assets.facebook_icon} alt="" />
            <img className="w-8.5 ml-4" src={assets.twitter_icon} alt="" />
            <img className="w-8.5 ml-4" src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        {/* Footer content center */}
        <div className="flex flex-col items-start gap-5">
            <h2 className="text-white font-bold">COMPANY</h2>
            <ul>
                <li className="mb-3 cursor-pointer">Home</li>
                <li className="mb-3 cursor-pointer">About us</li>
                <li className="mb-3 cursor-pointer">Delivery</li>
                <li className="mb-3 cursor-pointer">Privacy policy</li>
            </ul>
        </div>
        {/* Footer content right */}
        <div className="flex flex-col items-start gap-5">
            <h2 className="text-white font-bold">GET IN TOUCH</h2>
            <ul>
                <li className="mb-3 cursor-pointer">+1-212-456-7890</li>
                <li className="mb-3 cursor-pointer">contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr className="w-full h-0.5 my-5 bg-gray-500 border-none"/>
      <p className="text-xs">Copyright 2025 © Tomato.com -All Right Reserved.</p>
    </div>
  );
};

export default Footer;
