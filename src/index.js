import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.min.css";
import Restaurent from './pages/Restaurent';
import RestaurentStatus from './pages/RestaurentStatus';
import { NavbarProvider } from './navbarcontext';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <NavbarProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/status/:restaurentId" element={<RestaurentStatus />} />
        <Route path="/online/:restaurentId" element={<Restaurent />} />
      </Routes>
    </BrowserRouter>
  </NavbarProvider>,
  document.getElementById("root")
);
