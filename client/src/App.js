import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import DashBoard from './components/DashBoard/DashBoard'
import OffersList from './components/Offers/OffersList'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Food from './components/Food/Food'
import BottomBar from './components/BottomBar/BottomBar'
import Auth from './components/auth/Auth'
import Movies from './components/Movies/Movies'
import Advertise from './components/Advertise/Advertise'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Terms from './components/Terms/Terms'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'
import TermsUse from './components/Terms-use/TermsUse'
import Feedback from './components/Feedback/Feedback'
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style
import 'primeicons/primeicons.css';
import Error from './components/shared/Error'
import ScrollToTop from './components/ScrollToTop'
import { AdminPanel } from './Admin'


const App = ({location}) => {

  const excludedRoutes = ['/admin-panel'];
  let usedlocation = useLocation();
console.log(usedlocation, "locate");
  return (
    <>
          <ScrollToTop />
          <div>

          {!excludedRoutes.includes(usedlocation.pathname) && <Navbar />}

          <Routes>

                <Route path='/' element={<DashBoard />} />
                <Route path='/offers' element={<OffersList />} />
                <Route path='/food' element={<Food />} />
                <Route path='/auth' element={<Auth />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/advertise' element={<Advertise />} />
                <Route path='/contact-us' element={<Contact />} />
                <Route path='/about-us' element={<About />} />
                <Route path='/terms-conditions' element={<Terms />} />
                <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                <Route path='/terms-use' element={<TermsUse />} />
                <Route path='/feedback' element={<Feedback />} />

                <Route path='/admin-panel' element={<AdminPanel />} />

                
                <Route path='*' element={<Error />} />


            </Routes>
          {!excludedRoutes.includes(usedlocation.pathname) && <Footer />}
            
          </div>
          {!excludedRoutes.includes(usedlocation.pathname) && <BottomBar />}
            
            

    </>
  )
}

export default App;