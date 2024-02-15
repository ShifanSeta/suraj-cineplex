import React from 'react'
import argy from '../../utils/movie/argy.avif'
import fail from '../../utils/movie/fail.avif'
import fighter from '../../utils/movie/fighter.avif'
import atal from '../../utils/movie/atal.avif'
import hanuman from '../../utils/movie/hanuman.avif'
import kamthan from '../../utils/movie/kamthan.avif'
import tbm from '../../utils/movie/tbuj.jpeg'
import './nowshowing.css'

const NowShowing = () => {




    const showData = [
        {
            label : "ARGYLLE",
            link: argy,
            category: 'Drama',
            lang: "multiple"
        },
        {
            label : "12th FAIL",
            link: fail,
            category: 'Motivation',
            lang: "Hindi"
        },{
            label : "FIGHTER",
            link: fighter,
            category: 'Action',
            lang: "Hindi"
        },{
            label : "ATAL",
            link: atal,
            category: 'Action',
            lang: "Hindi"
        },{
            label : "HANUMAN",
            link: hanuman,
            category: 'Story',
            lang: "multiple"
        },{
            label : "KAMTHAN",
            link: kamthan,
            category: 'Drama',
            lang: "Gujarati"
        },{
            label : "TERI BATON MEIN",
            link: tbm,
            category: 'Action',
            lang: "Hindi"
        },{
            label : "FIGHTER",
            link: fighter,
            category: 'Action',
            lang: "Hindi"
        },
    ]
  return (
    <main className='container py-5 '>
        <h4 className='text-dark mx-3'>Now Showing</h4>
        <section className='row d-flex justify-content-center align-items-center'> 
            { showData && showData.length >= 0 ? showData.map((item, index) => {
                return( 
                    <article className='my-3  col-lg-3 col-md-4 col-sm-6 col-xs-12 d-flex flex-col justify-content-center align-items-center section_size' >
                        <section className=' '>
                            <img className='image_size' src={item.link} alt="poster"  />
                            <p className='poster_text mt-1 text-start justify-content-start'>{item.label}</p>
                            <p className='category'>U/A &bull; {item.category}</p>
                            <p className='category mb-1'>{item.lang}</p>
                            <button className='btn active my-1 btn_sm'>View details</button>
                        <button className='btn active mx-2'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="notification_add_black_24dp 1" clip-path="url(#clip0_3892_20554)">
                        <g id="Group">
                        <path id="Vector" d="M16 14V17H8V10C8 7.79 9.79 6 12 6C12.85 6 13.64 6.26 14.28 6.72L15.71 5.29C15.07 4.78 14.32 4.41 13.5 4.2V3.5C13.5 2.67 12.83 2 12 2C11.17 2 10.5 2.67 10.5 3.5V4.2C7.91 4.86 6 7.21 6 10V17H4V19H20V17H18V14H16ZM12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM24 8H21V5H19V8H16V10H19V13H21V10H24V8Z" fill="black"/>
                        </g>
                        </g>
                        <defs>
                        <clipPath id="clip0_3892_20554">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        </button>
                        </section>
                    </article> 
                )
            })
                : "no data to show"
            }
        </section>
    </main>
  )
}

export default NowShowing

//  {/* <section className=''>
//                             <img className='image_size' src={item.link} alt="poster" style={{width: "13rem"}} />
//                             <p className='poster_text mt-1 text-start justify-content-start'>{item.label}</p>
//                             <p className='category'>U/A &bull; {item.category}</p>
//                             <p className='category mb-1'>{item.lang}</p>
//                             <button className='btn btn_col my-1'>Book Tickets</button>
//                         <button className='btn active mx-2'>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
//                             <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
//                             <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
//                             </svg>
//                         </button>
//                         </section> */}