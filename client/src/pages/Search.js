import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";

const Search = () => {
  const [auth, setAuth] = useSearch();
  // console.log(auth);
  // console.log("inside search page");

  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {auth?.results.length < 1
              ? "No Products Found"
              : `Found ${auth?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap justify-content-center mt-4">
            {auth?.results.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }} key={p._id}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text"> ₹ {p.price}</p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-primary me-1"
                      style={{ width: "calc(50% - 4px)" }}
                    >
                      More Details
                    </button>
                    <button
                      className="btn btn-secondary ms-1"
                      style={{
                        backgroundColor: "#28a745",
                        width: "calc(50% - 4px)",
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
