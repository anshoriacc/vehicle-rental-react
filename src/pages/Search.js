import React, { Component } from "react";

import "../assets/css/Search.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import SearchVehicleCard from "../components/SearchVehicleCard";

import { searchVehicle } from "../utils/vehicle";

export default class Search extends Component {
  state = {
    token: "",
    vehiclesData: "",
  };

componentDidUpdate(){
  console.log(this.state.vehiclesData);
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

    searchVehicle(this.props.location.search)
      .then((response) => {
        this.setState({
          vehiclesData: response.data.result.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { vehiclesData } = this.state;
    return (
      <>
        <Header />
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
          <SearchVehicleCard
            vehiclesData={vehiclesData}
            history={this.props.history}
          />
        </section>
        <Footer />
      </>
    );
  }
}
