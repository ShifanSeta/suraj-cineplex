import "./advertise.css";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import argy from "../../utils/images/slider1.avif";
import fail from "../../utils/images/slider2.avif";
import fighter from "../../utils/images/slider3.avif";
import advertise from "../../utils/images/advertise.avif";
import profile from "../../utils/images/profile1.svg";
import email from "../../utils/images/email.svg";
import Slider from '../Slider/Slider'
import call from "../../utils/images/call.svg";



const Advertise = () => {
  return (
    <main>
      <section className="bg_header_advertise">
        <div className="px-5 py-3 d-flex justify-content-start align-items-center">
          <h4 className="text-bold">Advertise</h4>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-5 py-3 desktop_advertise">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={argy} alt="sliderAdvertise" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={fail} alt="sliderAdvertise" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={fighter} alt="sliderAdvertise" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={fighter} alt="sliderAdvertise" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={fail} alt="sliderAdvertise" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={argy} alt="sliderAdvertise" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className=" mobile_advertise">
          <Slider />
        </div>
      </section>
      <section className="bg-light">
        <form className="mx-lg-5 my-lg-4 contaier-fluid  bg-white shadow-lg rounded d-flex justify-content-center align-items-center">
          {/* <article className="col-lg-4 col-md-4 col-sm-12 col-xs-12 py-3 px-4">
            <img src={advertise} alt="" />
          </article> */}
          {/* <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 py-3 px-4">
            
          </div> */}
          <div className="row bg-white px-lg-5 px-3 py-5 w-100">
                <div className="input-group mb-3 col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                    <div className="form-floating">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInputGroup1"
                        placeholder="Username"
                    />
                    <label htmlFor="floatingInputGroup1">Name</label>
                    </div>
                    <span className="input-group-text"><img src={profile} alt="" /></span>

                </div>
                <div className="input-group mb-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="form-floating">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInputGroup1"
                        placeholder="Username"
                    />
                    <label htmlFor="floatingInputGroup1">Email</label>
                    </div>
                    <span className="input-group-text"><img src={email} alt="" /></span>

                </div>
                <div className="input-group mb-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="form-floating">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInputGroup1"
                        placeholder="Username"
                    />
                    <label htmlFor="floatingInputGroup1">Mobile No.</label>
                    </div>
                    <span className="input-group-text"><img src={call} alt="" /></span>

                </div>
                <div className="input-group mb-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="form-floating">
                <select className="form-select" id="floatingSelect" aria-label="Organization Type">
                    <option selected>Select</option>
                    <option value={1}>Direct Client</option>
                    <option value={2}>Media Client</option>
                </select>
                <label htmlFor="floatingSelect">Organization Type</label>
                </div>

                </div>
                <div className="input-group mb-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="form-floating">
                <select className="form-select" id="floatingSelect" aria-label="Organization Type">
                    <option selected>Select</option>
                    <option value={1}>Direct Client</option>
                    <option value={2}>Media Client</option>
                </select>
                <label htmlFor="floatingSelect">Organization Type</label>
                </div>
                </div>
                <div className="input-group mb-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '50px'}} defaultValue={""} />
                    <label htmlFor="floatingTextarea2">Comments</label>
                    </div>
                </div>
                <div className="input-group mb-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <button className="btn btn_color_custom">Submit</button>
                </div>
                
                
            </div>
                
              

        </form>
      </section>
    </main>
  );
};

export default Advertise;
