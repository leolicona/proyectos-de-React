import { useContext } from "react";
import { CartContext } from "../context/cart";

export const useCart = () => {
    const { cart, addCart, removeCart, clearCart, isCartActive, activeCart } = useContext(CartContext);

    return {
        cart,
        addCart,
        removeCart,
        clearCart,
        isCartActive,
        activeCart
        
    }
}