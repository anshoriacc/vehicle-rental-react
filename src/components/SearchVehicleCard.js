import React from "react";

function Card({ vehiclesData, history }) {
  //   const photo = JSON.parse(vehiclesData.photo);

  return (
    <div
      className={`popular-card`}
      onClick={() => history.push(`/vehicle/detail/${vehiclesData.id}`)}
    >
      <img
        src={
          vehiclesData.photo
            ? `${process.env.REACT_APP_HOST}/${vehiclesData.photo[0]}`
            : require("../assets/images/default-vehicle.jpg")
        }
        alt="vehicle"
      ></img>
      <div className="pc-text">
        <p className="pc-title">{vehiclesData.kendaraan}</p>
        <p className="pc-location">{vehiclesData.lokasi}</p>
      </div>
    </div>
  );
}

export default function SearchVehicleCard({ vehiclesData, history }) {
  return (
    <>
      <section className="section-title">
        <h2>Search</h2>
      </section>
      <section className="popular-full">
        {vehiclesData.length > 0 &&
          vehiclesData.map((vehicle, idx) => (
            <Card
              vehiclesData={vehicle}
              key={idx}
              index={idx}
              history={history}
            />
          ))}
      </section>
    </>
  );
}
