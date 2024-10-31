import React from 'react'

const Footer = () => {
  return (
    <div className='container-fluid'>
        <>
  {/* Footer */}
  <footer className="text-center text-lg-start bg-body-tertiary text-muted" style={{backgroundColor:"#A594F9"}}>
    {/* Section: Social media */}
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      {/* Left */}
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      {/* Left */}
      {/* Right */}
      <div>
        <a href="" className="me-4 text-reset">
        <i className="bi bi-facebook text-info"></i>
        </a>
        <a href="" className="me-4 text-reset">
        <i className="bi bi-twitter-x "></i>
        </a>
        <a href="" className="me-4 text-reset">
        <i className="bi bi-google"></i>
        </a>
        <a href="" className="me-4 text-reset">
        <i className="bi bi-instagram text-danger"></i>
        </a>
      </div>
      {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className=""  style={{backgroundColor:"#A594F9"}}>
      <div className="container text-center text-light text-md-start mt-5 pt-4"style={{opacity:"0.6"}}>
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3" />
              <a className="navbar-brand " href="#">Ecommerce<span className='text-warning fw-bold'>store</span></a>
            </h6>
            <p>
            Discover a wide range of high-quality products at [EcommerceSite], with convenient delivery available across India! 
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <a href="#!" className="text-reset">
                Gent's ware
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Kids ware
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
              Women’s Wear
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">why EcommerceSite?</h6>
            <p>
              <a href="#!" className="text-reset">
                Pricing
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Flexiblity
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Help
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p> 
            <i className="bi bi-envelope"></i> ecommercestore@shopping.com
            </p>
            <p>
            <i className="bi bi-house-door-fill"></i> Amaravati,R6-zone
            </p>
            <p>
            <i className="bi bi-telephone-fill"></i> + 91 234 567 88
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div
      className="text-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
      © 2024 Copyright:
      EcommerceStore
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</>

    </div>
  )
}

export default Footer