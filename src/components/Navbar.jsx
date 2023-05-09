import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mt-3">
      <div className="container-fluid px-4 ">
        <NavLink to="/" className="btn btn-secondary ms-3" activeClassName="active">
          Doggo
        </NavLink>
        <div className="ml-auto d-flex">
          <NavLink to="/list" className="btn btn-secondary bg-gray mx-2" activeClassName="active">
            List
          </NavLink>
          <NavLink to="/track" className="btn btn-secondary bg-gray mx-2" activeClassName="active">
            Track
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
