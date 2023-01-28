import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';

function App() {
  return (
    <BrowserRouter>
    <div className="">
      <Routes>
       
          <Route path='/' element={<Home />}></Route> 
          <Route path='/checkout' element={<Checkout />}></Route>
      <Route path = '/login' element={<Login />}></Route>

         </Routes>
        
       
      
  
    </div>
    </BrowserRouter>
  );
}

export default App;
