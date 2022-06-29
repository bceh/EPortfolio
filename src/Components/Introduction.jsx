import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Pagination from "@mui/material/Pagination";
import ArrowCircleLeft from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRight from "@mui/icons-material/ArrowCircleRight";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Introduction = (props) => {
  const {
    description,
    title,
    techs,
    clipImgs,
    instructions,
    gamePath,
    webPath,
  } = props;
  const [page, setPage] = useState(1);

  const pageHandler = (e, page) => {
    setPage(page);
  };
  const pageChangeHandler = (change) => {
    setPage((prevPage) => prevPage + change);
  };
  const navigate = useNavigate();

  const flexCenterStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const clips = clipImgs.map((clip, index) => (
    <img
      style={{ maxHeight: "400px", maxWidth: "80%" }}
      src={clip}
      alt={`clip-${index}`}
    />
  ));

  const cardIntro = (
    <Box
      sx={{
        ...flexCenterStyle,
        flexDirection: "column",
        p: "1rem",
        boxSizing: "border-box",
        maxWidth: "400px",
      }}
    >
      <Typography variant="h6" sx={{ alignSelf: "flex-start" }}>
        Description
      </Typography>
      <Typography variant="p" sx={{ mb: "1rem", alignSelf: "flex-start" }}>
        {description}
      </Typography>
      <Typography variant="h6" sx={{ alignSelf: "flex-start" }}>
        Instruction
      </Typography>
      <Box
        sx={{
          ...flexCenterStyle,
        }}
      >
        {clips.length > 1 && (
          <IconButton
            onClick={() => pageChangeHandler(-1)}
            disabled={page === 1}
          >
            <ArrowCircleLeft sx={{ width: "30px", height: "30px" }} />
          </IconButton>
        )}
        {clips[page - 1]}
        {clips.length > 1 && (
          <IconButton
            onClick={() => pageChangeHandler(1)}
            disabled={page === clips.length}
          >
            <ArrowCircleRight sx={{ width: "30px", height: "30px" }} />
          </IconButton>
        )}
      </Box>

      <Typography variant="p" sx={{ mt: "1rem", alignSelf: "flex-start" }}>
        {instructions[page - 1]}
      </Typography>
      {clips.length > 1 && (
        <Pagination
          sx={{ mt: "1rem" }}
          showFirstButton
          showLastButton
          hidePrevButton
          hideNextButton
          count={clips.length}
          page={page}
          onChange={pageHandler}
        />
      )}
      {gamePath && (
        <Box sx={{ mt: "1rem" }}>
          <Typography variant="p" sx={{ m: "1rem" }}>
            Want have a try?
          </Typography>
          <Button variant="outlined" onClick={() => navigate(gamePath)}>
            Play Now
          </Button>
        </Box>
      )}
      {webPath && (
        <Box sx={{ mt: "1rem" }}>
          <Typography variant="p" sx={{ m: "1rem" }}>
            Check the demo
          </Typography>
          <Button
            variant="outlined"
            onClick={() => (document.location.href = webPath)}
          >
            Go
          </Button>
        </Box>
      )}
    </Box>
  );

  const cardTech = (
    <Box
      sx={{
        maxWidth: "470px",
        minWidth: "400px",
        boxSizing: "border-box",
        maxWidth: "400px",
        p: "1rem",
      }}
    >
      <Typography variant="h6">Main Techniques</Typography>
      {techs.map((tech) => (
        <Typography>{tech}</Typography>
      ))}
    </Box>
  );
  return (
    <Box
      sx={{
        ...flexCenterStyle,
        flexDirection: "column",
      }}
    >
      <Typography variant="h5" sx={{ mb: "1rem" }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {cardIntro}
        {cardTech}
      </Box>
    </Box>
  );
};

export default Introduction;
