import React from 'react'

const Slider = () => {
  return (
    <>
      <div className="slider">
        <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="10000">
              <img src="https://i.postimg.cc/5NZ7j0p9/featuredimage1.jpg" className="d-block w-100" alt="..."
                style={{ width: 'auto', height: '800px' }} />
            </div>
            <div className="carousel-item" data-interval="2000">
              <img src="https://i.postimg.cc/d1knqcdZ/featuredimage2.jpg" className="d-block w-100" alt="..."
                style={{ width: 'auto', height: '800px' }} />
            </div>
            <div className="carousel-item">
              <img src="https://i.postimg.cc/rs5JrGf8/featuredimage3.jpg" className="d-block w-100" alt="..."
                style={{ width: 'auto', height: '800px' }} />
            </div>
            <div className="carousel-item">
              <img src="https://i.postimg.cc/qR3cPXV8/featuredimage4.jpg" className="d-block w-100" alt="..."
                style={{ width: 'auto', height: '800px' }} />
            </div>
            <div className="carousel-item">
              <img src="https://i.postimg.cc/PqczVVcX/featuredimage5.jpg" className="d-block w-100" alt="..."
                style={{ width: 'auto', height: '800px' }} />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

    </>
  )
}

export default Slider