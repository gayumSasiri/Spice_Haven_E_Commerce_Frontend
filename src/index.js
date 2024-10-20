import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import {
  Home,
  Product,
  Products,
  AboutPage,
  ContactPage,
  Cart,
  Login,
  Register,
  Checkout,
  PageNotFound,
  Orders,
  ResetPassword,
  AddNewProduct,
  UpdateProduct,
  OrderDetails,
  AdminPanel,
  NotAuthorizedPage,
} from "./pages";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/product/*" element={<PageNotFound />} />
          <Route path="/resetpassword/*" element={<ResetPassword />} />
          <Route path="/notauthorized" element={<NotAuthorizedPage />} />

          {/* Seller special pages */}
          <Route path="/newproduct" element={
            <ProtectedRoute allowedRoles={['seller']}>
              <AddNewProduct />
            </ProtectedRoute>
          } />
          <Route path="/updateproduct/:id" element={
            <ProtectedRoute allowedRoles={['seller']}>
              <UpdateProduct />
            </ProtectedRoute>
          } />
          <Route path="/orderdetails/:id" element={
            <ProtectedRoute allowedRoles={['seller']}>
              <OrderDetails />
            </ProtectedRoute>
          } />

          {/* Admin route */}
          <Route path="/adminpanel" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminPanel />
            </ProtectedRoute>
          } />

          {/* Protected Routes for general users */}
          <Route path="/cart" element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          } />
          <Route path="/checkout" element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          } />
          <Route path="/orders" element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          } />
        </Routes>
      </Provider>
    </ScrollToTop>
    <Toaster />
  </BrowserRouter>
);

