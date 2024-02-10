import React from 'react'
import './offers.css';
import offer1 from '../../utils/offers/offer1.avif'
import offer2 from '../../utils/offers/offer2.avif'
import offer3 from '../../utils/offers/offer3.avif'
import offer4 from '../../utils/offers/offer4.jpeg'


const OffersList = () => {
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
            </section>
            <section className='row row_p d-flex justify-content-start align-items-center py-3'>
                {
                    smapleData && smapleData.length >= 0 ? smapleData.map((item, index) => {
                        return(
                            <article className='col-lg-3 col-md-3 col-sm-12 col-xs-12 rounded py-3'>
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

export default OffersList

