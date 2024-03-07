import React from 'react'
import argy from '../../utils/movie/argy.avif'
import fail from '../../utils/movie/fail.avif'
import fighter from '../../utils/movie/fighter.avif'
import atal from '../../utils/movie/atal.avif'
import hanuman from '../../utils/movie/hanuman.avif'
import kamthan from '../../utils/movie/kamthan.avif'
import tbm from '../../utils/movie/tbuj.jpeg'
import './nowshowing.css'
import { motion } from "framer-motion";




const NowShowing = () => {

    const MotionContainer = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
      
      const MotionItem = {
        hidden: {  y: 30, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };



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
    <main className='container py-3 '>
        <h4 className='text-dark px-2 px-md-3 px-sm-3 px-lg-5'>Now Showing</h4>
        <motion.div variants={MotionContainer}
    initial="hidden"
    animate="visible" className=' row d-flex justify-content-evenly align-items-center'> 
            { showData && showData.length >= 0 ? showData.map((item, index) => {
                return( 
                    <motion.div variants={MotionItem}  className=' item my-3  col-lg-3 col-md-4 col-sm-6 col-xs-12 d-flex flex-col justify-content-center align-items-center section_size' >
                        <section className=' '>
                            <img className='image_size' src={item.link} alt="poster"  />
                            <p className='poster_text mt-1 text-start justify-content-start'>{item.label}</p>
                            <p className='category'>U/A &bull; {item.category}</p>
                            <p className='category mb-1'>{item.lang}</p>
                            <button className='btn btn-danger  my-1 btn_sm'>Book Tickets</button>
                        <button className='btn active mx-2'>
                        <i className="pi pi-play p-1"></i>

                        </button>
                        </section>
                    </motion.div> 
                )
            })
                : "no data to show"
            }
        </motion.div>
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