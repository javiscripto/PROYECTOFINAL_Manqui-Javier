import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { ItemListContainer } from './components/itemlistContainer/itemListContainer';
import { ItemDetail } from './components/items/itemdetail';
import NavBar from './components/nav/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <main>
            <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/:categoria' element={<ItemListContainer/>} />
              <Route path='/:categoria/:id' element={<ItemDetail/>}  />



            </Routes>



        </main>
      
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
