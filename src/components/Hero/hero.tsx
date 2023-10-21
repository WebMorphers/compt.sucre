import Navbar from '../navbar';
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
    <div className="hero w-full relative z-0">
      <div className="brightness-50" style={heroStyle}></div>
      <Navbar />
    </div>
  );
};

export default Hero;