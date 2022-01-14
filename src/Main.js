import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Detail from "./pages/Detail";
import History from "./pages/History";
import Vehicle from "./pages/Vehicle";
import VehicleByCategory from "./pages/VehicleByCategory";

export default class Main extends React.Component {
  state = {
    userData: {
      token: "",
      // name: "",
      // email: "",
      // role: 0,
      // photo: "",
    },
  };

  componentDidMount() {
    const accessToken = JSON.parse(
      localStorage.getItem("vehicle-rental-token")
    );
    if (!accessToken) {
      return;
    }

    this.setState({ token: accessToken });
  }

  render() {
    const accessToken = JSON.parse(
      localStorage.getItem("vehicle-rental-token")
    );

    return (
      <ReduxProvider store={store}>
        <Router>
          <Switch>
            {/* <Route path="/" exact>
            <Home />
          </Route> */}
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            {/* <Route path="/login" component={Login} /> */}
            <Route
              path="/login"
              render={(routerProps) => {
                if (!accessToken) return <Login {...routerProps} />;
                return <Redirect from="/login" to="/" />;
              }}
            />
            <Route
              path="/profile"
              render={(routerProps) => {
                if (!accessToken) return <Redirect from="/profile" to="/" />;
                return <Profile {...routerProps} />;
              }}
            />
            <Route path="/history" component={History} />
            <Route path="/vehicle/detail/:id" exact component={Detail} />
            <Route path="/vehicle/:category" component={VehicleByCategory} />
            <Route path="/vehicle" exact component={Vehicle} />
          </Switch>
        </Router>
      </ReduxProvider>
    );
  }
}
