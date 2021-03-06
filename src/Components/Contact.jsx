import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./bg.css";

const Contact = () => {
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          width: "100%",
          height: "calc(100vh - 64px)",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" sx={{ mb: "2rem", fontFamily: "Comfortaa" }}>
          CONTACT ME
        </Typography>
        <Typography
          sx={{
            color: "lightblue",
            fontFamily: "Comfortaa",
            "&::selection": {
              backgroundColor: "cyan",
            },
          }}
          variant="h4"
        >
          I'm actively looking for work.
        </Typography>
        <Typography
          sx={{
            color: "lightblue",
            fontFamily: "Comfortaa",
            "&::selection": {
              backgroundColor: "cyan",
            },
          }}
          variant="h4"
        >
          Drop me a line if you want a chat.
        </Typography>
        <Typography sx={{ mt: "2rem", fontFamily: "Comfortaa" }} variant="h4">
          0416440306
        </Typography>
        <Typography sx={{ fontFamily: "Comfortaa" }} variant="h4">
          cbqfrancis@gmail.com
        </Typography>
        <Typography
          variant="h4"
          sx={{
            cursor: "pointer",
            mt: "2rem",
          }}
        >
          <a
            style={{ fontFamily: "Comfortaa", color: "black" }}
            href="https://github.com/bceh"
          >
            GitHub
          </a>
        </Typography>
        <Box sx={{ height: "30vh" }} />
      </Box>
      <Box className="g-bg">
        <Box className="g-polygon-1"></Box>
        <Box className="g-polygon-2"></Box>
        <Box className="g-polygon-3"></Box>
      </Box>
    </Box>
  );
};

export default Contact;
