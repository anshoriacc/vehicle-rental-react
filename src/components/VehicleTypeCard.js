import React from "react";
import { Link, Redirect } from "react-router-dom";

const detailVehicle = ({ vehiclesData }) => {
  return <Redirect to={`/vehicle/detail/${vehiclesData.id}`} />;
};

function SectionTitle({ category }) {
  return (
    <section className="section-title">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <Link to={`/vehicle/${category}`}>View all {">"}</Link>
    </section>
  );
}

function Card({ vehiclesData, index }) {
  return (
    <div className={`popular-card${index + 1}`} onClick={detailVehicle}>
      <div className="pc-text">
        <p className="pc-title">{vehiclesData.vehicle}</p>
        <p className="pc-location">{vehiclesData.location}</p>
      </div>
    </div>
  );
}

export default function VehicleTypeCard({ category, vehiclesData }) {
  return (
    <>
      <SectionTitle category={category} />
      <section className="popular">
        {vehiclesData.length > 0 &&
          vehiclesData.map((vehicle, idx) => (
            <Card
              category={category}
              vehiclesData={vehicle}
              key={idx}
              index={idx}
            />
          ))}
      </section>
    </>
  );
}
