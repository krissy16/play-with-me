import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/LandingPage.css'

function LandingPage(){
    return(
        <div className="container">
            <img className="landing-logo" src="/logo.png" alt="logo"/>
            <div className="landing-info">
                <h1>Find Your New Playmate!</h1>
                <p>Play With Me is an app thats helps you find playdates for your children. To get started simply browse current playdate events or create your own!</p>
                <Link to="/results">Get Started</Link>
            </div>
        </div>
    )
}

export default LandingPage;