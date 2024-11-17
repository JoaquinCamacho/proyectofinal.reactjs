import React, { useState } from 'react'
import FormCheckout from './FormCheckout'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import db from "../../db/db.js"
import { Link } from 'react-router-dom'

import "./checkout.css"

const Checkout = () => {

    const[idOrder,setIdOrder] = useState (null)
    const[dataForm,setDataForm] = useState({
        nombrecompleto:"",
        telefono:"",
        email:""
    })

    
    const { cart,precioTotal, borrarCarrito } = useContext(CartContext)

    const handleOnChangeInput = (event) =>{
        setDataForm( { ...dataForm, [event.target.name]: event.target.value } )
    }

    const handleSubmitForm = (event) =>{
        event.preventDefault()

        const order = {
            cliente : {...dataForm},
            productos : [...cart],
            total: precioTotal()
        }
        subirOrder(order)
    }


    const subirOrder = (newOrder) =>{
        const ordersRef = collection(db, "orders")
        addDoc(ordersRef,newOrder)
            .then( (response)=>setIdOrder(response.id))
            .catch((error)=>{
                console.error(error)
            })
            .finally(()=>{
                borrarCarrito()
            })
    }

  return (
    <div>
        {
            idOrder === null ? (
                <FormCheckout dataForm ={dataForm} handleOnChangeInput={handleOnChangeInput} handleSubmitForm={handleSubmitForm}/>

            ):(
                
                    <div className='checkout' >
                        <h2>Su orden fue tomada correctamente </h2>
                        <p>Cuide su numero de orden : {idOrder}</p>
                        <Link className='checkout-link' to="/">Volver al inicio</Link>

                    </div>
                
            )
        }
    </div>
  )
}

export default Checkout