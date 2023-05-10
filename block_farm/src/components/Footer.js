import React from 'react'

const Footer = () => {
    return (
        <>
            <section id="contact">

                <div className="container">
                    <h1>Get In Touch</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <form className="contact-form">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name.."/>
                                </div>
                                <div className="form-group">
                                    <input type="number" className="form-control" placeholder="Phone no."/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email.."/>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" rows="4" placeholder="Message.."></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div className="col-md-6 contact-info">
                            <div className="follow"><b><i className="fa fa-map-marker"></i> </b>Streep Road,Copenhagen,Denmark
                            </div>
                            <div className="follow"><b><i className="fa fa-mobile"></i> </b>(+91)7862097585</div>
                            <div className="follow"><b><i className="fa fa-envelope"></i> </b>sportscompass@gmail.com</div>


                            <div className="follow"><label><b>Get Social </b></label>
                                <a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a>
                                <a href="https://www.youtube.com/" target="_blank"><i
                                    className="fa fa-youtube-play"></i></a>
                                <a href="https://twitter.com/login/" target="_blank"><i className="fa fa-twitter"></i></a>
                                <a href="https://myaccount.google.com/" target="_blank"><i
                                    className="fa fa-google-plus"></i></a>

                            </div>
                        </div>

                    </div>

                </div>


            </section>
        </>
    )
}

export default Footer