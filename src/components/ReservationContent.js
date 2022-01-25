import React from "react";
// import { Link } from "react-router-dom";

import { makeReservation } from "../utils/reservation";

export default function ReservationContent({
  token,
  params,
  vehiclesData,
  counter,
  decrement,
  increment,
  history,
}) {
  const bookHandler = (e) => {
    e.preventDefault();
    const body = {
      vehicle_id: params,
      quantity: counter,
      payment: "transfer",
      start_date: e.target.start_date.value,
      return_date: e.target.return_date.value,
      total: counter * vehiclesData.price,
    };

    console.log(body);
    makeReservation(token, body)
      .then((response) => {
        console.log("berhasil", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const photo = JSON.parse(vehiclesData.photo);
  // console.log(photo);
  return (
    <>
      <section className="content">
        <h2>Reservation</h2>
        <form onSubmit={bookHandler}>
          <section className="vehicle">
            <section className="vehicle-photo">
              <img
                src={
                  vehiclesData.photo
                    ? `${process.env.REACT_APP_HOST}/${vehiclesData.photo[0]}`
                    : require("../assets/images/default-vehicle.jpg")
                }
                id="vehicle-photo1"
                alt="vehiclePhoto"
              ></img>
            </section>
            <section className="detail">
              <h1>{vehiclesData.name}</h1>
              <h2 className="location">
                {/* {vehiclesData.location.charAt(0).toUpperCase() +
                vehiclesData.location.slice(1)} */}
                {vehiclesData.location}
              </h2>
              <p className="payment">No Prepayment</p>
              {/* <p className="info">
              Type:{" "}
              <Link
              to={`/vehicle/${vehiclesData.category}`}
              style={{ color: "inherit" }}
              >
              {vehiclesData.category}
              </Link>
            </p> */}
              {/* <p className="info">Reservation before 2 PM</p> */}
              {/* <p className="price">Rp. {vehiclesData.price}/day</p> */}
              <div className="count">
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
              <div className="reservation-date">
                <input
                  name="start_date"
                  className="input-form form-size"
                  type="date"
                  // id="date"
                  // name="date"
                />
                <input
                  name="return_date"
                  className="input-form form-size"
                  type="date"
                  // id="date"
                  // name="date"
                />
              </div>
            </section>
          </section>
          <button
            type="submit"
            className="btn btn-warning button action-button w-100"
            // onClick={bookHandler}
          >
            {`Pay now: Rp. ${counter * vehiclesData.price}`}
          </button>
        </form>
      </section>
    </>
  );
}
