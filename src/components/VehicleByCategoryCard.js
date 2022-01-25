import React from "react";

function SectionTitle({ category }) {
  return (
    <section className="section-title">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
    </section>
  );
}

function Card({ vehiclesData, history }) {
  const photo = JSON.parse(vehiclesData.photo);

  return (
    <div
      className={`popular-card`}
      onClick={() => history.push(`/vehicle/detail/${vehiclesData.id}`)}
    >
      <img
        src={
          photo
            ? `${process.env.REACT_APP_HOST}/${photo[0]}`
            : require("../assets/images/default-vehicle.jpg")
        }
        alt="vehicle"
      ></img>
      <div className="pc-text">
        <p className="pc-title">{vehiclesData.vehicle}</p>
        <p className="pc-location">{vehiclesData.location}</p>
      </div>
    </div>
  );
}

export default function VehicleByCategoryCard({
  category,
  vehiclesData,
  history,
}) {
  return (
    <>
      <SectionTitle category={category} />
      <section className="popular-full">
        {vehiclesData.length > 0 &&
          vehiclesData.map((vehicle, idx) => (
            <Card
              category={category}
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
