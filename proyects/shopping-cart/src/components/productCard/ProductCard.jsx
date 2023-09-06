// Create function ProductCard
import React from 'react'
import './productCardStyles.css'

import { useCart } from '../../hooks/useCart'
export default function ProductCard ({product}) {
    const { id, title, price, image, category } = product;
    const { cart, addCart, removeCart, clearCart } = useCart();
    const isProductIncart = cart.find((item) => item.id === id);
    
    

    return (
        <div className="container" key={id}>
            <h3>{title}</h3>
            {category && <span className='category'>{category}</span>}
            <img src={image} alt={title} />
            <p className='price'> ${price}</p>
            <button className={`addcard-button ${ isProductIncart ? 'removeFromCart': ''}`}
                onClick={ isProductIncart ? () => removeCart(product) : () => addCart(product)}
            >
                {isProductIncart ? 'Remove from cart' : 'Add to cart'}
            </button>
        </div>
    )
        
}


