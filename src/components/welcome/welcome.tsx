
import spoon from "../../assets/spoon.png" 
import "./welcome.css"
import '@fontsource-variable/glory';
import '@fontsource/itim';



const welcome = () => {
  return (
    <div className=" h-52 p-0 m-0 w-full">
        <div className="absolute right-0 z-10">
            <img className="h-52" src={spoon} alt="" />
        </div>
        <div className="container z-0 text-center flex-1 flex flex-col justify-between h-full items-center">
            <div className="title text-3xl">
                <h1 className="title">Bienvenue chez <span className=""> Le Comptoir Sucré </span></h1>
            </div>
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