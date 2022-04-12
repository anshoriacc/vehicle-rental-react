import React from "react";
import "../assets/css/History.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HistoryCard from "../components/HistoryCard";

import { history } from "../utils/reservation";

export default class History extends React.Component {
  state = {
    token: "",
    historyData: [],
  };

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

    history(accessToken)
      .then((response) => {
        this.setState({
          historyData: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    // const URL = `${process.env.REACT_APP_HOST}/reservation`;
    // axios
    //   .get(URL, { headers: { "x-access-token": accessToken } })
    //   .then((response) => {
    //     const data = response.data.result.data;
    //     console.log(data);
    //     this.setState({
    //       historyData: data,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  render() {
    // const { isAuthed, accessToken } = this.state;
    return (
      <>
        <Header path={this.props.match.path} />
        <section className="content history-container">
          <section className="history-left">
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
            <section className="history-list">
              <HistoryCard historyData={this.state.historyData} />
            </section>
          </section>
          <section className="new-arrival">
            <h2>New Arrival</h2>
            <div className="new-arrival-card">
              <img
                src={require("../assets/images/lambhorgini.jpg")}
                alt="new-arrival"
              ></img>
              <div className="na-card-text">
                <p className="na-card-title">Lambhorgini</p>
                <p className="na-card-location">Jakarta</p>
              </div>
            </div>
            <div className="new-arrival-card">
              <img
                src={require("../assets/images/default-vehicle.jpg")}
                alt="new-arrival"
              ></img>
              <div className="na-card-text">
                <p className="na-card-title">White Jeep</p>
                <p className="na-card-location">tes</p>
              </div>
            </div>
          </section>
        </section>
        <Footer />
      </>
    );
  }
}
