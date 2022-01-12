import React from "react";
// import { Redirect } from "react-router-dom";

function FormUser({ userData, defaultProfilePicture }) {
  // console.log(defaultProfilePicture);
  return (
    <section className="content">
      <h2 className="h2-page-title">Profile</h2>
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
        <h1>Samantha Doe</h1>
        <p className="info">{userData.email}</p>
        <p className="info">{userData.phone}</p>
        <p className="info">Has been active since 2021</p>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            id="male"
            value="male"
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            id="female"
            value="female"
            checked
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
            type="email"
            className="profile-custom-form"
            id="email"
            value={userData.email}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            className="profile-custom-form"
            id="address"
            value={userData.address}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="phone">Mobile number:</label>
          <input
            type="phone"
            className="profile-custom-form"
            id="phone"
            value={userData.phone}
          />
        </div>
      </section>
      <p className="section-title-2">Identity</p>
      <section className="identity">
        <div className="row mb-5">
          <div className="col">
            <label htmlFor="display-name">Display name:</label>
            <input
              type="text"
              className="profile-custom-form"
              id="display-name"
              value={userData.name}
            />
          </div>
          <div className="col">
            <label htmlFor="date">DD/MM/YY:</label>
            <input
              type="date"
              className="profile-custom-form"
              id="date"
              value={userData.dob}
            />
          </div>
        </div>
      </section>
      <section className="action">
        <button className="btn btn-warning action-button">Save Change</button>
        <button className="btn btn-dark text-warning action-button">
          Edit Password
        </button>
        <button className="btn btn-light action-button">Cancel</button>
      </section>
    </section>
  );
}

export default function ProfileContent({ isAuthed, userData }) {
  // if (!isAuthed) return <Redirect to="/" />;
  return <FormUser userData={userData} />;
}
