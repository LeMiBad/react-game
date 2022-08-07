import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import WelcomePage from './WelcomePage/WelcomePage';
import reportWebVitals from './reportWebVitals';
import Level from './Level/Level';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Header/>
      <Routes>
        <Route path='/*' element={<WelcomePage/>}/>
        <Route path='/level' element={<Level/>}/>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
