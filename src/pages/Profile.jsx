import React from 'react';
import { getName,getEmail, clearCredentials } from '../redux/slices/productSlice';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Profile() {
  const name = useSelector(getName);
  const email = useSelector(getEmail);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleLogout = ()=>{
    dispatch(clearCredentials());
    navigate('/')
  }
  return (
    <div>
      <section
        className="w-100 px-4 py-5"
        style={{ borderRadius: ".5rem .5rem 0 0" }}
>
  <div className="row d-flex justify-content-center">
    <div className="col col-md-9 col-lg-7 col-xl-6">
      <div className="card" style={{ borderRadius: 15 }}>
        <div className="card-body p-4">
          <div className="d-flex">
            <div className="flex-shrink-0">
              <img
                src='/images/image.png'
                alt="Generic placeholder image"
                className="img-fluid"
                style={{ width: 180, borderRadius: 10 }}
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <h5 className="mb-1">{name}</h5>
              <p className="mb-2 pb-1">{email}</p>
              
              <div className="d-flex pt-1">
                <Link to='/home'><button
                  type="button"
                  data-mdb-button-init=""
                  data-mdb-ripple-init=""
                  className="btn btn-warning me-1 flex-grow-1"
                >
                  Home
                </button></Link>
                <Link to='/cart'><button
                  type="button"
                  data-mdb-button-init=""
                  data-mdb-ripple-init=""
                  className="btn btn-warning me-1 flex-grow-1"
                >
                  Cart
                </button></Link>
                <Link to='/allproducts'><button
                  type="button"
                  data-mdb-button-init=""
                  data-mdb-ripple-init=""
                  className="btn btn-warning flex-grow-1"
                >
                  Products
                </button></Link>
                <button  type="button"
                  data-mdb-button-init=""
                  data-mdb-ripple-init=""
                  className="btn btn-warning flex-grow-1 ms-1" onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  );
}

export default Profile;
