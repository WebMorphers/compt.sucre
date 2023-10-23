import { faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../../../assets/logo.png'


import './footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='bg-[#402B2A] flex flex-col flex-wrap justify-center py-8 gap-3 text-white px-5 lg:px-24 '>
            <div className='grid md:grid-cols-3 gap-y-8'>
                <div className='flex flex-col justify-center items-center gap-2 px-5'>
                    <a href="">
                        ACCUEIL
                    </a>
                    <a href="">
                        A PROPOS
                    </a>

                    <a href="">
                        MENU
                        
                    </a>

                </div>
                <div>
                    <div className='flex flex-col justify-center items-center px-5'>
                        <div>
                            <img className='w-20' src={logo} alt="" />
                        </div>
                        <div>
                            <p>Comptoir sucre</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 px-5'>
                    <a className='flex gap-3'>
                        <div>
                            <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} />
                        </div>
                        <p>comptoir.sucre</p>
                    </a>
                    <div className='flex gap-3'>
                        <div>
                            <FontAwesomeIcon icon={faLocationDot} style={{color: "#fafafa",}} />
                        </div>
                        <p>Rabat</p>
                    </div>
                    <div className='flex gap-3'>
                        <div>
                            <FontAwesomeIcon icon={faClock} style={{color: "#ffffff",}} /> 
                            </div>                 
                            <p>24h/48h</p>
                    </div>
                </div>
            </div>
            <div className='text-center text-sm font-extralight'>
               <p> &copy; made by <a target='blank' href="https://www.webmorphers.org"> webmorphers</a> </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer