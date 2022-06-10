import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import memoryClip1 from "./GamesImg/memoryClip1.webp";
import memoryClip2 from "./GamesImg/memoryClip2.webp";
import memoryClip3 from "./GamesImg/memoryClip3.webp";
import memoryClip4 from "./GamesImg/memoryClip4.webp";
import NPuzzleClip1 from "./GamesImg/NPuzzleClip1.webp";
import NPuzzleClip2 from "./GamesImg/NPuzzleClip2.webp";
import NPuzzleClip3 from "./GamesImg/NPuzzleClip3.webp";
import NPuzzleClip4 from "./GamesImg/NPuzzleClip4.webp";
import Introduction from "./Introduction";

const Games = () => {
  const [value, setValue] = useState(0);

  const gameHandler = (event, newValue) => {
    setValue(newValue);
  };
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(params.game);
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
  ];

  return (
    <div>
      <Typography sx={{ mt: 0 }} variant="h4">
        Games
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={gameHandler} aria-label="tabs">
          <Tab label="Memory Card" id="tab-0" aria-controls="tabpanel-0" />
          <Tab label="N-Puzzle" id="tab-1" aria-controls="tabpanel-1" />
        </Tabs>
      </Box>
      <SwipeableViews index={value}>
        <div id="tabpanel-0" aria-labelledby="tab-0">
          {value === 0 && (
            <div>
              <Introduction
                title={memoryTitle}
                description={memoryDescription}
                clipImgs={memoryClipImgs}
                instructions={memoryInstructions}
                techs={MemoryTechs}
                gamePath="/games/memorycard"
              />
            </div>
          )}
        </div>
        <div id="tabpanel-1" aria-labelledby="tab-1">
          {value === 1 && (
            <Introduction
              title={NPuzzleTitle}
              description={NPuzzleDescription}
              clipImgs={NPuzzleClipImgs}
              instructions={NPuzzleInstructions}
              techs={NPuzzleTechs}
              gamePath="/games/npuzzle"
            />
          )}
        </div>
      </SwipeableViews>
    </div>
  );
};

export default Games;
