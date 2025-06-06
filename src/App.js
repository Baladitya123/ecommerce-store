import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import AllProducts from './pages/AllProducts';
import Login from './pages/Login';
import Layout from './Layout';
import NoNavbarLayout from './NoNavbarLayout';
import CheckOut from './pages/CheckOut';
import OrderConfirmation from './pages/OrderConfirmation';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';

function App() {
  return (
      <div className="App">
          
         
            <Routes>
              <Route path='/' element={<Navigate to="/login"/>}/>
              <Route element={<NoNavbarLayout/>}>
                <Route path='/login' element={<Login/>}/>
              </Route>
              <Route element={<Layout/>}>
                <Route path="/home" element={<Home />} />
                <Route path="/products/:productId" element={<ProductDetails />} />
                <Route path='/allproducts' element={<AllProducts/>}/>
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile/>}/>
                <Route path='/checkout' element={<CheckOut/>}/>
                <Route path='/order-confirm' element={<OrderConfirmation />}/>
                <Route path='/about-us' element={<Aboutus/>}/>
                <Route path='/contact-us' element={<Contactus/>}/>
              </Route>
            </Routes>
       

        
        
      </div>
    
  );
}

export default App;
