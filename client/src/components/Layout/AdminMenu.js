import React from "react";
import { NavLink } from "react-router-dom";
import "./admin.css";

const AdminMenu = () => {
  return (
    <div className="text-center">
      <div className="list-group">
        <h4 className="mb-4">Admin Panel</h4>
        <NavLink
          to="/dashboard/admin/create-category"
          className="list-group-item list-group-item-action admin-menu-item" // Added admin-menu-item class for common styling
          activeClassName="active"
        >
          Create Category
        </NavLink>
        <NavLink
          to="/dashboard/admin/create-product"
          className="list-group-item list-group-item-action admin-menu-item" // Added admin-menu-item class for common styling
          activeClassName="active"
        >
          Create Product
        </NavLink>
        <NavLink
          to="/dashboard/admin/products"
          className="list-group-item list-group-item-action admin-menu-item" // Added admin-menu-item class for common styling
          activeClassName="active"
        >
          Products
        </NavLink>
        <NavLink
          to="/dashboard/admin/orders"
          className="list-group-item list-group-item-action admin-menu-item" // Added admin-menu-item class for common styling
          activeClassName="active"
        >
          Orders
        </NavLink>
        {/* <NavLink
          to="/dashboard/admin/users"
          className="list-group-item list-group-item-action admin-menu-item" // Added admin-menu-item class for common styling
          activeClassName="active"
        >
          Users
        </NavLink> */}
      </div>
    </div>
  );
};

export default AdminMenu;
