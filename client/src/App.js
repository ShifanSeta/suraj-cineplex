import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import DashBoard from './components/DashBoard/DashBoard'
import OffersList from './components/Offers/OffersList'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Food from './components/Food/Food'

const App = () => {
  
  return (
    <>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<DashBoard />} />
                <Route path='/offers' element={<OffersList />} />
                <Route path='/food' element={<Food />} />

            </Routes>
            <Footer />
        </Router>   
    </>
  )
}

export default App