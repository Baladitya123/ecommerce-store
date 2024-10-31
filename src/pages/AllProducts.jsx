import React, { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { selectAllProducts } from '../redux/slices/productSlice';

const AllProducts =()=>{
  const products = useSelector(selectAllProducts);
  const [loading,setLoading]=useState(true)
  const location = useLocation();
  const [filteredProducts,setFilterProducts]=useState([]);
  const navigate = useNavigate();
  const handleClick = (productId)=>{
    navigate(`/products/${productId}`)
  };
  useEffect(()=>{
    const loadProducts =()=>{
      setTimeout(()=>{
        setLoading(false)
      },1000);
      const params = new URLSearchParams(location.search)
        const searchQuery = params.get('search')||'';
        console.log('search query:',searchQuery)
        console.log("products in store:",products)
        if(searchQuery.trim()===''){
          setFilterProducts(products)
        }
        else{
          const filtered = products.filter((item)=>{
            console.log('item being checked:',item)
          return item.name.toLowerCase().includes(searchQuery.toLowerCase())
          })
          setFilterProducts(filtered)
          console.log('filterd products:',filtered)
        }
        console.log("after all completed the filtered products:",filteredProducts)
        }
       loadProducts();
    },[location.search,products]
  )
  if(loading){
    return(
      <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
        <div className="spinner-border text-dark text-center" role="status" style={{opacity:"0.6"}}>
          <span className="visually-hidden ms-5">Loading...</span>
        </div>
      </div>
    ) 
  }
  return (
    <div className=' container-fluid'>
      <div className='row d-flex justify-content-center ms-auto me-auto '>
        <h2 className='mt-4  text-center'>our all trending products for you</h2>
        {filteredProducts.length>0?(filteredProducts.map((product)=>{
            return(
              <div className='col-lg-3 g-4 col-md-4 col-12 ms-auto me-auto' key={product.id}>
                <div className="card w-100 border rounded shadow-lg" >
                  <img src={product.image} className="card-img-top img-fluid" alt={product.name} style={{height:'200px',objectFit:"cover",width:"100%"}}/>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">price : ${product.price}</p>
                    <button className='bg-warning border rouded text-light h-100 p-2' onClick={()=> handleClick(product.id)} style={{borderRadius:'50px'}}>view details</button>
                  </div>
                </div>
              </div>
              )
        })):(<p> No products found</p>)}
      </div>
    </div>
  );
}



export default AllProducts ;
