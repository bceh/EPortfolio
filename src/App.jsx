import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Welcoming from "./Components/Welcoming";
import Box from "@mui/material/Box";
import Web from "./Components/Web";
import Games from "./Components/Games";
import Apps from "./Components/Apps";
import AboutMe from "./Components/AboutMe";
import NotFound from "./Components/NotFound";
import NPuzzle from "./Components/GamesCollection/NPuzzle";
import MemoryCard from "./Components/GamesCollection/MemoryCard";

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
          <BrowserRouter className="content">
            <NavBar />
            <Box sx={{ ml: { lg: "200px" } }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/web" element={<Web />} />
                <Route path="/games/npuzzle" element={<NPuzzle />} />
                <Route path="/games/memorycard" element={<MemoryCard />} />
                <Route path="/games" element={<Games />} />
                <Route path="/games:game" element={<Games />} />
                <Route path="/apps" element={<Apps />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Box>
          </BrowserRouter>
        </Box>
      )}
    </div>
  );
}

export default App;
