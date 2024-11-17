import { Link } from "react-router-dom"

const Item = ({product}) => {
  return (
  <div className='item'>
      <img src={product.img} className='img-item' alt="" />
    <h2>{product.nombre}</h2>
      <p> Precio: ${product.precio}</p>
      
    
    <Link to={"/detail/" + product.id} className="detalles">Ver detalles</Link>
  </div>
  )
}

export default Item