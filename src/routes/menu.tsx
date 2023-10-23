import Homemadembp from "../assets/menu/Homemade Mini Brownie Pizza.jpg" 
import Browniec from "../assets/menu/Brownie Classique.jpg" 
import MiniBrownies from "../assets/menu/30 Mini Brownies and Cookies.jpg" 
import WhitBrownies from "../assets/menu/White Brownies.jpg" 
import Bowl from "../assets/menu/Bowl of Happiness.jpg" 
import Pizzab from "../assets/menu/Pizza Brownies.jpg" 
import Card from "../components/(page2)/card/card"


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
          <div className='pt-24'>
            <div>
              <div className='flex justify-center items-center flex-wrap'>
                  {items.map((item) => (
                    <Card key={item.id} item={item} />
                  ))}
              </div>
            </div>
          </div>
        </>
      );
    };
    
    export default menu;