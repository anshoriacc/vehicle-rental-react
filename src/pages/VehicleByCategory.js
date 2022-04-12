import React from "react";

import "../assets/css/VehicleByCategory.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import VehicleByCategoryCard from "../components/VehicleByCategoryCard";
import { getVehicle16 } from "../utils/vehicle";

export default class VehicleByCategory extends React.Component {
  state = {
    accessToken: "",
    vehiclesData: "",
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    const accessToken = JSON.parse(
      localStorage.getItem("vehicle-rental-token")
    );
    if (accessToken) {
      this.setState({
        accessToken: accessToken,
      });
    }

    const { category } = this.props.match.params;

    getVehicle16(category, 1)
      .then((response) => {
        this.setState({
          vehiclesData: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { vehiclesData } = this.state;
    const { category } = this.props.match.params;

    return (
      <main>
        <Header
        // isAuthed={isAuthed}
        // accessToken={accessToken}
        // path={this.props.match.path}
        />

        <section className="content">
          <VehicleByCategoryCard
            category={category}
            vehiclesData={vehiclesData}
            history={this.props.history}
          />
        </section>
        <Footer />
      </main>
    );
  }
}
