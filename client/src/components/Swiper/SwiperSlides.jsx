import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import 'swiper/css/autoplay';
import 'swiper/css';
import "./swiper.css";
import getSlider from '../../api/slider';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';

export default function SwiperSlides({srcData}) {
  const [slidesData, setSlidesData] = useState();
  // setSlidesData(srcImage)

  async function handleSlides()  {
    getSlider().then((res) => {
      setSlidesData(res.data);
    })
  }
  SwiperCore.use([Autoplay]);

  useEffect(() => {
    handleSlides();

  }, [])
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true, 
        }}
        centeredSlides={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        loop={true}
        autoplay={{ 
          delay: 500,
          disableOnInteraction: false
        }}  
      >
        {
          slidesData && slidesData.length >= 0 && slidesData.map((item) => {
            return(
              <SwiperSlide key={item.id} >
                <img src={item.image} alt="slider_img" />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}

