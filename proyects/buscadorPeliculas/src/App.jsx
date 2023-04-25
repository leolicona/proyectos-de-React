import { useState } from 'react'
import { movieSearchResults } from './mocks/movieSearchResults'
import './App.css'

//Custom Hooks
import useGetData from './hooks/useGetData'

function App() {
  const clgStyles = 'color: #00b709; font-size: 1rem;'
  const API_KEY = 'e5600476'
  
  const [search, setSearch] = useState(' ')
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
  
  const [loading, data, error] = useGetData(url)
  console.log( data)
  
  
  const { Search } = movieSearchResults
  
  // Adapter

  const movies = Search.map(movie => {
    const { Title, Year, imdbID, Type, Poster } = movie
    return {
      title: Title,
      year: Year,
      id: imdbID,
      type: Type,
      imagen: Poster
    }
  })

  // get input search value with JavaScript

  const handleSumit = (event) => {
    event.preventDefault()
    const formData = new window.FormData(event.target)
    const search = formData.get('search')
    setSearch(search)
  }



  

  return (
    <>
      <header className='header'>
        <form className='header-form' onSubmit={handleSumit}>
          <input name="search" type="text" placeholder="star wars" />
          <button type="submit">🔎</button>
        </form>
      </header> 
      
      <main className='main'>

        { 
          movies.map (movie => {
            const { title, year, id, type, imagen } = movie
            return (
              <article key={id}>
                <img src={imagen } alt="" />
                <h2>{title}</h2>
                <p>{year}</p>
              </article>
              
            )
          }) 
        }  
      </main>
    </>
  )
}

export default App
