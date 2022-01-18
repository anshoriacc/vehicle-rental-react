import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <section className="grid-footer">
        <div className="intro">
          <i className="logo"></i>
          <p className="mt-3">
            Plan and book your perfect trip with <br className="break" />
            expert advice, travel tips for vehicle <br className="break" />
            information from us.
          </p>
          <p className="mt-3">
            ©2020 Vehicle Rental Center. All rights reserved
          </p>
        </div>
        <div className="destinations">
          <p className="footer-title">Destinations</p>
          <p>
            <Link to="">Jakarta</Link>
          </p>
          <p>
            <Link to="">Bandung</Link>
          </p>
          <p>
            <Link to="">Yogyakarta</Link>
          </p>
          <p>
            <Link to="">Malang</Link>
          </p>
          <p>
            <Link to="">Surabaya</Link>
          </p>
        </div>
        <div className="vehicles">
          <p className="footer-title">Vehicle</p>
          <p>
            <Link to="/vehicle/popular">Popular</Link>
          </p>
          <p>
            <Link to="/vehicle/bike">Bike</Link>
          </p>
          <p>
            <Link to="/vehicle/car">Car</Link>
          </p>
          <p>
            <Link to="/vehicle/motorbike">Motorbike</Link>
          </p>
          <p>
            <Link to="">FAQs</Link>
          </p>
        </div>
        <div className="interests">
          <p className="footer-title">Interests</p>
          <p>
            <Link to="">Adventure Travel</Link>
          </p>
          <p>
            <Link to="">Art and Culture</Link>
          </p>
          <p>
            <Link to="">Wildlife and Nature</Link>
          </p>
          <p>
            <Link to="">Family Holidays</Link>
          </p>
          <p>
            <Link to="">Culinary Trip</Link>
          </p>
        </div>
      </section>
      <hr className="line" />
      <section className="social">
        <Link to="">
          <i className="icon icon-twitter" alt="twitter"></i>twitter
        </Link>
        <Link to="">
          <i className="icon icon-facebook" alt="facebook"></i>facebook
        </Link>
        <Link to="">
          <i className="icon icon-instagram" alt="instagram"></i>instagram
        </Link>
        <Link to="">
          <i className="icon icon-linkedin" alt="linkedin"></i>linkedin
        </Link>
        <Link to="">
          <i className="icon icon-youtube" alt="youtube"></i>youtube
        </Link>
      </section>
    </footer>
  );
};

export default Footer;
