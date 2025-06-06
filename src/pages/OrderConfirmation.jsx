import React from 'react'

const OrderConfirmation= () => {
  return (
    <>
    <div className="container mt-5 mb-5">
        <div className="row d-flex justify-content-center">
            <div className="col-md-8">
            <div className="card">
                <div className="invoice p-5">
                <h5>Your order Confirmed!     <img src="data:image/png;base64,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" width={50} /></h5>
                <span className="font-weight-bold d-block mt-4">Hello, Chris</span>
                <span>
                    You order has been confirmed and will be shipped in next two days!
                </span>
                <div className="payment border-top mt-3 mb-3 border-bottom table-responsive">
                    <table className="table table-borderless">
                    <tbody>
                        <tr>
                        <td>
                            <div className="py-2">
                            <span className="d-block text-muted">Order Date</span>
                            <span>12 Jan,2018</span>
                            </div>
                        </td>
                        <td>
                            <div className="py-2">
                            <span className="d-block text-muted">Order No</span>
                            <span>MT12332345</span>
                            </div>
                        </td>
                        <td>
                            <div className="py-2">
                            <span className="d-block text-muted">Payment</span>
                            <span>
                                <img
                                src="https://img.icons8.com/color/48/000000/mastercard.png"
                                width={20}
                                />
                            </span>
                            </div>
                        </td>
                        <td>
                            <div className="py-2">
                            <span className="d-block text-muted">
                                Shiping Address
                            </span>
                            <span>414 Advert Avenue, NY,USA</span>
                            </div>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="row d-flex justify-content-end">
                    <div className="col-md-6 align-items-center justify-content-center d-flex col-12">
                        <a className="navbar-brand brand" href="#">
                        <span className="brand-custom">Ecommerce</span>
                        <span className="text-warning fw-bold">STORE</span>
                        </a>
                    </div>
                    <div className="col-md-5">
                    <table className="table table-borderless">
                        <tbody className="totals">
                        <tr>
                            <td>
                            <div className="text-left">
                                <span className="text-muted">Subtotal</span>
                            </div>
                            </td>
                            <td>
                            <div className="text-right">
                                <span>$168.50</span>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <div className="text-left">
                                <span className="text-muted">Shipping Fee</span>
                            </div>
                            </td>
                            <td>
                            <div className="text-right">
                                <span>$22</span>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <div className="text-left">
                                <span className="text-muted">Tax Fee</span>
                            </div>
                            </td>
                            <td>
                            <div className="text-right">
                                <span>$7.65</span>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <div className="text-left">
                                <span className="text-muted">Discount</span>
                            </div>
                            </td>
                            <td>
                            <div className="text-right">
                                <span className="text-success">$168.50</span>
                            </div>
                            </td>
                        </tr>
                        <tr className="border-top border-bottom">
                            <td>
                            <div className="text-left">
                                <span className="font-weight-bold">Subtotal</span>
                            </div>
                            </td>
                            <td>
                            <div className="text-right">
                                <span className="font-weight-bold">$238.50</span>
                            </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                <p>
                    We will be sending shipping confirmation email when the item shipped
                    successfully!
                </p>
                <p className="font-weight-bold mb-0">Thanks for shopping with us!</p>
                <span>Nike Team</span>
                </div>
                <div className="d-flex justify-content-between footer p-3">
                <span>
                    Need Help? visit our <a href="#"> help center</a>
                </span>
                <span>12 June, 2020</span>
                </div>
            </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default OrderConfirmation;