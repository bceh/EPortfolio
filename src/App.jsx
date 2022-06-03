import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Welcoming from "./Components/Welcoming";
import { Transition } from "react-transition-group";
function App() {
  return (
    <div>
      <Welcoming />
      <div>
        <NavBar />
        <BrowserRouter className="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
