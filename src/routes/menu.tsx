import Homemadembp from "../assets/menu/Homemade Mini Brownie Pizza.jpg" 
import Browniec from "../assets/menu/Brownie Classique.jpg" 
import MiniBrownies from "../assets/menu/30 Mini Brownies and Cookies.jpg" 
import WhitBrownies from "../assets/menu/White Brownies.jpg" 
import Bowl from "../assets/menu/Bowl of Happiness.jpg" 
import Pizzab from "../assets/menu/Pizza Brownies.jpg" 
import Card from "../components/(page2)/card/card"
import '@fontsource-variable/glory';
import '@fontsource/itim';
import '@fontsource/nosifer';
import './menu.css'
import '../components/(page1)/welcome/welcome.css' 
import Footer from "../components/(page1)/footer/footer"




import Navbar from "../components/(page2)/navbar/navbar"

const menu = () => { 
    const items = [
      {
        "id": 1,
        "name": "Mini Pizza au Brownie ",
        "Description": "Laissez-vous tenter par la combinaison parfaite d'un brownie riche et fondant garni d'un mélange de délicieuses garnitures, le tout sous forme de mini pizza pratique. Parfait à partager ou à déguster en solo.",
        "img": Homemadembp,
        "price": "90 MAD"
      },
      {
        "id": 2,
        "name": "Brownie Classique",
        "Description": "Notre brownie classique est un délice intemporel. Moelleux, chocolaté et irrésistible, c'est la gourmandise parfaite pour les amateurs de brownie. Satisfait votre dent sucrée à chaque bouchée.",
        "img": Browniec,
        "price": "50 MAD"
      },
      {
        "id": 3,
        "name": "  Brownies et Cookies",
        "Description": "Profitez d'un plateau de 30 mini brownies et cookies, l'assortiment ultime pour ceux qui ne peuvent pas choisir entre les deux. Parfait pour les fêtes, les réunions ou pour satisfaire vos envies sucrées.",
        "img": MiniBrownies,
        "price": "200 MAD"
      },
      {
        "id": 4,
        "name": "Brownies Blancs",
        "Description": "Nos brownies blancs offrent une délicieuse variation du brownie traditionnel. Fabriqués avec du chocolat blanc, ces brownies sont doux, crémeux et tout simplement divins.",
        "img": WhitBrownies,
        "price": "60 MAD"
      },
      {
        "id": 5,
        "name": "Bowl of happiness",
        "Description": "Plongez dans un bol de pur bonheur avec ce délicieux dessert. Débordant de couches de douceur et de joie, c'est la façon parfaite d'illuminer votre journée.",
        "img":  Bowl,
        "price": "70 MAD"
      },
      {
        "id": 6,
        "name": "Brownies Pizza",
        "Description": "Brownies Pizza : Un délice sucré-salé",
        "img":  Pizzab,
        "price": "70 MAD"
      }
      ];
    return (
        <>
          <Navbar />
          <div className="mt-24 flex flex-col gap-5">
             <div className="flex flex-col my-5 items-center justify-center text-7xl font-semibold title text-center gap-5">
                <h1 className="menu text-amber-800">Notre Menu</h1>
                <hr className="w-full md:w-1/2 " />

                </div>
                <div className="flex flex-col items-center justify-center"> 
                     <div className='flex justify-center items-center flex-wrap'>
                        {items.map((item) => (
                            <Card key={item.id} item={item} />
                        ))}
                     </div> 
                     <button   className="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#4b4b4b] before:to-[rgb(156,156,156)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
            <a target="-blank" href="https://www.instagram.com/direct/t/17844604286524566">COMMANDER</a>
            </button>
            </div>
          </div>
          <Footer />
        </>
      );
    };
    
    export default menu;