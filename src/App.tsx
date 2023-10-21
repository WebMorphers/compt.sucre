import Hero from './components/Hero/hero'
import './App.css'
import Welcome from './components/welcome/welcome'

const App = () => {

  return (
    <> 
       <Hero />
       <div className=''>
          <Welcome />
        </div>
    </>
  )
}

export default App
