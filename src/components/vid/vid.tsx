import ReactPlayer from 'react-player';
import vid from "../../assets/vid.mp4";

const VideoComponent = () => {
  return (
    <div>
      <p>dqsdzdq</p>
      <ReactPlayer
        className='react-player'
        url={vid}  
        width='20%'
        height='20%'
        loop={true}
        muted={true}
        playing={true}
      />
    </div>
  );
}

export default VideoComponent;
