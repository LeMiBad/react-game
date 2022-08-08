import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './Header/Header';
import WelcomePage from './WelcomePage/WelcomePage';
import LevelPicker from './LevelPicker/LevelPicker';
import Level from './Level/Level';

const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement );

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Header/>
      <Routes>
        <Route path='/*' element={<WelcomePage/>}/>
        <Route path='/level' element={<Level/>}/>
        <Route path='/levelpick' element={<LevelPicker/>}/>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
