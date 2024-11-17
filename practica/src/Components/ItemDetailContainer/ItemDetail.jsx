import ItemCount from "../ItemCount/ItemCount"
import { useContext,useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({product}) => {

  const [mostrarItemCount, setMostrarItemCount] = useState(true)

  const { addProductInCart } = useContext(CartContext)

  const agregarProducto = (contador) =>{
    const productCart = {...product, cantidad : contador}

    addProductInCart(productCart)
    setMostrarItemCount(false)
  }

  return (
  <div className='itemDetail'>
        <img src={product.img} alt="" />
      <div className='descripcion'>
          <h2>{product.nombre}</h2>
          <p>Precio : ${product.precio}</p>
          <p>{product.descripcion}</p>
          {
            mostrarItemCount === true ? (
              <ItemCount stock ={product.stock} agregarProducto ={agregarProducto}/>
            ) : (
              <Link className="finalizar-compra" to="/cart" >Terminar Compra</Link>
            )
          }
      </div>
  </div>
    

  )
}

export default ItemDetail 