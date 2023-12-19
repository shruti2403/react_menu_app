
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import MenuCategory from './Pages/MenuCategory';
import Menu from './Pages/menu';
import Food from './Pages/food';
import Cart from './Pages/cart';

function App() {


  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
      <Route path='/' element={<Menu/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      <Route path='/indian' element={<MenuCategory category ="indian"/>}/>
      <Route path="/chinese" element={<MenuCategory category="chinese"/>} />
      <Route path="/continental" element={<MenuCategory category="continental"/>} />
      <Route path="/food" element={<Food/>}>
          <Route path=':foodId' element={<Food/>} />
          </Route>
      <Route path='/cart' element={<Cart/>}/>
      </Routes>

      </BrowserRouter>      
    </div>
  );
}

export default App;
