import React from "react";
import { Footer, Navbar } from "../components";
const ContactPage = () => {
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
            <form>
              <div class="form my-3">
                <label for="Name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="Name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div class="form my-3">
                <label for="mobileNumber">Mobile Number</label>
                <input
                  type="tel"
                  class="form-control"
                  id="mobileNumber"
                  placeholder="Enter your mobile number"
                  pattern="[0-9]{10}"
                  minlength="10"
                  maxlength="10"
                  required
                />
              </div>
              <div class="form my-3">
                <label for="Email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Message</label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="Password"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  class="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  disabled
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
