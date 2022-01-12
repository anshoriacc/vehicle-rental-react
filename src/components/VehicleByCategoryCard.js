import React from "react";

function SectionTitle({ category }) {
  return (
    <section className="section-title">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
    </section>
  );
}

function Card({ vehiclesData, index }) {
  return (
    <div className={`popular-card${index + 1}`}>
      <div className="pc-text">
        <p className="pc-title">{vehiclesData.vehicle}</p>
        <p className="pc-location">{vehiclesData.location}</p>
      </div>
    </div>
  );
}

export default function VehicleByCategoryCard({ category, vehiclesData }) {
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
            />
          ))}
      </section>
    </>
  );
}