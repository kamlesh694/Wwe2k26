import React from 'react'
import {
    FaRedditAlien,
    FaWhatsapp,
    FaXTwitter,
    FaFacebookF,
} from "react-icons/fa6";
import { BsShare } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";
export default function Ringside() {
    return (
        <>
            <section className="max-w-5xl mx-auto px-6 py-24">
                <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
                    WWE 2K26 Ringside Report – Introducing the Ringside Pass
                </h1>

                <div className="flex items-center gap-4 mt-6">
                    <span className="text-sm uppercase tracking-wider text-gray-300">
                        Share on Social
                    </span>
                    <div className="flex items-center gap-5 text-xl">
                        <FaRedditAlien />
                        <FaWhatsapp />
                        <FaXTwitter />
                        <FaFacebookF />
                        <BsShare />
                        <IoCopyOutline />
                    </div>
                </div>

                <div className="mt-12 space-y-8 text-gray-200 leading-8">
                    <p>
                        With our announcement of <span className="text-white font-semibold">WWE 2K26</span>, we are
                        evolving how we deliver DLC with the all-new Ringside Pass.
                    </p>
                    <p>
                        The Ringside Pass follows a battle pass format, featuring both free
                        and premium tracks of rewards.
                    </p>
                    <p>
                        Let’s jump right into how it all works.
                    </p>
                </div>
            </section>
        </>
    )
}
