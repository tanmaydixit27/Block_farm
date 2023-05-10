import React from 'react'

const Service = () => {
    return (
        <>

            <section id="services">

                <div className="container">
                    <h1>Our Services</h1>
                    <div className="row services">
                        <div className="col-md-4 text-center">
                            <div className="icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <h3> 24/7 Support</h3>
                            <p>on order related queries</p>
                        </div>

                        <div className="col-md-4 text-center">
                            <div className="icon">
                                <i className="fa fa-shopping-cart"></i>
                            </div>
                            <h3> Return within 30 days</h3>
                            <p>of receiving your order</p>
                        </div>

                        <div className="col-md-4 text-center">
                            <div className="icon">
                                <i className="fa fa-truck"></i>
                            </div>
                            <h3>Get free delivery</h3>
                            <p>on orders above 99Euro</p>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Service