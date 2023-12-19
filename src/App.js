
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
      <Route path='/' element={<cart/>}/>
      <Route path='/LoginSignup' element={<LoginSignup/>}/>
      <Route path='/menu' element={<Menu/>}/>
      {/* <Route path='/LoginSignup' element={<LoginSignup/>}/> */}
      </Routes>

      </BrowserRouter>      
    </div>
  );
}

export default App;
