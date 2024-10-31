import React from 'react'
import './Faqs.css'

const Faqs = () => {
  return (
    <div className='container-fluid mt-5'>
        <h4 className='text-center'>  FAQ'S...</h4>
        <div className="accordion ms-auto me-auto" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne">
                    is all products are good?
                </button>
                </h2>
                <div
                id="collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>our products have a wonderful quality</strong> Our products are crafted with the highest quality materials and undergo rigorous testing to ensure durability and performance. We are committed to excellence, delivering items that exceed your expectations and stand the test of time. 
                    <code>no worries on quality</code>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo">
                    is delivery available all over india?
                </button>
                </h2>
                <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>yes our products can be delivered to any place in india</strong> We’re proud to offer delivery of our products to any location across India. No matter where you are, you can count on us to get your order to you quickly and efficiently!
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree">
                     Can I return or exchange my order?
                </button>
                </h2>
                <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>offcourse you can</strong>  Yes, we offer a hassle-free return and exchange policy. If you're not satisfied with your purchase, you can return it within [7] days of delivery.
                </div>
                </div>
            </div>
            </div>

    </div>
  )
}

export default Faqs