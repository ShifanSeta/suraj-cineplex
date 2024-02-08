import React from 'react'
import './tabs.css'
import ins from '../../utils/images/insignia.avif'
import dx from '../../utils/images/4dx.webp'
import NowShowing from '../NowShowing/NowShowing'
import ComingSoon from '../ComingSoon/ComingSoon';
import Experiences from '../Experiences/Experiences'
import Trailers from '../Trailers/Trailers'


const Tabs = () => {
  return (
    <main >
      <section className='container my-3'>
      <ul className="nav nav-underline">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Now Showing</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Coming Soon</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Experiences</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Trailers</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Offers</a>
            </li>
      </ul>
      <article className='my-4'>
        <img src={dx} alt="dx" className='mx-2' style={{width: "70px"}}/>
        <img src={ins} alt="ins" className='mx-2' style={{width: "79px"}}/>
      </article>
      </section>  
      <section>
        <NowShowing />
        <ComingSoon />
        <Experiences />
        <br />
        <Trailers />
      </section>
    </main>
  )
}

export default Tabs