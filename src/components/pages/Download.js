import React from 'react';
import '../../App.css';
import Fade from '@material-ui/core/Fade';
import progressPic from '../../assets/gameprogress.png';
import trailer from "../../assets/videos/trailer.mp4";
import main from "../../assets/mainmenu.PNG"
import VideoPlayer from "react-video-js-player";
import TrailerJs from "../Trailer";
import GfCard from "../GfCard";
import Gamedownload from "../Gamedownload";

export default function Download() {
   return (
<div>

       <TrailerJs />



</div>

    );
}

//<Gamedownload />
//<div>
//     <ReactPlayer src ={trailer} />
//  </div>

//  <div>
//  <video src={trailer} autoPlay loop muted/>
//  </div>