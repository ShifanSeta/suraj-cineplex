import './slider.css';
import React from 'react'
import argy from '../../utils/images/slider1.avif'
import fail from '../../utils/images/slider2.avif'
import fighter from '../../utils/images/slider3.avif'

import 'swiper/css';
import 'swiper/css/pagination';

import { useState, useEffect } from 'react';
import getSlider from '../../api/slider';


const Slider = () => {
    const [slidesData, setSlidesData] = useState([])


    useEffect(() => {
        getSlider().then((res) => {
            setSlidesData(res.data);
        })
    }, [])
  return (
    <>
        <main className=' '>
            <article className=''>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {
                        slidesData && slidesData.length >= 0 ? slidesData.map((item) => {
                            return(
                                <div key={item.id} className="carousel-item active">
                                    <img src={item.image} className="d-block w-100 carousel" alt="carousel-img"  />
                                </div>
                            )
                        }) : <div className='placeholder-glow'>
                            <img className='placeholder-12' style={{height: "200px"}} src={argy} alt="poster" />
                        </div>
                    }
                    
                    {/* <div className="carousel-item">
                    <img src={fighter} className="d-block w-100 carousel" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src={fail} className="d-block w-100 carousel" alt="..." />
                    </div> */}
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




