import React from "react";
import { Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={process.env.PUBLIC_URL + '/assets/images/kathak-dance.jpg'} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={process.env.PUBLIC_URL + '/assets/images/kathak-dance1.jpg'} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={process.env.PUBLIC_URL + '/assets/images/kathak-dance2.jpg'} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Welcome;
