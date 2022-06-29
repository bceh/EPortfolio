import { useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./ArrowLink.css";

const ArrowLink = (props) => {
  const navigate = useNavigate();
  const { text, link } = props;
  const clickHandler = () => {
    navigate(link);
  };
  return (
    <div className="link-container">
      <p className="link-content" onClick={clickHandler}>
        {text}
        <ArrowRightAltIcon />
      </p>
    </div>
  );
};

export default ArrowLink;
