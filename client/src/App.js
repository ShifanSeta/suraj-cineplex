import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import DashBoard from './components/DashBoard/DashBoard'

const App = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<DashBoard />} />
            </Routes>
        </Router>   
    </>
  )
}

export default App