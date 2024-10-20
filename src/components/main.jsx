import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/spices.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter text-center">Unleash the True Essence of Flavor!</h5>
              <hr></hr>
              <p className="card-text fs-5 d-none d-sm-block text-center">
              Discover a world of rich aromas and vibrant tastes with our handpicked spices. 
              From the freshest herbs to the most exotic blends, we bring the finest ingredients 
              straight to your kitchen, ensuring every meal is a culinary masterpiece. Elevate your 
              cooking with the magic of authentic spices!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
