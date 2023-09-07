import { useState, useEffect } from 'react'
import { EVENTS } from '../../const/events'

function Router ({routes = [], defaulComponent : DefaultComponent = () => <h1>404</h1>}) {
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

    console.log(routes)
    const Page = routes.find(({path}) => path === route)?.Component 

    return Page ? <Page/> : <DefaultComponent/>


  }

export default Router