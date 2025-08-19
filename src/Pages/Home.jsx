import React from 'react'
import './Home.css'
import home from '../images/home.png'
const Home = () => {
    return (
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img src={home} alt="" width="400" height="400"></img>
                        </div>
                        <div className="registration-form">
                            <h1>Welcome to my F1 world</h1>
                            <span style={{fontSize:"20px"}}>
                                🏎️ Formula 1 is the pinnacle of motorsport, featuring the fastest cars on the planet.
                                🌍 Races, known as Grands Prix, take place across iconic tracks worldwide.
                                🧠 It combines cutting-edge engineering, team strategy, and elite driver skill.
                                ⏱️ Split-second decisions and milliseconds often decide victory or defeat.
                                🔥 From Monaco to Monza, F1 delivers high-speed drama and global fanfare.
                            </span>


                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Home;