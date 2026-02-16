import React from 'react'

export default function RedTrailerSection() {
    return (
        <>
            {/* ===== RED TRAILER SECTION ===== */}
            <section className="relative bg-[#111111] w-full min-h-screen overflow-hidden">

                {/* Red Background */}
                <div className="absolute inset-0 bg-[url('/images/red1.png')] bg-cover bg-center"></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20">

                    <h2 className="text-white text-lg md:text-2xl max-w-4xl leading-relaxed font-medium mb-10">
                        Run the show your way in WWE 2K26, featuring 400+ WWE Superstars
                        and Legends. Light up the ring with all-new match types, relive CM
                        Punk’s greatest moments, and explore the secrets of The Island.
                    </h2>

                    <div className="w-full max-w-4xl aspect-video shadow-2xl">
                        <iframe
                            className="w-full h-full rounded-lg"
                            src="https://www.youtube.com/embed/F7lW25U7Nc4?si=yhzPsUADCQmdF92K"
                            title="WWE 2K26 Trailer"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>



            </section>
        </>
    )
}
