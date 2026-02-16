// Footer.jsx
import React from "react";

let Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        {/* Left: Logo & Legal */}
        <div className="flex flex-col gap-6 lg:gap-4">
          <div className="flex items-center gap-2">
            <img src="/images/icons09.png" alt="2K Logo" className="h-8" />
            <img src="/images/icons10.png" alt="WWE Logo" className="h-6" />
          </div>
          <div>
            <h3 className="font-bold mb-2 text-sm lg:text-base">LEGAL</h3>
            <ul className="space-y-1 text-xs sm:text-sm text-gray-300">
              <li>PRIVACY POLICY</li>
              <li>TERMS OF SERVICE</li>
              <li>COOKIE POLICY</li>
              <li>2K AD PARTNERS</li>
              <li>DO NOT SELL OR SHARE MY PERSONAL INFORMATION</li>
              <li>COOKIE SETTINGS</li>
            </ul>
          </div>
        </div>

        {/* Middle: Support */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold mb-2 text-sm lg:text-base">SUPPORT</h3>
          <ul className="space-y-1 text-xs sm:text-sm text-gray-300">
            <li>WWE 2K SUPPORT</li>
            <li>FAQs</li>
            <li>2K.COM</li>
            <li>2K STORE</li>
            <li>2K ACCOUNT LOGIN</li>
          </ul>
        </div>

        {/* Right: Social + ESRB */}
        <div className="flex flex-col items-start lg:items-end gap-4">
          <div className="flex flex-wrap gap-2">
            <img src="/images/icons01.svg" alt="Instagram" className="h-5 w-5 cursor-pointer" />
            <img src="/images/icons02.svg" alt="X" className="h-5 w-5 cursor-pointer" />
            <img src="/images/icons03.svg" alt="TikTok" className="h-5 w-5 cursor-pointer" />
            <img src="/images/icons04.svg" alt="YouTube" className="h-5 w-5 cursor-pointer" />
            <img src="/images/icons05.svg" alt="Discord" className="h-5 w-5 cursor-pointer" />
            <img src="/images/icons06.svg" alt="Facebook" className="h-5 w-5 cursor-pointer" />
            <img src="/images/icons07.svg" alt="Twitch" className="h-5 w-5 cursor-pointer" />
          </div>

          <div className="border border-white p-2 text-black bg-white w-full sm:w-auto">
            <div className="text-center">
              <span className="font-bold text-xl block">T</span>
              <p className="text-xs">Violence, Blood, Suggestive Themes, Language</p>
              <p className="text-xs mt-1">In-Game Purchases (Includes Random Items)</p>
              <p className="text-xs">Users Interact</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-8 mb-10 text-xs sm:text-sm text-gray-400 border-t border-gray-700 pt-4">
        © 2014 – 2026 Take-Two Interactive Software, Inc. Published by 2K. 2K, T2, and related logos,
        are all trademarks of Take-Two Interactive Software, Inc. ™ & © 2026 WWE. All Rights Reserved.
        All WWE programming, talent names, images, likenesses, slogans, wrestling moves, trademarks,
        logos and copyrights are the exclusive property of WWE and its subsidiaries.
      </div>
    </footer>
  );
};

export default Footer;
