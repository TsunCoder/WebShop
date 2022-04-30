import React from "react";
import "../css/homePage.css";
import Product from "../components/products";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from "mdb-react-ui-kit";

function homePage() {
  return (
    <section className="home_page">
      <div className="top">
        <h4>Trade-in-offer</h4>
        <button>Xem bộ sưu tập</button>
      </div>

      <div className="home_product">
        <div className="products-row">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className="products-row">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossOrigin="anonymous"
      ></script>
    </section>
  );
}

export default homePage;
