import Home from './pages/Home/Home'
import About from './pages/about/About'
import Router from './components/Router/Router'

import './App.css'


const appRoutes = [
  {
    path: '/',
    Component: Home
  },
  {
    path: '/about',
    Component: About
  }
]

function App() {
  



  return (
    <>
      <h1>Midu Router</h1>
      <Router routes={appRoutes}/>
    </>
  )
}

export default App
