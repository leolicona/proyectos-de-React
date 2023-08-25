// Create function ProductCard
import React from 'react'
import './productCardStyles.css'


export default function ProductCard ({products}) {
    return (
        <div className="container" key={products.id}>
            <h3>{products.title}</h3>
            <span className='category'>{products.category}</span>
            <img src={products.image} alt={products.title} />
            <p> ${products.price}</p>
            <button className='addcard-button'>Add to Cart</button>
        </div>
    )
        
}