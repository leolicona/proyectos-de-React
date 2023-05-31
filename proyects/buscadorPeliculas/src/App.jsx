import { useEffect, useState, useRef} from 'react'
import { movieSearchResults } from './mocks/movieSearchResults'
import './App.css'

//Components 
import MovieCard from './components/movieCard/MovieCard'

//Custom Hooks
import useGetData from './hooks/useGetData'

//Data
import { moviesAdapter } from './adapters/moviesAdapter'



function App() {
  const clgStyles = 'color: #00b709; font-size: 1rem;'
  const API_KEY = 'e5600476'
  
  
  const [search, setSearch] = useState('star wars')
  const [searchError, setSearchError] = useState(null)
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
  const [loading, data, error] = useGetData({url, callback: (data) => moviesAdapter(data) })
  console.log("loading", loading, "error:", error)
  
  const isFirstInput = useRef(true)
  // Adapter
  
  const movies = moviesAdapter( data.Search )
  //console.log("Movies", movies)
  

  // get input search value with JavaScript

  const handleSumit = (event) => {
    event.preventDefault()
    const formData = new window.FormData(event.target)
    const search = formData.get('search')
    setSearch(search)
  }

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setSearch(newQuery)
  }

  useEffect(()=> {
    if(isFirstInput.current){
      isFirstInput.current = search === '';
    }

    if (search === "") { 
      setSearchError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) { 
      setSearchError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3) {
      setSearchError('La búsqueda debe tener al menos 3 caracteres')
      return
    }
  }, [search])


  return (
    <>
      <header className='header'>
        <form className='header-form' onSubmit={handleSumit}>
          <input name="search" type="text" placeholder="star wars" onChange={handleChange}/>
          <button type="submit">🔎</button>
        </form>
        {loading &&
          <p>Loading...</p>
        }
      </header> 
      
      <main className='main'>
        {searchError &&
          <p style={{color: "red"}}>{searchError}</p>
        }
       
        { data?.Search &&
          movies.map (movie => {
            const { title, year, id, imagen } = movie
            return (
              <MovieCard 
                key={id}
                id={id}
                title={title}
                year={year}
                imagen={imagen}
                />
            )
          }) 
        }  
        { error && 
          <p>Ocurrio un error, intenta mas tarde</p>
        }
      </main>
    </>
  )
}

export default App
