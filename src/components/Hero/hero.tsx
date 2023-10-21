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
    <div className="hero w-full" style={heroStyle}> 
    <Navbar />

    </div>
  );
};

export default Hero;
