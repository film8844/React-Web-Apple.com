import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/project/g18apple">
      <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
