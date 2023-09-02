import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Search from "./components/ClassApp";
import Place from "./components/Place";
import Geo from "./components/Geo";
import Navbar from "./components/Navbar";
import React from "react";
// import "./App.css";

const App = function() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Place name="Home" />}></Route>
            <Route path="/Search" element={<Search />}></Route>
            <Route path="/Geo" element={<Geo />}></Route>
            <Route path="/Contact" element={<Form />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
