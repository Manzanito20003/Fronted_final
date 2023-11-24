import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Shop';
//agregar login

// Define las rutas 
const routes = (
  <Routes>

    <Route path="/" element={<App/>} /> 
    <Route path="/Shop" element={<Shop></Shop>} />

  </Routes>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
