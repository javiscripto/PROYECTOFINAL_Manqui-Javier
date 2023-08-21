import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { ItemListContainer } from './components/itemlistContainer/itemListContainer';
import { ItemDetail } from './components/items/itemdetail';
import {NavBar} from './components/nav/navbar';
import {  CustomProvider } from './cartContext/context';
import { Carrito } from './components/cart/cart';
import { Payment } from './components/payment/payment';





function App() {

 


  return (
    
    <div className="App">
      <CustomProvider>
     
      <BrowserRouter>
        <NavBar/>
        <main>
            <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/:categoria' element={<ItemListContainer/>} />
              <Route path='/:categoria/:id' element={<ItemDetail/>}  />
              <Route path='/carrito' element={<Carrito/>} />
              <Route path='/payment' element={<Payment/> }/>



            </Routes>



        </main>
      
      
      </BrowserRouter>
      
      
    </CustomProvider>
    </div>
  );
}

export default App;
