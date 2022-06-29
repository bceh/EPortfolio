import ArrowLink from "./ArrowLink";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const GalleryCard = (props) => {
  const { title, fig, figAlt, description, text, link } = props;
  return (
    <Card
      sx={{
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 30px 40px -10px rgba(0, 0, 0, 0.7)",
        },
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "center", mb: 1 }}>
        {title}
      </Typography>
      <CardMedia
        component="img"
        image={fig}
        alt={figAlt}
        sx={{ width: "100%", aspectRatio: "2" }}
      />
      <CardContent sx={{ p: 0, mt: { xs: 1, sm: 2 } }}>
        <Typography>{description}</Typography>
      </CardContent>
      <ArrowLink text={text} link={link} />
      <Box sx={{ mb: 1 }} />
    </Card>
  );
};

export default GalleryCard;
