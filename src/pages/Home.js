import React from "react";
import axios from "axios";

import "../assets/css/Home.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import VehicleTypeCard from "../components/VehicleTypeCard";
import Testimony from "../components/Testimony";

export default class Home extends React.Component {
  state = {
    accessToken: "",
    isAuthed: false,
    vehiclesData: "",
  };

  componentDidMount() {
    const accessToken = JSON.parse(
      localStorage.getItem("vehicle-rental-token")
    );
    // console.log(accessToken);
    if (accessToken) {
      this.setState({
        accessToken: accessToken,
        isAuthed: true,
      });
      console.log(1)
    }

    axios
      .get(`${process.env.REACT_APP_HOST}/vehicles/popular/?limit=4&page=1`)
      .then((response) => {
        this.setState({
          vehiclesData: response.data.result.data,
        });
        console.log(2)
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
        <section className="finder-container">
          <section className="finder-content">
            <h1>
              <p>Explore and</p>
              <p>Travel</p>
            </h1>
            <p>Vehicle Finder</p>
            <hr className="finder-line" />
            <section className="form">
              <select className="input-form" name="location" id="location">
                <option value="0">Location</option>
                <option value="1">Jakarta</option>
                <option value="2">Bandung</option>
                <option value="3">Yogyakarta</option>
                <option value="4">Malang</option>
                <option value="5">Surabaya</option>
              </select>
              <select className="input-form" name="type" id="type">
                <option value="type">Type</option>
                <option value="cars">Cars</option>
                <option value="motorbike">Motorbike</option>
                <option value="bike">Bike</option>
              </select>
              <select className="input-form" name="payment" id="payment">
                <option value="payment">Payment</option>
                <option value="transfer">Transfer</option>
                <option value="cash">Cash</option>
              </select>
              <input className="input-form" type="date" id="date" name="date" />
              <button className="btn btn-warning button-explore">
                Explore
              </button>
            </section>
          </section>
        </section>
        <section className="content">
          
          <VehicleTypeCard category="popular" vehiclesData={vehiclesData} />
          <h2 className="section-title">Testimonials</h2>
          <Testimony />
        </section>
        <Footer />
      </main>
    );
  }
}
