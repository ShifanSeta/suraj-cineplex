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






const Footer = () => {
  return (
    <main className='bg_color'>
        <section className='footer_text py-3 container d-flex justify-content-evenly align-items-center'>
            <article className='d-flex justify-content-center align-items-center'>
                <p className='px-2'>Certified by:</p>
                <img className='px-2' src={panacea} alt="certification" />
                <img className='px-2' src={norton} alt="certification" />
            </article>
            <article className='d-flex justify-content-center align-items-center'>
                <img className='px-2 sizing' src={facebook} alt="certification" />
                <img className='px-2 sizing' src={instagram} alt="certification" />
                <img className='px-2 sizing' src={youtube} alt="certification" />
                <img className='px-2 sizing' src={x} alt="certification" />
                <img className='px-2 sizing' src={linkedin} alt="certification" />
            </article>
            <article className='d-flex justify-content-center align-items-center'>
                <img className='px-2 stores_logo' src={play} alt="certification" />
                <img className='px-2 stores_logo' src={applestore} alt="certification" />
            </article>
        </section>
        <section className='footer_text py-3 container d-flex justify-content-evenly align-items-center'>
            <p>© 2024 All rights reserved</p>
            <div className='d-flex'>
                <p>Privacy policy</p>
                <p>Terms & Conditions</p>
                <p>Terms of Use</p>
            </div>
        </section>
    </main>
  )
}

export default Footer