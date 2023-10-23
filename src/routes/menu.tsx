
import img from '../assets/cake1.png'

import Navbar from "../components/(page2)/navbar/navbar"

const menu = () => {
  return (
    <>
            <Navbar />
            <div className='pt-24'>
                <div>
                    <h1>
                        Our MENU
                    </h1>
                </div>
                <div className='shadow flex'>
                    <div className='flex flex-col' >
                        <div>
                            <img src={img} alt="img" />
                        </div>
                        <div className='flex flex-col'>
                            <div>
                                <h1>Tilte</h1>
                            </div>
                            <div>
                                <p>Description</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={img} alt="img" />
                    </div>
                    <div>
                        <div>
                            <h1>Tilte</h1>
                        </div>
                        <div>
                            <p>Description</p>
                        </div>
                    </div>
                    <div>
                        <img src={img} alt="img" />
                    </div>
                    <div>
                        <div>
                            <h1>Tilte</h1>
                        </div>
                        <div>
                            <p>Description</p>
                        </div>
                    </div>
                    <div>
                        <img src={img} alt="img" />
                    </div>
                    <div>
                        <div>
                            <h1>Tilte</h1>
                        </div>
                        <div>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default menu