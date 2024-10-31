import React from 'react'
import './Carousal.css';
import image1 from '../assets/1.jpg';
//import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';

const Carousal = () => {

  
  return (
    <div className='container-fluid w-100 m-0'>
        <div id="carouselExampleFade" className="carousel slide carousel-fade p-0">
  <div className="carousel-inner">
    
    <div className="carousel-item active m-0">
      <div className="carousel-overlay">
        <img src={image1} className="d-block w-100  img-fluid" alt="..." style={{height:'75vh'}}/>
        <div className="overlay"></div>
        <div className="carousel-caption d-none d-md-block">
          <h2>lets dive into a ocean of collections</h2>
          <p>you are always welcome to our store</p>
      </div>
      </div>
    </div>
    <div className="carousel-item">
    <div className="carousel-overlay">
        <img src={image3} className="d-block w-100  img-fluid" alt="..." style={{height:'75vh'}}/>
        <div className="overlay"></div>
        <div className="carousel-caption d-none d-md-block">
          <h2>a biggest shopping online mart</h2>
          <p>every day with a new collections for you</p>
      </div>
      </div>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousal