//eslint-disable-next-line
import React from 'react'
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <p className="mt-2 p-3">
          Block-<span className="text-white">Farm</span></p>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ml-auto">

            <li className="nav-item">
              <a style={{ color: 'black' }} className="nav-link" href="#new-arrivals">Products</a>
            </li>
            <li className="nav-item">
              <a style={{ color: 'black' }} className="nav-link" href="cart.html">Cart</a>

            </li>


            <li className="nav-item">
              <a style={{ color: 'black' }} className="nav-link" href="#about">About Us</a>
            </li>

            <li className="nav-item">
              <a style={{ color: 'black' }} className="nav-link" href="#services">Our Services</a>
            </li>

            <li className="nav-item">
              <a style={{ color: 'black' }} className="nav-link" href="#team" tabIndex="-1" aria-disabled="true">Our
                Team</a>
            </li>
            <li className="nav-item">
              <a style={{ color: 'black' }} className="nav-link" href="#contact">Contact</a>
            </li>


          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar