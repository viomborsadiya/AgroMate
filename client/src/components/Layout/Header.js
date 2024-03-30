// Header.js

import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import agricultureImage from "./agriculture.png";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  const handleCategoryHover = (e, category) => {
    e.target.style.backgroundColor = "green";
  };

  const handleCategoryLeave = (e) => {
    e.target.style.backgroundColor = "";
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{ backgroundColor: "white" }}
            />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              <img src={agricultureImage} alt="AgroMate" /> AgroMate
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <SearchInput />
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link text-white"
                  style={{
                    position: "relative",
                    borderBottom: "2px solid transparent",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.borderBottom = "2px solid white")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.borderBottom = "2px solid transparent")
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li key={c.slug}>
                      <NavLink
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                        onMouseEnter={(e) => handleCategoryHover(e, c)}
                        onMouseLeave={(e) => handleCategoryLeave(e)}
                      >
                        {c.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>

              {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/register"
                      className="nav-link text-white"
                      style={{
                        position: "relative",
                        borderBottom: "2px solid transparent",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.borderBottom = "2px solid white")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.borderBottom = "2px solid transparent")
                      }
                    >
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="nav-link text-white"
                      style={{
                        position: "relative",
                        borderBottom: "2px solid transparent",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.borderBottom = "2px solid white")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.borderBottom = "2px solid transparent")
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle text-white"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" }}
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin/create-category" : "user/profile"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Badge count={cart?.length} showZero>
                  <NavLink
                    to="/cart"
                    className="nav-link text-white"
                    style={{
                      position: "relative",
                      borderBottom: "2px solid transparent",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.borderBottom = "2px solid white")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.borderBottom = "2px solid transparent")
                    }
                  >
                    Cart
                  </NavLink>
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
