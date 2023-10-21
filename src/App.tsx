import Hero from './components/Hero/hero'
import './App.css'
import Welcome from './components/welcome/welcome'
import Products from './components/products/products'

const App = () => {

  return (
    <> 
       <Hero />
       <div className=''>
          <Welcome />
          <Products />
        </div>
    </>
  )
}

export default App
