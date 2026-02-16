import React from "react";
import {
  FaRedditAlien,
  FaWhatsapp,
  FaXTwitter,
  FaFacebookF,
} from "react-icons/fa6";
import { BsShare } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";
import Ringside from "../NewsPage/Ringside";
import Work from "../NewsPage/Work";
import Modes from "../NewsPage/Modes";
import Passes from "../NewsPage/Passes";
import About from "../NewsPage/About";

export default function Rings() {
  return (
    <main
      className="bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('https://plus.unsplash.com/premium_photo-1675765793965-b5b4d394b51f?fm=jpg&q=60&w=3000&auto=format&fit=crop')",
      }}
    >
      {/* ================= SECTION 1 ================= */}
       <Ringside/>      

      {/* ================= SECTION 2 ================= */}
      <Work/>

      {/* ================= SECTION 3 ================= */}
      <Modes/>

      {/* ================= SECTION 4 ================= */}
      <Passes/>

      {/* ================= SECTION 5 ================= */}
      <About/>
    </main>
  );
}