import './slider.css';
import React from 'react'
import argy from '../../utils/images/poster1.jpeg'
import fail from '../../utils/images/poster2.jpg'
import fighter from '../../utils/images/poster3.jpeg'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Slider = () => {
  return (
    <>
        <main className=' '>
            <article className=''>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={argy} className="d-block w-100" alt="..." style={{height: "340px"}} />
                    </div>
                    <div className="carousel-item">
                    <img src={fighter} className="d-block w-100" alt="..." style={{height: "340px"}} />
                    </div>
                    <div className="carousel-item">
                    <img src={fail} className="d-block w-100" alt="..." style={{height: "340px"}} />
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
                </div> 
            </article>
        </main>
    </>
  )
}

export default Slider




