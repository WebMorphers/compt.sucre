import React from 'react';
import ReactPlayer from 'react-player';
import vid from "../../assets/vid.mp4";

const VideoComponent = () => {
  return (
    <div>
      <p>dqsdzdq</p>
      <ReactPlayer
        className='react-player'
        url={vid}  
        controls={true}  
        width='20%'
        height='20%'
      />
    </div>
  );
}

export default VideoComponent;
