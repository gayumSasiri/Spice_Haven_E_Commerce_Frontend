import React, { useState } from 'react'
import { Footer, Navbar } from "../components";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from "react-hot-toast";

const ResetPassword = () => {

    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put("http://localhost:5000/api/auth/reset-password", {
                email,
                newPassword,
                confirmPassword
            });

            if (response.data) {
                toast.success("Password reset successfully!");
                navigate("/login"); 
            }
        } catch (err) {
            if (err.response && err.response.data) {
                const errorMessage = err.response.data.error || "An error occurred. Please try again.";
                toast.error(errorMessage);
            } else {
                toast.error("An unexpected error occurred. Please try again.");
            }
        }
    };

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Reset Password</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="form my-3">
                                <label htmlFor="Email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="NewPassword">New Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="NewPassword"
                                    placeholder="New Password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="ConfirmPassword">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="ConfirmPassword"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-dark" type="submit">
                                    Reset Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ResetPassword;
