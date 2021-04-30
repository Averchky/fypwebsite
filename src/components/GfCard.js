import React from 'react';
import './GfCard.css';
import GfCardItem from "./GfCardItem";
import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import scrambleLockPic from "../assets/scramblelock.png";
import sokobanPic from "../assets/sokoban.png";
import uniquePathPic from "../assets/uniquepath.png";
import lockPickPic from "../assets/lockpick.PNG";
import itemPic from "../assets/item.png";
import cinemPic from "../assets/cinem.png";

function GfCard() {
  var sliderSettings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
  }

  return (
      <Fade in={true}>
        <div className='GfCard'>
            <div className='GfItem'>
            Find out the mystery of what happened in the Kinderheim orphanage...
            </div>
            <div className='GfItem'>
                <Grow in={true} timeout={1000}>
                    <div className="picturePart">
                        <Slider {...sliderSettings}>
                            <div><img src={scrambleLockPic} /></div>
                            <div><img src={sokobanPic} /></div>
                            <div><img src={uniquePathPic} /></div>
                            <div><img src={lockPickPic} /></div>
                        </Slider>
                    </div>
                </Grow>
                <Grow in={true} timeout={1000}>
                <div className="textPart">
                    <span>
                        Solve interesting and tricky puzzles when progressing through the orphanage
                    </span>
                </div>
                </Grow>
            </div>
            <div className='GfItem'>
                <Grow in={true} timeout={1600}>
                    <div className="textPart">
                        <span>
                            Explore and discover items that reveal the truth of the orphanage
                        </span>
                    </div>
                </Grow>
                <Grow in={true} timeout={1600}>
                    <div className="picturePart">
                        <div><img src={itemPic} /></div>
                    </div>
                </Grow>
            </div>
            <div className='GfItem'>
                <Grow in={true} timeout={2400}>
                    <div className="picturePart">
                        <div><img src={cinemPic} /></div>
                    </div>
                </Grow>
                <Grow in={true} timeout={2400}>
                    <div className="textPart">
                        <span>
                            Experience the story first-hand in flashbacks
                        </span>
                    </div>
                </Grow>
            </div>
        </div>
    </Fade>
  );
}

export default GfCard;