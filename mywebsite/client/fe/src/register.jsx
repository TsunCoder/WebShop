import React from 'react'
import './register.css'
function Register() {
  return (
    <div class="main">
        <header class="header">
          <div class="logo">
            <img src="./img/logo.png" alt="logo" />
          </div>
        </header>
        <body>
          <div class="page-body">
            <h2>Đăng ký tài khoản</h2>
              <div class="register-form">
                <input id="username" type="text" placeholder='Tên đăng nhập' required/>
                <input id="password" type="password" placeholder='Mật  khẩu' required/>
                <input id="name" type="text" placeholder='Tên người dùng' required/>
                <input id="phonenumber" type="text" placeholder='Số điện thoại' required/>
                <div class="check">
                  <input class="checkbox" type="checkbox" value="frontend" required/>
                  <p>Tôi đồng ý với Điều Khoản Sử Dụng và Chính Sách Bảo Mật</p>
                </div>
                <input id="submit" type="submit" value="Đăng ký" class="btn"/>
              </div>
          </div>
        </body>
    </div>
  )
}

export default Register