import React from 'react'
import CommunityImg from "/images/community.png"
import discord from "/images/community1.svg"
import redit from "/images/community2.svg"
import CMpunk from "/images/CMpunk.avif"



import { FaInstagram, FaTiktok, FaYoutube, FaFacebookF, FaTwitch } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiThreads } from 'react-icons/si';
export default function Features() {
  return (
    <>

      <figure>
        <img src={CommunityImg} alt="" />

      </figure>



      <section className="w-full bg-[#0b0b0b] text-white">
        {/* ================= COMMUNITY SECTION ================= */}
        <div
          className="bg-cover bg-center py-24"
          style={{ backgroundImage: "url('/community-bg.jpg')" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-center text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-20">
              Join the WWE 2K Community
            </h2>

            <div className="grid md:grid-cols-2 gap-16">
              {/* Discord */}
              <div className="text-center md:text-left">
                <img src={discord} className="w-14 mx-auto md:mx-0 mb-6" />
                <p className="text-gray-300 text-lg mb-8">
                  Join the official WWE 2K Discord to chat with players, share tips,
                  and stay up to date on the latest news and events.
                </p>
                <button className="bg-red-600 px-8 py-3 font-bold uppercase clip-path-btn
                transition hover:bg-white hover:text-black hover:scale-105">
                  Join the Discord
                </button>
              </div>

              {/* Reddit */}
              <div className="text-center md:text-left">
                <img src={redit} className="w-14 mx-auto md:mx-0 mb-6" />
                <p className="text-gray-300 text-lg mb-8">
                  Jump into the conversation on the WWE 2K subreddit. Share
                  highlights, swap strategies, and connect with the community.
                </p>
                <button className="bg-red-600 px-8 py-3 font-bold uppercase clip-path-btn
                transition hover:bg-white hover:text-black hover:scale-105">
                  Visit the Subreddit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= COVER SUPERSTARS SECTION ================= */}
        <div className="relative py-28 bg-[#0b0b0b]">
          <div className="absolute inset-0 bg-[url('/grain.png')] opacity-20"></div>

          <div className="relative max-w-7xl mx-auto px-6">
            <h2 className="text-center text-4xl md:text-5xl font-extrabold uppercase mb-6">
              WWE 2K26 Cover Superstars
            </h2>

            <p className="text-center max-w-4xl mx-auto text-gray-300 mb-20">
              The Show Never Stops in WWE 2K26, with 400+ Superstars and Legends
              ready to throw down. This is your ring, your rules, your era.
            </p>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Text */}
              <div>
                <h3 className="text-3xl font-extrabold uppercase mb-4">CM Punk</h3>
                <p className="text-gray-300">
                  For the first time since 2013, The Best in the World is back in
                  WWE 2K26. Relive CM Punk’s rise, fall, and redemption as you
                  rewrite history your way.
                </p>
              </div>

              {/* Image */}
              <div className="relative">
                <img
                  src={CMpunk}
                  className="max-w-md mx-auto shadow-2xl"
                />
                <span className="absolute -top-6 -left-6 text-red-600 text-3xl">↗</span>
              </div>
            </div>

            {/* Controls */}


            {/* Social */}
            <div className="mt-28 text-center">
              <h4 className="uppercase tracking-widest text-sm mb-6">
                Follow us on social
              </h4>
              <div className="w-full py-10 bg-[#111] border-t border-zinc-800 flex justify-center items-center gap-4 md:gap-6 flex-wrap">

                {/* 1. Instagram */}
                <a href="https://instagram.com" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform hover:bg-white hover:text-red-600">
                  <FaInstagram size={24} />
                </a>

                {/* 2. X (Twitter) */}
                <a href="https://twitter.com" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform hover:bg-white hover:text-red-600">
                  <FaXTwitter size={24} />
                </a>

                {/* 3. TikTok */}
                <a href="https://tiktok.com" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform hover:bg-white hover:text-red-600">
                  <FaTiktok size={24} />
                </a>

                {/* 4. YouTube */}
                <a href="https://youtube.com" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform hover:bg-white hover:text-red-600">
                  <FaYoutube size={24} />
                </a>

                {/* 5. Facebook */}
                <a href="https://facebook.com" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform hover:bg-white hover:text-red-600">
                  <FaFacebookF size={24} />
                </a>

                {/* 6. Threads */}
                <a href="https://threads.net" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform hover:bg-white hover:text-red-600">
                  <SiThreads size={24} />
                </a>

                {/* 7. Twitch */}
                <a href="https://twitch.tv" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform hover:bg-white hover:text-red-600">
                  <FaTwitch size={24} />
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>




    </>
  )
}
