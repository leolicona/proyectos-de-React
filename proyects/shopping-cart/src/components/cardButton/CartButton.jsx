import shoppingCart from '../../assets/images/shopping_cart.png';
import { useCart } from '../../hooks/useCart';
import './cartButtonStyles.css';
function CartButton () {
    const { isCartActive, activeCart } = useCart();
    return ( 
        <div className={`cart_button ${ isCartActive ? 'active' : ''}`}
            onClick={() => activeCart () }>
            <img src={shoppingCart} alt=" "/>
        </div>
     );
}

export default CartButton;