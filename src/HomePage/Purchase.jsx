import React from "react";
import { FaCheck } from "react-icons/fa6";

const editions = [
  {
    title: "MONDAY NIGHT WAR EDITION",
    color: "text-yellow-400",
    btn: "bg-yellow-400 text-black",
    image: "/images/purchase1.jpg",
    features: [
      "Full Base Game",
      "Pre-Order Bonus",
      "Joe Hendry Pack",
      "32,500 VC",
      "Ringside Pass Premium",
      "King of Kings Edition Pack",
      "Superstar Mega-Boost",
      "Attitude Era Edition Pack",
      "WrestleMania 42 Pack (Coming Summer 2026)",
      "Monday Night War Edition Pack",
    ],
  },
  {
    title: "ATTITUDE ERA EDITION",
    color: "text-white",
    btn: "bg-white text-black",
    image: "/images/purchase2.jpg",
    features: [
      "Full Base Game",
      "Pre-Order Bonus",
      "Joe Hendry Pack",
      "32,500 VC",
      "Ringside Pass Premium",
      "King of Kings Edition Pack",
      "Superstar Mega-Boost",
      "Attitude Era Edition Pack",
    ],
  },
  {
    title: "KING OF KINGS EDITION",
    color: "text-green-400",
    btn: "bg-green-400 text-black",
    image: "/images/purchase3.jpg",
    features: [
      "Full Base Game",
      "Pre-Order Bonus",
      "Joe Hendry Pack",
      "32,500 VC",
      "Ringside Pass Premium",
      "King of Kings Edition Pack",
    ],
  },
  {
    title: "STANDARD EDITION",
    color: "text-red-500",
    btn: "bg-red-500 text-white",
    image: "images/purchase4.jpg",
    features: [
      "Full Base Game",
      "Pre-Order Bonus",
      "Joe Hendry Pack",
      "32,500 VC",
    ],
  },
];

export default function ChooseEdition() {
  return (
    <section
      className="py-32 bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.85),rgba(0,0,0,.85)),url('https://plus.unsplash.com/premium_photo-1675765793965-b5b4d394b51f')",
      }}
    >
      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-20 uppercase tracking-widest">
        Choose Your Edition
      </h2>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {editions.map((edition, i) => (
          <div
            key={i}
            className="bg-black/90 rounded-xl flex flex-col items-center text-center p-6"
          >
            {/* Cover Image */}
            <img
              src={edition.image}
              alt={edition.title}
              className="w-40 h-30 mb-6"
            />

            {/* Title */}
            <h3 className={`font-bold mb-6 ${edition.color}`}>
              {edition.title}
            </h3>

            {/* Feature List */}
            <ul className="text-left w-full space-y-3 text-sm text-gray-200 flex-1">
              {edition.features.map((f, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <FaCheck className="text-red-500 mt-1 text-xs" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`mt-8 px-8 py-3 font-bold cursor-pointer hover:scale-y-90 uppercase hover:bg-[red] skew-x-[-12deg] ${edition.btn}`}
            >
              Pre-Order Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}