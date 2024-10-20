import React from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

const SuperUserPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Super User Dashboard</h1>
        <hr />
        <div className="row">
          {/* Admin Privileges */}
          <div className="col-md-6 mb-3 px-3">
            <div className="card h-100 shadow-sm hover-shadow">
              <div className="card-body">
                <h2 className="card-title text-center">Admin Privileges</h2>
                <hr />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-center">
                    <Link to="/adminpanel" className="btn btn-outline-dark">
                      Admin Panel
                    </Link>
                  </li>
                  <li className="list-group-item text-center">
                    <Link to="/contact" className="btn btn-outline-dark">
                      Are you like to be shareholder? Contact with us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Seller Privileges */}
          <div className="col-md-6 mb-3 px-3">
            <div className="card h-100 shadow-sm hover-shadow">
              <div className="card-body">
                <h2 className="card-title text-center">Seller Privileges</h2>
                <hr />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-center">
                    <Link to="/newproduct" className="btn btn-outline-dark">
                      Add New Product
                    </Link>
                  </li>
                  <li className="list-group-item text-center">
                    <Link to="/updateproduct/:id" className="btn btn-outline-dark">
                      Update Product
                    </Link>
                  </li>
                  <li className="list-group-item text-center">
                    <Link to="/orderdetails/:id" className="btn btn-outline-dark">
                      View Order Details
                    </Link>
                  </li>
                  <li className="list-group-item text-center">
                    <Link to="/contact" className="btn btn-outline-dark">
                      Are you like to earn with us? Contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SuperUserPage;
