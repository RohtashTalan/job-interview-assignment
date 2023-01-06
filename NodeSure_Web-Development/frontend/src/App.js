import React from "react";
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Dashboard from "./Components/Dashboard";
import LoginUser from "./Components/Login";



function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/login" element={<LoginUser />} />

    </Routes>
  </BrowserRouter>
  </>;
}

export default App;
