import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import "./Personal.css";

const Personal = () => {
  const avatarSize = 160;
  return (
    <Paper className="container" elevation={3}>
      <Avatar
        alt="Francis Cheng‘s  Selfie"
        src=""
        sx={{ width: avatarSize, height: avatarSize }}
      />
      <article className="discription">
        <p>Welcome to my protforilo!</p>
        <p>
          I'm a web developer with an Engineering background. <br /> In other
          words, I got a PhD degree on Materials Science and Engineering and
          returned a programmer.
        </p>
      </article>
    </Paper>
  );
};

export default Personal;
