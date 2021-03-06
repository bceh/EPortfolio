// games/npuzzle
import "./NPuzzle.css";
import { useNavigate } from "react-router-dom";
import { moveCards, getShuffledCards, getAns } from "./NPuzzleLogic.js";
import _ from "lodash";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const NPuzzle = () => {
  const [cards, setCards] = useState([]);
  const [cardsType, setCardsType] = useState(3);
  const [moves, setMoves] = useState(0);
  const [isComplete, setIscomplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setCards(getShuffledCards(3));
    setCardsType(3);
    setIscomplete(false);
    setMoves(0);
  }, []);

  const cardClickHandler = (num) => {
    const newCards = _.cloneDeep(cards);
    const isMoved = moveCards(num, newCards);
    if (isMoved) {
      setCards(newCards);
      setMoves(moves + 1);
      const res = newCards.flat();
      const ans = getAns(cardsType);
      if (_.isEqual(res, ans)) {
        setIscomplete(true);
      }
    }
  };
  const typeClickHandler = (event, type) => {
    if (type) {
      setCardsType(type);
      setCards(getShuffledCards(type));
      setMoves(0);
    }
    setIscomplete(false);
  };
  const resetClickHandler = () => {
    setCards(getShuffledCards(cardsType));
    setMoves(0);
    setIscomplete(false);
  };
  const dialogCloseHandler = () => {
    setIscomplete(false);
  };
  const dialogResetHandler = () => {
    dialogCloseHandler();
    resetClickHandler();
  };
  const CardButton = styled(Button)({
    lineHeight: 2,
    borderColor: "#000",
    backgroundColor: "#DBA214",
    borderRadius: "10px",
    color: "#222",
    fontFamily: "pecial Elite",

    "&:hover": {
      backgroundColor: "#EB6C09",
    },
  });

  const card = (num, rol_i, col_i) => {
    let cardSize = {};
    if (cardsType === 5) {
      cardSize = { height: "18.4%", width: "18.4%", fontSize: "40px" };
    }
    if (cardsType === 4) {
      cardSize = { height: "23.5%", width: "23.5%", fontSize: "60px" };
    }
    if (cardsType === 3) {
      cardSize = { height: "32%", width: "32%", fontSize: "80px" };
    }
    if (num === 0) return <Button key="0" sx={{ ...cardSize }} disabled />;
    const cardColor =
      rol_i * cardsType + col_i + 1 === num
        ? { backgroundColor: "#8BEB7A" }
        : {};
    return (
      <CardButton
        sx={{ ...cardSize, ...cardColor }}
        onClick={() => cardClickHandler(num)}
        key={num}
        variant="outlined"
      >
        {num}
      </CardButton>
    );
  };

  return (
    <Box>
      <Button
        variant="outlined"
        sx={{ mb: "1rem", ml: "1rem" }}
        onClick={() => navigate("/games:NPuzzle")}
        startIcon={<ArrowBackIcon />}
      >
        Back To Games
      </Button>
      <Box className="NPuzzle-container">
        <Paper className="NPuzzle-table" elevation={3}>
          <ToggleButtonGroup
            value={cardsType}
            exclusive
            onChange={typeClickHandler}
            size="large"
            color="primary"
            sx={{ mb: "1rem" }}
          >
            <ToggleButton value={3}>EASY (3 ?? 3)</ToggleButton>
            <ToggleButton value={4}>NORMAL (4 ?? 4)</ToggleButton>
            <ToggleButton value={5}>HARD (5 ?? 5)</ToggleButton>
          </ToggleButtonGroup>
          <Box className="NPuzzle-board">
            {cards.map((row, row_i) =>
              row.map((num, col_i) => card(num, row_i, col_i))
            )}
          </Box>
          <Box sx={{ display: "flex", m: "0.8rem 0.8rem" }}>
            <Stack direction="row" spacing={25}>
              <Typography sx={{ mt: "4px" }} variant="h5">
                Moves: {moves}
              </Typography>
              <Button
                size="large"
                variant="outlined"
                onClick={resetClickHandler}
              >
                New Game
              </Button>
            </Stack>
          </Box>
        </Paper>
        <Dialog open={isComplete} onClose={dialogCloseHandler}>
          <DialogTitle>Congragulation! You Win!</DialogTitle>
          <DialogContent>You win in {moves} moves.</DialogContent>
          <DialogActions>
            <Button onClick={dialogResetHandler}>Play Again</Button>
            <Button onClick={dialogCloseHandler}>Close</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default NPuzzle;
