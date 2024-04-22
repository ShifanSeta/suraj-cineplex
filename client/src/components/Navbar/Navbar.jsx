import React, { useEffect, useState } from "react";
import SurajLogo from "../../utils/images/suraj.png";
import Home from "../../utils/images/home.svg";
import { ReactComponent as More } from "../../utils/images/more.svg";
import { ReactComponent as Gift } from "../../utils/images/gift.svg";
import Food from "../../utils/images/burger-solid.svg";
import Cinema from "../../utils/images/cinema.svg";
import { ReactComponent as Merch } from "../../utils/images/merch.svg";
import Profile from "../../utils/images/profile.svg";
import { ReactComponent as Search } from "../../utils/images/search1.svg";
import Auth, { AuthMobile } from "../auth/Auth";
import AboutUs from '../../utils/images/about-us.png'
import Contact from '../../utils/images/contact-us.png'
import Feedback from '../../utils/images/feedback.png'
import Advertise from "../../utils/images/rectangle-ad-solid.svg";
import { Avatar } from 'primereact/avatar';

import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [userCredentials, setUserCredentials] = useState([])


  useEffect(() => {

    const userDeatils = localStorage.getItem("SurajCredentials")
    setUserCredentials(userDeatils)

  },[])
  const NavItemsList = [
    {
      id: 1,
      label: "Home",
      Icon: Home,
      link: '/'
    },
    {
      id: 2,
      label: "Movies",
      Icon: Cinema,
      link: '/movies'
    },
    {
      id: 3,
      label: "Food",
      Icon: Food,
      link: '/food'
    },
    {
      id: 4,
      label: "Advertise",
      Icon: Advertise,
      link: '/advertise'
    },
    {
      id: 5,
      label: "Contact us",
      Icon: Contact,
      link: '/contact-us'
    },
    {
      id: 6,
      label: "About us",
      Icon: AboutUs,
      link: '/about-us'
    },
    {
      id: 7,
      label: "Feedback",
      Icon: Feedback,
      link: '/feedback'
    },
  ]

  return (
    <>
      <nav className="navbar main_nav_desktop shadow  bg-white">
        <div className="container-fluid" style={{ position: "relative" }}>
          {/* <ReactLogo className="logo" /> */}
          
          <div className="d-flex" id="navbarSupportedContent">
          <img
            src={SurajLogo}
            alt="suraj-logo"
            style={{ width: "70px", height: "auto" }}
          />
            <ul className="navbar d-flex justify-content-start align-items-center  links mx-3 me-auto mb-2 mb-lg-0">
              
              {
                NavItemsList && NavItemsList.length >= 0 ? NavItemsList.map((item) => {
                  return(
                    <li key={item.id} className="nav-item d-flex align-items-center p-2 bg_active active text-dark mx-1">
                      <img src={item.Icon} style={{ width: "19px" }} alt="home" />
                      <Link className="nav-link active px-1" to={item.link} aria-current="page" href="#">
                        {item.label}
                      </Link>
                    </li>
                  )
                }) : ""
              }
            </ul>
          </div>
          <div className="d-flex">
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form> */}
            {
              userCredentials.logged_in ? (
                  <div className="nav-item d-flex align-items-center px-3 login py-2 mx-2 bg-danger">
                                <Auth setVisible={setVisible} visible={visible} className="px-2"  />
                  </div>
               ) : (
                <div className="d-flex justify-content-center align-items-center">
                <Avatar icon="pi pi-user"  shape="circle" />

                </div>

               )
            }
            
            <button
              className="btn btn-outline btn-navigate"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              {" "}
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          <div
            className="offcanvas canvas-width offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header d-flex justify-content-end align-items-end">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body d-flex flex-col justify-content-start row w-100  align-items-center p-3">
            <ul className="navbar-nav mx-3 me-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex align-items-center px-3 bg_active text-dark">
                <img src={Home} alt="home" />
                <Link className="nav-link px-2" to="/" aria-current="page" href="#">
                  Home
                </Link>
              </li>

              <li className="nav-item d-flex align-items-center px-3 ">
                <img src={Cinema} alt="movies" />
                <Link
                  to="movies"
                  className="nav-link px-2"
                  aria-current="page"
                  href="#"
                >
                  Movies
                </Link>
              </li>

              <li className="nav-item d-flex align-items-center px-3 ">
                <img src={Food} alt="food" style={{ width: "19px" }} />
                <Link
                  to="/food"
                  className="nav-link px-2"
                  aria-current="page"
                  href="#"
                >
                  Food
                </Link>
              </li>

              <li className="nav-item d-flex align-items-center px-3 ">
                <img
                  style={{ width: "20px" }}
                  src={Advertise}
                  alt="advertise"
                />
                <Link
                  to="/advertise"
                  className="nav-link px-2"
                  aria-current="page"
                  href="#"
                >
                  Advertise
                </Link>
              </li>

              <li className="nav-item d-flex align-items-center px-3 ">
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
              <li className="nav-item d-flex align-items-center px-3 ">
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
              <li className="nav-item d-flex align-items-center px-3 ">
                <img
                  style={{ width: "20px" }}
                  src={Feedback}
                  alt="advertise"
                />
                <Link
                  to="/feedback"
                  className="nav-link px-1"
                  aria-current="page"
                  href="#"
                >
                  Feedback
                </Link>
              </li>

            </ul>
            </div>
          </div>
        </div>
      </nav>
      <nav className="main_nav_mobile shadow d-flex justify-content-between align-items-center px-3 py-2">
        <section className="d-flex flex-col justify-content-center align-items-center text-start">
          {/* <span className="text-bold" style={{ fontSize: "0.8rem" }}>
            Hey!
          </span>
          <span style={{ fontSize: "0.7rem" }}>Junagadh</span> */}
          <img src={SurajLogo} alt="logo" style={{width: '50px'}} />
        </section>
        <section className="d-flex justify-content-center align-items-start">
          <span>
            <AuthMobile />

          </span>
        </section>
      </nav>
    </>
  );
};

export default Navbar;


