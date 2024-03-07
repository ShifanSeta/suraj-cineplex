import React, {useState} from 'react'
import './bottomBar.css'
// import Home  from '../../utils/images/mobile-home.png';
// import Cinema from '../../utils/images/mobile-cinema.svg';
import Food from '../../utils/images/burger-solid.svg';
import Advertise from '../../utils/images/rectangle-ad-solid.svg';

import More from '../../utils/images/ellipsis-solid.svg';
import Cinema  from '../../utils/images/cinema.svg';
import AboutUs from '../../utils/images/about-us.png'
import Contact from '../../utils/images/contact-us.png'
import Feedback from '../../utils/images/feedback.png'
import Home from '../../utils/images/home.svg';
import { Link } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';


const BottomBar = () => {

  const [visibleBottom, setVisibleBottom] = useState(false);

  return (
    <main className='main_bottom_bar shadow-lg'>
        <section className='d-flex  justify-content-evenly align-items-center py-2'>
            <Link to='/' className='d-flex px-2 nav_link flex-col justify-content-center align-items-center'>
                <img src={Home} className='svg_img' alt="home" /> 
                <span className='nav-font'>Home</span>
            </Link>
            <Link to='/movies' className='d-flex px-2 nav_link flex-col justify-content-center align-items-center'>
                <img src={Cinema} className='svg_img' alt="home" /> 
                <span className='nav-font'>Movies</span>
            </Link>
            <Link to='/food' className='d-flex px-2 nav_link flex-col justify-content-center align-items-center'>
                <img src={Food} className='svg_img' alt="home" /> 
                <span className='nav-font'>Food</span>
            </Link>
            <Link to='/advertise' className='d-flex  px-2 nav_link flex-col justify-content-center align-items-center'>
                <img src={Advertise}  className='svg_img' alt="home" /> 
                <span className='nav-font' style={{width: "50px"}}>Advertise</span>
            </Link>
           
            <Link onClick={() => setVisibleBottom(true)} className='d-flex px-2 nav_link flex-col justify-content-center align-items-center ' >
                <img src={More} className='svg_img' alt="home" /> 
                <span className='nav-font'>More</span>


                


                {/* <div>
                  <div className="offcanvas offcanvas-bottom" tabIndex={-1} id="offcanvasBottom1" aria-labelledby="offcanvasBottomLabel">
                    <div className="offcanvas-header">
                      <h4 className="offcanvas-title" id="offcanvasBottomLabel">More</h4>
                      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body small">
                    <Link to="contact-us" className="nav-item d-flex align-items-center p-2 mx-1" style={{textDecoration: 'none'}}>
                      <img
                        style={{ width: "20px" }}
                        src={Contact}
                        alt="contact"
                      />
                      <span
                        className="nav-link px-1"
                        aria-current="page"
                        href="#"
                      >
                        Contact us
                      </span>
                    </Link>
                    <Link to="about-us" className="nav-item d-flex align-items-center p-2 mx-1" style={{textDecoration: 'none'}}>
                      <img
                        style={{ width: "20px" }}
                        src={AboutUs}
                        alt="about"
                      />
                      <span
                        className="nav-link px-1"
                        aria-current="page"
                        href="#"
                      >
                        About us
                      </span>
                    </Link>
                    <Link to="feedback" className="nav-item d-flex align-items-center p-2 mx-1" style={{textDecoration: 'none'}}>
                      <img
                        style={{ width: "20px" }}
                        src={Contact}
                        alt="feedback"
                      />
                      <span
                        className="nav-link px-1"
                        aria-current="page"
                        href="#"
                      >
                        Feedback
                      </span>
                    </Link>
                    <hr />
                    <Link to="/terms-use" className="nav-item d-flex align-items-center p-2 mx-1" style={{textDecoration: 'none'}}>
                      <span
                        className="nav-link px-1"
                        
                      >
                        Terms of use
                      </span>
                    </Link>
                    <Link to="/terms-conditions" className="nav-item d-flex align-items-center p-2 mx-1" style={{textDecoration: 'none'}}>
                      <span
                        className="nav-link px-1"
                        aria-current="page"
                        href="#"
                      >
                        Terms & Conditions
                      </span>
                    </Link>
                    <Link to="/privacy-policy" className="nav-item d-flex align-items-center p-2 mx-1" style={{textDecoration: 'none'}}>
                      <span
                        className="nav-link px-1"
                        aria-current="page"
                        href="#"
                      >
                        Privacy Policy
                      </span>
                    </Link>
                    </div>
                  </div>
                </div> */}



                {/* <ul className="dropdown-menu">
                <li className="nav-item d-flex align-items-center p-2 mx-1">
                <img
                  style={{ width: "20px" }}
                  src={Contact}
                  alt="advertise"
                />
                <Link
                  to="/contact-us"
                  className="nav-link px-1"
                  aria-current="page"
                  href="#"
                >
                  Contact us
                </Link>
              </li>
              <li className="nav-item d-flex align-items-center p-2 mx-1">
                <img
                  style={{ width: "20px" }}
                  src={AboutUs}
                  alt="advertise"
                />
                <Link
                  to="/about-us"
                  className="nav-link px-1"
                  aria-current="page"
                  href="#"
                >
                  About us
                </Link>
              </li>
              <li className="nav-item d-flex align-items-center p-2 mx-1">
                <img
                  style={{ width: "20px" }}
                  src={Feedback}
                  alt="advertise"
                />
                <Link
                  to="/about-us"
                  className="nav-link px-1"
                  aria-current="page"
                  href="#"
                >
                  Feedback
                </Link>
              </li>               
                </ul> */}
            </Link>
            <div className='m-0 p-0'>
            <Sidebar className='offcanvas-bottom-react' visible={visibleBottom} position="bottom" onHide={() => setVisibleBottom(false)}>
                    <Link to="contact-us" className="nav-item d-flex align-items-center p-2 mx-1" onClick={() => setVisibleBottom(false)} style={{textDecoration: 'none'}}>
                      <img
                        style={{ width: "20px" }}
                        src={Contact}
                        alt="contact"
                      />
                      <span
                        className="nav-link px-1"
                        aria-current="page"
                        href="#"
                      >
                        Contact us
                      </span>
                    </Link>
                    <Link to="about-us" className="nav-item d-flex align-items-center p-2 mx-1" onClick={() => setVisibleBottom(false)} style={{textDecoration: 'none'}}>
                      <img
                        style={{ width: "20px" }}
                        src={AboutUs}
                        alt="about"
                      />
                      <span
                        className="nav-link px-1"
                        aria-current="page"
                        href="#"
                      >
                        About us
                      </span>
                    </Link>
                    <Link to="feedback" className="nav-item d-flex align-items-center p-2 mx-1" onClick={() => setVisibleBottom(false)} style={{textDecoration: 'none'}}>
                      <img
                        style={{ width: "20px" }}
                        src={Contact}
                        alt="feedback"
                      />
                      <span
                        className="nav-link px-1"
                        aria-current="page"
                        href="#"
                      >
                        Feedback
                      </span>
                    </Link>
                    <hr />
                    <Link to="/terms-use" className="nav-item d-flex align-items-center p-2 mx-1" onClick={() => setVisibleBottom(false)} style={{textDecoration: 'none'}}>
                      <span
                        className="nav-link px-1"
                        
                      >
                        Terms of use
                      </span>
                    </Link>
                    <Link to="/terms-conditions" className="nav-item d-flex align-items-center p-2 mx-1" onClick={() => setVisibleBottom(false)} style={{textDecoration: 'none'}}>
                      <span
                        className="nav-link px-1"
                        aria-current="page"
                        href="#"
                      >
                        Terms & Conditions
                      </span>
                    </Link>
                    <Link to="/privacy-policy" className="nav-item d-flex align-items-center p-2 mx-1" onClick={() => setVisibleBottom(false)} style={{textDecoration: 'none'}}>
                      <span
                        className="nav-link px-1"
                        aria-current="page"
                        href="#"
                      >
                        Privacy Policy
                      </span>
                    </Link>
                </Sidebar>
            </div>
        </section>  
    </main>
  )
}

export default BottomBar


