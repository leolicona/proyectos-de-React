import { createContext, useState } from "react"

// 1. Crear el contexto
export const CartContext = createContext()

// 2. Crear el componente provider

export const CartProvider = ({ children }) => {
    const [ isCartActive, setCartActive ] = useState(false)
    const [cart, setCart ] = useState([])

        const addCart = product => {
            // Usando el structureclone
            const indexProductInCart = cart.findIndex((item) => item.id === product.id)
            console.log('---> indexProductInCart', indexProductInCart);
            
            if (indexProductInCart >= 0) {
                const newCart = structuredClone(cart);
                newCart[indexProductInCart].quantity += 1
                setCart(newCart)
                return
            } 
            setCart(prevState => ([
                ...prevState,
                { ...product, quantity: 1 }
            ]))
            
        }
        

        const removeCart = (product) => {

            const indexProductInCart = cart.findIndex((item) => item.id === product.id)
           
            console.log('---> indexProductInCart', indexProductInCart);

            if (cart[indexProductInCart].quantity > 1) {
                const newCart = structuredClone(cart);
                newCart[indexProductInCart].quantity -= 1
                setCart(newCart)
                return
            }

            setCart(prevState => prevState.filter(item => item.id !== product.id))
        }

        const clearCart = () => {
            setCart([]); 
        }

        const activeCart = () => {
            console.log('---> activeCart');
            setCartActive(prevState => !prevState);
        }


    return (
        <CartContext.Provider value={
            {
                cart,
                addCart,
                removeCart,
                clearCart,
                isCartActive,
                activeCart
            }
        }>
            {children}
        </CartContext.Provider>
    );
    }