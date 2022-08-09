import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Header from './components/Header/Header';
import WelcomePage from './components/WelcomePage/WelcomePage';
import LevelPicker from './components/LevelPicker/LevelPicker';
import Level from './components/Level/Level';

const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement );

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <Header/>
        <Routes>
          <Route path='/*' element={<WelcomePage/>}/>
          <Route path='/level' element={<Level/>}/>
          <Route path='/levelpick' element={<LevelPicker/>}/>
        </Routes>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
