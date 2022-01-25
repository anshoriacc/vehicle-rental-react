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
import EditPassword from "./pages/EditPassword";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import VehicleAdd from "./pages/VehicleAdd";
import VehicleEdit from "./pages/VehicleEdit";
import VehicleDetail from "./pages/VehicleDetail";
import Reservation from "./pages/Reservation";
import History from "./pages/History";
import Vehicle from "./pages/Vehicle";
import VehicleByCategory from "./pages/VehicleByCategory";
import Search from "./pages/Search";
import ChatRoom from "./pages/ChatRoom";
import ChatList from "./pages/ChatList";
import Payment from "./pages/Payment";

export default class Main extends React.Component {
  state = {
    token: "",
    name: "",
    role: 0,
    photo: "",
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
    const role = JSON.parse(localStorage.getItem("vehicle-rental-role"));

    return (
      <ReduxProvider store={store}>
        <Router>
          <Switch>
            {/* <Route path="/" exact>
            <Home />
          </Route> */}
            <Route path="/" exact component={Home} />
            {/* <Route path="/register" component={Register} /> */}
            {/* <Route path="/login" component={Login} /> */}
            <Route
              path="/register"
              render={(routerProps) => {
                if (!accessToken) return <Register {...routerProps} />;
                return <Redirect from="/register" to="/" />;
              }}
            />
            <Route
              path="/login"
              render={(routerProps) => {
                if (!accessToken) return <Login {...routerProps} />;
                return <Redirect from="/login" to="/" />;
              }}
            />
            <Route path="/forgot" component={ForgotPassword} />
            <Route
              path="/profile/editpassword"
              render={(routerProps) => {
                if (!accessToken)
                  return <Redirect from="/profile/editpassword" to="/" />;
                return <EditPassword {...routerProps} />;
              }}
            />
            <Route
              path="/profile"
              render={(routerProps) => {
                if (!accessToken) return <Redirect from="/profile" to="/" />;
                return <Profile {...routerProps} />;
              }}
            />
            <Route
              path="/profile/edit"
              render={(routerProps) => {
                if (!accessToken)
                  return <Redirect from="/profile/edit" to="/" />;
                return <Profile {...routerProps} />;
              }}
            />
            <Route
              path="/history"
              render={(routerProps) => {
                if (!accessToken) return <Redirect from="/history" to="/" />;
                return <History {...routerProps} />;
              }}
            />
            <Route path="/search" component={Search} />
            <Route path="/chat" exact component={ChatList} />
            <Route path="/chat/detail" exact component={ChatRoom} />
            <Route
              path="/vehicle/add"
              render={(routerProps) => {
                if (role !== 3) return <Redirect from="/vehicle/add" to="/" />;
                return <VehicleAdd {...routerProps} />;
              }}
            />
            <Route
              path="/vehicle/edit/:id"
              render={(routerProps) => {
                if (role !== 3)
                  return <Redirect from="/vehicle/edit/:id" to="/" />;
                return <VehicleEdit {...routerProps} />;
              }}
            />
            <Route
              path="/vehicle/detail/:id/reservation/payment"
              render={(routerProps) => {
                if (role === 3)
                  return (
                    <Redirect
                      from="/vehicle/detail/:id/reservation/payment"
                      to="/"
                    />
                  );
                return <Payment {...routerProps} />;
              }}
            />
            <Route
              path="/vehicle/detail/:id/reservation"
              render={(routerProps) => {
                if (role === 3)
                  return (
                    <Redirect from="/vehicle/detail/:id/reservation" to="/" />
                  );
                return <Reservation {...routerProps} />;
              }}
            />
            {/* <Route path="/vehicle/edit/:id" exact component={VehicleDetail} /> */}
            <Route path="/vehicle/detail/:id" exact component={VehicleDetail} />
            <Route path="/vehicle/:category" component={VehicleByCategory} />
            <Route path="/vehicle" exact component={Vehicle} />
          </Switch>
        </Router>
      </ReduxProvider>
    );
  }
}
