import React from 'react'
import { Link } from 'react-router-dom'
import AnimatedBackground from './AnimatedBackground'
import '../styles/LandingPage.css'

function LandingPage(){
    return(
        <div className="container">
            <AnimatedBackground />
            <div className="logo-container">
                <img className="landing-logo" src="/logo.png" alt="logo"/>
                <p className="logo-text">Play With Me</p>
            </div>
            <div className="landing-info">
                <h1>Find Your New Playmate!</h1>
                <p>Play With Me is an app thats helps you find playdates for your children. To get started simply browse current playdate events or create your own!</p>
                {/*<Link to="/results">Get Started</Link>*/}
                <button className="myButton" to="/results" renderas={Link}>Get Started</button>
            </div>
        </div>
    )
}

export default LandingPage;