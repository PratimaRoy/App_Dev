import React from "react";
import Northern from "../images/northern.jpg";
import { Link } from "react-router-dom";
import SearchIcon from "../images/search.svg";
import FormIcon from "../images/form.svg";
export default function Place() {
  return (
    <div className="ui raised text segment home" style={{ marginTop: "3em" }}>
      <div class="ui stackable three column grid">
        <div class="column">
          <div class="ui segment">
            <img
              src={SearchIcon}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </div>
          <h2>Image Searcher</h2>
          <p>
            This app search for images in Pixabay. This application utlizites
            AJAX and API technologies.
          </p>
          <Link to="/search">Visit the App </Link>
        </div>
        <div class="column">
          <div class="ui segment">
            <img
              src={Northern}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </div>
          <h2>Geolocation</h2>
          <p>
            Geolocation display the image of the Northern or Southern hemisphere
            according your location.
          </p>
          <Link to="/geo">Visit the App </Link>
        </div>

        <div class="column">
          <div class="ui segment">
            <img
              src={FormIcon}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </div>
          <h2>Contact Us</h2>
          <p>A demonstration of forms in ReactJS.</p>
          <Link to="/contact">Visit the App </Link>
        </div>
      </div>
    </div>
  );
}