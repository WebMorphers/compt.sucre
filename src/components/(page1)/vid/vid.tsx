import bg from "../../../assets/paper-bg.png";
import "@fontsource-variable/glory";
import "@fontsource/itim";

const VideoComponent = () => {
  const heroStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "100%",
    width: "100%",
  };
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center py-14 px-16 gap-5"
      
    >
      <h1 className="text-3xl text-center description">
        We bake fresh , homemade brownies{" "}
      </h1>
      <div className="flex flex-row  justify-center items-start w-full text-center">
        <div className="grid  lg:grid-cols-4 sm:grid-cols-2  grid-rows-1 gap-8">
          <div className="div1 flex flex-col justify-start items-center gap-5  ">
            <img
              width="62"
              height="62"
              src="https://img.icons8.com/external-rabit-jes-outline-color-rabit-jes/62/external-brownie-dessert-rabit-jes-outline-color-rabit-jes.png"
              alt="external-brownie-dessert-rabit-jes-outline-color-rabit-jes"
            />
            <h1 className="text-lg ">fraîchement cuit chaque jour </h1>
            <p className="text-center text-gray-500 description ">
              {" "}
              Chez nous, la fraîcheur est au cœur de tout ce que nous faisons.
              Chaque jour, cuits au four pour atteindre la perfection
            </p>
          </div>
          <div className="div2 flex flex-col justify-start items-center gap-5">
            <img
              width="62"
              height="62"
              src="https://img.icons8.com/color/48/flour-in-paper-packaging.png"
              alt="flour-in-paper-packaging"
            />
            <h1 className="text-lg ">Ingrédients de qualité </h1>
            <p className="text-center text-gray-500 description">
              {" "}
              Nous sélectionnons soigneusement les meilleurs ingrédients pour
              nos brownies, en utilisant du chocolat pur, du beurre frais, des
              œufs et des noix de première qualité.
            </p>
          </div>
          <div className="div3 flex flex-col justify-start items-center gap-5">
            <img
              width="58"
              height="58"
              src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/58/external-cake-cooking-sbts2018-outline-color-sbts2018.png"
              alt="external-cake-cooking-sbts2018-outline-color-sbts2018"
            />
            <h1 className="text-lg ">Variété pour Tous les Goûts </h1>
            <p className="text-center text-gray-500  description">
              {" "}
              Que vous préfériez le chocolat noir intense, le caramel fondant,
              ou même une touche de lotus. De plus, personnalisez-les avec un
              choix de toppings, comme Twix, Oreo, M&M, Snickers, KitKat, et
              bien d'autres.
            </p>
          </div>
          <div className="div4 flex flex-col justify-start items-center gap-5">
            <img
              width="62"
              height="62"
              src="https://img.icons8.com/external-others-pike-picture/50/external-Express-Delivery-delivery-others-pike-picture.png"
              alt="external-Express-Delivery-delivery-others-pike-picture"
            />
            <h1 className="text-lg ">Livraison rapide </h1>
            <p className="text-center  text-gray-500 description">
              {" "}
              Plus besoin d'attendre longtemps pour déguster nos brownies
              fraîchement sortis du four. Nous assurons une livraison rapide à
              Rabat,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
