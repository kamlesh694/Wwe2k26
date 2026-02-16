import React from 'react'

export default function HeroSection() {
  return (
    <>
     {/* ===== HERO SECTION ===== */}
            <section className="relative w-full h-screen overflow-hidden bg-black">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2070')",
                    }}
                ></div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Right Side Content */}
                <div className="relative z-10 h-full flex items-center justify-end px-10 md:px-20">

                    <div className="text-right max-w-xl">

                        <h1 className="text-red-600 text-4xl md:text-6xl font-extrabold uppercase tracking-wide mb-4">
                            Start The Show
                        </h1>

                        <h2 className="text-white text-5xl md:text-7xl font-extrabold uppercase leading-tight mb-4">
                            7 Days Early
                        </h2>

                        <p className="text-gray-300 tracking-widest uppercase mb-8">
                            Starting March 6
                        </p>

                        <button className="bg-red-600 px-8 py-4 font-bold uppercase tracking-wide hover:bg-white hover:text-black transition duration-300">
                            Pre-Order Now
                        </button>

                    </div>
                </div>
            </section>
            </>
  )
}
