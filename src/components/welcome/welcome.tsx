
import spoon from "../../assets/spoon.png" 
import "./welcome.css"
import '@fontsource-variable/glory';
import '@fontsource/itim';



const welcome = () => {
  return (
    <div className=" h-72 max-md:h-96 bg-[#FFD596] w-full z-0 ">
        <div className="absolute right-0 z-10">
            <img className="h-72 max-md:h-96 max-md:opacity-80 " src={spoon} alt="" />
        </div>
        <div className="container p-10 px-12 lg:px-44   z-0 text-center  flex flex-col justify-between h-full items-center">
            <div className="title text-3xl">
                <h1 className="title">Bienvenue chez <span className=""> Le Comptoir Sucré </span></h1>
            </div>
            <div className="bg-[#402B2A] h-10 w-[2px]"></div>
            <div>
                <p className="description text-xl" >
                votre destination ultime pour des brownies, des pancakes, des cookies et des crêpes délicieuses au cœur de la ville de Rabat. Nous sommes les connaisseurs locaux de l'indulgence sucrée et nous nous engageons à vous apporter nos délices à votre porte.
                </p>
            </div>
        </div>

    </div>
  )
}

export default welcome