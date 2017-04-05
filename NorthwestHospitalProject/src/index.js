import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SecondNavbar from './SecondNavbar';
import Heart from './Heart';
import FooterPanel from './FooterPanel';
import './index.css';

ReactDOM.render(
  <div>
  <App />
  <SecondNavbar />
  <Heart />
  <FooterPanel />
  </div>,
  document.getElementById('root')
);
