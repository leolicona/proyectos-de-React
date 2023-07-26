import { useEffect, useState, useRef} from 'react'
import { movieSearchResults } from './mocks/movieSearchResults'
import './App.css'

//Components 
import MovieCard from './components/movieCard/MovieCard'

//Custom Hooks
import useGetData from './hooks/useGetData'
import useInputValidate from './hooks/useInputValidate'
import useFilterData from './hooks/useFilterData'



//Data
import { moviesAdapter } from './adapters/moviesAdapter'



function App() {
  const clgStyles = 'color: #00b709; font-size: 1rem;'
  const API_KEY = 'e5600476'

  //data incial
  const firtsURL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${'star wars'}`

  const getURL = (request) => {
    return `https://www.omdbapi.com/?apikey=${API_KEY}&s=${request}`
  }
  

  const [search, setSearch] = useState('')  
  const [sort, setSort] = useState(false)
  const [searchError] = useInputValidate({search})

  const [url, setUrl] = useState(firtsURL)

  const [loading, data, error] = useGetData({url,  callback: moviesAdapter})
  console.log("Data", url, data)
  
  // Adapter
  const movies = moviesAdapter( data.Search )
  //console.log("Movies", movies)
  const [filterMovies ] = useFilterData(movies, sort)

  // get input search value with JavaScript
  const handleSumit = (event) => {
    event.preventDefault()
    //const formData = new window.FormData(event.target)
    //const searchL = formData.get('search')
    //setSearch(searchL)
    setUrl(getURL(search))
  }

  const handleChange = (e) => {
    const newQuery = e.target.value;
    if (newQuery.startsWith(' ')) return
    setSearch(newQuery)
  }

  const handleSort = (e) => {
    setSort(!sort)
  }


  return (
    <>
      <header className='header'>
        <form className='header-form' onSubmit={handleSumit}>
          <input name="search" type="text" placeholder="star wars" value={search} onChange={handleChange}/>
          <input className='input-sort' type="checkbox"  checked={sort} onChange={handleSort} />
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
          filterMovies.map (movie => {
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
