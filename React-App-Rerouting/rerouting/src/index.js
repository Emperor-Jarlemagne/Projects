import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import './index.css';
import App from './App';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 
