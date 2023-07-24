import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { ItemListContainer } from './components/itemlistContainer/itemListContainer';
import { ItemDetail } from './components/itemdetail';
import Navbar from './components/nav/navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <main>
            <Routes>
              <Route path='/' element={<h1>home</h1>} />
              <Route path='/:categoria' element={<ItemListContainer/>} />
              <Route path='/:categoria/:id' element={<ItemDetail/>}  />



            </Routes>



        </main>
      
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
