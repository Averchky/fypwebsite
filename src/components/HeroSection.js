import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

import bgVideo from "../assets/videos/bgvideo.mp4";

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={bgVideo} autoPlay loop muted />

      <h1><style>
          @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Nosifer&display=swap');
      </style>Looks can be deceiving</h1>
      <p><style>
          @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Nosifer&family=Press+Start+2P&display=swap');
      </style>Are you ready to solve the mystery?</p>
      <div className='hero-btns'>

        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;


// <Button
//           className='btns'
//           buttonStyle='btn--outline'
//           buttonSize='btn--large'
//         >
//           GET STARTED
//         </Button>
