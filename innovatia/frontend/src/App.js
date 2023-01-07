import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import SignUpUser from "./components/SignUp";
import LoginUser from "./components/Login";
import CheckoutPage from "./components/Checkout";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Products/>} />
      <Route path="/login" element={<LoginUser/>} />
      <Route path="/signup" element={<SignUpUser/>} />
      <Route path="/checkout" element={<CheckoutPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
