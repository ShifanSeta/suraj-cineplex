import React, {useState, useEffect} from 'react'
import argy from '../../utils/movie/argy.avif'
import fail from '../../utils/movie/fail.avif'
import fighter from '../../utils/movie/fighter.avif'
import atal from '../../utils/movie/atal.avif'
import hanuman from '../../utils/movie/hanuman.avif'
import kamthan from '../../utils/movie/kamthan.avif'
import tbm from '../../utils/movie/tbuj.jpeg'
import './nowshowing.css'
import { motion } from "framer-motion";
import getMovies from '../../api/movies/movies'



const NowShowing = () => {

    const [movies, setMovies] = useState()

    useEffect(() => {
        getMovies().then((res)=> {
            setMovies(res.data)

        })
        console.log("movieData", movies)
    }, [])



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
        <div variants={MotionContainer}
    initial="hidden"
    animate="visible" className=' row d-flex justify-content-start align-items-center'> 
            { movies && movies.length >= 0 ? movies.map((item) => {
                return( 
                    <div variants={MotionItem} key={item.id} className=' item my-3  col-lg-3 col-md-4 col-sm-6 col-xs-12 d-flex flex-col justify-content-center align-items-center section_size' >
                        <section className=' '>
                            <img className='image_size' src={item.image} alt="poster"  />
                            <p className='poster_text mt-1 text-start justify-content-start'>{item.name}</p>
                            <p className='category'>U/A &bull; {item.duration}</p>
                            <p className='category mb-1'>{item.lenguage}</p>
                            <button className='btn btn-danger  my-1 btn_sm'>Book Tickets</button>
                        <button className='btn active mx-2'>
                        <i className="pi pi-play p-1"></i>

                        </button>
                        </section>
                    </div> 
                )
            })
                : <>
                <div  className=' item my-3  col-lg-3 col-md-4 col-sm-6 col-xs-12 d-flex flex-col justify-content-center align-items-center section_size' >
                <section className=' '>
                    <div src='...' className='image_size card-img-top placeholder h-100' style={{minHeight: "312px", width: "13rem"}}  alt="poster"  />
                    <p className='poster_text mt-1 text-start justify-content-start placeholder-glow '> 
                    <span class="placeholder col-6"></span>

                    </p>
                    <p className='category placeholder-glow'>
                    <span class="placeholder col-10"></span>

                    </p>
                    <p className='category mb-1 placeholder-glow'>
                    <span class="placeholder col-10"></span>

                    </p>
                    <div className='d-flex'> 
                    <button className='btn btn-danger disabled   m-1 btn_sm placeholder col-6'></button>
                    <button className='btn    m-1 btn_sm placeholder col-3'></button>
                    </div>
                    
                </section>
            </div> 
            <div  className=' item my-3  col-lg-3 col-md-4 col-sm-6 col-xs-12 d-flex flex-col justify-content-center align-items-center section_size' >
                <section className=' '>
                    <div src='...' className='image_size card-img-top placeholder h-100' style={{minHeight: "312px", width: "13rem"}}  alt="poster"  />
                    <p className='poster_text mt-1 text-start justify-content-start placeholder-glow '> 
                    <span class="placeholder col-6"></span>

                    </p>
                    <p className='category placeholder-glow'>
                    <span class="placeholder col-10"></span>

                    </p>
                    <p className='category mb-1 placeholder-glow'>
                    <span class="placeholder col-10"></span>

                    </p>
                    <div className='d-flex'> 
                    <button className='btn btn-danger disabled   m-1 btn_sm placeholder col-6'></button>
                    <button className='btn    m-1 btn_sm placeholder col-3'></button>
                    </div>
                    
                </section>
            </div> 
            <div  className=' item my-3  col-lg-3 col-md-4 col-sm-6 col-xs-12 d-flex flex-col justify-content-center align-items-center section_size' >
                <section className=' '>
                    <div src='...' className='image_size card-img-top placeholder h-100' style={{minHeight: "312px", width: "13rem"}}  alt="poster"  />
                    <p className='poster_text mt-1 text-start justify-content-start placeholder-glow '> 
                    <span class="placeholder col-6"></span>

                    </p>
                    <p className='category placeholder-glow'>
                    <span class="placeholder col-10"></span>

                    </p>
                    <p className='category mb-1 placeholder-glow'>
                    <span class="placeholder col-10"></span>

                    </p>
                    <div className='d-flex'> 
                    <button className='btn btn-danger disabled   m-1 btn_sm placeholder col-6'></button>
                    <button className='btn    m-1 btn_sm placeholder col-3'></button>
                    </div>
                    
                </section>
            </div> 
            <div  className=' item my-3  col-lg-3 col-md-4 col-sm-6 col-xs-12 d-flex flex-col justify-content-center align-items-center section_size' >
                <section className=' '>
                    <div src='...' className='image_size card-img-top placeholder h-100' style={{minHeight: "312px", width: "13rem"}}  alt="poster"  />
                    <p className='poster_text mt-1 text-start justify-content-start placeholder-glow '> 
                    <span class="placeholder col-6"></span>

                    </p>
                    <p className='category placeholder-glow'>
                    <span class="placeholder col-10"></span>

                    </p>
                    <p className='category mb-1 placeholder-glow'>
                    <span class="placeholder col-10"></span>

                    </p>
                    <div className='d-flex'> 
                    <button className='btn btn-danger disabled   m-1 btn_sm placeholder col-6'></button>
                    <button className='btn    m-1 btn_sm placeholder col-3'></button>
                    </div>
                    
                </section>
            </div> 
                </>
            }
        </div>
    </main>
  )
}

export default NowShowing
