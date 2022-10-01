import './index.css';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { setupStore } from './store';



const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement );
root.render(
  <BrowserRouter>
      <Provider store={setupStore()}>
        <App/>
      </Provider>
  </BrowserRouter>
);

reportWebVitals();
