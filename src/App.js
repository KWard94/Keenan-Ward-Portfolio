import { Route, Switch } from "react-router";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Landing from "./Components/Landing.jsx";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
