import React from "react";
import "../css/product.css";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function product({image, name, price, rating}) {
  return (
    <div className="product">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <img src= {image} alt="product1" />
      <div className="product_infor">
        <p>{name}</p>
        <div className="product_price">
          <strong>{price}</strong>
          <small>đ</small>
        </div>
        <div className="product_rating">
          {Array(rating).fill().map((_, i) => (
            <span className="fa fa-star checked"></span>
          ))}
        </div>
      </div>

      <button>Thêm vào giỏ<AddShoppingCartIcon/></button>
    </div>
  );
}

export default product;
