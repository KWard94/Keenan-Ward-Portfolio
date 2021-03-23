import { Route, Switch } from "react-router";
import "./App.css";
import Home from "./Components/Home";
import Landing from "./Components/Landing.jsx";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
