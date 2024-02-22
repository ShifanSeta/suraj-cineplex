import React from 'react'
import './bottomBar.css'
import Home  from '../../utils/images/mobile-home.png';
import Cinema from '../../utils/images/mobile-cinema.svg';
import Offers from '../../utils/images/mobile-offer.svg';
import Soon from '../../utils/images/soon.svg';
import More from '../../utils/images/mobileMore.svg';
import { Link } from 'react-router-dom';

const BottomBar = () => {
  return (
    <main className='main_bottom_bar'>
        <section className='d-flex justify-content-evenly align-items-center py-3'>
            <Link to='/' className='d-flex px-2 nav_link flex-col justify-content-center align-items-center'>
                <img src={Home} className='svg_img' alt="home" /> 
                <span>Home</span>
            </Link>
            <Link to='/movies' className='d-flex px-2 nav_link flex-col justify-content-center align-items-center'>
                <img src={Cinema} className='svg_img' alt="home" /> 
                <span>Movies</span>
            </Link>
            <Link to='/food' className='d-flex px-2 nav_link flex-col justify-content-center align-items-center'>
                <img src={Offers} className='svg_img' alt="home" /> 
                <span>Food</span>
            </Link>
            <Link to='/' className='d-flex  px-2 nav_link flex-col justify-content-center align-items-center'>
                <img src={Soon} className='svg_img' alt="home" /> 
                <span className='text-truncate' style={{width: "50px"}}>Advertisement</span>
            </Link>
            <Link to='/' className='d-flex px-2 nav_link flex-col justify-content-center align-items-center'>
                <img src={More} className='svg_img' alt="home" /> 
                <span>More</span>
            </Link>
        </section>  
    </main>
  )
}

export default BottomBar