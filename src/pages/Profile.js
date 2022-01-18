import React from "react";
import axios from "axios";
import "../assets/css/Profile.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileContent from "../components/ProfileContent";

export default class Profile extends React.Component {
  state = {
    accessToken: "",
    isAuthed: false,
    userData: {},
    defaultProfilePicture: require("../assets/images/default.jpg"),
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

    const URL = `${process.env.REACT_APP_HOST}/users/detail`;
    axios
      .get(URL, { headers: { "x-access-token": accessToken } })
      .then((response) => {
        const data = response.data.result.data[0];
        console.log(data);
        this.setState({
          userData: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { userData, defaultProfilePicture } = this.state;
    console.log(defaultProfilePicture);
    return (
      <main>
        <Header
        // isAuthed={isAuthed}
        // accessToken={accessToken}
        // path={this.props.match.path}
        />
        <ProfileContent
          // isAuthed={isAuthed}
          userData={userData}
          defaultProfilePicture={defaultProfilePicture}
          history={this.props.history}
        />
        <Footer />
      </main>
    );
  }
}
