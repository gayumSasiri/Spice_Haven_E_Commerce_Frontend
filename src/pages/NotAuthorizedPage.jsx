// NotAuthorized.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../components'; // Adjust the import based on your project structure

const NotAuthorized = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container d-flex flex-column justify-content-center align-items-center flex-grow-1 text-center">
        <h1 className="display-4 text-danger mb-4">403 - Not Authorized</h1>
        <p className="lead mb-4">You do not have permission to view this page.</p>
        <Link to="/" className="btn btn-outline-secondary">
          Go to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default NotAuthorized;
