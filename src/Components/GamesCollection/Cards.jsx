import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Melbourne from "../../resources/CardsImage/Melbourne.webp";
import MonashUni from "../../resources/CardsImage/MonashUni.webp";
import WebDeveloper from "../../resources/CardsImage/WebDeveloper.webp";
import Cat from "../../resources/CardsImage/Cat.webp";
import Skills from "../../resources/CardsImage/Skills.webp";
import PhDDegree from "../../resources/CardsImage/PhDDegree.webp";
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
  const fontSize = {
    fontSize: { xs: "10px", sm: "20px" },
  };
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia
        component="img"
        image={cards[index].imageName}
        alt={cards[index].imageAlt}
        sx={{ width: "100%", height: "60%" }}
      />
      <CardContent sx={{ p: 0, mt: { xs: 1, sm: 2 } }}>
        <Typography sx={{ ...fontSize }}>{cards[index].line1}</Typography>
        <Typography sx={{ ...fontSize }}>{cards[index].line2}</Typography>
      </CardContent>
    </Card>
  );
};
export default getCards;
