import { useState, useEffect, useContext } from 'react'

import Products from './components/productCard/ProductCard'
import SearchBar from './components/searchBar.jsx/SearchBar'
import PriceFilter from './components/priceFilter/PriceFilter'
import Header from './components/header/Header'
import Cart from './components/cart/Cart'

import { useCart } from './hooks/useCart'


import useFilter from './hooks/useFilter'
const API = 'https://fakestoreapi.com/products'
import './app.css'


function App() {
 
  const [ products, setProducts ] = useState([]);
  const [ filter, setFilter, filterProducts ] = useFilter(products)

  console.log('Products', products);

  const updateFilter = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(json => setProducts(json))
  }, [])

  return (
  
    <section className='main-container'>
      <Header/>
      <Cart/>
      <section className='filter-section'>
        <SearchBar
          name={'search'}
          value={filter.search}
          setSearch={updateFilter}
        />
        <PriceFilter
          name={'price'}
          value={filter.price}
          setPriceFilter={updateFilter}
        />
      </section>
     
      <section className='products-container'>
      
        {
         filterProducts(products).map((product) => 
            <Products  key={product.id} 
              product={product}
            />)
        }
      </section>
    </section>
  )
}

export default App;
