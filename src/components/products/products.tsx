import './products.css'
import img1 from '../../assets/cake1.png'
import img2 from '../../assets/cake2.png'
import img3 from '../../assets/cake3.png'
import img4 from '../../assets/cake4.png'
import img5 from '../../assets/cake5.png'
import cakes from '../../assets/cakes.png'

const products = () => {
  return (
    <div className='bg bg-no-repeat bg-cover bg-center h-full w-full'>
        <div className='flex flex-col items-center justify-between py-20'>
            <div>
                our products 
            </div>
            <div className=''>
                <img src={cakes} alt="cakes" />
               
            </div>
            <div className='shadow-2xl'>
                <a className='px-5 py-3 rounded-xl bg-[#402B2A] text-white' href="/menu">Our menu</a>
            </div>
        </div>
    </div>
  )
}

export default products