import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink
        className="site-title"
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "cyan" : "white",
          textDecoration: "none",
        })}
      >
        Tasky
      </NavLink>
      <ul>
        <li>
          <NavLink
            to="/todo"
            style={({ isActive }) => ({
              color: isActive ? "cyan" : "white",
              textDecoration: "none",
            })}
          >
            Todo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/form"
            style={({ isActive }) => ({
              color: isActive ? "cyan" : "white",
              textDecoration: "none",
            })}
          >
            Form
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
