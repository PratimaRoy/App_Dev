import React from "react";
import { Outlet, Link } from "react-router-dom";
const Navbar = function() {
  return (
    <>
      <nav className="ui raised very padded segment">
        <Link to="/" style={{ fontSize: "2em", fontWeight: "bolder" }}>
          Pratima React Project
        </Link>
        <div className="ui right floated header ham">
          <button className="ui button ">
            <Link to="/">Home</Link>
          </button>
          <button className="ui button ">
            <Link to="/search">Image Searcher</Link>
          </button>
          <button className="ui button ">
            <Link to="/geo">Geolocation</Link>
          </button>
          <button className="ui button ">
            <Link to="/contact">Contact Us</Link>
          </button>
        </div>
      </nav>
      {/* <div class="ui pushable segment">
        <div class="ui sidebar vertical menu">
          <button className="ui button ">
            <Link to="/">Home</Link>
          </button>
          <button className="ui button ">
            <Link to="/search">Image Searcher</Link>
          </button>
          <button className="ui button ">
            <Link to="/geo">Geolocation</Link>
          </button>
          <button className="ui button ">
            <Link to="/contact">Contact Us</Link>
          </button>
        </div>
      </div> */}

      <Outlet />
    </>
  );
};
export default Navbar;