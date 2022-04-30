import React from "react";
import "../css/header.css";
import { Link } from "react-router-dom";
import { FaOutdent } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
export default function () {
  return (
    <div>
      <section id="header">
        <img src="img/logo.png" className="logo" alt="" />
        <div>
          <ul id="navbar">
            <li>
              <Link to="" style={{ textDecoration: "none" }}>
                <p className="page">Home</p>
              </Link>
            </li>

            <li>
              <Link to="shopPage" style={{ textDecoration: "none" }}>
                <p className="page">Shop</p>
              </Link>
            </li>

            <li>
              <Link to="" style={{ textDecoration: "none" }}>
                <p>Blog</p>
              </Link>
            </li>
            <li>
              <Link to="" style={{ textDecoration: "none" }}>
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link to="signInPage" style={{ textDecoration: "none" }}>
                <p>Account</p>
              </Link>
            </li>
            <li>
              <p>
                <BiShoppingBag />
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
