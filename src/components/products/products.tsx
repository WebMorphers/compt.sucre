import './products.css'
import img1 from '../../assets/cake1.png'
import img2 from '../../assets/cake2.png'
import img3 from '../../assets/cake3.png'
import img4 from '../../assets/cake4.png'
import img5 from '../../assets/cake5.png'

const products = () => {
  return (
    <div className='bg bg-no-repeat bg-cover bg-center h-full w-full'>
        <div>
            <div>
                our products 
            </div>
            <div className='w-full h-96 relative '>
                <div className='flex  items-center justify-center '>
                    <img className='absolute top-0 bottom-0 m-auto mr-[600px] W-[150px] h-[150px] transform hover:scale-125 cursor-pointer' src={img2} alt="" />
                    <img className='absolute top-0 bottom-0 m-auto ml-[600px] W-[150px] h-[150px]  transform hover:scale-125 cursor-pointer    ' src={img3} alt="" />
                    <img className='absolute top-0 bottom-0 m-auto ml-96 W-[200px] h-[200px]  transform hover:scale-125 cursor-pointer' src={img4} alt="" />
                    <img className='absolute top-0 bottom-0 m-auto mr-96 W-[200px] h-[200px]  transform hover:scale-125 cursor-pointer' src={img1} alt="" />
                    <img className='absolute top-0 bottom-0 m-auto  transform hover:scale-125 cursor-pointer' src={img5} alt="" />
                </div>
            </div>
            <div>
                <a href="">Our menu</a>
            </div>
        </div>
    </div>
  )
}

export default products