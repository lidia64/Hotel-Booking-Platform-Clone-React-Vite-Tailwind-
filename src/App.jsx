import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from 'react-router-dom';
import "./index.css";
import Home from "./pages/Home";
import Taxes from "./pages/Taxes";
import CarRental from "./pages/CarRental";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/taxes" element={<Taxes />} />
      <Route path="/car-rental" element={<CarRental />} />  
    </Routes>
  );
}
