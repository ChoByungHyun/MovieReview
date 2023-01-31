import "./App.css";
import { BrowserRouter, Routes, Route, json } from "react-router-dom";
import React, { useEffect, useReducer, useRef } from "react";

import Login from "./pages/LogIn";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import axios from "axios";
import { Button } from "antd";
import GirdTest from "./components/GirdTest";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Main" element={<Main />}></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
          <Route path="/GridTest" element={<GirdTest />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
