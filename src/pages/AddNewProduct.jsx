import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const AddNewProduct = () => {
    const [productTitle, setProductTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [error, setError] = useState("");

    const categories = ["Organic", "Vegan", "Exotic", "Gluten-Free"];

    const sellerId = useSelector((state) => state.auth.user._id);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!productTitle || !category || !description || !image || !price || !quantity) {
            setError("All fields are required.");
            return;
        }

        const formData = new FormData();
        formData.append("sellerId", sellerId); 
        formData.append("productTitle", productTitle);
        formData.append("productCategory", category);
        formData.append("description", description);
        formData.append("image", image); 
        formData.append("priceInLKR", price);
        formData.append("quantityInGrams", quantity);

        // console.log(sellerId, productTitle, category, description, price, quantity );
        
        try {
            const response = await fetch("http://localhost:5000/api/products", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.error || "Failed to add product.");
                return;
            }

            const newProduct = await response.json();
            // console.log("Product added:", newProduct);
            if(response.ok) toast.success("Product added sucessfully !");

            setProductTitle("");
            setCategory("");
            setDescription("");
            setImage(null);
            setPrice("");
            setQuantity("");
            setError("");
        } catch (error) {
            console.error("Error adding product:", error);
            setError("An error occurred. Please try again.");
        }

    };

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Add New Product</h1>
                <hr />
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="row my-4 h-100">
                    <div className="col-md-6 col-lg-6 col-sm-8 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="form my-3">
                                <label htmlFor="productTitle">Product Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="productTitle"
                                    placeholder="Enter Product Title"
                                    value={productTitle}
                                    onChange={(e) => setProductTitle(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="category">Product Category</label>
                                <select
                                    className="form-control"
                                    id="category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    required
                                >
                                    <option value="">Select a Category</option>
                                    {categories.map((cat, index) => (
                                        <option key={index} value={cat}>
                                            {cat}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form my-3">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    placeholder="Enter Product Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <div className="form my-3">
                                <label htmlFor="image">Upload Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="image"
                                    onChange={(e) => setImage(e.target.files[0])}
                                    required
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="price">Price in Sri Lankan Rupees</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="price"
                                    placeholder="Enter Product Price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="quantity">Quantity in Kg</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="quantity"
                                    placeholder="Enter Product Quantity"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-dark" type="submit">
                                    Add Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AddNewProduct;
