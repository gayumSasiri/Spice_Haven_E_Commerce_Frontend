import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Footer } from "../components"; // Adjust the import based on your project structure

// Dummy product data
const dummyProducts = [
  {
    title: "Product 1",
    image: "path/to/image1.jpg",
    price: "20.00",
    quantity: 10,
  },
  {
    title: "Product 2",
    image: "path/to/image2.jpg",
    price: "25.00",
    quantity: 5,
  },
];

const UpdateProduct = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container my-4 flex-grow-1">
        <h2 className="text-center mb-4">Update Products</h2>
        <hr />
        {dummyProducts.length === 0 ? (
          <div className="text-center">
            <h4>No Products Available</h4>
            <Link to="/add-new-product" className="btn btn-primary">
              Add New Product
            </Link>
          </div>
        ) : (
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Product Title</th>
                <th>Product Image</th>
                <th>Product Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummyProducts.map((product, index) => (
                <tr key={index}>
                  <td>{product.title}</td>
                  <td>
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{ width: "50px", height: "50px", objectFit: "cover" }}
                    />
                  </td>
                  <td>LKR {product.price}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      defaultValue={product.quantity}
                      className="form-control"
                      style={{ width: "80px", display: "inline" }}
                    />
                  </td>
                  <td>
                    <button className="btn btn-warning btn-sm me-2">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="btn btn-danger btn-sm">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default UpdateProduct;
