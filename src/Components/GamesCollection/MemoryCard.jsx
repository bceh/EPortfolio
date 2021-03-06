import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import Paper from "@mui/material/Paper";
import FlipCard from "./FlipCard";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const prevCard = [];

const MemoryCard = () => {
  const [cards, setCards] = useState([
    { item: 1, flipped: false },
    { item: 1, flipped: false },
    { item: 2, flipped: false },
    { item: 2, flipped: false },
    { item: 3, flipped: false },
    { item: 3, flipped: false },
    { item: 4, flipped: false },
    { item: 4, flipped: false },
    { item: 5, flipped: false },
    { item: 5, flipped: false },
    { item: 0, flipped: false },
    { item: 0, flipped: false },
  ]);
  const navigate = useNavigate();

  const [finished, setFinished] = useState(false);
  useEffect(() => {
    const newCards = [..._.shuffle(cards)];
    newCards.map((card) => (card.flipped = true));
    setCards(newCards);
    const flippedCards = [...newCards];

    setTimeout(() => {
      flippedCards.map((card) => (card.flipped = false));
      setCards(flippedCards);
    }, 1000);
  }, []);

  useEffect(() => {
    if (prevCard.length > 1) {
      const indexCard1 = prevCard.pop();
      const indexCard2 = prevCard.pop();
      if (cards[indexCard1].item !== cards[indexCard2].item) {
        const newCards = [...cards];
        newCards[indexCard1].flipped = false;
        newCards[indexCard2].flipped = false;
        setTimeout(() => setCards(newCards), 500);
      } else if (cards.every((card) => card.flipped)) {
        setFinished(true);
      }
    }
  });

  const showResultHandler = () => {
    const newCards = [...cards];
    newCards.map((card) => (card.flipped = true));
    setCards(newCards);
    setFinished(true);
  };

  const resetHandler = () => {
    const newCards = [..._.shuffle(cards)];
    newCards.map((card) => (card.flipped = true));
    setCards(newCards);
    setFinished(false);
    prevCard.length = 0;

    setTimeout(() => {
      const flippedCards = [...newCards];
      flippedCards.map((card) => (card.flipped = false));
      setCards(flippedCards);
    }, 1000);
  };

  const changeStatus = (index) => {
    if (cards[index].flipped) return;
    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);
    prevCard.push(index);
  };

  return (
    <Box>
      <Button
        variant="outlined"
        sx={{ ml: "1rem", mb: "1rem" }}
        onClick={() => navigate("/games:memoryCard")}
        startIcon={<ArrowBackIcon />}
      >
        Back To Games
      </Button>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",

            width: "80%",
            maxWidth: "800px",
            aspectRatio: "1/1",
          }}
        >
          {cards.map(({ item, flipped }, index) => (
            <Grid key={index} item xs={3}>
              <FlipCard
                key={index}
                index={index}
                item={item}
                onChangeStatus={changeStatus}
                flipped={flipped}
              />
            </Grid>
          ))}
        </Grid>
        <Grid space={4}>
          <Button
            sx={{
              display: `${finished ? "none" : "block-inline"}`,
              m: "1rem",
            }}
            disabled={finished}
            onClick={showResultHandler}
            variant="outlined"
          >
            Show Results
          </Button>
          <Button
            sx={{
              display: `${finished ? "block-inline" : "none"}`,
              m: "1rem",
            }}
            onClick={resetHandler}
            variant="outlined"
          >
            Play Again
          </Button>
        </Grid>
      </Paper>
    </Box>
  );
};

export default MemoryCard;
