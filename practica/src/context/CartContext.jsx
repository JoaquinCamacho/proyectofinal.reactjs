import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) =>{
    const [cart,setCart] = useState([])

    const addProductInCart = (newProduct) =>{
        setCart( [ ...cart, newProduct] )
    }

    const cantidadTotal = () =>{
        const cantidad = cart.reduce ((total, productCart) =>total + productCart.cantidad,0)
        return cantidad
    }

    const precioTotal = () =>{
        const precio = cart.reduce( ( total,productCart ) => total + (productCart.cantidad * productCart.precio),0)
        return precio
    }

    const borrarProduct = (idProduct)=>{
        const filterProducts = cart.filter( ( productCart ) => productCart.id !== idProduct)
        setCart (filterProducts)
    }

    const borrarCarrito = () =>{
        setCart([])
    }

    return(
        <CartContext.Provider value={ { cart,addProductInCart,cantidadTotal,precioTotal,borrarProduct,borrarCarrito } }>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext}