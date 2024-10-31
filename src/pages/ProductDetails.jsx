import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart, selectProductById,selectAllCartItems} from '../redux/slices/productSlice';
import './productDetails.css';

const ProductDetails =()=>{
  const {productId}=useParams();
  const product = useSelector((state)=>selectProductById(state,parseInt(productId)));
  const dispatch = useDispatch();
  const cart = useSelector(selectAllCartItems);
  const [loading,setLoading]=useState(true)

  const handleAddCart =()=>{
    dispatch(addToCart(product));
      alert('item added to cart succesfully')
  };
  useEffect(()=>{
    const HandleLoading = ()=>{
      setTimeout(()=>{
        setLoading(false)
      },1000)
    }
    HandleLoading();
  },[])
  if(loading){
    return(
      <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
        <div className="spinner-border text-dark text-center" role="status" style={{opacity:"0.6"}}>
          <span className="visually-hidden ms-5">Loading...</span>
        </div>
      </div>
    )
  }
  return(
    <div>
      { product ? (
        <div className='container-fluid vh-100 d-flex'>
          <div className="row h-75 mt-4">
              <div className="col-12 col-md-7 d-flex justify-content-center ">
                <img src={product.image} alt={product.name} className='img-fluid' style={{objectFit:'cover',width:"55%",maxHeight:"75%"}} />
              </div>
              <div className="col-12 col-md-5">
                <div className=' w-50  ms-auto me-auto ms-lg-0 me-lg-auto me-lg-auto '>
                  <h1>{product.name}</h1>
                  <p className='text-uppercase fs-6 fw-normal text-secondary text-start'>dresses</p>
                  <p>{product.description}</p>
                  <div className="custom-radio d-flex flex-row my-3 ms-0">
                    <label className="color-option">
                      <input type="radio" name="color" defaultValue="red" />
                      <span className="color-box" style={{ backgroundColor: "red" }} />
                    </label>
                    <label className="color-option">
                      <input type="radio" name="color" defaultValue="green" />
                      <span className="color-box" style={{ backgroundColor: "green" }} />
                    </label>
                    <label className="color-option">
                      <input type="radio" name="color" defaultValue="blue" />
                      <span className="color-box" style={{ backgroundColor: "blue" }} />
                    </label>
                    <label className="color-option">
                      <input type="radio" name="color" defaultValue="blue" />
                      <span className="color-box" style={{ backgroundColor: "yellow" }} />
                    </label>
                  </div>
                  <p>price : ${product.price}</p>
                  <button onClick={handleAddCart}>add to cart</button>
                </div>
              </div>
          </div>
          
        </div>
      ):(
        <p>product not found</p>
      ) }
      
    </div>
  )
}


export default ProductDetails;
