import React from "react";
import VideoPlayer from "react-video-js-player";
import trailer from "./trailer1.mp4";
import pic from "../assets/item.png";
import "./Trailer.css";
import bgVideo from "../assets/videos/bgvideo.mp4";

const VideoJS = () => {

    return(

            <div>
            <VideoPlayer
                src={trailer}
                poster={pic}
                preload="auto"
                autoplay={false}
                width={2000}
                height={1000}
                currentWidth={480}
                currentHeight={200}
                videoWidth={960}
                videoHeight={400}
            />
            </div>

    );

};

export default VideoJS;