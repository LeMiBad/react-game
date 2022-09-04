import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import Header from './components/Header/Header';



const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement );
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <Header/>
        <App/>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
