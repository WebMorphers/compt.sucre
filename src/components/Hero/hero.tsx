 import Navbar from '../navbar/navbar';
import img from '../../assets/image-min.png';
import '@fontsource-variable/glory';
import '@fontsource/itim';

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${img})`, 
    backgroundSize: 'cover',  
    backgroundPosition: 'center center',
    height: '100vh',
    width: '100%',
  };

  return (
    <div className="hero w-full relative z-0 flex flex-col justify-center items-center" style={heroStyle}>
      <Navbar />
      
      <div className='flex flex-col justify-center items-center text-center gap-7 px-11 mt-24'>
        <h1 id='h1' className='text-3xl text-white '>Bienvenue chez Le Comptoir Sucré </h1>
        <div className="bg-[#FFF] h-10 w-[2px]"></div>
        <p id='pp' className='text-xl text-white max-w-xl description'>
        votre destination ultime pour des brownies, des pancakes, des cookies et des crêpes délicieuses au cœur de la ville de Rabat. Nous sommes les connaisseurs locaux de l'indulgence sucrée et nous nous engageons à vous apporter nos délices à votre porte.
        </p>
        <button
  className="text-white mt-8 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700"
>
  MENU
</button>
    </div>
    </div>
  );
};

export default Hero;