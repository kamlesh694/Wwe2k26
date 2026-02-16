import React from 'react'
import Superstar from '../RosterPage/Superstar'
import Explore from '../RosterPage/Explore'
import RosterImg from "/WscubeTech/Ai/ai/public/images/roster.jpeg"

export default function Roster() {
    return (
        <>
            <div className='w-[100%] '
                style={{
                    backgroundImage:
                        "url('https://plus.unsplash.com/premium_photo-1675765793965-b5b4d394b51f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjB0ZXh0dXJlfGVufDB8fDB8fHww')",
                    
                    backgroundSize: "cover",
                }}>
                <figure>
                    <img src={RosterImg} alt="" />
                    
                </figure>
                <Superstar/>
                {/* ROSTER SECTION */}
                <Explore/>
               

            </div>
        </>
    )
}