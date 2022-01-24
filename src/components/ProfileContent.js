import React from "react";

import moment from "moment";

function FormUser({ userData, history }) {
  return (
    <section className="content">
      <form onSubmit={""}>
        <h2 className="h2-page-title">
          {history.location.pathname === "/profile"
            ? "Profile"
            : "Edit Profile"}
        </h2>
        <section className="profile text-center">
          <div className="profile-picture-container">
            <img
              src={
                !userData.photo
                  ? require("../assets/images/default.jpg")
                  : `${process.env.REACT_APP_HOST}/${userData.photo}`
              }
              className="profile-picture"
              alt=""
            />
            <div className="edit-profile-picture">
              <i className="icon-edit"></i>
            </div>
          </div>
          <h1>{userData.name}</h1>
          <p className="info">{userData.email}</p>
          <p className="info">{userData.phone}</p>
          <p className="info">Has been active since 2021</p>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              name="gender"
              type="radio"
              id="male"
              value="male"
              disabled={history.location.pathname === "/profile" ? true : false}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              name="gender"
              type="radio"
              id="female"
              value="female"
              disabled={history.location.pathname === "/profile" ? true : false}
              // checked
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </section>
        <p className="section-title-2">Contacts</p>
        <section className="contact">
          <div className="form-group mb-4">
            <label htmlFor="email">Email address:</label>
            <input
              name="email"
              type="email"
              className="profile-custom-form"
              id="email"
              defaultValue={userData.email}
              disabled={history.location.pathname === "/profile" ? true : false}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="address">Address:</label>
            <input
              name="address"
              type="text"
              className="profile-custom-form"
              id="address"
              defaultValue={userData.address}
              disabled={history.location.pathname === "/profile" ? true : false}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="phone">Mobile number:</label>
            <input
              name="phone"
              type="phone"
              className="profile-custom-form"
              id="phone"
              defaultValue={userData.phone}
              disabled={history.location.pathname === "/profile" ? true : false}
            />
          </div>
        </section>
        <p className="section-title-2">Identity</p>
        <section className="identity">
          <div className="row mb-5">
            <div className="col">
              <label htmlFor="display-name">Display name:</label>
              <input
                name="name"
                type="text"
                className="profile-custom-form"
                id="display-name"
                defaultValue={userData.name}
                disabled={
                  history.location.pathname === "/profile" ? true : false
                }
              />
            </div>
            <div className="col">
              <label htmlFor="date">DD/MM/YY:</label>
              <input
                name="dob"
                type="date"
                className="profile-custom-form"
                id="date"
                // value={userData.dob.slice(0, 10)}
                defaultValue={moment(userData.dob).format("YYYY-MM-DD")}
                disabled={
                  history.location.pathname === "/profile" ? true : false
                }
              />
            </div>
          </div>
        </section>
        <section className="action">
          {history.location.pathname === "/profile" ? (
            <button
              onClick={() => history.push("/profile/edit")}
              className="btn btn-warning action-button"
            >
              Edit Profile
            </button>
          ) : (
            <button type="submit" className="btn btn-warning action-button">
              Save Change
            </button>
          )}

          <button
            className="btn btn-dark text-warning action-button"
            onClick={() => history.push("/profile/editpassword")}
          >
            Edit Password
          </button>
          <button className="btn btn-light action-button">Cancel</button>
        </section>
      </form>
    </section>
  );
}

export default function ProfileContent({ isAuthed, userData, history }) {
  // if (!isAuthed) return <Redirect to="/" />;
  return <FormUser userData={userData} history={history} />;
}
