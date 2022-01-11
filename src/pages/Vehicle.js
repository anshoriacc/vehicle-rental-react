import React from "react";
import axios from "axios";

import "../assets/css/Home.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import VehicleTypeCard from "../components/VehicleTypeCard";

export default class Vehicle extends React.Component {
  state = {
    accessToken: "",
    isAuthed: false,
    popularVehiclesData: "",
    bikeVehiclesData: "",
    carVehiclesData: "",
    motorbikeVehiclesData: "",
  };

//   componentDidUpdate() {
//     console.log(this.state);
//   }

  componentDidMount() {
    const accessToken = JSON.parse(
      localStorage.getItem("vehicle-rental-token")
    );
    if (accessToken) {
      this.setState({
        accessToken: accessToken,
        isAuthed: true,
      });
    }

    axios
      .get(`${process.env.REACT_APP_HOST}/vehicles/popular/?limit=4&page=1`)
      .then((response) => {
        this.setState({
          popularVehiclesData: response.data.result.data,
        });
        // console.log(response.data.result.data);
        // console.log(this.props);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`${process.env.REACT_APP_HOST}/vehicles/bike/?limit=4&page=1`)
      .then((response) => {
        this.setState({
          bikeVehiclesData: response.data.result.data,
        });
        // console.log(response.data.result.data);
        // console.log(this.props);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`${process.env.REACT_APP_HOST}/vehicles/car/?limit=4&page=1`)
      .then((response) => {
        this.setState({
          carVehiclesData: response.data.result.data,
        });
        // console.log(response.data.result.data);
        // console.log(this.props);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`${process.env.REACT_APP_HOST}/vehicles/motorbike/?limit=4&page=1`)
      .then((response) => {
        this.setState({
          motorbikeVehiclesData: response.data.result.data,
        });
        // console.log(response.data.result.data);
        // console.log(this.props);
      })
      .catch((error) => {
        console.log(error);
      });

    // this.setState({
    //   token: accessToken,
    //   isAuthed: true,
    // });
  }

  render() {
    const {
      popularVehiclesData,
      bikeVehiclesData,
      carVehiclesData,
      motorbikeVehiclesData,
      isAuthed,
      accessToken,
    } = this.state;

    return (
      <main>
        <Header
          isAuthed={isAuthed}
          accessToken={accessToken}
          path={this.props.match.path}
        />

        <section className="content">
          <VehicleTypeCard
            category="popular"
            vehiclesData={popularVehiclesData}
          />
          <VehicleTypeCard category="bike" vehiclesData={bikeVehiclesData} />
          <VehicleTypeCard category="car" vehiclesData={carVehiclesData} />
          <VehicleTypeCard
            category="motorbike"
            vehiclesData={motorbikeVehiclesData}
          />
        </section>
        <Footer />
      </main>
    );
  }
}
