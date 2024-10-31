import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css";
import { useSelector } from 'react-redux';
import { getNumberOfItemsInCart } from '../redux/slices/productSlice';

const Navbar = () => {
   const cartitems = useSelector(getNumberOfItemsInCart)
   const [searchQuery ,setSearchQuery]=useState('');
   const navigate = useNavigate();
   const handleSearch=()=>{
      if(searchQuery){
         navigate(`/allproducts?search=${searchQuery}`)
      }
      setSearchQuery('')
   }
  
    return (
      <nav className="navbar sticky-top navbar-dark navbar-expand-lg d-flex justify-content-around" >
         <div className="container-fluid  ">
            <a className="navbar-brand  " href="#">Ecommerce<span className='text-warning fw-bold'>store</span></a>
            <button className="navbar-toggler d-sm-none d-block" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className=' d-flex  justify-content-center align-items-center w-md-75 ms-0 w-sm-100 ms-md-5 '>
               <div className="input-group">
                  <div className="input-group-text">
                     <i className="bi bi-search text-dark"></i>
                  </div>
                  <input type="text" className="form-control" value={searchQuery} aria-label="Text input with radio button" placeholder='search here..' onChange={(e)=>setSearchQuery(e.target.value)}/>
                  <button className='text-dark border-0 border rounded-end px-4'onClick={handleSearch} >search</button>
               </div>
            </div>
            <button className="navbar-toggler d-none d-md-block d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
               <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
               </div>
               <div className="offcanvas-body  d-flex align-items-center ms-auto">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                     <li className="nav-item">
                        <Link to='/home' className='nav-link'><i class="bi bi-house me-1"></i>
                        Home</Link>
                     </li>
                     <li className="nav-item">
                        <Link to='/cart' className='nav-link position-relative'><i class="bi bi-cart2 me-1"></i>
                         Cart
                        <span className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-warning">
                           {cartitems}
                           <span className="visually-hidden">unread messages</span>
                        </span>
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to='/allproducts' className='nav-link'><i class="bi bi-bag me-1"></i>
                        Products</Link>
                     </li>
                     <li className="nav-item">
                        <Link to='/profile' className='nav-link'>
                        <i className="bi bi-person-circle me-1"></i> Profile</Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </nav>
  )
}

export default Navbar