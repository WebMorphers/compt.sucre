 import Navbar from '../navbar/navbar';
import img from '../../assets/hero-bg.jpg';

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${img})`, 
    backgroundSize: 'cover',  
    backgroundPosition: 'center center',
    height: '100vh',
    width: '100%',
  };

  return (
    <div className="hero w-full relative z-0 " style={heroStyle}>
      <Navbar />
      <div className='flex flex-col justify-center items-center'>
      <h1 id='h1' className='text-3xl text-white'>Home-baked with love</h1>
      <p id='pp' className='text-xl text-white max-w-xl'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      </p>
    </div>
    </div>
  );
};

export default Hero;