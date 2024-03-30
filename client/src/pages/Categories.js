import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();

  return (
    <Layout title={"All Categories"}>
      <div className="container">
        <h1 className="text-center mb-5">Explore Categories</h1>
        <div className="row">
          {categories.map((c) => (
            <div className="col-md-4 mb-4" key={c._id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title text-center">{c.name}</h5>
                  <p className="card-text">{c.description}</p>
                </div>
                <div className="card-footer">
                  <Link
                    to={`/category/${c.slug}`}
                    className="btn btn-primary w-100"
                    style={{ backgroundColor: "green", borderColor: "green" }}
                    // Add hover effect
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "darkgreen")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "green")
                    }
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
