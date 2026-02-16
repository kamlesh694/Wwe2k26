import React, { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {

  // ================= COUNTDOWN =================
  const targetDate = React.useRef(
    new Date(new Date().getTime() + 18 * 24 * 60 * 60 * 1000)
  );

  const calculateTimeLeft = () => {
    const difference = targetDate.current - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [showForm, setShowForm] = useState(false);
  const [closing, setClosing] = useState(false);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef();

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setShowForm(false);
      setClosing(false);
    }, 500);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const countries = [
    { name: "United States", flag: "🇺🇸" },
    { name: "India", flag: "🇮🇳" },
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "France", flag: "🇫🇷" },
    { name: "Japan", flag: "🇯🇵" },
    { name: "Australia", flag: "🇦🇺" },
  ];

  return (
    <>
    

      {/* NAVBAR */}
      <div className="bg-black z-50 text-white px-6 md:px-10 py-4 flex items-center justify-between relative">

        <div className="flex items-center gap-8">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider">
            <span>WWE</span>
            <span className="text-red-600">2K26</span>
          </h1>

          <div className="hidden lg:flex gap-8 text-sm font-semibold uppercase">
           <Link to={"/"}> <p className="hover:text-red-500 cursor-pointer">Ringside Reports</p></Link>
           <Link to={"/roster"}> <p className="hover:text-red-500 cursor-pointer">Roster</p></Link>
            <Link to={"/news"}><p className="hover:text-red-500 cursor-pointer">Game Info</p></Link>
           <Link to={"/community"}> <p className="hover:text-red-500 cursor-pointer">Community</p></Link>
          </div>
        </div>

        <div className="flex items-center gap-4">

          <button
            onClick={() => setShowForm(true)}
            className="hidden md:block bg-white text-black px-6 py-2 font-bold hover:bg-red-600 hover:text-white transition">
            PRE-ORDER NOW
          </button>

          {/* Language */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="border border-white px-3 py-1 text-sm hover:bg-white hover:text-black transition"
            >
              🌐 EN ▾
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-700 shadow-lg z-50">
                {countries.map((country, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-red-600 cursor-pointer flex items-center gap-3"
                  >
                    <span>{country.flag}</span>
                    <span>{country.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Icon */}
          <div className="lg:hidden">
            {mobileOpen ? (
              <X size={28} onClick={() => setMobileOpen(false)} />
            ) : (
              <Menu size={28} onClick={() => setMobileOpen(true)} />
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU (Right Side Slide) */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black text-white z-50 p-6 transform transition-transform duration-500 lg:hidden
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-5 text-white text-2xl"
        >
          ✕
        </button>

        <div className="flex flex-col gap-6 mt-12 text-lg font-semibold uppercase">
          <Link to={"/"}><p className="hover:text-red-500">Ringside Reports</p></Link>
          <Link to="/roster"><p className="hover:text-red-500">Roster</p></Link>
         <Link to={"/news"}> <p className="hover:text-red-500">Game Info</p></Link>
          <Link to={"/community"}><p className="hover:text-red-500">Community</p></Link>

          <button
            onClick={() => {
              setMobileOpen(false);
              setTimeout(() => setShowForm(true), 300);
            }}
            className="bg-white text-black px-6 py-2 font-bold hover:bg-red-600 hover:text-white transition w-fit">
            PRE-ORDER NOW
          </button>
        </div>
      </div>

      {/* RED COUNTDOWN */}
      <div className="sticky top-0 z-40 bg-red-600 text-white py-2 flex flex-col md:flex-row items-center justify-center gap-6 shadow-lg">
        <p className="uppercase font-bold tracking-widest">
          Step Into The Ring In:
        </p>

        <div className="flex gap-8 text-center">
          <TimeBox value={timeLeft.days} label="Days" />
          <TimeBox value={timeLeft.hours} label="Hours" />
          <TimeBox value={timeLeft.minutes} label="Mins" />
          <TimeBox value={timeLeft.seconds} label="Secs" />
        </div>
      </div>

      {/* OVERLAY */}
      {showForm && (
        <div
          onClick={handleClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
        />
      )}

      {/* SLIDE FORM */}
      <div
        className={`fixed bg-zinc-900 text-white z-50 p-8 transition-all duration-500 ease-in-out
          
          md:top-0 md:right-0 md:h-full md:w-[450px]
          top-0 left-0 w-full h-full

          ${
            showForm && !closing
              ? "translate-y-0 md:translate-x-0"
              : ""
          }

          ${
            !showForm
              ? "translate-y-[-100%] md:translate-x-full"
              : ""
          }

          ${
            closing
              ? "translate-y-[-100%] md:-translate-x-full"
              : ""
          }
        `}
      >
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-white text-2xl hover:text-red-600"
        >
          ✕
        </button>

        <h2 className="text-3xl font-extrabold mb-6 text-red-600 uppercase tracking-wide">
          Pre-Order Now
        </h2>

        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Full Name"
            className="bg-zinc-800 border border-zinc-700 px-4 py-3 focus:border-red-600 outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="bg-zinc-800 border border-zinc-700 px-4 py-3 focus:border-red-600 outline-none"
          />

          <select className="bg-zinc-800 border border-zinc-700 px-4 py-3 focus:border-red-600 outline-none">
            <option>Select Edition</option>
            <option>Standard Edition</option>
            <option>Deluxe Edition</option>
            <option>Ultimate Edition</option>
          </select>

          <button
            type="submit"
            className="bg-red-600 py-3 font-bold uppercase tracking-wide hover:scale-105 hover:shadow-[0_0_20px_red] transition duration-300"
          >
            Confirm Pre-Order
          </button>
        </form>
      </div>

    </>
  );
}

function TimeBox({ value = 0, label }) {
  return (
    <div>
      <div className="text-2xl md:text-3xl font-extrabold tracking-widest">
        {value < 10 ? `0${value}` : value}
      </div>
      <div className="text-xs uppercase tracking-wider">{label}</div>
    </div>
  );
}
