import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCartItems,deleteFromCart, addToCart, removeItemCompletely, getTotalAmount } from '../redux/slices/productSlice';
import { Link } from 'react-router-dom';

const Cart=()=> {
  const cart = useSelector(selectAllCartItems);
  const totalamountincart = useSelector(getTotalAmount);
  const [loading,setLoading]=useState(true)
  const dispatch = useDispatch()
  const handleRemoveItemCart=(item)=>{
    dispatch(deleteFromCart(item))
  }
  const handleAddCart=(item)=>{
    dispatch(addToCart(item))
  }
  const removeCompleteHandler=(item)=>{
    dispatch(removeItemCompletely(item))
  }
  useEffect(()=>{
    const loadHandler=()=>{
      setTimeout(()=>{
        setLoading(false)
      },1000)
    }
    loadHandler();
  },[cart,])
  if(loading){
    return(
      <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
        <div className="spinner-border text-dark text-center" role="status" style={{opacity:"0.6"}}>
          <span className="visually-hidden ms-5">Loading...</span>
        </div>
      </div>
    )
  }
  if(cart.length===0){
    return(
      <div className=''>
        <h2 className='text-center text-secondary fs-4 mt-4'>no items were added</h2>
      </div>
    )
  }
  return ( 
    <div className='container mt-4 '>
      <div className='payment border-top mt-3 mb-3 border-bottom table-responsive'>
      <table className="table table-striped table-borderless">
        <thead>
          <tr>
            <th scope="col d-none d-lg-block">s.no</th>
            <th scope="col">Name</th>
            <th scope='col'>quantity</th>
            <th scope="col">price</th>
            <th scope='col'>total price</th>
            
          </tr>
        </thead>
        <tbody>
          {
            cart.map((item,index)=>{
              return(
                <tr key={index}>
                  <th scope="row d-none d-lg-block">{++index}</th>
                  <td>{item.name}</td>
                  <td><div className='input-group w-50'><i className="bi bi-dash-square input-group-text" style={{fontSize:'15px'}}  onClick={()=>handleRemoveItemCart(item.id)}></i><input type="number" className='form-control form-control-sm' value={item.quantity} maxLength="1" style={{width:'1px',height:'30px'}}/>
                    <i className="bi bi-plus-square input-group-text" style={{fontSize:'15px'}} onClick={()=>handleAddCart(item)} ></i></div></td>
                  <td>${item.price}</td>
                  <td>${item.quantity*item.price}</td>
                  <th scope='col'><i className="bi bi-trash3-fill text-danger" onClick={()=>removeCompleteHandler(item)}></i></th>
                </tr>
              )
            })
          }
        </tbody>
        
      </table>
      </div>
      
      {/* summary  */}
     
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-6 align-items-center justify-content-center d-flex col-12">
            <a className="navbar-brand brand" href="#">
              <span className="brand-custom">Ecommerce</span>
              <span className="text-warning fw-bold">STORE</span>
            </a>
          </div>
          <div className="col-md-6 col-12">
            <div className="display-6 text-center fw-semibold mt-3">
              order summary
            </div>
            <hr className="mt-3" />
            <div className="row text-center header w-100">
              <div className="col-7 text-start fw-bold">ITEMS {cart.length}</div>
              <div className="col-5 fw-bold">${totalamountincart}</div>
            </div>
            <label htmlFor="shipping" className="h5 mt-3">
              SHIPPING
            </label>
            <div className="dropdown mt-3 " id="shipping">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                select your shipping type
              </button>
              <ul className="dropdown-menu dropdown-menu-light">
                <li>
                  <a className="dropdown-item active" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            <label htmlFor="promo" className="h5 mt-3">
              PROMO CODE
            </label>
            <input
              type="text"
              placeholder="type your code"
              name="promo"
              className="form-control"
            />
            <button className="btn btn-warning mt-3">APPLY</button>
            <div className="row mt-5">
              <div className="col-6">
                <h5>Total</h5>
              </div>
              <di className="col-6 h5 text-center">$6386</di>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <Link to='/checkout' className='w-100'><button className="btn btn-primary text-center w-50">
                  CHECK OUT
                </button>
              </Link>
                
              
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Cart;
