import { PiShoppingCartFill } from "react-icons/pi";
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const CartWidget = () => {

  const {cantidadTotal} = useContext(CartContext)

  const cantidad = cantidadTotal()

  return (
    <Link to="/cart" className="cartWidget" >
    <p className="carrito"><PiShoppingCartFill /></p>
    <p className="cantidad">{ cantidad >= 1 && cantidad}</p>
    </Link>
  )
}

export default CartWidget