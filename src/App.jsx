import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Welcoming from "./Components/Welcoming";
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <Welcoming />
      ) : (
        <div>
          <NavBar />
          <BrowserRouter className="content">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
