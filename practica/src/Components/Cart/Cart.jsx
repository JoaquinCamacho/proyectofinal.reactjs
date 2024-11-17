import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { HiOutlineTrash } from "react-icons/hi"

import "./cart.css"

const Cart = () => {

    const { cart,precioTotal,borrarProduct,borrarCarrito } = useContext(CartContext)

    if(cart.length === 0){
        return(
            <div className="cart-vacio">
                <div >No tenes ningun producto en tu carrito </div>
                <Link className="cart-link" to="/">Volver al inicio</Link>
            </div>
        )
    }



  return (
    <div>
        <h2 className="cart-titulo">Productos en el carrito</h2>
        {
            cart.map ((produCart) =>(
                <div key={produCart.id} className="cart-product">
                    <img src={produCart.img} alt="" />
                    <p>{produCart.name}</p>
                    <p>Cantidad: {produCart.cantidad}</p>
                    <p>Total: {produCart.cantidad * produCart.precio}</p>

                    <p className="btn-eliminar" onClick={ ( ) => borrarProduct(produCart.id)}>{<HiOutlineTrash/>}</p>
                </div>
            ))
        }
    <div className="cart-footer">
        <button onClick={borrarCarrito}>Vaciar Carrito</button>
        <Link className="cart-fc" to="/checkout">Finalizar mi Compra</Link>
        <p>Precio Total: {precioTotal()}</p>
    </div>
    </div>
  )
}

export default Cart