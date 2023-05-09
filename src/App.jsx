import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Track from "./components/Track";
import List from "./components/List";
import DogCarousel from "./components/DogCarousel";
function App() {
  return (
    <>
      <Navbar />
      <DogCarousel/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/list" element={<List/>} />
        <Route path="/track" element={<Track/>} />
        <Route element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
