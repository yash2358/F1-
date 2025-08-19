import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Register from './Pages/Register';
import Service from './Pages/Service';
import Login from './Pages/Login';
import Error from './Pages/Error';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Logout from './Pages/Logout';
import AdminUser from './Pages/AdminUser';
import AdminContact from './Pages/AdminContact';
import Admin from './Pages/Admin';
import GetUser from './Pages/GetUser';

const App=()=>{
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/logout" element={<Logout/>}/>
    <Route path="/admin" element={<Admin/>}>
    <Route path="users" element={<AdminUser/>}/>
    <Route path="contact" element={<AdminContact/>}/>
    <Route path="users/:id/edit" element={<GetUser/>}/>
    </Route>
    <Route path="*" element={<Error/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
)
}

export default App;

