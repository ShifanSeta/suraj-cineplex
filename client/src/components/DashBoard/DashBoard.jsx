import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar';
import Slider from '../Slider/Slider'
import Tabs from '../Tabs/Tabs';
import Footer from '../Footer/Footer';
import getSlider from '../../api/slider';
import SwiperSlides from '../Swiper/SwiperSlides';
import MovieSchedule from '../MovieSchedule/MovieSchedule';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { getPopUpAPI } from '../../api/getPopUpAPI';
import exitSVG from '../../utils/images/exit.svg'
const DashBoard = () => {

  const [slidesData, setSlidesData] = useState([])

  const data = slidesData

  const [visible, setVisible] = useState(false);

  const [popupImg, setPopupImg] = useState([])

  const getDataPoster = async() => {
    // try {
    //   await getPopUpAPI().then((res) => {
    //     setPopupImg(...res.data);
    //     console.log("respImg", res.data.image);
    //     setTimeout(()=> {
    //       setVisible(true)
    //     }, 2000)
    //   })
    // } catch (error) {
    //   console.log(error);
    // }
  }

  const GetSlideData = () => {
    getSlider().then((res) => {
      setSlidesData(res.data);
    })
  }
    useEffect(() => {
        GetSlideData()
        getDataPoster();
      },[]) 
  return (
    <div>

      <div className="card flex justify-content-center">
        {
          visible ? (
            <div className='' style={{position: "absolute", zIndex: "99", marginTop: "250px"}}>
              <div className='d-flex justify-content-end align-items-center'> <img onClick={() => setVisible(false)} style={{ width: "30px"}} src={exitSVG} alt="x" /> </div>
              <img className='h-auto' style={{ width: "100vw"}} src={popupImg.image} alt='img' />
            </div>
          ) : ""
        } 
        </div>
        <Slider />
        <MovieSchedule />
        <Tabs />   
    </div>
  )
}

export default DashBoard


        