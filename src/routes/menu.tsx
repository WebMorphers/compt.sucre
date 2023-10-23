
import img from '../assets/cake1.png'



import Navbar from "../components/(page2)/navbar/navbar"

const menu = () => {
  return (
    <>
            <Navbar />
            <div className='pt-24'>
                <div>
                    <div className='flex justify-center items-center'>
                        <div className='m-5 flex flex-col justify-center items-center p-5 px-10 gap-5 flex-wrap shadow-xl rounded-lg hover:rounded-3xl hover:shadow-2xlxl cursor-pointer'>
                            <div className='bg-gradient-to-t from-gray-300 to-gray-500 w-full flex justify-center p-5'>
                                <img src={img} alt="Cake"/>
                            </div>
                            <div className='flex flex-col items-center text-start gap-3'>
                                <div className='text-2xl font-bold '>
                                    <h1>cake 1</h1>
                                </div>
                                <div className='font-light '>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias non, sapiente dolores ipsa maxime inventore omnis dolorum, libero dicta voluptatem nisi facilis modi porro tenetur et itaque recusandae! Delectus.
                                </div>
                            </div>

                        </div>
                        <div className='m-5 flex flex-col justify-center items-center p-5 px-10 gap-5 flex-wrap shadow-xl rounded-lg hover:rounded-3xl hover:shadow-2xlxl cursor-pointer'>
                            <div className='bg-gradient-to-t from-gray-300 to-gray-500 w-full flex justify-center p-5'>
                                <img src={img} alt="Cake"/>
                            </div>
                            <div className='flex flex-col items-center text-start gap-3'>
                                <div className='text-2xl font-bold '>
                                    <h1>cake 1</h1>
                                </div>
                                <div className='font-light '>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias non, sapiente dolores ipsa maxime inventore omnis dolorum, libero dicta voluptatem nisi facilis modi porro tenetur et itaque recusandae! Delectus.
                                </div>
                            </div>

                        </div><div className='m-5 flex flex-col justify-center items-center p-5 px-10 gap-5 flex-wrap shadow-xl rounded-lg hover:rounded-3xl hover:shadow-2xlxl cursor-pointer'>
                            <div className='bg-gradient-to-t from-gray-300 to-gray-500 w-full flex justify-center p-5'>
                                <img src={img} alt="Cake"/>
                            </div>
                            <div className='flex flex-col items-center text-start gap-3'>
                                <div className='text-2xl font-bold '>
                                    <h1>cake 1</h1>
                                </div>
                                <div className='font-light '>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias non, sapiente dolores ipsa maxime inventore omnis dolorum, libero dicta voluptatem nisi facilis modi porro tenetur et itaque recusandae! Delectus.
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default menu