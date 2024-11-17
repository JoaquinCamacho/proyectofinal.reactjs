import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import {doc, getDoc} from "firebase/firestore"
import db from "../../db/db"
import ItemDetail from "./ItemDetail"

import "./itemdetail.css"

const ItemDetailContainer = () => {

    const [product,setProduct] = useState({})

    const {idProduct} = useParams ()

    const getProductById = () =>{
      const docRef = doc (db,"productos", idProduct)
      getDoc(docRef)
        .then ( (dataDb)=>{
          const productoDb = {id: dataDb.id, ...dataDb.data()}
          setProduct(productoDb)
        })
    }

    useEffect( ()=>{
      getProductById()
    },[idProduct])

  return (
    <>
    <ItemDetail product={product}/>
    </>
  )
}

export default ItemDetailContainer