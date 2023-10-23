import data from '../data.json'
import img from '../assets/cake1.png'
 
import Navbar from "../components/(page2)/navbar/navbar"

const menu = () => { 
    return (
        <>
          <Navbar />
          <div className='pt-24'>
            <div>
              <div className='flex justify-center items-center flex-wrap'>
                {data.items.map((item) => (
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