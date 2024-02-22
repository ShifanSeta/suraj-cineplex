import React from "react";
import "./tabs.css";
import ins from "../../utils/images/insignia.avif";
import dx from "../../utils/images/4dx.webp";
import NowShowing from "../NowShowing/NowShowing";
import ComingSoon from "../ComingSoon/ComingSoon";
import Experiences from "../Experiences/Experiences";
import Trailers from "../Trailers/Trailers";
import Offers from "../Offers/Offers";
import SwiperSlides from "../Swiper/SwiperSlides";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Tabs = () => {
  const comingRef = useRef(null);
  const experienceRef = useRef(null);
  const trailerRef = useRef(null);
  const OfferRef = useRef(null);

  const handleScroll = (Ref) => {
    Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        <section className="container my-3 desktop_view">
          <ul className="nav nav-underline">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Now Showing
              </a>
            </li>
            <li className="nav-item" onClick={() => handleScroll(comingRef)}>
              <a className="nav-link">Coming Soon</a>
            </li>
            <li className="nav-item">
              <Link to="/food" className="nav-link" href="#">
                Order Food
              </Link>
            </li>
            <li className="nav-item" onClick={() => handleScroll(trailerRef)}>
              <a className="nav-link" href="#">
                Trailers
              </a>
            </li>
            <li className="nav-item" onClick={() => handleScroll(OfferRef)}>
              <a className="nav-link" href="#">
                Offers
              </a>
            </li>
          </ul>
          <article className="my-4">
            <img src={dx} alt="dx" className="mx-2" style={{ width: "70px" }} />
            <img
              src={ins}
              alt="ins"
              className="mx-2"
              style={{ width: "79px" }}
            />
          </article>
        </section>
        <section>
          <NowShowing />
          <div ref={comingRef}>
            <ComingSoon />
          </div>
          <div ref={experienceRef}>
            <Experiences />
          </div>
          <br />
          <div ref={trailerRef}>
            <Trailers />
          </div>
          <SwiperSlides />

          <div ref={OfferRef}>
            <Offers />
          </div>
        </section>
      </main>
      
    </>
  );
};

export default Tabs;
