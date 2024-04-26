import React from 'react';
import Mark from './mark';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from './Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      
        <Route path="/" element={<App />} />
        <Route path="/mark" element={<Mark />} />
        <Route path="/dashboard" element={<Dashboard />} />
       
      </Routes>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
