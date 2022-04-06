import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Restaurent from './pages/Restaurent';
import RestaurentStatus from './pages/RestaurentStatus';
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
