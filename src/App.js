import { Route, Switch } from "react-router";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Landing from "./Components/Landing.jsx";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects.jsx";
import ResumePDF from "./Components/ResumePDF.jsx";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/pdf" component={ResumePDF} />
      </Switch>
    </div>
  );
}

export default App;
