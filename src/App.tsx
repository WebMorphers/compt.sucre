import Hero from './components/Hero/hero'
import './App.css'
import Welcome from './components/welcome/welcome'
import Footer from './components/footer/footer'

const App = () => {

  return (
    <> 
       <Hero />
       <div className=''>
          <Welcome />
          <Footer />
        </div>
    </>
  )
}

export default App
