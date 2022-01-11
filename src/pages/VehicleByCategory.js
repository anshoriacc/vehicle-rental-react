import React from "react";
import axios from "axios";

import "../assets/css/VehicleByCategory.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import VehicleByCategoryCard from "../components/VehicleByCategoryCard";

export default class VehicleByCategory extends React.Component {
  state = {
    accessToken: "",
    isAuthed: false,
    vehiclesData: "",
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

    const { category } = this.props.match.params;
    axios
      .get(`${process.env.REACT_APP_HOST}/vehicles/${category}/?limit=16&page=1`)
      .then((response) => {
        this.setState({
          vehiclesData: response.data.result.data,
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
    const { vehiclesData, isAuthed, accessToken } = this.state;

    return (
      <main>
        <Header
          isAuthed={isAuthed}
          accessToken={accessToken}
          path={this.props.match.path}
        />

        <section className="content">
          <VehicleByCategoryCard
            category="popular"
            vehiclesData={vehiclesData}
          />
        </section>
        <Footer />
      </main>
    );
  }
}
