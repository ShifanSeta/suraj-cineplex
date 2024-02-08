import './slider.css';
import React from 'react'


const Slider = () => {
  return (
    <>
        <main className='container-fluid '>
            <article className='row'>
                {/* <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={<Poster1 />} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src={<Poster2 />} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src={<Poster3 />} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
            </div> */}
            <img src={require('../../utils/images/poster3.jpeg')} alt='img' className='poster'/>
            </article>
        </main>
    </>
  )
}

export default Slider