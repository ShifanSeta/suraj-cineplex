import React from 'react'
import './offers.css';
import offer1 from '../../utils/offers/offer1.avif'
import offer2 from '../../utils/offers/offer2.avif'
import offer3 from '../../utils/offers/offer3.avif'
import offer4 from '../../utils/offers/offer4.jpeg'
import {Link} from 'react-router-dom'


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

  return (
    <main className='main_container py-5'>
        <section className='container'>
            <section className='d-flex justify-content-between align-items-center py-3'>
            <h4 className='text-black'>Offers for you</h4>

            <nav aria-label="Page navigation example text-black">
                <ul className="pagination">
                    <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span className='span_text' aria-hidden="true">«</span>
                    </a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span className='span_text' aria-hidden="true">»</span>
                    </a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <Link to='offers' style={{textDecoration : "none"}}>
                            <span className='span_text' aria-hidden="true">See all</span>
                        </Link>
                    </a>
                    </li>
                </ul>
            </nav>

            </section>
            <section className='row row_p d-flex justify-content-start align-items-center py-3'>
                {
                    smapleData && smapleData.length >= 0 ? smapleData.slice(0, 4).map((item, index) => {
                        return(
                            <article className='col-3 rounded'>
                                <img src={item.photo} alt="offers" className='w-100' />
                                <div className='bg-white p-3'>
                                    <p className='text-black offer_label'>
                                        {item.label}
                                    </p>
                                    <div className='d-flex justify-content-between pt-3 align-items-center'>
                                    <p className='valid_text'>valid till: {item.validity}</p>
                                    <button className='btn btn-sm offer_btn'>view</button>
                                    </div>
                                </div>
                            </article>
                        )
                    }) : "no data found"
                }
            </section>
        </section>
    </main>
  )
}

export default Offers