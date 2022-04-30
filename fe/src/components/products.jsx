import React from "react";
import "../css/product.css";
export default function products() {
  return (
    <section id="product">
      <div className="pro-containter">
        <div className="pro">
          <img className="img-product" src="img/products/f1.jpg" alt="" />
          <div className="des">
            <span>Adidas</span>
            <h5>Cartoon Astronaut T-Shirts</h5>
            <div className="star">
              <i className="fas fa-star"></i>
            </div>
            <h4>$78</h4>
          </div>
            <a href="">
              <img className="cart" src="img/icon/add-to-basket.png" alt="" />
            </a>
        </div>
      </div>
    </section>
  );
}
