import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Games.css";
import "./bg.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import memoryClip1 from "../resources/GamesImg/memoryClip1.webp";
import memoryClip2 from "../resources/GamesImg/memoryClip2.webp";
import memoryClip3 from "../resources/GamesImg/memoryClip3.webp";
import memoryClip4 from "../resources/GamesImg/memoryClip4.webp";
import NPuzzleClip1 from "../resources/GamesImg/NPuzzleClip1.webp";
import NPuzzleClip2 from "../resources/GamesImg/NPuzzleClip2.webp";
import NPuzzleClip3 from "../resources/GamesImg/NPuzzleClip3.webp";
import NPuzzleClip4 from "../resources/GamesImg/NPuzzleClip4.webp";
import Introduction from "./Introduction";

const Games = () => {
  const [value, setValue] = useState(0);

  const gameHandler = (event, newValue) => {
    setValue(newValue);
  };
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    params.game && params.game === ":NPuzzle" && setValue(1);
    params.game && params.game === ":memoryCard" && setValue(0);
    params.game &&
      params.game !== ":memoryCard" &&
      params.game !== ":NPuzzle" &&
      navigate("/notFound");
  }, []);

  const memoryTitle = "A Simple Memory Card Game";
  const memoryClipImgs = [memoryClip1, memoryClip2, memoryClip3, memoryClip4];
  const memoryDescription =
    "I build a 3×4 memory card game that contains 6 messages about me. Have fun to find them all!";
  const memoryInstructions = [
    "Click on a back-side up card to flip it over.",
    "Two different cards will flip back.",
    "Find two same cards to keep them face up.",
    "Have trouble to solve the puzzle? No worry. Click the SHOW RESULTS button to flip all remain cards.",
  ];
  const MemoryTechs = [
    "1. Use useSpring library to implement the card-flip animation while clicking a card and the zoom-in animation while hovering the mouse on a card.",
    "2. Use use-gesture library to handle the mouse-hovering event.",
    "3. Use useState hook to record the progress of the game, e.g. card status, current clipped card, etc...",
    "4. Use materials UI sx property to implement responsive UI.",
  ];

  const NPuzzleTitle = "A Simple N-Puzzle Game";
  const NPuzzleDescription = "I build a classical N-Puzzle game. Have fun!";
  const NPuzzleClipImgs = [
    NPuzzleClip1,
    NPuzzleClip2,
    NPuzzleClip3,
    NPuzzleClip4,
  ];
  const NPuzzleInstructions = [
    "The 8-Puzzle is a sliding puzzle having 8 square tiles numbered 1-8 in a 3×3 frame, leaving one unoccupied tile position. Click the tiles near the open position to move them into the open position.",
    "Click tiles in the same row or column of the open position to slide them horizontally or vertically, respectively.",
    "The goal of the puzzle is to place the tiles in numerical order.",
    "There are two variants: 15-Puzzle in a 4×4 frame and 24-Puzzle in a 5×5 frame.",
  ];
  const NPuzzleTechs = [
    "1. Use one useState hook to record the frame after every move. Use another useState hook to record the moves.",
    "2. Use flexbox to align the tiles in the frame.",
    "3. Use materials UI sx property to implement responsive UI.",
  ];

  return (
    <React.Fragment>
      <Typography sx={{ mt: 0 }} variant="h4">
        Games
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={gameHandler} aria-label="tabs">
          <Tab label="Memory Card" id="tab-0" aria-controls="tabpanel-0" />
          <Tab label="N-Puzzle" id="tab-1" aria-controls="tabpanel-1" />
        </Tabs>
      </Box>
      <Box
        sx={{
          height: "calc(100vh - 160px)",
          overflow: "scroll",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            zIndex: 100,
            width: "100%",
          }}
        >
          {value === 0 && (
            <Box className="description-container">
              <Introduction
                title={memoryTitle}
                description={memoryDescription}
                clipImgs={memoryClipImgs}
                instructions={memoryInstructions}
                techs={MemoryTechs}
                gamePath="/games/memorycard"
              />
            </Box>
          )}
          {value === 1 && (
            <Box className="description-container">
              <Introduction
                title={NPuzzleTitle}
                description={NPuzzleDescription}
                clipImgs={NPuzzleClipImgs}
                instructions={NPuzzleInstructions}
                techs={NPuzzleTechs}
                gamePath="/games/npuzzle"
              />
            </Box>
          )}
        </Box>
        <Box className="g-bg g-g-bg">
          <Box className="g-polygon-1"></Box>
          <Box className="g-polygon-2"></Box>
          <Box className="g-polygon-3"></Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Games;
