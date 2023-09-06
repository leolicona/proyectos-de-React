// Custom hook

import { useState, useContext } from 'react';
import { FilterContext } from '../context/Filters.jsx'

function useFilter (products) {
  const { filter, setFilter } = useContext(FilterContext);

    /*  const [filter, setFilter] = useState({
        search: '',
        price: null,
      })  */
    
      const filterProducts = (products) => {
        return products.filter((product) => {
          return (product.category.toLowerCase().includes(filter.search) || 
          product.title.toLowerCase().includes(filter.search))
          && product.price >= filter.price
        })
      } 

    return [filter, setFilter, filterProducts]
}

export default useFilter