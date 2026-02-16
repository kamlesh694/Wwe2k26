import React from 'react'

export default function Modes() {
    return (
        <>
            <section className="max-w-5xl mx-auto px-6 pb-24">
                <h2 className="text-3xl font-extrabold mb-6">
                    Which game modes reward RXP?
                </h2>

                <p className="text-gray-300 mb-8">
                    The following game modes reward RXP:
                </p>

                <ul className="list-disc list-inside space-y-3 text-lg text-gray-200">
                    <li>Play Now</li>
                    <li>Universe</li>
                    <li>MyRISE</li>
                    <li>Showcase</li>
                    <li>MyGM</li>
                    <li>MyFACTION</li>
                    <li>The Island</li>
                </ul>
            </section>
        </>
    )
}
