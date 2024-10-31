import React from 'react'
import './Rewards.css'

const Rewards = () => {
 
  return (
    <div className='container-fluid ms-auto me-auto'>
        <div className="ms-auto me-auto row mt-3">
            <h2 className='text-center'>our success stories</h2>
            <div className='card-overlay col-lg-3 g-4 col-md-4 col-12 ms-auto me-auto'>
                <div className="card w-100 border rounded shadow-lg" style={{height:"150px"}}>
                    <div className="card-body d-flex align-items-center justify-content-center">
                        <h5 className="card-title text-center  fw-semibold fs-4 text-warning">Exclusive collections</h5>
                        
                    </div>
                    <div className="overlay border rounded"></div>
                </div>
                
            </div>
            <div className='card-overlay col-lg-3 g-4 col-md-4 col-12 ms-auto me-auto'>
                <div className="card w-100 border rounded shadow-lg "style={{height:"150px"}}>
                    <div className="card-body  d-flex align-items-center justify-content-center">
                        <h5 className="card-title text-center text-warning fw-semibold fs-4">Rapid customer service</h5>
                    </div>
                    <div className="overlay border rounded"></div>
                </div>
                
            </div>
            <div className='card-overlay col-lg-3 g-4 col-md-4 col-12 ms-auto me-auto'>
                <div className="card w-100 border rounded shadow-lg px-auto" style={{height:"150px"}}>
                    <div className="card-body  d-flex align-items-center justify-content-center">
                        <h5 className="card-title text-center text-warning fw-semibold fs-4">Attractive designs</h5>
                    </div>
                    <div className="overlay border rounded"></div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Rewards