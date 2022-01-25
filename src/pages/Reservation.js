import React, { Component } from "react";
import "../assets/css/Detail.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ReservationContent from "../components/ReservationContent";
import { makeReservation } from "../utils/reservation";
import { getVehicleDetail } from "../utils/vehicle";

export default class Reservation extends Component {
  state = {
    //   userData: { token: "", name: "", role: 0, photo: "" },
    token: "",
    vehiclesData: "",
    counter: 0,
  };

  countDecrement = () => {
    const number = this.state.counter;
    if (number > 0) this.setState({ counter: number - 1 });
  };

  countIncrement = () => {
    const number = this.state.counter;
    if (number < this.state.vehiclesData.stock)
      this.setState({ counter: number + 1 });
  };

  componentDidUpdate() {
    console.log(this.state.vehiclesData);
  }

  componentDidMount() {
    const accessToken = JSON.parse(
      localStorage.getItem("vehicle-rental-token")
    );

    if (accessToken) {
      this.setState({
        userData: { token: accessToken },
      });
    }

    // console.log(this.props.match.params.id);
    getVehicleDetail(this.props.match.params.id)
      .then((response) => {
        console.log(response);
        this.setState({
          vehiclesData: response.data.result.data[0],
        });
        // console.log(response.data.result.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });

    makeReservation(accessToken)
      .then((response) => {
        console.log("berhasil");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <main>
        <Header />
        <ReservationContent
          vehiclesData={this.state.vehiclesData}
          counter={this.state.counter}
          decrement={this.countDecrement}
          increment={this.countIncrement}
          history={this.props.history}
        />
        <Footer />
      </main>
    );
  }
}
