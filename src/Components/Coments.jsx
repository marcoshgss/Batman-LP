import React from "react";
import "../assets/Coments.css";
import profile_1 from "../assets/profile-1.jpg"
import profile_2 from "../assets/profile-2.jpg"
import profile_3 from "../assets/profile-3.jpg"

const Coments = () => {
  return (
    <>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="profile">
            <img src={profile_1} />
            <div className="profile-description">
              <h3>Satish Patel</h3>
              <p>commentator</p>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="profile">
            <img src={profile_2} />
            <div className="profile-description">
              <h3>Bruce McKenzie</h3>
              <p>commentator</p>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="profile">
            <img src={profile_3} />
            <div className="profile-description">
              <h3>Iva Boyd</h3>
              <p>commentator</p>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="profile">
            <img src={profile_1} />
            <div className="profile-description">
              <h3>Satish Patel</h3>
              <p>commentator</p>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="profile">
            <img src={profile_2} />
            <div className="profile-description">
              <h3>Bruce McKenzie</h3>
              <p>commentator</p>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="profile">
            <img src={profile_3} />
            <div className="profile-description">
              <h3>Iva Boyd</h3>
              <p>commentator</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coments;
