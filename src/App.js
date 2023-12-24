import React from "react";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Dashboard } from "./components/UI/components/Dashboard";

const App = () => {
  return (
    <>
      {/* <Routes>
        <Route key="home" path="/" element={<Container />} />
        <Route key="login" path="/login" element={<Login />} />
        <Route key="register" path="/register" element={<Register />} />
      </Routes> */}
      <Dashboard/>
    </>
  );
};

export default App;
