import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar-section">
        <nav className="navbar p-0p5 flex m-0">
          <Link to="/">
            <div className="brand-name m-0p5 fs-1p5">Naturewell</div>
          </Link>

          <div className="search-bar my-0p5 mx-auto">
            <input
              className="search-input fs-1p2 px-1 py-0 border-none"
              type="text"
              placeholder="Search for products"
              onChage
            />
            <button
              className=" hy-search-btn absolute border-none"
              type="submit"
            >
              <i className="fas fa-search fs-1p2" title="search"></i>
            </button>
          </div>
          <div className="account-basket-btn my-0 mx-1 absolute">
            <a href="/pages/wishlist.html">
              <i className="far fa-heart m-auto"></i>
            </a>
            {/* <a href="/pages/login.html"> */}
            <Link to="/signup">
              <button className="nav-btn fs-1p2 p-0p5 m-0p5 border-none">
                Sign up | Log In
              </button>
            </Link>
            {/* </a> */}
            {/* <a href="/pages/cartpage.html"> */}
            <button className="nav-btn fs-1p2 p-0p5 m-0p5 border-none">
              <Link to="/cart">Cart</Link>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            {/* </a> */}
          </div>
        </nav>
      </div>
    </>
  );
}
