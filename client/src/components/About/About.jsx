import React from 'react'
import './About.css'
import cineplex from '../../utils/images/cineplex.jpeg';
import cinemaReel from '../../utils/images/pvr_roll.avif';



const About = () => {
  return (
    <main>
        <section className=' about_header_color'>
            <h3 className='p-3 container'>            
                About us
            </h3>
        </section>
        <section className='d-flex  container'>
            <div className="row">
            <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12 px-2">
                <img src={cineplex} alt="suraj-cineplex" className='py-4 cineplex_img' />
            </div>
            <div className="col-lg-8 col-md-8 col-xs-12 col-sm-12 px-3">
                <p className='about_p py-4'>
                <p>
                    Suraj Magic Land Pvt. Ltd established in 2007 with a dream to provide a multiplex for the people of Junagadh and set a milestone in the entertainment business. Suraj Cineplex was the pioneer and it is still the only place with 5 screen in one place. We take pride in announcing it as the 3rd multiplex in Saurashtra region with 5 screens.
                </p>
                <p>
                     Started in 2007 as Suraj Cineplex Cinema in Junagadh, the group boasts of introducing the first ever ultramodern, luxurious and premium cinema house in the city. We have an excellent food zones wherein moviegoers can enjoy a range of freshly-prepared snacks, soft drinks and many more tender foods.
                </p>
                <p>
                     Suraj Cineplex is therefore, committed to provide extremely modern entertainment services with good value for money. Our Cinemas offer hassle-free ticket booking, ideal seating arrangements complete with added capacity, high-definition screens and pin sharp surround sound to help feel every heartbeat all in magnificently-themed ambience just to allow an immersive cinematic experience.
                </p>
                <p>
                We believe our Cinema are not just to watch films, but further to experience them. After all, when life is in itself a theatre, we just love to provide you the stage.
                </p>

                </p>     
            </div>
            </div>
            
        </section>
        <section className='d-flex my-3  justify-content-evenly align-items-center container bg_about rounded'>
           <div className="row py-3 flex-lg-row-reverse">
           <div className='d-flex justify-content-center align-items-center py-4 col-lg-6 col-md-6 col-xs-12 col-sm-12'>
                <img src={cinemaReel} className='cineplex_img' alt="" />
            </div>
           <div className='py-5 col-lg-6 col-md-6 col-xs-12 col-sm-12 d-flex flex-col justify-content-center align-items-start'>
                <h2 className='display-6 fw-bold text-body-emphasis lh-1 mb-3'>Our Speciality</h2>
                    <p>
                    → 5 screens with comfortable push-back seating facilities.
                    </p>
                    <p>
                    → Only 3-D screen in Junagadh with extreme pop-out effects.                   
                    </p>
                    <p>
                    → Recliner sofas are available in Suraj Lounge.
                    </p>
                    <p>
                    → CCTV system and security guards for smooth functioning.
                    </p>
                    <p>
                    → 7.1 JBL surround sound system.
                    </p>
                    <p>
                    → CCTV system and security guards for smooth functioning.
                    </p>
                    <p>
                    → Safe and secure car and bike parking available.
                    </p>
                    <p>
                    →  Online booking facilities.
                    </p>
            </div>
           </div>
            
        </section>
        <section className='d-flex mx-5   my-5 p-0 row'>
            <div className='d-flex flex-col justify-content-center align-items-center col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                <h3 className='py-3'>Our Vision</h3>
                <p className='about_p'>
                The company's focused vision is its commitment to provide the highest quality of cinema viewing experience in the Junagach while constantly engaging with their customers and redefining cinema viewing. Suraj Cineplex constantly strives to collaborate within its departments and with other partners to give the best and most comfortable movie watching experience to its patrons To provide high-quality entertainment services to moviegoers provide total cinematic experience in ultra-modern setting whilst keeping pace with the changing tastes and trends of moviegoers of all ages
                </p>
            </div>
            <div className='d-flex flex-col justify-content-center align-items-center col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                <h3 className='py-3'>Our Mission</h3>
                <p className='about_p'>The company's focused vision is its commitment to provide the highest quality of cinema viewing experience in the Junagach while constantly engaging with their customers and redefining cinema viewing. Suraj
Cineplex constantly strives to collaborate within its departments and with other partners to give the best and most comfortable movie watching experience to its patrons To provide high-quality entertainment services to moviegoers provide total cinematic experience in ultra-modern setting whilst keeping pace with the changing tastes and trends of moviegoers of all ages.</p>
            </div>
        </section>
    </main>
  )
}

export default About