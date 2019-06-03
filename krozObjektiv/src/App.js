import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import QuizHome from "./components/Quiz/QuizHome";
import Sidebar from "./components/layout/Sidebar";
import Recenzije from "./components/layout/Recenzije";
import Tips from "./components/layout/Tips";
import Oprema from "./components/layout/Oprema";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
            <Route path="/kviz" component={QuizHome} />
            <Route path="/fotoaparati" component={Sidebar} />
            <Route path="/recenzije" component={Recenzije} />
            <Route path="/tips" component={Tips} />
            <Route path="/oprema" component={Oprema} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
