import React from "react";
import { Link } from "react-router-dom";
import "../css/register.css";

function register() {
  return (
    <div className="auth_page">
      <h1>Đăng ký</h1>
      <input
        className="account"
        type="text"
        placeholder="Tên đăng nhập"
      />
      <input
        className="username"
        type="text"
        placeholder="Họ và tên"
      />
      <input
        className="phone"
        type="text"
        placeholder="Số điện thoại"
      />
      <br />
      <input className="pass" type="password" placeholder="Mật khẩu" />
      <button
        className="btn_register"
        type="submit"
        //disabled={username && password ? false : true}
      >
        Đăng ký
      </button>
      <br />
      <div className="login">
        <small>Bạn đã có tài khoản? </small>
        <Link to="/signin">Đăng nhập</Link>
      </div>
    </div>
  );
}
export default register;
