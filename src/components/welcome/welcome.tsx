
import spoon from "../../assets/spoon.png" 
import "./welcome.css"
import '@fontsource-variable/glory';
import '@fontsource/itim';



const welcome = () => {
  return (
    <div className=" h-72 max-sm:h-[500px] max-md:h-96 bg-[#FFD596] w-full z-0 ">
        <div className="absolute right-0 z-10">
            <img className="h-72 max-sm:h-[500px] max-md:h-96 max-md:opacity-80 " src={spoon} alt="" />
        </div>
        <div className="container p-10 px-12 lg:px-44 z-0 text-center  flex flex-col justify-between h-full items-center">
            <div className="title text-3xl flex flex-row gap-6">
                <h1>Home-Baked With Love </h1>  
            </div>
            <div className="bg-[#402B2A] h-10 w-[2px]"></div>
            <div>
                <p className="description text-xl ">
                Chez Le Comptoir Sucré, nous mettons tout notre cœur dans nos brownies, pancakes et cookies
                . Découvrez nos créations, délicieuses et préparées avec amour.
                 Rejoignez notre communauté gourmande et laissez-vous tenter par nos délices faits maison,
                  un vrai régal à chaque bouchée
                 
                </p>
            </div>
            <button className="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#4b4b4b] before:to-[rgb(156,156,156)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
            COMMANDER
</button>
        </div>

    </div>
  )
}

export default welcome