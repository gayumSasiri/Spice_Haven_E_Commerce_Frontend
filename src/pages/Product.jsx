import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import { Footer, Navbar } from "../components";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  //sample spices
  const spices = [
    {
      category: "organic",
      id: 1,
      title: "Organic Turmeric Powder",
      description: "High-quality turmeric powder with a vibrant color and rich flavor. Perfect for curries and health drinks.",
      image: "https://example.com/images/turmeric.jpg",
      price: 10.99,
      rating: { rate: 4.7, count: 200 }
    },
    {
      category: "organic",
      id: 2,
      title: "Organic Cumin Seeds",
      description: "Freshly roasted cumin seeds, ideal for adding flavor to dishes and enhancing your spice rack.",
      image: "https://example.com/images/cumin.jpg",
      price: 8.50,
      rating: { rate: 4.5, count: 150 }
    },
    {
      category: "organic",
      id: 3,
      title: "Organic Cinnamon Sticks",
      description: "Deliciously fragrant organic cinnamon sticks for baking and cooking.",
      image: "https://example.com/images/cinnamon.jpg",
      price: 6.99,
      rating: { rate: 4.8, count: 180 }
    },
    {
      category: "organic",
      id: 4,
      title: "Organic Chili Powder",
      description: "Spicy and flavorful chili powder made from premium organic chili peppers.",
      image: "https://example.com/images/chili_powder.jpg",
      price: 9.25,
      rating: { rate: 4.6, count: 170 }
    },
    {
      category: "organic",
      id: 5,
      title: "Organic Black Pepper",
      description: "Freshly ground organic black pepper for a robust flavor in your dishes.",
      image: "https://example.com/images/black_pepper.jpg",
      price: 7.75,
      rating: { rate: 4.9, count: 220 }
    },
    {
      category: "vegan",
      id: 6,
      title: "Vegan Garlic Powder",
      description: "All-natural garlic powder to add depth to your vegan dishes.",
      image: "https://example.com/images/garlic_powder.jpg",
      price: 5.99,
      rating: { rate: 4.7, count: 160 }
    },
    {
      category: "vegan",
      id: 7,
      title: "Vegan Italian Herbs",
      description: "A blend of dried basil, oregano, thyme, and rosemary, perfect for vegan pasta and sauces.",
      image: "https://example.com/images/italian_herbs.jpg",
      price: 4.49,
      rating: { rate: 4.8, count: 140 }
    },
    {
      category: "vegan",
      id: 8,
      title: "Vegan Chili Flakes",
      description: "Crunchy and spicy chili flakes to add a kick to your vegan recipes.",
      image: "https://example.com/images/chili_flakes.jpg",
      price: 3.99,
      rating: { rate: 4.5, count: 130 }
    },
    {
      category: "vegan",
      id: 9,
      title: "Vegan Curry Powder",
      description: "A flavorful blend of spices that makes any dish pop with flavor.",
      image: "https://example.com/images/curry_powder.jpg",
      price: 8.99,
      rating: { rate: 4.6, count: 110 }
    },
    {
      category: "vegan",
      id: 10,
      title: "Vegan Ginger Powder",
      description: "Finely ground ginger for adding warmth and flavor to your vegan dishes.",
      image: "https://example.com/images/ginger_powder.jpg",
      price: 6.49,
      rating: { rate: 4.8, count: 120 }
    },
    {
      category: "exotic",
      id: 11,
      title: "Exotic Saffron Threads",
      description: "Premium quality saffron threads for a unique flavor and vibrant color.",
      image: "https://example.com/images/saffron.jpg",
      price: 29.99,
      rating: { rate: 4.9, count: 90 }
    },
    {
      category: "exotic",
      id: 12,
      title: "Exotic Star Anise",
      description: "Whole star anise pods with a sweet, licorice-like flavor.",
      image: "https://example.com/images/star_anise.jpg",
      price: 15.00,
      rating: { rate: 4.6, count: 80 }
    },
    {
      category: "exotic",
      id: 13,
      title: "Exotic Sumac Spice",
      description: "Tangy and zesty sumac spice, great for Mediterranean dishes.",
      image: "https://example.com/images/sumac.jpg",
      price: 9.99,
      rating: { rate: 4.5, count: 100 }
    },
    {
      category: "exotic",
      id: 14,
      title: "Exotic Za'atar Blend",
      description: "A traditional Middle Eastern spice blend with thyme, sesame, and sumac.",
      image: "https://example.com/images/zaatar.jpg",
      price: 12.50,
      rating: { rate: 4.7, count: 70 }
    },
    {
      category: "exotic",
      id: 15,
      title: "Exotic Harissa Paste",
      description: "Spicy North African chili paste, perfect for marinating and cooking.",
      image: "https://example.com/images/harissa.jpg",
      price: 8.99,
      rating: { rate: 4.8, count: 75 }
    },
    {
      category: "gluten-free",
      id: 16,
      title: "Gluten-Free Almond Flour",
      description: "Finely ground almond flour for baking and cooking gluten-free recipes.",
      image: "https://example.com/images/almond_flour.jpg",
      price: 14.99,
      rating: { rate: 4.7, count: 150 }
    },
    {
      category: "gluten-free",
      id: 17,
      title: "Gluten-Free Oats",
      description: "Certified gluten-free oats, perfect for oatmeal and baking.",
      image: "https://example.com/images/gluten_free_oats.jpg",
      price: 6.50,
      rating: { rate: 4.5, count: 160 }
    },
    {
      category: "gluten-free",
      id: 18,
      title: "Gluten-Free Coconut Flour",
      description: "Coconut flour made from dried coconuts, suitable for gluten-free recipes.",
      image: "https://example.com/images/coconut_flour.jpg",
      price: 8.25,
      rating: { rate: 4.6, count: 130 }
    },
    {
      category: "gluten-free",
      id: 19,
      title: "Gluten-Free Chickpea Flour",
      description: "High-protein chickpea flour, perfect for gluten-free baking.",
      image: "https://example.com/images/chickpea_flour.jpg",
      price: 7.99,
      rating: { rate: 4.8, count: 140 }
    },
    {
      category: "gluten-free",
      id: 20,
      title: "Gluten-Free Brown Rice Flour",
      description: "Finely milled brown rice flour, great for gluten-free baking and cooking.",
      image: "https://example.com/images/brown_rice_flour.jpg",
      price: 9.50,
      rating: { rate: 4.7, count: 120 }
    }
  ];

  // useEffect(() => {
  //   const getProduct = async () => {
  //     setLoading(true);
  //     setLoading2(true);
  //     const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  //     const data = await response.json();
  //     console.log(data);
      
  //     setProduct(data);
  //     setLoading(false);
  //     const response2 = await fetch(
  //       `https://fakestoreapi.com/products/category/${data.category}`
  //     );
  //     const data2 = await response2.json();
  //     console.log(data2);
  //     setSimilarProducts(data2);
  //     setLoading2(false);
  //   };
  //   getProduct();
  // }, [id]);
  
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      
      const product = spices.find((item) => item.id === Number(id)); 
      if (product) {
        console.log(product);
        setProduct(product);
  
        
        const similarProducts = spices.filter(
          (item) => item.category === product.category && item.id !== product.id 
        );
        console.log(similarProducts);
  
        setSimilarProducts(similarProducts);
      } else {
        console.error("Product not found");
      }
  
      setLoading(false);
      setLoading2(false);
    };
  
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 py-3">
              <img
                className="img-fluid"
                src={product.image}
                alt={product.title}
                width="400px"
                height="400px"
              />
            </div>
            <div className="col-md-6 col-md-6 py-5">
              <h4 className="text-uppercase text-muted">{product.category}</h4>
              <h1 className="display-5">{product.title}</h1>
              <p className="lead">
                {product.rating && product.rating.rate}{" "}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6  my-4">LKR {product.price}</h3>
              <p className="lead">{product.description}</p>
              <button
                className="btn btn-outline-dark"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
              <Link to="/cart" className="btn btn-dark mx-3">
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Loading2 = () => {
    return (
      <>
        <div className="my-4 py-4">
          <div className="d-flex">
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowSimilarProduct = () => {
    return (
      <>
        <div className="py-4 my-4">
          <div className="d-flex">
            {similarProducts.map((item) => {
              return (
                <div key={item.id} className="card mx-4 text-center">
                  <img
                    className="card-img-top p-3"
                    src={item.image}
                    alt="Card"
                    height={300}
                    width={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.title.substring(0, 15)}...
                    </h5>
                  </div>
                  {/* <ul className="list-group list-group-flush">
                    <li className="list-group-item lead">${product.price}</li>
                  </ul> */}
                  <div className="card-body">
                    <Link
                      to={"/product/" + item.id}
                      className="btn btn-dark m-1"
                    >
                      Buy Now
                    </Link>
                    <button
                      className="btn btn-dark m-1"
                      onClick={() => addProduct(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
          <h2 className="">You may also Like</h2>
            <Marquee
              pauseOnHover={true}
              pauseOnClick={true}
              speed={50}
            >
              {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
            </Marquee>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
