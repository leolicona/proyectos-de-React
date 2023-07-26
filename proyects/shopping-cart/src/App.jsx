import { useState, useEffect } from 'react'

import ProductCard from './components/productCard/ProductCard'
import SearchBar from './components/searchBar.jsx/SearchBar'
import PriceFilter from './components/priceFilter/PriceFilter'
const API = 'https://fakestoreapi.com/products'
import './app.css'


function App() {

  const [ products, setProducts ] = useState([]);
  const [filter, setFilter] = useState({
    search: '',
    price: 0,
  })

  const filterProducts = (products) => {
    return products.filter((product) => {
      return product.category.toLowerCase().includes(filter.search) || product.title.toLowerCase().includes(filter.search)
      //( product.category !== 'all' || product.category === filter.category) 
      && product.price >= filter.price
    })}


  const updateCategory = (e) => {
    setFilter({
      ...filter,
      category: e.target.value,
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
          value={filter.category}
          setSearch={updateCategory}
        />
        <PriceFilter
          value={filter.price}
          setValue={updatePrice}
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
