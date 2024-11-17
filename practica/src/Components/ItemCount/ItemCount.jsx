import { useState } from "react";
import "./itemcount.css";

const ItemCount = ({ stock, agregarProducto }) => {
const [contador, setContador] = useState(1);

const handleClickAdd = () => {
    if (contador < stock) {
        setContador(contador + 1);
    }
};

const handleClickRemove = () => {
    if (contador > 1) {
        setContador(contador - 1);
    }
};

return (
    <div className="itemCount">
        <button onClick={handleClickAdd}>+</button>
        <p className="contador">{contador}</p>
        <button onClick={handleClickRemove}>-</button>
        <button onClick={() => agregarProducto(contador)}>Agregar al carrito</button>
    </div>
);
};

export default ItemCount;
