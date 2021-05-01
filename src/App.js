import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home/Home";
import Navbar from "./Components/Home/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio/Portfolio";
import Resume from "./Components/Resume/Resume/Resume";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/resume">
            <Resume></Resume>
          </Route>
          <Route path="/portfolio">
            <Portfolio></Portfolio>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
