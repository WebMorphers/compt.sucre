import ReactPlayer from 'react-player';
import vid from "../../assets/vid3.mp4";
import bg from "../../assets/paper-bg.png";
import './vid.css'

const VideoComponent = () => {


  const heroStyle = {
    backgroundImage: `url(${bg})`, 
    backgroundSize: 'cover',  
    backgroundPosition: 'center center',
    height: '100%',
    width: '100%',
  };
  
  return (
    <div className='flex flex-col justify-center items-center py-14 px-6' style={heroStyle}>
      <h1 className='text-3xl'>We bake fresh , homemade brownies </h1>
      <div className='flex flex-row  justify-center items-center w-full '>
        
        <div className="grid grid-cols-2 grid-rows-3 gap-8">
          <div className="div1 flex flex-col justify-center items-center gap-5"><img width="62" height="62" src="https://img.icons8.com/external-rabit-jes-outline-color-rabit-jes/62/external-brownie-dessert-rabit-jes-outline-color-rabit-jes.png" alt="external-brownie-dessert-rabit-jes-outline-color-rabit-jes"/>
          <h1 className='text-lg'>fraîchement cuit au four chaque jour  </h1>
          <p> Chez nous, la fraîcheur est au cœur de tout ce que nous faisons.
          Chaque jour, notre équipe de pâtissiers talentueux prépare ces gourmandises à partir d'ingrédients de première qualité,
          cuits au four pour atteindre la perfection</p>
        </div>
        <div className="div2 flex flex-col justify-center items-center gap-5"><img width="48" height="48" src="https://img.icons8.com/color/48/flour-in-paper-packaging.png" alt="flour-in-paper-packaging"/>
          <h1 className='text-lg'>Ingrédients de qualité  </h1>
          <p> Nous sélectionnons soigneusement les meilleurs ingrédients pour nos brownies,
          en utilisant du chocolat pur,
          du beurre frais, des œufs et des noix de première qualité.</p>
        </div>
  <div className="div3 flex flex-col justify-center items-center gap-5"><img width="58" height="58" src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/58/external-cake-cooking-sbts2018-outline-color-sbts2018.png" alt="external-cake-cooking-sbts2018-outline-color-sbts2018"/>
    <h1 className='text-lg'>Variété pour Tous les Goûts   </h1>
<p> Que vous préfériez le chocolat noir intense, le caramel fondant,
   des options sans gluten, ou même une touche de lotus, nos brownies sauront satisfaire tous les palais.
    De plus, personnalisez-les avec un choix de toppings, comme Twix, Oreo, M&M, Snickers, KitKat, 
  et bien d'autres. Consultez notre menu pour découvrir nos délicieuses options et créez le brownie parfait</p>
  </div>
  <div className="div4 flex flex-col justify-center items-center gap-5"><img width="50" height="50" src="https://img.icons8.com/external-others-pike-picture/50/external-Express-Delivery-delivery-others-pike-picture.png" alt="external-Express-Delivery-delivery-others-pike-picture"/>
    <h1 className='text-lg'>Livraison rapide  </h1>
<p> Plus besoin d'attendre longtemps pour déguster nos brownies fraîchement sortis du four.
   Nous assurons une livraison rapide à Rabat,
    vous permettant ainsi de savourer ces délices moelleux dans le confort de votre foyer
  . Commandez dès maintenant !</p>
  </div>
  <div className="div5 flex flex-col justify-center items-center gap-5"><img width="48" height="48" src="https://img.icons8.com/color/48/gift--v1.png" alt="gift--v1"/>
    <h1 className='text-lg'>Cadeau parfait   </h1>
<p> Nos brownies sont également un cadeau idéal pour toutes les occasions. Que ce soit pour un anniversaire, une fête,
   ou simplement pour faire plaisir à quelqu'un, nos brownies gourmands sont un choix sûr.</p>
  </div>
</div>

      </div>
      
    </div>
  );
}

export default VideoComponent;
