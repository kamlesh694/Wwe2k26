import React from 'react'

export default function Explore() {
    return (
        <>
            <section
                className="py-24 text-white bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://media.istockphoto.com/id/1465463555/photo/old-texture-dust-scratches-overlay-black-white.jpg?s=612x612&w=0&k=20&c=iwdpaFeKO_A_umvLfGfpQMVLqHUrjphY2jxDwdM0Lcw=')",
                    width: "100%",
                    backgroundSize: "cover",
                }}
            >
                <div className="max-w-5xl mx-auto px-6">

                    {/* Heading */}
                    <h2 className="text-center text-4xl font-extrabold uppercase tracking-wider">
                        Explore the Full Roster
                    </h2>
                    <p className="text-center text-gray-400 mt-2">
                        More updates to come.
                    </p>

                    {/* Grid */}
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">

                        {/* A */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">A</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>• AJ Lee</li>
                                <li>• AJ Styles</li>
                                <li>• Alexa Bliss</li>
                            </ul>
                        </div>

                        {/* B */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">B</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Bayley</li>
                                <li>• Becky Lynch</li>
                                <li>• Blake Monroe</li>
                                <li>• Booker T</li>
                                <li>• Brock Lesnar</li>
                                <li>• Bron Breakker</li>
                                <li>• Bubba Ray Dudley</li>
                            </ul>
                        </div>

                        {/* C */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">C</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>• "American Nightmare" Cody Rhodes</li>
                                <li>• Chad Gable</li>
                                <li>• Chelsea Green</li>
                                <li>• Chyna</li>
                                <li>• CM Punk</li>
                            </ul>
                        </div>

                        {/* D */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">D</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>• D-Von Dudley</li>
                                <li>• Dominik Mysterio</li>
                                <li>• Dragon Lee</li>
                                <li>• Drew McIntyre</li>
                            </ul>
                        </div>

                        {/* E */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">E</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Eddie Guerrero</li>
                                <li>• El Grande Americano</li>
                                <li>• Eric Bischoff</li>
                                <li>• Ethan Page</li>
                            </ul>
                        </div>

                        {/* F */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">F</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Finn Bálor</li>
                            </ul>
                        </div>

                        {/* G */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">G</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Goldberg</li>
                            </ul>
                        </div>

                        {/* H */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">H</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Hulk Hogan</li>
                            </ul>
                        </div>

                        {/* I */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">I</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Iyo Sky</li>
                            </ul>
                        </div>

                    </div>

                    {/* Load More Button */}
                    <div className="flex justify-center mt-16">
                        <button className="bg-red-600 hover:bg-red-700 transition px-8 py-3 font-bold uppercase skew-x-[-12deg]">
                            Load More
                        </button>
                    </div>

                </div>
            </section>
        </>
    )
}
