import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AboutMe from "./aboutMe/AboutMe";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Login from "./login/Login";
import Admin from "./admin/Admin";
import ManageExperience from "./admin/ManageExperience";
import ManageProject from "./admin/ManageProject";
import AccessDenied from "./shared/AccessDenied";

import { connect } from "react-redux";
import PageDoesNotExist from "./shared/PageDoesNotExist";

function App({ loggedIn }) {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <AboutMe />
          </Route>
          <Route exact path="/experience">
            <Experience />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/login">
            {loggedIn ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path="/admin">
            {loggedIn ? <Admin /> : <AccessDenied />}
          </Route>
          <Route exact path="/admin/experience/" component={ManageExperience} />
          <Route
            exact
            path="/admin/experience/:id"
            component={ManageExperience}
          />
          <Route exact path="/admin/project/:id">
            <ManageProject />
          </Route>
          <Route path="">
            <PageDoesNotExist />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
  };
}

export default connect(mapStateToProps)(App);
