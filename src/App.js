import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import { ItemListContainer } from './components/itemListContainer';
import { ItemDetail } from './components/itemdetail';


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
