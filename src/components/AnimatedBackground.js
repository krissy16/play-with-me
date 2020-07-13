import React from 'react';
import '../styles/AnimatedBackground.css';

function AnimatedBackground() {
  return (
         <div className="background-container">
             <div className="cloud x1"></div>
             <div className="cloud x2"></div>
             <div className="cloud x3"></div>
             <div className="cloud x4"></div>
             <div className="cloud x5"></div>
             <div className="cloud x6"></div>
             <div className="cloud x7"></div>
             <div className="cloud x8"></div>
             <div className="cloud x9"></div>
             <div className="grass"></div>
             <img className="playground slide" src="./playground-slide.png" alt="slide"/>
             <img className="playground climber" src="./playground-climber.png" alt="slide"/>
        </div>
  );
}

export default AnimatedBackground;
