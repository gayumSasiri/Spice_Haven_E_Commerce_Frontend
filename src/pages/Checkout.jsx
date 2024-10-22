import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { clearCart, emptyCart } from "../redux/action";
const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">No item in Cart</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 300.0;
    let totalItems = 0;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [address2, setAddress2] = useState("");
    const [country, setCountry] = useState("");
    const [stateValue, setStateValue] = useState("");
    const [zip, setZip] = useState(0);
    const [totalAmount, settotalAmount] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState("CreditCard");
    const [cardDetails, setCardDetails] = useState({
      nameOnCard: "",
      cardNumber: "",
      expiration: "",
      cvv: "",
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth);
    // console.log(authState);      

    const handleCheckout = async (e) => {
      e.preventDefault();
      //get cart
      const storedCart = localStorage.getItem("cart");

      const cartData = JSON.parse(storedCart); 
      const transformedCart = cartData.map(item => ({
        productId: item.id, 
        quantity: item.qty,  
      }));

      try {
        const orderData = {
          firstName,
          lastName,
          email,
          address,
          address2,
          country,
          state: stateValue,
          zip,
          totalAmount: subtotal + shipping,
          paymentMethod,
          cart: transformedCart, 
          cardDetails: paymentMethod === "CreditCard" ? cardDetails : null,
          customerId: authState.user._id,
        };
  
        // console.log(orderData);
        
        const response = await axios.post("http://localhost:5000/api/orders", orderData);
        if(response){
          // console.log("okkkk");
          
          toast.success("Order placed successfully!");
          dispatch(emptyCart()); 
          navigate("/Orders");
        }
  
      } catch (error) {
        toast.error("Failed to place order, please try again.");
      }
    };

    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });
    return (
      <>
        <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products ({totalItems})<span>LKR {Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>LKR {shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>LKR {Math.round(subtotal + shipping)}</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h4 className="mb-0">Billing address</h4>
                </div>
                <div className="card-body">
                  <form className="needs-validation" onSubmit={handleCheckout} novalidate>
                    <div className="row g-3">
                      <div className="col-sm-6 my-1">
                        <label for="firstName" className="form-label">
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                          placeholder="Please enter first name"
                        />
                        <div className="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>

                      <div className="col-sm-6 my-1">
                        <label for="lastName" className="form-label">
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                          placeholder="Please enter last name"
                        />
                        <div className="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label for="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder="Please enter a valid email address"
                        />
                        <div className="invalid-feedback">
                          Please enter a valid email address for shipping
                          updates.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label for="address" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          required
                          placeholder="Please enter your shipping address"
                        />
                        <div className="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                      </div>

                      <div className="col-12">
                        <label for="address2" className="form-label">
                          Address 2{" "}
                          <span className="text-muted">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address2"
                          value={address2}
                          onChange={(e) => setAddress2(e.target.value)}
                          placeholder="Enter address (optional)"
                        />
                      </div>

                      <div className="col-md-5 my-1">
                        <label for="country" className="form-label">
                          Country
                        </label>
                        <br />
                        <select className="form-select" id="country" value={country} onChange={(e) => setCountry(e.target.value)} required>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="India">India</option>
                            <option value="China">China</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Zambia">Zambia</option>
                            <option value="United States">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Germany">Germany</option>
                            <option value="France">France</option>
                            <option value="Italy">Italy</option>
                            <option value="Spain">Spain</option>
                            <option value="Japan">Japan</option>
                            <option value="South Korea">South Korea</option>
                            <option value="Brazil">Brazil</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Russia">Russia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="Egypt">Egypt</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Vietnam">Vietnam</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Singapore">Singapore</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Norway">Norway</option>
                            <option value="Finland">Finland</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Austria">Austria</option>
                            <option value="Czech Republic">Czech Republic</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Greece">Greece</option>
                            <option value="Iceland">Iceland</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Romania">Romania</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Macedonia">Macedonia</option>
                            <option value="Albania">Albania</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Tajikistan">Tajikistan</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Iran">Iran</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Syria">Syria</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Oman">Oman</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Yemen">Yemen</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Sri Lanka">Sri Lanka</option>


                        </select>
                        <div className="invalid-feedback">
                          Please select a valid country.
                        </div>
                      </div>

                      <div className="col-md-4 my-1">
                        <label for="state" className="form-label">
                          State
                        </label>
                        <br />
                        <select className="form-select" id="state" value={stateValue} onChange={(e) => setStateValue(e.target.value)} required>
                          <option value="Colombo">Colombo</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Kolkata">Kolkata</option>
                          <option value="Beijing">Beijing</option>
                          <option value="Shanghai">Shanghai</option>
                          <option value="Ahmadabad">Ahmadabad</option>
                          <option value="Pune">Pune</option>
                          <option value="Mumbai">Mumbai</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Chennai">Chennai</option>
                          <option value="Hyderabad">Hyderabad</option>
                          <option value="Bangalore">Bangalore</option>
                          <option value="Jaipur">Jaipur</option>
                          <option value="Kolkata">Kolkata</option>
                          <option value="Chandigarh">Chandigarh</option>
                          <option value="Lucknow">Lucknow</option>
                          <option value="Nagpur">Nagpur</option>
                          <option value="Ahmedabad">Ahmedabad</option>
                          <option value="Surat">Surat</option>
                          <option value="Vadodara">Vadodara</option>
                          <option value="Rajkot">Rajkot</option>
                          <option value="Indore">Indore</option>
                          <option value="Patna">Patna</option>
                          <option value="Bhopal">Bhopal</option>
                          <option value="Visakhapatnam">Visakhapatnam</option>
                          <option value="Coimbatore">Coimbatore</option>
                          <option value="Nashik">Nashik</option>
                          <option value="Thane">Thane</option>
                          <option value="Kozhikode">Kozhikode</option>
                          <option value="Kochi">Kochi</option>
                          <option value="Tirupati">Tirupati</option>
                          <option value="Gurgaon">Gurgaon</option>
                          <option value="Noida">Noida</option>
                          <option value="Kanpur">Kanpur</option>
                          <option value="Agra">Agra</option>
                          <option value="Dehradun">Dehradun</option>
                          <option value="Bhubaneswar">Bhubaneswar</option>
                          <option value="Mysore">Mysore</option>
                          <option value="Shillong">Shillong</option>
                          <option value="Imphal">Imphal</option>
                          <option value="Guwahati">Guwahati</option>
                          <option value="Raipur">Raipur</option>
                          <option value="Ranchi">Ranchi</option>
                          <option value="Jamshedpur">Jamshedpur</option>
                          <option value="Kolkata">Kolkata</option>
                          <option value="Cuttack">Cuttack</option>
                          <option value="Agartala">Agartala</option>
                          <option value="Puducherry">Puducherry</option>
                          <option value="Srinagar">Srinagar</option>
                          <option value="Jammu">Jammu</option>
                          <option value="Udaipur">Udaipur</option>
                          <option value="Ajmer">Ajmer</option>
                          <option value="Jodhpur">Jodhpur</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Madurai">Madurai</option>
                          <option value="Tirunelveli">Tirunelveli</option>
                          <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                          <option value="Dibrugarh">Dibrugarh</option>
                          <option value="Tiruchirappalli">Tiruchirappalli</option>
                          <option value="Karachi">Karachi</option>
                          <option value="Lahore">Lahore</option>
                          <option value="Islamabad">Islamabad</option>
                          <option value="Rawalpindi">Rawalpindi</option>
                          <option value="Peshawar">Peshawar</option>
                          <option value="Quetta">Quetta</option>
                          <option value="Faisalabad">Faisalabad</option>
                          <option value="Multan">Multan</option>
                          <option value="Sialkot">Sialkot</option>
                          <option value="Guangzhou">Guangzhou</option>
                          <option value="Shenzhen">Shenzhen</option>
                          <option value="Hong Kong">Hong Kong</option>
                          <option value="Tokyo">Tokyo</option>
                          <option value="Osaka">Osaka</option>
                          <option value="Seoul">Seoul</option>
                          <option value="Bangkok">Bangkok</option>
                          <option value="Hanoi">Hanoi</option>
                          <option value="Kuala Lumpur">Kuala Lumpur</option>
                          <option value="Jakarta">Jakarta</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Canberra">Canberra</option>
                          <option value="Wellington">Wellington</option>
                          <option value="Athens">Athens</option>
                          <option value="Berlin">Berlin</option>
                          <option value="Madrid">Madrid</option>
                          <option value="Rome">Rome</option>
                          <option value="Moscow">Moscow</option>
                          <option value="London">London</option>
                          <option value="New York">New York</option>
                          <option value="Los Angeles">Los Angeles</option>
                          <option value="Chicago">Chicago</option>
                          <option value="Houston">Houston</option>
                          <option value="Miami">Miami</option>
                          <option value="Toronto">Toronto</option>
                          <option value="Vancouver">Vancouver</option>
                        </select>
                        <div className="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>

                      <div className="col-md-3 my-1">
                        <label for="zip" className="form-label">
                          Zip
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="zip"
                          value={zip}
                          onChange={(e) => setZip(e.target.value)}
                          required
                        />
                        <div className="invalid-feedback">
                          Zip code required.
                        </div>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <h4 className="mb-3">Payment</h4>

                    {/* <div className="row gy-3">
                      <div className="col-md-6">
                        <label for="cc-name" className="form-label">
                          Name on card
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-name"
                          placeholder=""
                          required
                        />
                        <small className="text-muted">
                          Full name as displayed on card
                        </small>
                        <div className="invalid-feedback">
                          Name on card is required
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label for="cc-number" className="form-label">
                          Credit card number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-number"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Credit card number is required
                        </div>
                      </div>

                      <div className="col-md-3">
                        <label for="cc-expiration" className="form-label">
                          Expiration
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-expiration"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Expiration date required
                        </div>
                      </div>

                      <div className="col-md-3">
                        <label for="cc-cvv" className="form-label">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-cvv"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Security code required
                        </div>
                      </div>
                    </div> */}
                    <div className="mb-3">
                      <label className="form-label">Payment Method</label>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="paymentCreditCard"
                          name="paymentMethod"
                          value="CreditCard"
                          checked={paymentMethod === "CreditCard"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="paymentCreditCard">
                          Credit Card
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="paymentCashOnDelivery"
                          name="paymentMethod"
                          value="COD"
                          checked={paymentMethod === "COD"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="paymentCashOnDelivery">
                          Cash on Delivery
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="paymentWallet"
                          name="paymentMethod"
                          value="Instore"
                          checked={paymentMethod === "Instore"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="paymentWallet">
                          Instore Payment
                        </label>
                      </div>
                    </div>

                  {/* Credit Card Payment Fields */}
                  {paymentMethod === "CreditCard" && (
                    <div className="row gy-3">
                      <div className="col-md-6">
                        <label htmlFor="cc-name" className="form-label">
                          Name on card
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-name"
                          value={cardDetails.nameOnCard}
                          onChange={(e) => setCardDetails({ ...cardDetails, nameOnCard: e.target.value })}
                          required
                          placeholder="Enter name on the card"
                        />
                        <small className="text-muted">
                          Full name as displayed on card
                        </small>
                        <div className="invalid-feedback">
                          Name on card is required
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="cc-number" className="form-label">
                          Credit card number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-number"
                          value={cardDetails.cardNumber}
                          onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                          required
                          minLength={16}
                          maxLength={16}
                          pattern="\d{16}"
                          placeholder="Enter 16 digit card number"
                        />
                        <div className="invalid-feedback">
                          Credit card number is required
                        </div>
                      </div>

                      <div className="col-md-3">
                        <label htmlFor="cc-expiration" className="form-label">
                          Expiration
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-expiration"
                          value={cardDetails.expiration}
                          onChange={(e) => setCardDetails({ ...cardDetails, expiration: e.target.value })}
                          required
                          maxLength={5} 
                          pattern="^(0[1-9]|1[0-2])\/\d{2}$" 
                          placeholder="MM/YY"
                        />
                        <div className="invalid-feedback">
                          Expiration date required
                        </div>
                      </div>

                      <div className="col-md-3">
                        <label htmlFor="cc-cvv" className="form-label">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-cvv"
                          value={cardDetails.cvv}
                          onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                          required
                          minLength={3}
                          maxLength={3}
                          pattern="\d{3}"
                          placeholder="eg: 314"
                        />
                        <div className="invalid-feedback">
                          Security code required
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Cash on Delivery Message */}
                  {paymentMethod === "cashOnDelivery" && (
                    <div className="alert alert-info mt-3" role="alert">
                      Please ensure you have the correct amount ready for cash payment upon delivery.
                    </div>
                  )}

                  {/* Wallet Message */}
                  {paymentMethod === "wallet" && (
                    <div className="alert alert-info mt-3" role="alert">
                      Please ensure you have the collet product from our physical shop.Payment will be settle with cash.
                    </div>
                  )}

                  <hr className="my-4" />

                  <button
                    className="w-100 btn btn-primary "
                    type="submit" 
                  >
                    Continue to checkout
                    {/* in here after checkout toast should be showd and redirect to orders page */}
                  </button>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
