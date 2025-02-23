import React from "react";
import '../assets/Photos.css'


export const Photos = () => {
  return (
    <>
      <div id="photos" className="wrapper">
        <div className="container">
          <input className="inputs" type="radio" name="slide" id="c1" checked />
          <label htmlFor="c1" className="card-1">
            <div className="row">
              <div className="icon">1</div>
              <div className="description">
                <h4>Winter</h4>
                <p>Winter has so much to offer - creative activities</p>
              </div>
            </div>
          </label>
          <input className="inputs" type="radio" name="slide" id="c2" checked />
          <label htmlFor="c2" className="card-2">
            <div className="row">
              <div className="icon">2</div>
              <div className="description">
                <h4>Winter</h4>
                <p>Winter has so much to offer - creative activities</p>
              </div>
            </div>
          </label>
          <input className="inputs" type="radio" name="slide" id="c3" checked />
          <label htmlFor="c3" className="card-3">
            <div className="row">
              <div className="icon">3</div>
              <div className="description">
                <h4>Winter</h4>
                <p>Winter has so much to offer - creative activities</p>
              </div>
            </div>
          </label>
          <input className="inputs" type="radio" name="slide" id="c4" checked />
          <label htmlFor="c4" className="card-4">
            <div className="row">
              <div className="icon">4</div>
              <div className="description">
                <h4>Winter</h4>
                <p>Winter has so much to offer - creative activities</p>
              </div>
            </div>
          </label>
        </div>
      </div>
    </>
  );
};

export default Photos;
