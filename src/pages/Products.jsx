import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectAllProducts } from '../redux/slices/productSlice';

const Products =()=>{
  const products = useSelector(selectAllProducts);
  const navigate = useNavigate();
  const handleClick = (productId)=>{
    navigate(`/products/${productId}`)
  };
  return (
    <div className=' container-fluid'>
     
      <div className='row d-flex justify-content-center ms-auto me-auto '>
        <h2 className='mt-4  text-center'>our latest products</h2>
        {products.map((product)=>{
          if(product.latest){
            return(
              <div className='col-lg-3 g-4 col-md-4 col-12 ms-auto me-auto' key={product.id}>
                <div className="card w-100 border rounded shadow-lg" >
                  <img src={product.image} className="card-img-top" alt={product.name} style={{height:'200px',objectFit:"cover",width:"100%"}}/>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">price : ${product.price}</p>
                    <button className='bg-warning border rouded text-light h-100 p-2' onClick={()=> handleClick(product.id)} style={{borderRadius:'50px'}}>view details</button>
                  </div>
                </div>
              </div>
              )
          }
        })}
      </div>
    </div>
  );
}



export default Products;
