import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useCart } from "../context/cart";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [cart, setCart] = useCart(); // Access cart state and function to update cart

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      // console.log(error);
    }
  };

  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      // console.log(error);
    }
  };

  // Function to add product to cart
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart); // Update cart state
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Item Added to cart");

    // Update cart count in the header if available
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
      const currentCount = parseInt(cartCountElement.innerText);
      cartCountElement.innerText = currentCount + 1;
    }
  };

  return (
    <Layout>
      <div className="row mt-2">
        <div className="col-md-6">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            style={{ width: "39%", height: "auto", marginLeft: "30vh" }}
          />
        </div>
        <div className="col-md-6">
          <h1 className="text-center">Product Details</h1>
          <div style={{ marginBottom: "10px" }}>
            <h6>Name: {product.name}</h6>
            <h6>Description: {product.description}</h6>
            <h6>Price: ₹ {product.price}</h6>
            <h6>Category: {product?.category?.name}</h6>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginRight: "90vh",
              width: "51vh",
              height: "45px", // Adjusted margin for better alignment
            }}
          >
            <button
              className="btn btn-secondary btn-sm"
              style={{
                marginRight: "40px",
                backgroundColor: "#4CAF50", // Green color
                borderColor: "#4CAF50", // Border color same as background color
              }}
              onClick={() => addToCart(product)}
            >
              ADD TO CART
            </button>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => navigate(`/product/${product.slug}`)}
            >
              More Details
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <h6 className="mt-4">Similar Products</h6>
        <div className="d-flex flex-wrap">
          {relatedProducts.map((p) => (
            <div className="card m-2" style={{ width: "18rem" }}>
              <img
                src={`/api/v1/product/product-photo/${p?._id}`}
                className="card-img-top"
                alt={p.name}
                style={{
                  height: "350px",
                  objectFit: "cover",
                  marginLeft: "auto", // Adjusted to move the image slightly to the right
                  marginRight: "auto", // Adjusted to move the image slightly to the right
                }}
              />
              <div className="card-body">
                <div
                  style={{
                    maxHeight: "50px", // Set max height for product name
                    overflowY: "auto",
                    lineHeight: "20px", // Set fixed line height // Enable scrolling for overflow
                  }}
                >
                  <h5 className="card-title">{p.name}</h5>
                </div>

                <p className="card-text">{p.description.substring(0, 30)}...</p>
                <p className="card-text"> ₹ {p.price}</p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <button
                    className="btn btn-primary"
                    style={{ marginRight: "5px" }}
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  <button
                    className="btn btn-secondary btn-sm"
                    style={{
                      backgroundColor: "#4CAF50", // Green color
                      borderColor: "#4CAF50",
                    }}
                    onClick={() => addToCart(p)}
                  >
                    ADD TO CART
                  </button>{" "}
                  {/* Changed button size to btn-sm for smaller size */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
