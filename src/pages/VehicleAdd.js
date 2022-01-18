import React, { Component } from "react";
import "../assets/css/VehicleAdd.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import VehicleAddContent from "../components/VehicleAddContent";
import { addVehicle } from "../utils/vehicle";

export default class VehicleAdd extends Component {
  state = {
    userData: { token: "", name: "", role: 0, photo: "" },
    counter: 0,
  };

  countDecrement = () => {
    const number = this.state.counter;
    if (number > 0) this.setState({ counter: number - 1 });
  };

  countIncrement = () => {
    const number = this.state.counter;
    this.setState({ counter: number + 1 });
  };

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
    // getVehicleDetail(this.props.match.params.id)
    //   .then((response) => {
    //     this.setState({
    //       vehiclesData: response.data.result.data[0],
    //     });
    //     console.log(response.data.result.data[0]);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    addVehicle()
      .then((response) => {})
      .catch((error) => {});
  }

  render() {
    return (
      <main>
        <Header />
        <VehicleAddContent
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
