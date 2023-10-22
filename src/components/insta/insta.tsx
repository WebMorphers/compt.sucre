import HoverVideoPlayer from 'react-hover-video-player';
import vid1 from '../../assets/insta1.mp4'
import vid2 from '../../assets/insta2.mp4'
import vid3 from '../../assets/insta3.mp4'
import vid4 from '../../assets/insta4.mp4'


const insta = () => {
  return (
    <div>
        <h1 className='text-sky-950'>Suivez  <a href="" className='visited:text-black  hover:text-neutral-700 text-inherit'><span className='underline'>@killerbrownie</span></a> sur Instagram pour plus d'inspiration en brownies gourmets !</h1>
        <div className='grid grid-cols-4 gap-9'>
        <HoverVideoPlayer videoSrc={vid1}/>
        <HoverVideoPlayer videoSrc={vid2}/>
        <HoverVideoPlayer videoSrc={vid3}/>
        <HoverVideoPlayer videoSrc={vid4}/>

        </div>

    </div>
  )
  
}

export default insta
