import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCartItems,deleteFromCart, addToCart, removeItemCompletely } from '../redux/slices/productSlice';


const Cart=()=> {
  const cart = useSelector(selectAllCartItems);
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
    <div className='container mt-4'>
      <table className="table table-striped">
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
  );
}

export default Cart;
