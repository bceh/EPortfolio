import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Welcoming from "./Components/Welcoming";
import Box from "@mui/material/Box";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 5300);
  }, []);

  return (
    <div>
      {loading ? (
        <Welcoming />
      ) : (
        <Box>
          <NavBar />
          <Box sx={{ ml: { lg: "200px" }, mt: "2rem" }}>
            <BrowserRouter className="content">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </BrowserRouter>
          </Box>
        </Box>
      )}
    </div>
  );
}

export default App;
