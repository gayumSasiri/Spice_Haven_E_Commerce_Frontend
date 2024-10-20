import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        At Spice Haven, we are passionate about bringing the finest spices and flavor-rich products 
        from around the world to your kitchen. Our journey began with a simple mission: to offer 
        high-quality, authentic spices that enhance every meal with their natural aroma and taste.
        </p>
        <p className="lead text-center">We work closely with trusted farmers and suppliers to source the freshest ingredients, 
          ensuring that our products meet the highest standards of purity and quality. From everyday 
          essentials to exotic blends, we cater to both home cooks and professional chefs who seek 
          to elevate their dishes with bold, vibrant flavors.
        </p>
        <p className="lead text-center">Our commitment to sustainability means that we prioritize eco-friendly practices in 
          sourcing and packaging, so you can enjoy your favorite spices while supporting a healthier 
          planet. Whether you're a culinary enthusiast or just starting your cooking journey, we're 
          here to spice up your kitchen with products that bring joy to every dish.
        </p>
        <p className="lead text-center">Welcome to Spice Haven—where the world of flavors comes alive!
        </p>

        <h2 className="text-center py-4">Our Product Categories</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100 shadow-sm hover-shadow">
              <img className="card-img-top img-fluid" src="./assets/spiceCategoryImg/organicSpices.jpg" alt="Organic Spices" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Organic Spices</h5>
                <p className="card-text text-center">Sourced from the finest organic farms to bring you pure and natural flavor for every dish.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100 shadow-sm hover-shadow">
              <img className="card-img-top img-fluid" src="./assets/spiceCategoryImg/veganSpices.jpg" alt="Vegan Spices" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Vegan Spices</h5>
                <p className="card-text text-center">Carefully selected plant-based spices, perfect for enhancing your vegan dishes with rich, natural flavors.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100 shadow-sm hover-shadow">
              <img className="card-img-top img-fluid" src="./assets/spiceCategoryImg/exoticSpices.jpg" alt="Exotic Spices" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Exotic Spices</h5>
                <p className="card-text text-center">Explore unique and rare spices from around the world, adding an adventurous twist to your culinary creations.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100 shadow-sm hover-shadow">
              <img className="card-img-top img-fluid" src="./assets/spiceCategoryImg/gultenFreeSpices.jpg" alt="Gluten-Free Spices" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Gluten-Free Spices</h5>
                <p className="card-text text-center ">Enjoy a selection of spices that are free from gluten, perfect for those with dietary restrictions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage