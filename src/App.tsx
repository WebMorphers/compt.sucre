import Hero from './components/Hero/hero'
import './App.css'
import Welcome from './components/welcome/welcome'
import Footer from './components/footer/footer'
import Vid from './components/vid/vid'


const App = () => {

  return (
    <> 
       <Hero />
       <div className=''>
          <Vid />
          <Welcome />
          <Footer />
          
        </div>
    </>
  )
}

export default App
