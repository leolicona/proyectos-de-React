import CartItem from '../CardItem/CardItem'
import { useCart } from '../../hooks/useCart'
import './cartStyles.css'

function Cart () {

    const { cart, addCart, removeCart, clearCart } = useCart()

    console.log(cart)   

    const { isCartActive } = useCart()
    if (!isCartActive) return null
    return ( 
        <div className="cart">
            
          {
                cart.map((item) => (
                    <CartItem
                        key={item.id}
                        image={item.image}
                        price={item.price}
                        quantity={item.quantity}
                        addCart={() => addCart(item)}
                        removeCart={() => removeCart(item)}
                        
                    />
                ))
          }
            <div> 
                <button onClick={() => clearCart()}> Clear Cart</button>
            </div>
          
        </div>
     );
}
export default Cart