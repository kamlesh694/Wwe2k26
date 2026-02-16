import React from 'react'

export default function Superstar() {
    return (
        <>
            <section
                style={{
                    backgroundImage:
                        "url('https://media.istockphoto.com/id/1465463555/photo/old-texture-dust-scratches-overlay-black-white.jpg?s=612x612&w=0&k=20&c=iwdpaFeKO_A_umvLfGfpQMVLqHUrjphY2jxDwdM0Lcw=')",
                    width: "100%",
                    backgroundSize: "cover",
                }}


            >
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"

                >


                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="text-3xl font-extrabold text-white uppercase mb-6">
                            WWE 2K26 COVER SUPERSTARS
                        </h2>

                        <p className="text-sm leading-7 text-gray-300">
                            The Show Never Stops in <span className="font-semibold">WWE 2K26</span>, with
                            400+ Superstars and Legends ready to throw down. From The Rock’s
                            electrifying charisma to CM Punk’s vicious fighting style and Triple
                            H’s incredible power – this is your ring, your rules, your era.
                        </p>

                        <h3 className="mt-10 text-2xl text-white font-bold">CM PUNK</h3>

                        <p className="mt-4 text-sm leading-7 text-gray-300">
                            For the first time since 2013, The Best in the World is back in
                            <span className="font-semibold"> WWE 2K26</span>. A six-time world
                            champion and record-breaking titleholder, CM Punk’s rise, fall, and
                            redemption come full circle.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src="https://assets.2k.com/1a6ngf98576c/4cbLX386kuC5unPpvz6481/13824ecec2daba819ff2715970b64fd5/CoverStar_Standard.png"
                            alt="WWE 2K26 Cover"
                            className="max-w-sm md:max-w-md lg:max-w-lg"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
