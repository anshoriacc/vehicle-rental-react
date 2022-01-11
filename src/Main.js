import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Detail from "./pages/Detail";
import History from "./pages/History";
import Vehicle from "./pages/Vehicle";
import VehicleByCategory from "./pages/VehicleByCategory";

export default class Main extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route path="/" exact>
            <Home />
          </Route> */}
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/history" component={History} />
          <Route path="/vehicle" exact component={Vehicle} />
          <Route path="/vehicle/:category" component={VehicleByCategory} />
          <Route path="/vehicle/detail/:id" component={Detail} />
        </Switch>
      </Router>
    );
  }
}
