import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Restaurent from './components/Restaurent';
import RestaurentStatus from './components/RestaurentStatus';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/status/:restaurentId" element={<RestaurentStatus />} />
      <Route path="/online/:restaurentId" element={<Restaurent />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
