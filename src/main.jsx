// src/index.js (or src/main.jsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Keep BrowserRouter here
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './index.css'; // Tailwind CSS or other styles
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
