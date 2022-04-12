import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../assets/css/Home.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import VehicleTypeCard from "../components/VehicleTypeCard";
import Testimony from "../components/Testimony";

import { getVehicle4 } from "../utils/vehicle";

class Home extends React.Component {
  state = {
    token: "",
    role: 0,
    vehiclesData: "",
  };

  exploreHandler = (e) => {
    e.preventDefault();
    const body = {
      keyword: e.target.keyword.value,
      location: e.target.location.value,
    };
    this.props.history.push(`/search?keyword=${body.keyword}&location=${body.location}`);
  };

  componentDidMount() {
    const accessToken = JSON.parse(
      localStorage.getItem("vehicle-rental-token")
    );
    // console.log(userData);

    if (accessToken) {
      this.setState({ token: accessToken });
    }

    getVehicle4("popular")
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
    const role = JSON.parse(localStorage.getItem("vehicle-rental-role"));

    return (
      <main>
        <Header
          // isAuthed={isAuthed}
          // accessToken={accessToken}
          path={this.props.match.path}
        />
        <section className="finder-container">
          <section className="finder-content">
            <h1 id="explore">
              <p>Explore and</p>
              <p>Travel</p>
            </h1>
            <p>Vehicle Finder</p>
            <hr className="finder-line" />
            <form onSubmit={this.exploreHandler} className="form-home-search">
              <input
                className="input-form form-size"
                type="text"
                id="keyword"
                name="keyword"
                placeholder="Vehicle keyword"
              />
              <select
                className="input-form form-size"
                name="location"
                id="location"
              >
                <option value="" disabled selected hidden>
                  Location
                </option>
                <option value="1">Jakarta</option>
                <option value="2">Bandung</option>
                <option value="3">Yogyakarta</option>
                <option value="4">Malang</option>
                <option value="5">Surabaya</option>
              </select>
              <input
                className="input-form form-size"
                type="date"
                id="date"
                // name="date"
              />
              <button
                type="submit"
                className="btn btn-warning button-explore form-size"
              >
                Explore
              </button>
            </form>
          </section>
        </section>
        <section className="content">
          <VehicleTypeCard
            category="popular"
            vehiclesData={vehiclesData}
            history={this.props.history}
          />
          {role === 3 && (
            <Link to="/vehicle/add">
              <button className="btn btn-dark text-warning add-vehicle fw-900">
                Add Vehicle
              </button>
            </Link>
          )}
          <h2 className="section-title">Testimonials</h2>
          <Testimony />
        </section>
        <Footer />
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Home);
