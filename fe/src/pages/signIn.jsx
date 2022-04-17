import React from "react";
import { Link } from "react-router-dom";
import "../css/signin.css";
import Facebook from "@material-ui/icons/Facebook";
import Apple from "@material-ui/icons/Apple";
import Google from "@material-ui/icons/GolfCourse";
function signIn() {
  return (
    <div className="signin">
      <div>
        <img src={"./src/asset/bg_signin.png"} alt="Đây là background" />
      </div>
      <div className="auth_page">
        <h1>Đăng nhập</h1>
        <input
          className="account"
          type="text"
          placeholder="Email/Số điện thoại/Tên đăng nhập"
        />
        <br />
        <input className="pass" type="password" placeholder="Mật khẩu" />
        <button
          className="btn_signin"
          type="submit"
          //disabled={username && password ? false : true}
        >
          Đăng nhập
        </button>
        <div className="forgetPass">
          <Link to="/">
            <p>Quên mật khẩu</p>
          </Link>
        </div>
        <p className="or">Hoặc đăng nhập bằng</p>
        <div className="link">
          <Link to="/">
            <Facebook />
          </Link>
          <Link to="/">
            <Google />
          </Link>
          <Link to="/">
            <Apple />
          </Link>
        </div>
        <div className="gotoregister">
          <small>Bạn mới biết đến Beer? </small>
          <Link to="/register">Đăng ký</Link>
        </div>
      </div>
    </div>
  );
}
export default signIn;
