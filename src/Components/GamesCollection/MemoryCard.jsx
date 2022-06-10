import React, { useState, useEffect } from "react";
import _ from "lodash";
import Paper from "@mui/material/Paper";
import FlipCard from "./FlipCard";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

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
          minWidth: "790px",
          maxWidth: "790px",
          height: "800px",
          border: "5px solid black",
          display: "flex",
          alignItems: "center",
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
          sx={{ display: `${finished ? "none" : "block-inline"}` }}
          disabled={finished}
          onClick={showResultHandler}
        >
          Show Results
        </Button>
        <Button
          sx={{ display: `${finished ? "block-inline" : "none"}` }}
          onClick={resetHandler}
        >
          Play Again
        </Button>
      </Grid>
    </Paper>
  );
};

export default MemoryCard;
