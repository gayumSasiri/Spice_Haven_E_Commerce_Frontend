import React, { useState } from "react";
import { Navbar, Footer } from "../components"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Dummy analytics data
const analyticsData = [
    { name: 'Buyers', count: 20 },
    { name: 'Sellers', count: 14 },
    { name: 'Orders', count: 32 },
    { name: 'Products', count: 100 },
];

// Dummy data
const dummyUsers = [
  { id: 1, username: "john_doe", email: "john@example.com", role: "Buyer" },
  { id: 2, username: "jane_smith", email: "jane@example.com", role: "Seller" },
];

const dummyOrders = [
  {
    orderId: "ORD001",
    date: "2024-10-15",
    customerName: "John Doe",
    supplierName: "Supplier A",
    deliveryStatus: "Processing",
    paymentType: "Cash on Delivery",
  },
  {
    orderId: "ORD002",
    date: "2024-10-16",
    customerName: "Jane Smith",
    supplierName: "Supplier B",
    deliveryStatus: "Shipped",
    paymentType: "Card",
  },
];

const dummyProducts = [
  { id: 1, title: "Product 1", price: "20.00", quantity: 10 },
  { id: 2, title: "Product 2", price: "25.00", quantity: 3 },
];

const AdminDashboard = () => {
  const [orders, setOrders] = useState(dummyOrders);
  const [users, setUsers] = useState(dummyUsers);
  const [products, setProducts] = useState(dummyProducts);

  const toggleOrderStatus = (index) => {
    const updatedOrders = [...orders];
    updatedOrders[index].deliveryStatus =
      updatedOrders[index].deliveryStatus === "Processing" ? "Shipped" : "Processing";
    setOrders(updatedOrders);
  };

  const toggleUserRole = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index].role =
      updatedUsers[index].role === "Buyer" ? "Seller" : "Buyer";
    setUsers(updatedUsers);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const updatePaymentType = (index, newType) => {
    const updatedOrders = [...orders];
    updatedOrders[index].paymentType = newType;
    setOrders(updatedOrders);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container my-4 flex-grow-1">
        <h2 className="text-center mb-4">Admin Dashboard</h2>
        <hr />
        
        {/* Analytics Chart Placeholder */}
        <div className="mb-4">
        <h4 className="text-center">Analytics Chart</h4>
        <div className="container" style={{ backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "5px" }}>
            <div className="row justify-content-center">
            <div className="col-12 col-md-8"> {/* Center the chart on smaller screens */}
                <BarChart
                width={500}
                height={300}
                data={analyticsData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
            </div>
            </div>
        </div>
        </div>
        <hr />

        {/* Users Table */}
        <h4 className="mt-4 text-center">Manage Users</h4>
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <span className="badge bg-primary">{user.role}</span>
                  <button className="btn btn-warning btn-sm ms-2" onClick={() => toggleUserRole(index)}>
                    Edit Role
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger btn-sm">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />

        {/* Orders Table */}
        <h4 className="mt-4 text-center">Manage Orders</h4>
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Customer Name</th>
              <th>Supplier Name</th>
              <th>Delivery Status</th>
              <th>Payment Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.orderId}>
                <td>{order.orderId}</td>
                <td>{order.date}</td>
                <td>{order.customerName}</td>
                <td>{order.supplierName}</td>
                <td>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={order.deliveryStatus === "Shipped"}
                      onChange={() => toggleOrderStatus(index)}
                    />
                    <span className="slider"></span>
                  </label>
                  <span className="ms-2">{order.deliveryStatus}</span>
                </td>
                <td>
                  <select
                    value={order.paymentType}
                    onChange={(e) => updatePaymentType(index, e.target.value)}
                    className="form-select"
                  >
                    <option value="Wallet">Wallet</option>
                    <option value="Cash on Delivery">Cash on Delivery</option>
                    <option value="Card">Card</option>
                  </select>
                </td>
                <td>
                  <button className="btn btn-danger btn-sm">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />

        {/* Products Table */}
        <h4 className="mt-4 text-center">Manage Products</h4>
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Product ID</th>
              <th>Product Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className={product.quantity < 5 ? "table-danger" : ""}>
                <td>{product.id}</td>
                <td>{product.title}</td>
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
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteProduct(product.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
