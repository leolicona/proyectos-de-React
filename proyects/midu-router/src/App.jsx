import  {useState, useEffect} from 'react'
import Home from './pages/Home/Home'
import About from './pages/about/About'
import { EVENTS } from './const/events'


import './App.css'

function App() {
  const [ route, setRoute ] = useState(window.location.pathname)


  useEffect(() => {
    const onLocationChange = () => {
      setRoute(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }

  }, [])

  return (
    <>
      <h1>Midu Router</h1>
      { route === '/' && <Home/> }
      { route === '/about' && <About/> }
    </>
  )
}

export default App
