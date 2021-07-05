import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./home/Home";
import WorkExperience from "./workExperience/WorkExperience";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home title="Brayden's Page" />
          </Route>
          <Route exact path="/work-experience">
            <WorkExperience title="Work Experience" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
