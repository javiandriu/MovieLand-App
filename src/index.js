import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import MovieLandRouter from './router/MovieLandRouter'

import Navbar from './components/Navbar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Navbar/>
        <MovieLandRouter/>  
    </BrowserRouter>
);


