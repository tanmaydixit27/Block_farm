import React from 'react'

const About = () => {
    return (
        <>
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p>About Us</p>
                            <div className="about-content">
                                Welcome to BlockFarm, an online ecommerce site for providing fresh farm product to customers
                                in no time with zero delivery charges.We at Farmeasy care for
                                the health and diet plans of our customers so we are here to serve them.Farmeasy is approved
                                by quality control department.All products offer by farmeasy are
                                100% organic.


                            </div>
                            <button type="button" className="btn btn-primary">{"Read More" + ">>"}

                            </button>

                        </div>
                        <div className="col-md-6 skills-bar mt-2">
                            <p>Delivery Rate</p>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '85%' }}>85%</div>
                            </div>

                            <p>Customer Growth</p>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '75%' }}>75%</div>
                            </div>

                            <p>Happy Employee</p>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '90%' }}>90%</div>
                            </div>

                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default About