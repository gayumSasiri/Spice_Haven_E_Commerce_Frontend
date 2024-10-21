import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from "../pages/actions";
import toast from "react-hot-toast";

const Navbar = () => {
    const state = useSelector(state => state.handleCart);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token"); //token removed
        dispatch(logout()); 
        toast.success("You have been logged out!");
        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> SPICE HAVEN APP</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Orders">Order</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/superuser"><i className="fa fa-user-lock"></i></NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        {isAuthenticated ? (
                            <button onClick={handleLogout} className="btn btn-outline-dark m-2">
                                <i className="fa fa-sign-out-alt mr-1"></i> Logout
                            </button>
                        ) : (
                            <NavLink to="/login" className="btn btn-outline-dark m-2">
                                <i className="fa fa-sign-in-alt mr-1"></i> Login
                            </NavLink>
                        )}
                        <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
                        <NavLink to="/cart" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state?.length || 0}) </NavLink>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar