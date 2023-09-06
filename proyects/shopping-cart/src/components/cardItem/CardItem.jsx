import './cardItemSyles.css'
import { useCart } from '../../hooks/useCart'
function CartItem ({image, price, quantity, addCart, removeCart}) {
    

    return ( 
        <div className="cart_item">
          <img src={image} alt=" "/>
          
          <span>{price}</span>
          <div className="quantity_container">
            <button className="less" onClick={removeCart}> - </button>
            <button className="more" onClick={addCart}> + </button>
          </div>
          <span>{quantity}</span>
         
        </div>
     );
}
export default CartItem;