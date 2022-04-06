import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Restaurent from './components/Restaurent';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:restaurentId" element={<Restaurent />} />
      </Routes>
    </BrowserRouter>
    ,
  document.getElementById('root')
);
