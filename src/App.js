import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { ItemListContainer } from './components/itemlistContainer/itemListContainer';
import { ItemDetail } from './components/items/itemdetail';
import NavBar from './components/nav/Navbar';
import { CartContext } from './cartContext/context';
import { useState } from 'react';
import { Carrito } from './components/cart/cart';





function App() {

    const [carrito,setCarrito]=useState([])




  return (
    <div className="App">
      <CartContext.Provider value={{carrito,setCarrito}}>
      <BrowserRouter>
        <NavBar/>
        <main>
            <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/:categoria' element={<ItemListContainer/>} />
              <Route path='/:categoria/:id' element={<ItemDetail/>}  />
              <Route path='/carrito' element={<Carrito/>} />



            </Routes>



        </main>
      
      
      </BrowserRouter>
      </CartContext.Provider>
      
    </div>
  );
}

export default App;
