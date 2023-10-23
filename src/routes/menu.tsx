import Homemadembp from "../assets/menu/Homemade Mini Brownie Pizza.jpg" 
import Browniec from "../assets/menu/Brownie Classique.jpg" 
import MiniBrownies from "../assets/menu/30 Mini Brownies and Cookies.jpg" 
import WhitBrownies from "../assets/menu/White Brownies.jpg" 
import Bowl from "../assets/menu/Bowl of Happiness.jpg" 
import Pizzab from "../assets/menu/Pizza Brownies.jpg" 



import Navbar from "../components/(page2)/navbar/navbar"

const menu = () => { 
    const items = [
        {
          "id": 1,
          "name": "Homemade Mini Brownie Pizza",
          "Description": "Indulge in the perfect combination of rich, fudgy brownie topped with a medley of delectable toppings, all in a convenient mini pizza form. Perfect for sharing or savoring solo.",
          "img": Homemadembp, // Corrected image source
          "price": "$9.99"
        },
        {
          "id": 2,
          "name": "Brownie Classique",
          "Description": "Our classic brownie is a timeless delight. Moist, chocolatey, and irresistible, it's the perfect treat for brownie enthusiasts. Satisfy your sweet tooth with every bite.",
          "img": Browniec, // Corrected image source
          "price": "$5.99"
        },
        {
          "id": 3,
          "name": "30 Mini Brownies and Cookies",
          "Description": "Enjoy a platter of 30 mini brownies and cookies, the ultimate assortment for those who can't choose between the two. Perfect for parties, gatherings, or satisfying your sweet cravings.",
          "img": MiniBrownies, // Corrected image source
          "price": "$19.99"
        },
        {
          "id": 4,
          "name": "White Brownies",
          "Description": "Our white brownies offer a delightful twist on the traditional brownie. Made with white chocolate, these brownies are sweet, creamy, and simply heavenly.",
          "img": WhitBrownies, // Corrected image source
          "price": "$6.99"
        },
        {
          "id": 5,
          "name": "Bowl of Happiness",
          "Description": "Dive into a bowl of pure happiness with this delightful dessert. Overflowing with layers of sweetness and joy, it's the perfect way to brighten your day.",
          "img": Bowl, // Corrected image source
          "price": "$7.99"
        },
        {
          "id": 6,
          "name": "Pizza Brownies",
          "Description": "Pizza Brownies: A savory-sweet delight",
          "img": Pizzab,  
          "price": "$7.99"
        }
      ];
    return (
        <>
          <Navbar />
          <div className='pt-24'>
            <div>
              <div className='flex justify-center items-center flex-wrap'>
                {items.map((item) => (
                  <div
                    key={item.id}
                    className='m-10 flex flex-col justify-center items-center p-5 px-10 gap-5 flex-wrap shadow-xl rounded-3xl hover:shadow-2xl cursor-pointer max-w-sm'
                  >
                    <div className='bg-gradient-to-t from-gray-300 to-gray-500 w-full flex justify-center p-5'>
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className='flex flex-col items-center justify-center text-start gap-3'>
                      <div className='text-2xl font-bold '>
                        <h1>{item.name}</h1>
                      </div>
                      <div className='font-light '>{item.Description}</div>
                      <h1 className='text-blue-500 text-2xl font-bold'>{item.price}</h1>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      );
    };
    
    export default menu;