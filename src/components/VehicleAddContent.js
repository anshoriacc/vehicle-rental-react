import React from "react";
import { Link } from "react-router-dom";

export default function VehicleDetailContent({
  counter,
  decrement,
  increment,
  history,
}) {
  // console.log(counter);
  return (
    <>
      <section className="content">
        <h2>Add vehicle</h2>
        <section className="vehicle">
          <section className="add-photo">
            <img src={require("../assets/images/add-photo.jpg")}></img>
          </section>
          <section className="add-detail">
            <input
              type="text"
              className="add-custom-form"
              id="display-name"
              name="name"
              placeholder="Vehicle name"
            />
            <input
              type="text"
              className="add-custom-form"
              id="location"
              name="location"
              placeholder="Location"
            />
            <input
              type="text"
              className="add-custom-form"
              id="Description"
              name="description"
              placeholder="Description"
            />
            <label htmlFor="price">Price</label>
            <input
              type="text"
              className="add-custom-form"
              id="price"
              name="price"
              placeholder="Price"
            />
            <label htmlFor="location-add">Location</label>
            <select
              className="input-form form-size"
              name="location"
              id="location-add"
            >
              <option value="0">Location</option>
              <option value="1">Jakarta</option>
              <option value="2">Bandung</option>
              <option value="3">Yogyakarta</option>
              <option value="4">Malang</option>
              <option value="5">Surabaya</option>
            </select>
            <div className="count mt-3">
              <button
                className="btn btn-light count-button"
                onClick={decrement}
              >
                -
              </button>
              <p>{counter}</p>
              <button
                className="btn btn-warning count-button"
                onClick={increment}
              >
                +
              </button>
            </div>
          </section>
        </section>
        <section className="add-vehicle-action">
          <button className="btn btn-dark text-warning button add-action-button">
            Add item to
          </button>
          <button
            className="btn btn-warning button add-action-button"
            onClick={() => history.push()}
          >
            Save item
          </button>
        </section>
      </section>
    </>
  );
}
