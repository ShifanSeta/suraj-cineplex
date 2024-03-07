import React from 'react'
import './offers.css';
import offer1 from '../../utils/offers/offer1.avif'
import offer2 from '../../utils/offers/offer2.avif'
import offer3 from '../../utils/offers/offer3.avif'
import offer4 from '../../utils/offers/offer4.jpeg'
import {Link} from 'react-router-dom'
import { Carousel } from 'primereact/carousel';


const Offers = () => {

    const smapleData = [
        {
            label: "UNLIMITED REFILL OFFER",
            photo: offer1,
            validity: "sat, march 30, 2024"
        },
        {
            label: "KOTAK PVR INOX CREDIT CARD 5% OFF",
            photo: offer2,
            validity: "sat, march 30, 2025"
        },
        {
            label: "MACMERISE OFFER",
            photo: offer3,
            validity: "mon, december 1, 2024"
        },
        {
            label: "IMAX DECEMBER SPECIAL CAMPAIGN",
            photo: offer4,
            validity: "mon, december 1, 2024"
        },
        {
            label: "KOTAK PVR INOX CREDIT CARD 5% OFF",
            photo: offer2,
            validity: "sat, march 30, 2025"
        },
    ]

    const Templatecard = (smapleData) => {
        return(
            <section className='container py-3'>
            <section className='row row_p card-slide d-flex justify-content-start align-items-center '>
                            <article className=' col-12'>
                                <div className="">
                                <img src={smapleData.photo} alt="offers" className='' style={{    width: "100%"}} />
                                <div className='bg-white p-3'>
                                    <p className='text-black offer_label text-truncate'>
                                        {smapleData.label}
                                    </p>
                                    <div className='d-flex justify-content-between pt-3 align-items-center'>
                                    <p className='valid_text'>valid till: {smapleData.validity}</p>
                                    <button className='btn btn-sm btn-danger'>view</button>
                                    </div>
                                </div>
                                </div>
                                
                            </article>
            </section>
        </section>
        )
    }

    // const responsiveOptions = [
    //     {
    //         breakpoint: '1400px',
    //         numVisible: 2,
    //         numScroll: 1
    //     },
    //     {
    //         breakpoint: '1199px',
    //         numVisible: 3,
    //         numScroll: 1
    //     },
    //     {
    //         breakpoint: '767px',
    //         numVisible: 2,
    //         numScroll: 1
    //     },
    //     {
    //         breakpoint: '575px',
    //         numVisible: 1,
    //         numScroll: 1
    //     }
    // ];


  return (
    <main className='bg-light py-5'>
        <section className='container '>
            <section className='d-flex justify-content-between align-items-center px-3 pt-3'>
            <h4 className='text-black'>Advertise</h4>

            <nav aria-label="Page navigation example text-black">
                <ul className="pagination">
                    
                    <li className="page-item">
                   <Link to='offers' style={{textDecoration : "none"}}>
                            <span className='span_text' aria-hidden="true">See all</span>
                        </Link>
                    </li>
                </ul>
            </nav>

            </section>
            <section className='main_container row row_p d-flex justify-content-start align-items-center py-3'>
                {
                    smapleData && smapleData.length >= 0 ? smapleData.slice(0, 4).map((item, index) => {
                        return(
                            <article className=' col-lg-3 my-2 col-md-6 col-sm-6 col-xs-12 rounded'>
                                <img src={item.photo} alt="offers" className='' style={{    width: "-webkit-fill-available"}} />
                                <div className='bg-white p-3'>
                                    <p className='text-black offer_label text-truncate'>
                                        {item.label}
                                    </p>
                                    <div className='d-flex justify-content-between pt-3 align-items-center'>
                                    <p className='valid_text'>valid till: {item.validity}</p>
                                    <button className='btn btn-sm btn-danger'>view</button>
                                    </div>
                                </div>
                            </article>
                        )
                    }) : "no data found"
                }
            </section>
           
        </section>
       
        <section className='main-card-container-mobile bg-light'>
            <div className="card card-border ">
                <Carousel className='bg-light' value={smapleData} autoplayInterval={5000} numVisible={1} numScroll={1}  itemTemplate={Templatecard} />
            </div>
            </section>
    </main>
  )
}

export default Offers