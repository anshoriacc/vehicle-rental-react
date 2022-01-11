import React from "react";

export default function Testimony() {
  return (
    <section className="testimony-container">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade testimony bg-light"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item testimony-card active">
            <div className="testimony-photo">
              <img
                src={require("../assets/images/edward.jpg")}
                alt="edward"
              />
            </div>
            <div className="testimony-detail">
              <p>
                <img
                  src={require("../assets/stars.png")}
                  style={{ height: "1.5rem" }}
                  alt="stars"
                />
              </p>
              <p className="testimony-comment">
                ”It was the right decision to rent vehicle here, I spent less
                money and enjoy the trip. It was an amazing experience to have a
                ride for wildlife trip!”
              </p>
              <div>
                <p className="testimony-user">Edward Newgate</p>
                <p className="testimony-user-job">Founder Circle</p>
              </div>
            </div>
          </div>
          <div className="carousel-item testimony-card">
            <div className="testimony-photo"><img
                src={require("../assets/images/samantha.jpg")}
                alt="samantha"
              /></div>
            <div className="testimony-detail">
              <p>
                <img
                  src={require("../assets/stars.png")}
                  style={{ height: "1.5rem" }}
                  alt="stars"
                />
              </p>
              <p className="testimony-comment">
                ”Best place to rent vehicles!”
              </p>
              <div>
                <p className="testimony-user">Samantha Doe</p>
                <p className="testimony-user-job">CEO Lupabapak</p>
              </div>
            </div>
          </div>
          <div className="carousel-item testimony-card">
            <div className="testimony-photo"><img
                src={require("../assets/images/martin.jpg")}
                alt="martin"
              /></div>
            <div className="testimony-detail">
              <p>
                <img
                  src={require("../assets/stars.png")}
                  style={{ height: "1.5rem" }}
                  alt="stars"
                />
              </p>
              <p className="testimony-comment">
                ”Top, top, top vehicle-rental web. Very enjoyable to use.”
              </p>
              <div>
                <p className="testimony-user">Martin Flick</p>
                <p className="testimony-user-job">CTO Googol</p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
