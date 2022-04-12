import React from "react";
import axios from "axios";

import "../assets/css/Vehicle.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import VehicleTypeCard from "../components/VehicleTypeCard";
import { getVehicle4 } from "../utils/vehicle";

export default class Vehicle extends React.Component {
  state = {
    token: "",
    popularVehiclesData: [],
    bikeVehiclesData: [],
    carVehiclesData: [],
    motorbikeVehiclesData: [],
  };

  //   componentDidUpdate() {
  //     console.log(this.state);
  //   }

  componentDidUpdate() {
    console.log(this.state);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const accessToken = JSON.parse(
      localStorage.getItem("vehicle-rental-token")
    );
    if (accessToken) {
      this.setState({
        token: accessToken,
      });
    }

    axios
      .all([
        getVehicle4("popular"),
        getVehicle4("bike"),
        getVehicle4("car"),
        getVehicle4("motorbike"),
      ])
      .then(
        axios.spread((res1, res2, res3, res4) => {
          this.setState({
            popularVehiclesData: res1.data.data,
            bikeVehiclesData: res2.data.data,
            carVehiclesData: res3.data.data,
            motorbikeVehiclesData: res4.data.data,
          });
        })
      )
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const {
      popularVehiclesData,
      bikeVehiclesData,
      carVehiclesData,
      motorbikeVehiclesData,
    } = this.state;

    return (
      <main>
        <Header
          // isAuthed={isAuthed}
          // accessToken={accessToken}
          path={this.props.match.path}
        />

        <section className="content">
          <form className="search-bar-vehicle">
            <input
              name="keyword"
              type="search"
              className="search-input-vehicle"
              placeholder="Search..."
            />
            <button type="submit" className="search-button-vehicle">
              Search
            </button>
          </form>

          <VehicleTypeCard
            category="popular"
            vehiclesData={popularVehiclesData}
            history={this.props.history}
          />
          <VehicleTypeCard
            category="bike"
            vehiclesData={bikeVehiclesData}
            history={this.props.history}
          />
          <VehicleTypeCard
            category="car"
            vehiclesData={carVehiclesData}
            history={this.props.history}
          />
          <VehicleTypeCard
            category="motorbike"
            vehiclesData={motorbikeVehiclesData}
            history={this.props.history}
          />
        </section>
        <Footer />
      </main>
    );
  }
}
