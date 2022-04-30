import React from "react";
import "../css/detailProductPage.css";

function detailProductPage() {
  return (
    <section id="procDetails" className="section-p1">
      <div className="single-pro-image">
        <img src="img/products/f1.jpg" width="100%" id="MainImg" alt="" />
        <div className="small-img-group">
          <div className="small-img-col">
            <img
              className="small-img"
              src="img/products/f1.jpg"
              width="100%"
              alt=""
            />
          </div>
          <div className="small-img-col">
            <img
              className="small-img"
              src="img/products/f2.jpg"
              width="100%"
              alt=""
            />
          </div>
          <div className="small-img-col">
            <img
              className="small-img"
              src="img/products/f3.jpg"
              width="100%"
              alt=""
            />
          </div>
          <div className="small-img-col">
            <img
              className="small-img"
              src="img/products/f4.jpg"
              width="100%"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="single-pro-details">
        <h6>Home / T-Shirt</h6>
        <h4>Men's Fashion T-Shirt</h4>
        <h2>$1</h2>
        <select name="" id="">
          <option>Chọn Size</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
        <input type="number" value="1" />
        <button>Thêm vào giỏ</button>
        <h4>Mô tả</h4>
        <span>
          Mô tả chi tiết Mô tả chi tiết Mô tả chi tiết Mô tả chi tiết Mô tả chi
          tiết Mô tả chi tiết Mô tả chi tiết Mô tả chi tiết Mô tả chi tiết Mô tả
          chi tiết Mô tả chi tiết Mô tả chi tiết Mô tả chi tiết Mô tả chi tiết
          Mô tả chi tiết Mô tả chi tiết Mô tả chi tiết Mô tả chi tiết Mô tả chi
          tiết Mô tả chi tiết Mô tả chi tiết Mô tả chi tiết Mô tả chi tiết Mô tả
          chi tiết Mô tả chi tiết Mô tả chi tiết Mô tả chi tiết
        </span>
      </div>
    </section>
  );
}

export default detailProductPage;
