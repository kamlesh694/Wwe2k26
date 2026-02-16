import React from 'react'
import {
    FaRedditAlien,
    FaWhatsapp,
    FaXTwitter,
    FaFacebookF,
} from "react-icons/fa6";
import { BsShare } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";
export default function About() {
    return (
        <>
            <section className="max-w-5xl mx-auto px-6 pb-40 space-y-12">
                <div>
                    <h2 className="text-2xl font-extrabold mb-4">
                        What about WWE Legends & unlocking everything?
                    </h2>
                    <p className="text-gray-200 leading-8">
                        WWE Legends previously unlocked via the store or SuperCharger are now
                        part of the free Ringside Pass track.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-extrabold mb-4">
                        When will each Ringside Pass release?
                    </h2>

                    <ul className="list-disc list-inside space-y-3 text-gray-200">
                        <li>Season 1 – March 6</li>
                        <li>Season 2 – April</li>
                        <li>Season 3 – June</li>
                        <li>Season 4 – July</li>
                        <li>Season 5 – September</li>
                        <li>Season 6 – October</li>
                    </ul>
                </div>

                {/* ========== SECTION 6 : WHAT'S NEXT ========== */}
                <section className="max-w-5xl mx-auto px-6 pb-32">

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
                        What’s next?
                    </h2>

                    {/* Content */}
                    <div className="space-y-8 text-gray-200 leading-8 text-base">
                        <p>
                            We will reveal the full DLC roster at a later date that we’ll spread
                            across the premium tracks of the 6 Ringside Passes.
                        </p>

                        <p>
                            As we get closer to the release of each new Ringside Pass, we will also
                            be announcing other rewards such as Personas, content for{" "}
                            <span className="text-white font-semibold">MyFACTION</span> and{" "}
                            <span className="text-white font-semibold">The Island</span>, as well as
                            the release dates. The rewards will also vary between packs, to allow us
                            to provide unique offerings such as different CAS parts, new moves, and
                            more.
                        </p>

                        <p>
                            The premium track of Ringside Pass Season 1, for instance, will include
                            4 new playable Superstars, as well as two Personas, two new arenas, and
                            two new championships.
                        </p>

                        <p>
                            We can’t wait to share what we have coming post-launch for{" "}
                            <span className="text-white font-semibold">WWE 2K26</span>, so stay tuned
                            for more in a future Ringside Report.
                        </p>
                    </div>

                    {/* Share Section */}
                    <div className="mt-20 text-center">
                        <h3 className="text-2xl font-semibold mb-6">Share on Social</h3>

                        <div className="flex justify-center gap-6 text-2xl">
                            <FaRedditAlien className="cursor-pointer hover:text-red-500 transition" />
                            <FaWhatsapp className="cursor-pointer hover:text-green-500 transition" />
                            <FaXTwitter className="cursor-pointer hover:text-gray-300 transition" />
                            <FaFacebookF className="cursor-pointer hover:text-blue-500 transition" />
                            <BsShare className="cursor-pointer hover:text-pink-400 transition" />
                            <IoCopyOutline className="cursor-pointer hover:text-red-600 transition" />
                        </div>
                    </div>

                </section>
                {/* ========== SECTION 7 : MORE REPORTS ========== */}
                <section className="max-w-6xl mx-auto px-6 pb-40">

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 uppercase tracking-wider">
                        More Reports
                    </h2>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Card 1 */}
                        <div className="group">
                            <div className="overflow-hidden">
                                <img
                                    src="https://assets.2k.com/1a6ngf98576c/3FG0N2iXpqXEpSzvneU4OG/ad79b3d9f632b11027391ed2561c08d5/WWE26-ALL-SHOWCASE_THUMBNAIL-NA-STATIC-ENUS-ESRB-NO_RATING-1920x1080-R1.jpg"
                                    alt="CM Punk Showcase"
                                    className="w-full transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            <h3 className="mt-6 text-xl font-bold">
                                WWE 2K26 Ringside Report – CM Punk’s Showcase
                            </h3>

                            <button className="mt-6 bg-white text-black font-bold px-8 py-3 uppercase skew-x-[-12deg] hover:bg-gray-200 transition">
                                Learn More
                            </button>
                        </div>

                        {/* Card 2 */}
                        <div className="group">
                            <div className="overflow-hidden">
                                <img
                                    src="https://assets.2k.com/1a6ngf98576c/4ymDKcECW4fSXEzsaEOkRP/75fdce8aa0c03e513846fc895cdf78a4/WWE26-ALL-RR_GAMEPLAY_THUMBNAIL-NA-STATIC-ENUS-NO_RATING-AGN-1920x1080-FINAL.jpg"
                                    alt="Gameplay Updates"
                                    className="w-full transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            <h3 className="mt-6 text-xl font-bold">
                                WWE 2K26 Ringside Report – Gameplay Updates
                            </h3>

                            <button className="mt-6 bg-white text-black font-bold px-8 py-3 uppercase skew-x-[-12deg] hover:bg-gray-200 transition">
                                Learn More
                            </button>
                        </div>

                    </div>
                </section>


            </section>
        </>
    )
}
