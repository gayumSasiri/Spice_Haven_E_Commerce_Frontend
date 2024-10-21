import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import axios from "axios"; 
import toast from "react-hot-toast";

const ContactPage = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // console.log(formData);      
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      toast.success("Message sent successfully!"); 
      setFormData({ fullName: "", mobileNumber: "", email: "", message: "" }); 
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred. Please try again.");
      toast.error(error); 
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <p className="text-center">At Spice Haven, we offer the finest spices and blends to 
              elevate your cooking.
            </p>
            <p className="text-center"> Fill the form below, and our customer care officer
               will contact you shortly.
            </p>
            <form onSubmit={handleSubmit}>
              <div class="form my-3">
                <label for="Name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="Name"
                  name="fullName"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="form my-3">
                <label for="mobileNumber">Mobile Number</label>
                <input
                  type="tel"
                  class="form-control"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="Enter your mobile number"
                  pattern="[0-9]{10}"
                  minLength="10"
                  maxLength="10"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="form my-3">
                <label for="Email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Message</label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="Password"
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="text-center">
                <button
                  class="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
            <h5 className="text-center mt-4">Need additional information? </h5>
              <hr />
            <p className="mt-4">If you have any questions or need assistance, feel free to reach out to us:</p>
            <p><strong>Hotline:</strong> +1 (800) 123-4567</p>
            <p><strong>Email:</strong> <a href="mailto:support@example.com">support@example.com</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
