import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Melbourne from "./CardsImage/Melbourne.jpg";
import MonashUni from "./CardsImage/MonashUni.jpeg";
import WebDeveloper from "./CardsImage/WebDeveloper.jpg";
import Cat from "./CardsImage/Cat.jpeg";
import Skills from "./CardsImage/Skills.jpg";
import PhDDegree from "./CardsImage/PhDDegree.png";
const cards = [
  {
    imageName: Melbourne,
    imageAlt: "City of Melbourne",
    line1: "I live in",
    line2: "Melbourne",
  },
  {
    imageName: MonashUni,
    imageAlt: "New Horizons: a building in Monash University",
    line1: "I studied at",
    line2: "Monash Uni",
  },
  {
    imageName: WebDeveloper,
    imageAlt: "A picture full of codes",
    line1: "I am a",
    line2: "Web Developer",
  },
  {
    imageName: Cat,
    imageAlt: "A picture of my Cat",
    line1: "I have a",
    line2: "Lovely Cat",
  },
  {
    imageName: Skills,
    imageAlt: "A picture contains icons of CSS, HTML, JS, and React",
    line1: "I learned React",
    line2: "CSS, HTML, JS",
  },
  {
    imageName: PhDDegree,
    imageAlt: "The title of my PhD thesis: Precipitation in Al-Zn-Mg-Ag alloys",
    line1: "I have a",
    line2: "PhD Degree",
  },
];

const getCards = (index) => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia
        component="img"
        height="141"
        image={cards[index].imageName}
        alt={cards[index].imageAlt}
      />
      <CardContent sx={{ p: 0, mt: 3 }}>
        <Typography variant="h5">{cards[index].line1}</Typography>
        <Typography variant="h5">{cards[index].line2}</Typography>
      </CardContent>
    </Card>
  );
};
export default getCards;
