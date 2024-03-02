import React from 'react'
import drck from './Photos/drck.png'
import { useState } from 'react'

const Aboutme = () => {
    const [hobbies, setHobbies] = useState(false)
  return (

        <section className="hero">
            <figure className="profile-pic-figure">
            <img src={drck} alt="Profile Picture" />
            </figure>
            
            {!hobbies && (<ul className="aboutme">
                <p>Dereck Q. Ibale</p>
                <p>P5 Sentinela Ubay, Bohol</p>
                <p>Bachelor of Science in Mechanical</p>
                <p>Visayas State University, Main Campus</p>
                <p>Baybay City, Leyte</p>
                <p onClick={() => setHobbies(true)} className="hobbies">Hobbies</p>
            </ul>)}
            {hobbies && (<ul className="aboutme">
                <p className="back-to-top" onClick={() => setHobbies(false)}>Back to top</p>
                <p>IoT</p>
                <p>Programming</p>
                <p>Music</p>
                <p>Gamefowls</p>
                <p>Farming</p>
            </ul>  )}
        </section>

    
  )
}

export default Aboutme
