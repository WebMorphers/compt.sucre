import HoverVideoPlayer from "react-hover-video-player";
import vid1 from "../../../assets/insta1.mp4";
import vid2 from "../../../assets/insta2.mp4";
import vid3 from "../../../assets/insta3.mp4";
import vid4 from "../../../assets/insta4.mp4";
import vid1Thumbnail from "../../../assets/vid1Thumbnail.png";
import vid2Thumbnail from "../../../assets/vid2Thumbnail.png";
import vid3Thumbnail from "../../../assets/vid2Thumbnail.png";
import vid4Thumbnail from "../../../assets/vid2Thumbnail.png";
import "./insta.css";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";


const VideoPlayer: React.FC<{ videoSrc: string; thumbnailSrc: string }> = ({
  videoSrc,
  thumbnailSrc,
}) => {
  const [isInView, setIsInView] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,  
  });

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      {isInView ? (
        <HoverVideoPlayer
          loop={true}
          restartOnPaused
          videoSrc={videoSrc}
          thumbnailSrc={thumbnailSrc}
        />
      ) : (
        <img src={thumbnailSrc} alt="Video Thumbnail" />
      )}
    </div>
  );
};

const insta = () => {
  
  return (
    <div className="py-8 px-20 max-sm:px-12 xl:px-36 flex flex-col justify-center items-center gap-5">
      <h1 className="text-6xl title text-center">Taste Like Never Before .</h1>

      <h1 className="text-sky-950 text-center">
        Suivez{" "}
        <a
          href="https://www.instagram.com/comptoir.sucre/"
          target="-blank"
          className="visited:text-black  hover:text-neutral-700 text-inherit"
        >
          <span className="underline">@comptoir.sucre</span>
        </a>{" "}
        sur Instagram pour plus d'inspiration en brownies gourmets !
      </h1>
       <div className="grid md:grid-cols-4 gap-9 grid-cols-2">
        <VideoPlayer videoSrc={vid1} thumbnailSrc={vid1Thumbnail} />
        <VideoPlayer videoSrc={vid2} thumbnailSrc={vid2Thumbnail} />
        <VideoPlayer videoSrc={vid3} thumbnailSrc={vid3Thumbnail} />
        <VideoPlayer videoSrc={vid4} thumbnailSrc={vid4Thumbnail} />
      </div>
    </div>
  );
};

export default insta;
