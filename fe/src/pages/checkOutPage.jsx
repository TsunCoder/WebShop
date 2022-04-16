import React from "react";
import "../css/checkOutPage.css";
function checkout() {
  return (
    <div className="checkOut">
      <div className="checkout_top">
        <div className="checkout_infor">
          <input type="checkbox" className="checkbox"/>
          <p className="name">Sản phẩm</p>
          <p className="price">Đơn giá</p>
          <p className="quantity">Số lượng</p>
          <p className="total">Thành tiền</p>
        </div>
      </div>
    </div>
  );
}

export default checkout;
