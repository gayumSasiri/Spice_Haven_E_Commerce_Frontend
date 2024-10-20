import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "../components"; 

// Dummy order data
const dummyOrders = [
  {
    orderId: "ORD001",
    date: "2024-10-15",
    customerName: "John Doe",
    customerAddress: "123 Main St, Anytown",
    deliveryStatus: "Processing",
  },
  {
    orderId: "ORD002",
    date: "2024-10-16",
    customerName: "Jane Smith",
    customerAddress: "456 Elm St, Othertown",
    deliveryStatus: "Shipped",
  },
];

const OrderDetails = () => {
  // State to manage the delivery status
  const [orders, setOrders] = useState(dummyOrders);

  const toggleDeliveryStatus = (index) => {
    const updatedOrders = [...orders];
    updatedOrders[index].deliveryStatus =
      updatedOrders[index].deliveryStatus === "Processing"
        ? "Shipped"
        : "Processing";
    setOrders(updatedOrders);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container my-4 flex-grow-1">
        <h2 className="text-center mb-4">Order Details</h2>
        <hr />
        {orders.length === 0 ? (
          <div className="text-center">
            <h4>No Orders Available</h4>
            <Link to="/" className="btn btn-primary">
              Home
            </Link>
          </div>
        ) : (
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Customer Name</th>
                <th>Customer Address</th>
                <th>Delivery Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.orderId}</td>
                  <td>{order.date}</td>
                  <td>{order.customerName}</td>
                  <td>{order.customerAddress}</td>
                  <td>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={order.deliveryStatus === "Shipped"}
                        onChange={() => toggleDeliveryStatus(index)}
                      />
                      <span className="slider"></span>
                    </label>
                    <span className="ms-2">
                      {order.deliveryStatus}
                    </span>
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

export default OrderDetails;
