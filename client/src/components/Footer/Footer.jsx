import React from 'react'
import './footer.css';
import panacea from '../../utils/images/panacea.avif'
import norton from '../../utils/images/norton.avif'
import facebook from '../../utils/images/facebook.svg'
import instagram from '../../utils/images/instagram.svg'
import youtube from '../../utils/images/yt.svg'
import x from '../../utils/images/x.svg'
import linkedin from '../../utils/images/linkedin.svg'
import play from '../../utils/images/play.svg'
import applestore from '../../utils/images/appstore.svg'
import geo from '../../utils/images/geo.svg'
import { Link } from 'react-router-dom';







const Footer = () => {
  return (
    <main className='bg_color container-fluid main_footer'>
        <section className='footer_text  py-3 container d-flex justify-content-evenly align-items-center'>
        <p>© 2024 All rights reserved</p>
            
            <div className='d-flex'>
                <Link to='privacy-policy' className='px-2 vl'>Privacy policy </Link>
                <Link to='terms-conditions' className='px-2 vl'>Terms & Conditions </Link> 
                <Link to='terms-use' className='px-2 vl-2'>Terms of Use </Link>
            </div>

            <article className='d-flex  justify-content-center align-items-center'>
                <img className='px-2 sizing' src={facebook} alt="certification" />
                <img className='px-2 sizing' src={instagram} alt="certification" />
                <img className='px-2 sizing' src={geo} alt="certification" />
            </article>   
        </section>
        <section className='footer_text py-3 container d-flex justify-content-evenly align-items-center'>
            
        </section>
    </main>
  )
}

export default Footer