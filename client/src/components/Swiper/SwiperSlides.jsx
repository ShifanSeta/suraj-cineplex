import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./swiper.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import fighter from "../../utils/movie/fighter.avif";
import argy from "../../utils/movie/argy.avif";
import fail from "../../utils/movie/fail.avif";
import hanuman from "../../utils/movie/hanuman.avif";
import kamthan from "../../utils/movie/kamthan.avif";

import playBtn from "../../utils/movie/play.png";

export default function SwiperSlides() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="container bg-white main_swiper">
        <div className="bg-light ">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 main_slide mx-3 pt-4 contain_bg"
          >
            <SwiperSlide className=" d-flex justify-content-start align-items-start ">
              <img className="" src={fighter} />
              <div
                className="p-5 contain_bg w-75 h-100 d-flex justify-content-between align-items-start"
                style={{ position: "absolute" }}
              >
                <h1>Fighter</h1>
                <div
                  className=""
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <img className="img_play" src={playBtn} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide className="">
              <img className="SwiperSlide" src={fighter} alt="movie" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="SwiperSlide"
                src="https://swiperjs.com/demos/images/nature-2.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="SwiperSlide"
                src="https://swiperjs.com/demos/images/nature-3.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="SwiperSlide"
                src="https://swiperjs.com/demos/images/nature-4.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="SwiperSlide"
                src="https://swiperjs.com/demos/images/nature-5.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="SwiperSlide"
                src="https://swiperjs.com/demos/images/nature-6.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <iframe
              allow="autoplay"
              width="600"
              height="350"
              src="https://www.youtube.com/embed/u4w5wScBaNA?si=8vhxEpM_WINfhEJw&amp;start=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
