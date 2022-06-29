import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import "./Gallery.css";
import GalleryCard from "./GalleryCard";
import moneybank from "../resources/moneybank.webp";
import eportfolio from "../resources/eportfolio.webp";
import games from "../resources/games.webp";

const Gallery = () => {
  return (
    <Container className="fadeInDown">
      <Typography variant="h4" sx={{ mt: 2, mb: 1 }} className="gallery-title">
        Projects Gallery
      </Typography>
      <Grid container spacing={2} className="gallery-container">
        <Grid item xs={12} sm={4} className="gallery-item">
          <GalleryCard
            title="Moneybank"
            fig={moneybank}
            description="A fullly functionised personal finanical app. Built by using React, Material UI, Redux, EChart."
            text="MORE"
            link="/web:moneybank"
          />
        </Grid>
        <Grid item xs={12} sm={4} className="gallery-item">
          <GalleryCard
            title="E-Portfolio"
            fig={eportfolio}
            description="A straight forward personal E-portfolio. Built by using React, and Material UI."
            text="MORE"
            link="/web:eportfolio"
          />
        </Grid>
        <Grid item xs={12} sm={4} className="gallery-item">
          <GalleryCard
            title="Puzzle Games"
            text="MORE"
            fig={games}
            description="Classic memory puzzle and n-puzzle games. Built by React and React-spring."
            link="/games"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Gallery;
