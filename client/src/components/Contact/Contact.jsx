import React from 'react'
import './contact.css';
import Location from '../../utils/images/geo.svg'
import Phone from '../../utils/images/telephone.svg'
import mail from '../../utils/images/envelope.svg'
import facebook from '../../utils/images/facebook.svg'
import instagram from '../../utils/images/instagram.svg'
import x from '../../utils/images/twitter-x.svg'



const Contact = () => {
  return (
    <main className='my-3'>
        <section className='contact_header '>
            <h2 className='py-3 px-lg-5'>Contact Us</h2>
        </section>
        <section className='contact_desktop_main d-flex my-4 container shadow-lg rounded bg-light justify-content-center align-items-center'>
            <div className="row bg-white px-5 w-100 py-5">
                <div className='col-6 '>
                <h3 className='px-3'>Reach Us</h3>

                    <div className='d-flex py-3 justify-content-start align-items-start'>
                        <div className='px-3 py-1'>
                            <img src={Location} alt='location' className='icon_size' />
                        </div>
                            <p>
                                Suraj Cineplex <br />
                                College Road, Hajiyani Baug, <br />
                                Junagadh - 362001 GUJARAT - INDIA
                            </p>                        
                    </div>
                    <div className='d-flex py-3 justify-content-start align-items-start'>
                        <div className='px-3 '>
                            <img src={Phone} alt='Phone' className='icon_size' />
                        </div>
                            <p>
                                +91 95102 12000
                            </p>                        
                    </div>
                    <div className='d-flex py-3 justify-content-start align-items-start'>
                        <div className='px-3 '>
                            <img src={mail} alt='Phone' className='icon_size' />
                        </div>
                            <p>
                                surajcineplex@gmail.com
                            </p>                        
                    </div>
                <h4 className='pt-3'>Social Media</h4>
                    <div className='d-flex py-3 justify-content-center align-items-center'>
                        <div className='px-3 py-1'>
                            <img src={facebook} alt='location' style={{width: "30px"}} />
                        </div>
                        <div className='px-3 py-1'>
                            <img src={instagram} alt='location' style={{width: "30px"}} />
                        </div>
                        <div className='px-3 py-1'>
                            <img src={x} alt='location' style={{width: "30px"}} />
                        </div>                            
                    </div>
                </div>
                <article className='col-6'>
                <iframe title='suraj-cineplex' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14847.96934833825!2d70.4579954!3d21.5080201!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39580195755f8945%3A0x209747904b6b8431!2sSuraj%20Cineplex!5e0!3m2!1sen!2sin!4v1708599437151!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </article>
            </div>
            
        </section>
        <section className=' contact_mobile_main d-flex flex-col justify-content-start align-items-start'>
            <div className='row  d-flex container justify-content-between align-items-center'>
                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-start align-items-start text-start'>
                <img src={Location} alt='location' className='icon_size  my-2 mx-2' />

                            <p className=''>
                                    Suraj Cineplex <br />
                                    College Road, Hajiyani Baug, <br />
                                    Junagadh - 362001 GUJARAT - INDIA
                                </p>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-col justify-content-start align-items-start text-start'>
                    <div className='d-flex justify-content-center align-items-center'>
                    <img src={Phone} alt='location' className='icon_size  my-2 mx-2' />

                        <span className=''>
                        +91 95102 12000
                        </span>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                    <img src={mail} alt='location' className='icon_size  my-2 mx-2' />

                        <span className=''>
                           surajcineplex@gmail.com
                        </span>
                    </div>
                </div>
            </div>
            
            <div className='mt-4' >
            <iframe title=' suraj-cineplex' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14847.96934833825!2d70.4579954!3d21.5080201!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39580195755f8945%3A0x209747904b6b8431!2sSuraj%20Cineplex!5e0!3m2!1sen!2sin!4v1708599437151!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                
            </div>
        </section>
    </main>
  )
}

export default Contact

