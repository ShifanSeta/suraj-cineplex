import React, { useState, useEffect } from "react";
import argy from "../../utils/movie/argy.avif";
import fail from "../../utils/movie/fail.avif";
import fighter from "../../utils/movie/fighter.avif";
import atal from "../../utils/movie/atal.avif";
import hanuman from "../../utils/movie/hanuman.avif";
import kamthan from "../../utils/movie/kamthan.avif";
import tbm from "../../utils/movie/tbuj.jpeg";
import "./nowshowing.css";
import { calcLength, motion } from "framer-motion";
import getMovies from "../../api/movies/movies";
import { Dialog } from "primereact/dialog";

const NowShowing = () => {
  const [movies, setMovies] = useState();
  const [visible, setVisible] = useState(false);
  const [linky, setDLink] = useState("https://www.youtube.com/embed/");
  const [editedLink, seteditedLink] = useState("")
  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    getMovies(signal).then((res) => {
      setMovies(res.data);
      return () => {
        abortController.abort();
      };
    });
    console.log("movieData", movies);

    return () => {
      abortController.abort();
    };
  }, []);

  const MotionContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const MotionItem = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const showData = [
    {
      label: "ARGYLLE",
      link: argy,
      category: "Drama",
      lang: "multiple",
    },
    {
      label: "12th FAIL",
      link: fail,
      category: "Motivation",
      lang: "Hindi",
    },
    {
      label: "FIGHTER",
      link: fighter,
      category: "Action",
      lang: "Hindi",
    },
    {
      label: "ATAL",
      link: atal,
      category: "Action",
      lang: "Hindi",
    },
    {
      label: "HANUMAN",
      link: hanuman,
      category: "Story",
      lang: "multiple",
    },
    {
      label: "KAMTHAN",
      link: kamthan,
      category: "Drama",
      lang: "Gujarati",
    },
    {
      label: "TERI BATON MEIN",
      link: tbm,
      category: "Action",
      lang: "Hindi",
    },
    {
      label: "FIGHTER",
      link: fighter,
      category: "Action",
      lang: "Hindi",
    },
  ];
  return (
    <main className="container py-3 ">
      <h4 className="text-dark px-2 px-md-3 px-sm-3 px-lg-5">Now Showing</h4>
      <div
        variants={MotionContainer}
        initial="hidden"
        animate="visible"
        className="row d-flex justify-content-start align-items-center mx-auto"
      >
        {movies && movies.length >= 0 ? (
          movies.map((item) => {
            return (
              <div
                key={item.id}
                className="item my-3  col-lg-3 col-md-4 col-sm-6 col-xs-12 d-flex flex-col justify-content-center align-items-center section_size"
              >
                <section className=" ">
                  <img className="image_size" src={item.poster_image} alt="poster" />

                  <p style={{maxHeight: "40px", height: "40px", maxWidth: "215px"}} className="w-auto poster_text mt-1 text-start justify-content-start">
                    {item.name} 
                  </p>
                  <p className="category">
                    {item.censor} &bull; {item.duration}
                  </p>
                  <p className="category mb-1">{item.lenguage}</p>
                  <button className="btn btn-danger  my-1 btn_sm">
                    Book Tickets
                  </button>

                  <button
                  // onClick={()=>{seteditedLink(item.youtube_link)}}
                  trigger modal  onClick={() => setVisible(true)}  label="Show"
                    className="btn active mx-2"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="pi pi-play p-1"></i>
                  </button>

                  <div></div>
                </section>
                <Dialog key={item.id} header="Trailer" visible={visible} style={{ width: '90vw', height: "auto" }} onHide={() => setVisible(false)}>
                           
                           <div  >
                           <iframe
                         style={{width: "85vw"}}
                         title="YouTube video player"
                         frameborder="0"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                         allowfullscreen
                         src={linky+item.youtube_link}
                       ></iframe>
                           </div>
                            </Dialog>
              </div>
            );
          })
        ) : (
          <>
            <div className=" item my-3  col-lg-3 col-md-4 col-sm-6 col-xs-12 d-flex flex-col justify-content-center align-items-center section_size">
              <section className=" ">
                <div
                  src="..."
                  className="image_size card-img-top placeholder h-100"
                  style={{ minHeight: "312px", width: "13rem" }}
                  alt="poster"
                />
                <p className="poster_text mt-1 text-start justify-content-start placeholder-glow ">
                  <span class="placeholder col-6"></span>
                </p>
                <p className="category placeholder-glow">
                  <span class="placeholder col-10"></span>
                </p>
                <p className="category mb-1 placeholder-glow">
                  <span class="placeholder col-10"></span>
                </p>
                <div className="d-flex">
                  <button className="btn btn-danger disabled   m-1 btn_sm placeholder col-6"></button>
                  <button className="btn    m-1 btn_sm placeholder col-3"></button>
                </div>
              </section>
            </div>
            <div className=" item my-3  col-lg-3 col-md-4 col-sm-6 col-xs-12 d-flex flex-col justify-content-center align-items-center section_size">
              <section className=" ">
                <div
                  src="..."
                  className="image_size card-img-top placeholder h-100"
                  style={{ minHeight: "312px", width: "13rem" }}
                  alt="poster"
                />
                <p className="poster_text mt-1 text-start justify-content-start placeholder-glow ">
                  <span class="placeholder col-6"></span>
                </p>
                <p className="category placeholder-glow">
                  <span class="placeholder col-10"></span>
                </p>
                <p className="category mb-1 placeholder-glow">
                  <span class="placeholder col-10"></span>
                </p>
                <div className="d-flex">
                  <button className="btn btn-danger disabled   m-1 btn_sm placeholder col-6"></button>
                  <button className="btn    m-1 btn_sm placeholder col-3"></button>
                </div>
              </section>
            </div>
            <div className=" item my-3  col-lg-3 col-md-4 col-sm-6 col-xs-12 d-flex flex-col justify-content-center align-items-center section_size">
              <section className=" ">
                <div
                  src="..."
                  className="image_size card-img-top placeholder h-100"
                  style={{ minHeight: "312px", width: "13rem" }}
                  alt="poster"
                />
                <p className="poster_text mt-1 text-start justify-content-start placeholder-glow ">
                  <span class="placeholder col-6"></span>
                </p>
                <p className="category placeholder-glow">
                  <span class="placeholder col-10"></span>
                </p>
                <p className="category mb-1 placeholder-glow">
                  <span class="placeholder col-10"></span>
                </p>
                <div className="d-flex">
                  <button className="btn btn-danger disabled   m-1 btn_sm placeholder col-6"></button>
                  <button className="btn    m-1 btn_sm placeholder col-3"></button>
                </div>
              </section>
            </div>
            <div className=" item my-3  col-lg-3 col-md-4 col-sm-6 col-xs-12 d-flex flex-col justify-content-center align-items-center section_size">
              <section className=" ">
                <div
                  src="..."
                  className="image_size card-img-top placeholder h-100"
                  style={{ minHeight: "312px", width: "13rem" }}
                  alt="poster"
                />
                <p className="poster_text mt-1 text-start justify-content-start placeholder-glow ">
                  <span class="placeholder col-6"></span>
                </p>
                <p className="category placeholder-glow">
                  <span class="placeholder col-10"></span>
                </p>
                <p className="category mb-1 placeholder-glow">
                  <span class="placeholder col-10"></span>
                </p>
                <div className="d-flex">
                  <button className="btn btn-danger disabled   m-1 btn_sm placeholder col-6"></button>
                  <button className="btn    m-1 btn_sm placeholder col-3"></button>
                </div>
              </section>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default NowShowing;

{
  /* <div  className=' item my-3  col-lg-3 col-md-4 col-sm-6 col-xs-12 d-flex flex-col justify-content-center align-items-center section_size' >
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
                </div>  */
}
