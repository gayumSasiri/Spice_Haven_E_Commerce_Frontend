import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const AddNewProduct = () => {
    const [productTitle, setProductTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [error, setError] = useState("");

    const categories = ["Organic", "Vegan", "Exotic", "Gluten-Free"];

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate fields
        if (!productTitle || !category || !description || !image || !price || !quantity) {
            setError("All fields are required.");
            return;
        }

        // Proceed with form submission (e.g., API call)
        console.log({ productTitle, category, description, image, price, quantity });

        // Reset fields after submission
        setProductTitle("");
        setCategory("");
        setDescription("");
        setImage(null);
        setPrice("");
        setQuantity("");
        setError("");
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
                                <label htmlFor="quantity">Quantity in grams</label>
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
