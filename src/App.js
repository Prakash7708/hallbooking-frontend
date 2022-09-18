import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Hotels from './pages/hotels/Hotels';
import Hotel from './pages/hotel/Hotel';
import Booking from './pages/booking/Booking';
import Login from './pages/Login/Login'
import Register from './pages/Login/Register';
import Admin from './pages/admin/Admin';
function App() {
  return (
    
        
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/hotels" element={<Hotels/>} />
    <Route path="/hotel/:id" element={<Hotel/>} />
    <Route path="/booking/:id" element={<Booking/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/admin" element={<Admin/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
