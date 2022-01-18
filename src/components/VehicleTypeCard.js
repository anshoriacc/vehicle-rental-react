import React from "react";
import { Link } from "react-router-dom";

function SectionTitle({ category }) {
  return (
    <section className="section-title">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <Link to={`/vehicle/${category}`}>View all {">"}</Link>
    </section>
  );
}

function Card({ vehiclesData, index, history }) {
  return (
    <div
      className={`popular-card${index + 1}`}
      style={{
        backgroundImage: `url("https://teja9.kuikr.com/images/car/default-cars.jpeg")`,
      }}
      onClick={() => history.push(`/vehicle/detail/${vehiclesData.id}`)}
    >
      <div className="pc-text">
        <p className="pc-title">{vehiclesData.vehicle}</p>
        <p className="pc-location">{vehiclesData.location}</p>
      </div>
    </div>
  );
}

function CardEmpty() {
  // const arr = [1, 2, 3, 4];
  return (
    <>
      {/* {arr.map(()=>( */}
      <div className={`popular-card animate`}></div>
      <div className={`popular-card animate`}></div>
      <div className={`popular-card animate`}></div>
      <div className={`popular-card animate`}></div>
      {/* // ))} */}
      {/* <div className={`popular-card animate`}></div>
      <div className={`popular-card animate`}></div>
      <div className={`popular-card animate`}></div>
      <div className={`popular-card animate`}></div> */}
    </>
  );
}

export default function VehicleTypeCard({ category, vehiclesData, history }) {
  return (
    <>
      <SectionTitle category={category} />
      <section className="popular">
        {vehiclesData.length > 0 ? (
          vehiclesData.map((vehicle, idx) => (
            <Card
              vehiclesData={vehicle}
              key={vehicle.id}
              index={idx}
              history={history}
            />
          ))
        ) : (
          <CardEmpty />
        )}
      </section>
    </>
  );
}
