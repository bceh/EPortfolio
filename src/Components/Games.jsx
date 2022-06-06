import { useNavigate } from "react-router-dom";

const Games = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/games/npuzzle");
  };
  return (
    <div>
      <h1>Games</h1>
      <button onClick={clickHandler}>NPuzzle</button>
    </div>
  );
};

export default Games;
