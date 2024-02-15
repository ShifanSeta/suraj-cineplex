import React from 'react'
import {ReactComponent as ReactLogo } from '../../utils/images/logo.svg';
import {ReactComponent as Home } from '../../utils/images/home.svg';
import {ReactComponent as Cinema } from '../../utils/images/cinema.svg';
import {ReactComponent as Offers } from '../../utils/images/offer.svg';
import {ReactComponent as Show } from '../../utils/images/show.svg';
import {ReactComponent as More } from '../../utils/images/more.svg';
import {ReactComponent as Login } from '../../utils/images/login.svg';
import {ReactComponent as Gift } from '../../utils/images/gift.svg';
import {ReactComponent as Merch } from '../../utils/images/merch.svg';
import {ReactComponent as Advertise } from '../../utils/images/advertise.svg';
import  Profile  from '../../utils/images/profile.svg';
import {ReactComponent as Search } from '../../utils/images/search1.svg';




import { useState } from 'react';


import { Link } from 'react-router-dom'
import './Navbar.css';


const Navbar = () => {


  return (
    <>
        <nav className="navbar main_nav_desktop navbar-expand-lg bg-white" >
            <div className="container-fluid" style={{position: 'relative'}}>
                <ReactLogo className="logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-3 me-auto mb-2 mb-lg-0">
                    <li className="nav-item d-flex align-items-center px-3 bg_active text-dark">
                    <Home className='' />
                    <Link className="nav-link " to='/' aria-current="page" href="#">Home</Link>
                    </li>

                    <li className="nav-item d-flex align-items-center px-3 ">
                    <Show className='' />
                    <Link className="nav-link " aria-current="page" href="#">Showtimes</Link>
                    </li>
                    
                    <li className="nav-item d-flex align-items-center px-3 ">
                    <Cinema className='' />
                    <Link className="nav-link " aria-current="page" href="#">Cinemas</Link>
                    </li>

                    <li className="nav-item d-flex align-items-center px-3 ">
                    <Offers className='' />
                    <Link className="nav-link " aria-current="page" href="#">Offers</Link>
                    </li>

                    <li className="nav-item dropdown d-flex align-items-center px-3">
                    <More />
                    <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </Link>
                    <ul className="dropdown-menu">
                        <li className='px-3 d-flex align-items-center'> <Gift /> <Link className="dropdown-item p-1" href="#">Gift</Link></li>
                        <li className='px-3 d-flex align-items-center'> <Advertise /> <Link className="dropdown-item p-1" href="#">Advertisement</Link></li>
                        <li className='px-3 d-flex align-items-center'> <Merch /> <Link className="dropdown-item p-1" href="#">Merchandise</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item px-3" href="#">About us</Link></li>
                        <li><Link className="dropdown-item px-3" href="#">Experiences</Link></li>
                        <li><Link className="dropdown-item px-3" href="#">FAQ s</Link></li>
                    </ul>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div className="nav-item d-flex align-items-center px-3 login py-2 mx-2">
                    <Login className='' />
                    <Link className="nav-link px-2" aria-current="page" href="#">Login</Link>
                    </div>

                </div>
            </div>
        </nav>
        <nav className='main_nav_mobile shadow d-flex justify-content-between align-items-center px-3 py-2'>
            <section className='d-flex flex-col justify-content-center align-items-center text-start'>
                <span className='text-bold' style={{fontSize: "0.8rem", }}>Hey!</span>
                <span style={{fontSize: "0.7rem"}}>Junagadh</span>
            </section>
            <section className='d-flex justify-content-center align-items-start'>
                <span>
                <Search className="mx-2" />
                <img src={Profile} style={{width: "24px"}} alt="profile" />
                </span>
            </section>
        </nav>

    </>
  )
}

export default Navbar