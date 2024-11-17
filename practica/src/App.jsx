import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Cart from './Components/Cart/Cart'
import Footer from './Components/Footer/Footer'
import Checkout from './Components/Checkout/Checkout'


import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

import './App.css'

function App() {


  return (
    <>
    <BrowserRouter >
      <CartProvider>


      <NavBar/>
    
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/detail/:idProduct' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element = {<Cart/>} />
          <Route path='/checkout' element= { <Checkout />} />
        </Routes>
        
        <Footer/>
      </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App
