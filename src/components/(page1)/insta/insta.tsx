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
      <HoverVideoPlayer
  loop={true}
  restartOnPaused 
  videoSrc={vid1}
  thumbnailSrc={vid1Thumbnail}  
/>

<HoverVideoPlayer
  loop={true}
  restartOnPaused 
  videoSrc={vid2}
  thumbnailSrc={vid2Thumbnail}  
/>

<HoverVideoPlayer
loop={true}
  restartOnPaused 
  videoSrc={vid3}
  thumbnailSrc={vid3Thumbnail}  
/>

<HoverVideoPlayer
loop={true}
  restartOnPaused
  videoSrc={vid4}
  thumbnailSrc={vid4Thumbnail}  
/>
      </div>
    </div>
  );
};

export default insta;
