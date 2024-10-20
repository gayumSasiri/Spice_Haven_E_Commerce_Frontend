import React, { useState } from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

const Orders = () => {
    // Sample orders data 
    const initialOrders = [
        {
            orderId: "OID001",
            username: "john_doe",
            date: "2024-10-10",
            status: "Shipped",
            purchasedAmount: "$150",
        },
        {
            orderId: "OID002",
            username: "jane_smith",
            date: "2024-10-12",
            status: "Processing",
            purchasedAmount: "$200",
        },
    ];

    const [orders, setOrders] = useState(initialOrders);

    const handleCancelOrder = () => {
        alert("Our customer service agent will be in contact with you shortly.");
    };

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Your Orders</h1>
                <hr />
                {orders.length > 0 ? (
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Order Id</th>
                                    <th>Username</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Purchased Amount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) => (
                                    <tr key={index}>
                                        <td>{order.orderId}</td>
                                        <td>{order.username}</td>
                                        <td>{order.date}</td>
                                        <td>{order.status}</td>
                                        <td>{order.purchasedAmount}</td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                onClick={handleCancelOrder}
                                            >
                                                Cancel Order
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="row">
                        <div className="col-md-12 py-5 bg-light text-center">
                            <h4 className="p-3 display-5">You have no orders yet</h4>
                            <Link to="/product" className="btn btn-outline-dark mx-4">
                                <i className="fa fa-arrow-left"></i> Shop Now
                            </Link>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Orders;
