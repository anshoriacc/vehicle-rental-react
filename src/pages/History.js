import React from "react";
import axios from "axios";
import "../assets/css/Profile.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Profile extends React.Component {
  state = {
    accessToken: "",
    isAuthed: false,
    historyData: "",
  };

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

    const URL = `${process.env.REACT_APP_HOST}/reservation`;
    axios
      .get(URL, { headers: { "x-access-token": accessToken } })
      .then((response) => {
        const data = response.data.result.data;
        console.log(data);
        this.setState({
          historyData: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { isAuthed, accessToken } = this.state;
    return (
      <>
        <Header
          isAuthed={isAuthed}
          accessToken={accessToken}
          path={this.props.match.path}
        />
        <section className="content"></section>
        <Footer />
      </>
    );
  }
}
