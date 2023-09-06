import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FilterProvider } from './context/Filters.jsx'
import {  CartProvider } from './context/cart'

//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FilterProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </FilterProvider>,
)
