import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './App.css'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <PrimeReactProvider>
        <Router>
        <App className="app" />
        </Router>
    </PrimeReactProvider>
)