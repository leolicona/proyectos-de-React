import { useState, useEffect, useContext } from 'react'

import ProductCard from './components/productCard/ProductCard'
import SearchBar from './components/searchBar.jsx/SearchBar'
import PriceFilter from './components/priceFilter/PriceFilter'

import { FilterContext } from './context/Filters.jsx'



import useFilter from './hooks/useFilter'
const API = 'https://fakestoreapi.com/products'
import './app.css'


function App() {
 
  //const filters = useContext(FilterContext);
  //console.log(filters);
  const [ products, setProducts ] = useState([]);
  const [ filter, setFilter, filterProducts ] = useFilter(products)
 

  const updateCategory = (e) => {
    setFilter({
      ...filter,
      search: e.target.value,
    })
  }

  const updatePrice = (e) => {
    setFilter({
      ...filter,
      price: e.target.value,
    })
  }

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(json => setProducts(json))
  }, [])

  return (
    <section className='main-container'>

      <h1>The Fake Store </h1>
      <section className='filter-section'>
        <SearchBar
          value={filter.search}
          setSearch={updateCategory}
        />
        <PriceFilter
          value={filter.price}
          setPriceFilter={updatePrice}
        />
      </section>
     
      <section className='products-container'>
        <ProductCard
          products={filterProducts(products)}
        />
      </section>
    </section>
  )
}

export default App;
