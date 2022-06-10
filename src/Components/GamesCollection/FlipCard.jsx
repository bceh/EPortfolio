import React, { useState, useRef } from "react";
import { useSpring, a } from "@react-spring/web";
import { useHover } from "@use-gesture/react";
import "./FlipCard.css";
import getCards from "./Cards";
import Typography from "@mui/material/Typography";
const FlipCard = (props) => {
  const [{ scale }, api] = useSpring(() => ({
    scale: 1,
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const bind = useHover(({ hovering }) => {
    if (hovering) {
      api({ scale: 1.1 });
    } else {
      api({ scale: 1 });
    }
  });
  const { flipped, onChangeStatus, index } = props;

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 8, tension: 400, friction: 70 },
  });

  const clickHandler = () => {
    onChangeStatus(index);
  };

  return (
    <a.div
      className="card"
      {...bind()}
      style={{ scale }}
      onClick={clickHandler}
    >
      <a.div
        className="cardInner-front"
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "lightblue",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5">Who</Typography>
          <Typography variant="h5">am</Typography>
          <Typography variant="h5">I</Typography>
          <Typography variant="h2">?</Typography>
        </div>
      </a.div>
      <a.div
        className="cardInner-back"
        style={{ opacity, transform, rotateY: "180deg" }}
      >
        {getCards(props.item)}
      </a.div>
    </a.div>
  );
};

export default FlipCard;
