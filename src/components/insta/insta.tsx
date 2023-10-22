import HoverVideoPlayer from 'react-hover-video-player';
import vid1 from '../../assets/insta1.mp4'
import vid2 from '../../assets/insta2.mp4'
import vid3 from '../../assets/insta3.mp4'
import vid4 from '../../assets/insta4.mp4'


const insta = () => {
  return (
    <div className='py-8 px-20 max-sm:px-12 xl:px-36 flex flex-col gap-5'>
        <h1 className='text-sky-950 text-center'>Suivez  <a href="" className='visited:text-black  hover:text-neutral-700 text-inherit'><span className='underline'>@comptoir.sucre</span></a> sur Instagram pour plus d'inspiration en brownies gourmets !</h1>
        <div className='grid md:grid-cols-4 gap-9 grid-cols-2'>
          <HoverVideoPlayer videoSrc={vid1}/>
          <HoverVideoPlayer videoSrc={vid2}/>
          <HoverVideoPlayer videoSrc={vid3}/>
          <HoverVideoPlayer videoSrc={vid4}/>
        </div>

    </div>
  )
  
}

export default insta
