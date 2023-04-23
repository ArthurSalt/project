import React from "react";
import { Routes, Router, Route } from 'react-router-dom';
import About from "./pages/About";
import Posts from "./pages/Posts";

import './styles/App.css';

const App = () => {

  return (
    
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
}

export default App;