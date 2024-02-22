import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

const App = () => {
  
  return (
    <>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<DashBoard />} />
                <Route path='/offers' element={<OffersList />} />
                <Route path='/food' element={<Food />} />
                <Route path='/auth' element={<Auth />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/advertise' element={<Advertise />} />
                <Route path='/contact-us' element={<Contact />} />


            </Routes>
            <BottomBar />
            <Footer />
        </Router>   
    </>
  )
}

export default App