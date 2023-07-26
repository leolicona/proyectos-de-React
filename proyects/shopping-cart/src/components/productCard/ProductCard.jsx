// Create function ProductCard
import React from 'react'
import './productCardStyles.css'


export default function ProductCard (products) {
    console.log(products)
    return (
        <>
            {
                products.products.map(product => (
                    <div className="container" key={product.id}>
                        <h3>{product.title}</h3>
                        <span className='category'>{product.category}</span>
                        <img src={product.image} alt={product.title} />
                        <p> ${product.price}</p>
                        <button className='addcard-button'>Add to Cart</button>
                    </div>))
            }
        </>
            
        )
}