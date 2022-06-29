import Box from "@mui/material/Box";
import Personal from "./Personal";
import "./Home.css";
import "./bg.css";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <Box className="home-container">
      <Box className="home-content">
        <Personal />
        <Gallery />
      </Box>
      <Box className="g-bg">
        <Box className="g-polygon-1"></Box>
        <Box className="g-polygon-2"></Box>
        <Box className="g-polygon-3"></Box>
      </Box>
    </Box>
  );
};

export default Home;
