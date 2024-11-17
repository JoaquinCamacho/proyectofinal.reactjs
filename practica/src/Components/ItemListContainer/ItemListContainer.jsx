
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection,getDocs,query,where } from 'firebase/firestore'
import db from '../../db/db.js'
import ItemList from './ItemList.jsx'

import "./itemlistcontainer.css"

const ItemListContainer = () => {

    const [products,setProducts]= useState([])
    const {idCategoria} =useParams()

    const getProductos = () =>{
      const productosRef = collection (db , "productos")
      getDocs(productosRef)
        .then( (dataDb)=>{
          const productosDb = dataDb.docs.map ((productoDb)=>{
            return {id: productoDb.id, ...productoDb.data()}
          })
          setProducts(productosDb)
        })
    }

    const getProductsByCategory = () =>{
      const productosRef = collection (db,"productos")
      const queryCategories = query (productosRef, where("categoria","==", idCategoria))
      getDocs(queryCategories)
        .then((dataDb)=>{
            const productosDb = dataDb.docs.map((productoDb)=>{
              return{ id: productoDb.id, ...productoDb.data()}
            })
            setProducts(productosDb)
        })
    }

    useEffect( ()=>{
      if(idCategoria){
        getProductsByCategory()
      }else{
        getProductos()
      }
    },[idCategoria])

  
    
  
  return ( 
    <div className='item-list-container'>
      <ItemList products={products}/> 
    </div>
  )
}

export default ItemListContainer