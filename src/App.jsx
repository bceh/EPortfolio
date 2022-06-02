import "./App.css";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter className="content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
