import React from "react";
import "../css/shopPage.css";
import Product from "../components/products";
import { Link } from "react-router-dom";

function shopPage() {
  return (
    <div>
      <section className="page-header">
        <h2>#stayhome</h2>
        <p>Save more with coupons & up to 70% off!</p>
      </section>
      <section className="shop_product">
        <div className="products-row">
          <Link to="../detailProductPage">
            <Product />
          </Link>

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
      </section>
      <section id="pagination" className="section-p1">
        <p>1</p>
        <p>2</p>
        <p>Next</p>
      </section>
    </div>
  );
}

export default shopPage;
