import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
function App() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
