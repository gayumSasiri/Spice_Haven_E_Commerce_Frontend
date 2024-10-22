import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const PromotionsCarousel = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
        <div id="promotionsCarousel" className="carousel slide center" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./assets/promoImg/promo_1.jpg" 
                className="d-block w-100"
                alt="Promotion 1"
              />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5>Spice Up Your Cooking!</h5> */}
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./assets/promoImg/promo_2.jpg" 
                className="d-block w-100"
                alt="Promotion 2"
              />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5>Vegan Flavor Fiesta!</h5> */}
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./assets/promoImg/promo_3.jpg" 
                className="d-block w-100"
                alt="Promotion 3"
              />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5>Exotic Spice Adventure</h5> */}
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#promotionsCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#promotionsCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    // console.log("Adding product to cart:", product);
    dispatch(addCart(product));
  };

  //sample spices were added
  // const spices = [
  //   {
  //     category: "organic",
  //     id: 1,
  //     title: "Organic Turmeric Powder",
  //     description: "High-quality turmeric powder with a vibrant color and rich flavor. Perfect for curries and health drinks.",
  //     image: "https://example.com/images/turmeric.jpg",
  //     price: 10.99,
  //     rating: { rate: 4.7, count: 200 }
  //   },
  //   {
  //     category: "organic",
  //     id: 2,
  //     title: "Organic Cumin Seeds",
  //     description: "Freshly roasted cumin seeds, ideal for adding flavor to dishes and enhancing your spice rack.",
  //     image: "https://example.com/images/cumin.jpg",
  //     price: 8.50,
  //     rating: { rate: 4.5, count: 150 }
  //   },
  //   {
  //     category: "organic",
  //     id: 3,
  //     title: "Organic Cinnamon Sticks",
  //     description: "Deliciously fragrant organic cinnamon sticks for baking and cooking.",
  //     image: "https://example.com/images/cinnamon.jpg",
  //     price: 6.99,
  //     rating: { rate: 4.8, count: 180 }
  //   },
  //   {
  //     category: "organic",
  //     id: 4,
  //     title: "Organic Chili Powder",
  //     description: "Spicy and flavorful chili powder made from premium organic chili peppers.",
  //     image: "https://example.com/images/chili_powder.jpg",
  //     price: 9.25,
  //     rating: { rate: 4.6, count: 170 }
  //   },
  //   {
  //     category: "organic",
  //     id: 5,
  //     title: "Organic Black Pepper",
  //     description: "Freshly ground organic black pepper for a robust flavor in your dishes.",
  //     image: "https://example.com/images/black_pepper.jpg",
  //     price: 7.75,
  //     rating: { rate: 4.9, count: 220 }
  //   },
  //   {
  //     category: "vegan",
  //     id: 6,
  //     title: "Vegan Garlic Powder",
  //     description: "All-natural garlic powder to add depth to your vegan dishes.",
  //     image: "https://example.com/images/garlic_powder.jpg",
  //     price: 5.99,
  //     rating: { rate: 4.7, count: 160 }
  //   },
  //   {
  //     category: "vegan",
  //     id: 7,
  //     title: "Vegan Italian Herbs",
  //     description: "A blend of dried basil, oregano, thyme, and rosemary, perfect for vegan pasta and sauces.",
  //     image: "https://example.com/images/italian_herbs.jpg",
  //     price: 4.49,
  //     rating: { rate: 4.8, count: 140 }
  //   },
  //   {
  //     category: "vegan",
  //     id: 8,
  //     title: "Vegan Chili Flakes",
  //     description: "Crunchy and spicy chili flakes to add a kick to your vegan recipes.",
  //     image: "https://example.com/images/chili_flakes.jpg",
  //     price: 3.99,
  //     rating: { rate: 4.5, count: 130 }
  //   },
  //   {
  //     category: "vegan",
  //     id: 9,
  //     title: "Vegan Curry Powder",
  //     description: "A flavorful blend of spices that makes any dish pop with flavor.",
  //     image: "https://example.com/images/curry_powder.jpg",
  //     price: 8.99,
  //     rating: { rate: 4.6, count: 110 }
  //   },
  //   {
  //     category: "vegan",
  //     id: 10,
  //     title: "Vegan Ginger Powder",
  //     description: "Finely ground ginger for adding warmth and flavor to your vegan dishes.",
  //     image: "https://example.com/images/ginger_powder.jpg",
  //     price: 6.49,
  //     rating: { rate: 4.8, count: 120 }
  //   },
  //   {
  //     category: "exotic",
  //     id: 11,
  //     title: "Exotic Saffron Threads",
  //     description: "Premium quality saffron threads for a unique flavor and vibrant color.",
  //     image: "https://example.com/images/saffron.jpg",
  //     price: 29.99,
  //     rating: { rate: 4.9, count: 90 }
  //   },
  //   {
  //     category: "exotic",
  //     id: 12,
  //     title: "Exotic Star Anise",
  //     description: "Whole star anise pods with a sweet, licorice-like flavor.",
  //     image: "https://example.com/images/star_anise.jpg",
  //     price: 15.00,
  //     rating: { rate: 4.6, count: 80 }
  //   },
  //   {
  //     category: "exotic",
  //     id: 13,
  //     title: "Exotic Sumac Spice",
  //     description: "Tangy and zesty sumac spice, great for Mediterranean dishes.",
  //     image: "https://example.com/images/sumac.jpg",
  //     price: 9.99,
  //     rating: { rate: 4.5, count: 100 }
  //   },
  //   {
  //     category: "exotic",
  //     id: 14,
  //     title: "Exotic Za'atar Blend",
  //     description: "A traditional Middle Eastern spice blend with thyme, sesame, and sumac.",
  //     image: "https://example.com/images/zaatar.jpg",
  //     price: 12.50,
  //     rating: { rate: 4.7, count: 70 }
  //   },
  //   {
  //     category: "exotic",
  //     id: 15,
  //     title: "Exotic Harissa Paste",
  //     description: "Spicy North African chili paste, perfect for marinating and cooking.",
  //     image: "https://example.com/images/harissa.jpg",
  //     price: 8.99,
  //     rating: { rate: 4.8, count: 75 }
  //   },
  //   {
  //     category: "gluten-free",
  //     id: 16,
  //     title: "Gluten-Free Almond Flour",
  //     description: "Finely ground almond flour for baking and cooking gluten-free recipes.",
  //     image: "https://example.com/images/almond_flour.jpg",
  //     price: 14.99,
  //     rating: { rate: 4.7, count: 150 }
  //   },
  //   {
  //     category: "gluten-free",
  //     id: 17,
  //     title: "Gluten-Free Oats",
  //     description: "Certified gluten-free oats, perfect for oatmeal and baking.",
  //     image: "https://example.com/images/gluten_free_oats.jpg",
  //     price: 6.50,
  //     rating: { rate: 4.5, count: 160 }
  //   },
  //   {
  //     category: "gluten-free",
  //     id: 18,
  //     title: "Gluten-Free Coconut Flour",
  //     description: "Coconut flour made from dried coconuts, suitable for gluten-free recipes.",
  //     image: "https://example.com/images/coconut_flour.jpg",
  //     price: 8.25,
  //     rating: { rate: 4.6, count: 130 }
  //   },
  //   {
  //     category: "gluten-free",
  //     id: 19,
  //     title: "Gluten-Free Chickpea Flour",
  //     description: "High-protein chickpea flour, perfect for gluten-free baking.",
  //     image: "https://example.com/images/chickpea_flour.jpg",
  //     price: 7.99,
  //     rating: { rate: 4.8, count: 140 }
  //   },
  //   {
  //     category: "gluten-free",
  //     id: 20,
  //     title: "Gluten-Free Brown Rice Flour",
  //     description: "Finely milled brown rice flour, great for gluten-free baking and cooking.",
  //     image: "https://example.com/images/brown_rice_flour.jpg",
  //     price: 9.50,
  //     rating: { rate: 4.7, count: 120 }
  //   }
  // ];
  const spices = [];
  
  

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/products");
      const fetchedProducts = await response.json();
      // console.log(fetchedProducts);

      const formattedProducts = fetchedProducts.map(product => ({
        category: product.productCategory.toLowerCase(),
        id: product._id, 
        title: product.productTitle,
        description: product.description,
        image: product.imageUrl,
        price: product.priceInLKR , 
        rating: {
          rate: product.rating.rate,
          count: product.rating.count
        }
      }));
      
      if (componentMounted) {
        const combinedProducts = [...spices, ...formattedProducts];
        setData(combinedProducts);
        // setData(await response.clone().json());
        // console.log(await response.json());
        
        // setFilter(await response.json());
        setFilter(combinedProducts);
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  //temporary categories were added
  const categories = [
    { name: "All", filterValue: null },
    { name: "Organic Spices", filterValue: "organic" },
    { name: "Vegan Spices", filterValue: "vegan" },
    { name: "Exotic Spices", filterValue: "exotic" },
    { name: "Gluten-Free Spices", filterValue: "gluten-free" },
  ];

  const ShowProducts = () => {   
    return (
      <>
        <div className="buttons text-center py-5">
          {categories.map((category, index) => (
            <button
              key={index} 
              className="btn btn-outline-dark btn-sm m-2"
              onClick={() => {
                setSearchQuery("");
                setMaxPrice(0);
                setMinPrice(0);
                category.filterValue ? filterProduct(category.filterValue) : setFilter(data)
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {filter.map((product) => {
          return (
            <div
              id={product.id}
              key={product.id}
              className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
            >
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">LKR {product.price} for 100g</li>
                  {/* <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
                <div className="card-body">
                  <Link
                    to={"/product/" + product.id}
                    className="btn btn-dark m-1"
                  >
                    Buy Now 
                  </Link>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      toast.success("Added to cart");
                      addProduct(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [isPriceRangeChecked, setIsPriceRangeChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsPriceRangeChecked(!isPriceRangeChecked);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    // console.log(query);
    setSearchQuery(query);

    const filteredProducts = data.filter((product) =>
      product.title.toLowerCase().includes(searchQuery)
    );
    setFilter(filteredProducts);
  };

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);

  const applyPriceFilter = () => {
    const filtered = data.filter((product) => {
      return product.price >= minPrice && product.price <= maxPrice;
    });
    setFilter(filtered);
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Week Promotions!</h2>
            <hr />
            <PromotionsCarousel />
            <h2 className="display-5 text-center mt-2">Featured Spices</h2>
            <hr />
            <div className="row  mt-3">
              <div className="col-12 col-md-6 text-center">
                <input
                  type="text"
                  placeholder="Search for spices..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="form-control mb-6"
                />
              </div>

                <div className="col-12 col-md-6 text-center mt-2">
                  <span className="border border-2 border-secondary rounded-4">
                    <input
                    className="ml-3"
                      type="checkbox"
                      id="priceRangeCheckbox"
                      checked={isPriceRangeChecked}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="priceRangeCheckbox" className="ml-2 mt-3 mb-3 mr-3">
                      Enable Price Range Filter
                    </label>
                  </span>
                </div>
              {isPriceRangeChecked && (
                <div className="col-12 col-md-6 mt-3">
                  <div className="row d-lg-flex align-items-center">
                    <div className="col-6 col-lg-4 text-center mb-2">
                      <label htmlFor="minPriceInput">Min Price (LKR)</label>
                      <input
                        type="number"
                        id="minPriceInput"
                        className="form-control"
                        placeholder="Enter min price"
                        value={minPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                      />
                    </div>

                    <div className="col-6 col-lg-4 text-center mb-2">
                      <label htmlFor="maxPriceInput">Max Price (LKR)</label>
                      <input
                        type="number"
                        id="maxPriceInput"
                        className="form-control"
                        placeholder="Enter max price"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                      />
                    </div>
                    {/* Filter Button */}
                      <div className="col-12 col-lg-4 text-center  mt-3 pt-3 mt-lg-0">
                        <button className="btn btn-dark" onClick={applyPriceFilter}>
                          Filter
                        </button>
                      </div>
                  </div>

                </div>
              )}

            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
       
      </div>
    </>
  );
};

export default Products;
