import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Profile from "./components/Profile";
import Courses from "./components/Courses";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Dashboard parent route */}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<About />} />   {/* default child */}
        <Route path="profile" element={<Profile />} />
        <Route path="courses" element={<Courses />} />
      </Route>
    </Routes>
  );
}

export default App;