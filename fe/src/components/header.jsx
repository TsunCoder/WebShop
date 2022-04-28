import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "../css/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>

      <div className="super_container">
        <header class="header">
          <div class="top_bar">
            <div class="container">
              <div class="row">
                <div class="col d-flex flex-row">
                  <div class="top_bar_contact_item">
                    <div class="top_bar_icon">
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918577/phone.png"
                        alt=""
                      />
                    </div>
                    +84901678971
                  </div>
                  <div class="top_bar_contact_item">
                    <div class="top_bar_icon">
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918597/mail.png"
                        alt=""
                      />
                    </div>
                    <a href="mailto:fastsales@gmail.com">anhem@gmail.com</a>
                  </div>
                  <div class="top_bar_content ml-auto">
                    <div class="top_bar_menu">
                      <ul class="standard_dropdown top_bar_dropdown">
                        <li>
                          {" "}
                          <a href="#">
                            Tiếng Việt<i class="fas fa-chevron-down"></i>
                          </a>
                          <ul>
                            <li>
                              <a href="#">Tiếng Anh</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div class="top_bar_user">
                      <div class="user_icon">
                        <img
                          src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918647/user.svg"
                          alt=""
                        />
                      </div>
                      <div>
                        <Link to="/register">
                          <a>Đăng ký</a>
                        </Link>
                      </div>
                      <div>
                        <Link to="/signIn">
                          <a>Đăng nhập</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="header_main">
            <div class="container">
              <div class="row">
                <div class="col-lg-2 col-sm-3 col-3 order-1">
                  <div class="logo_container">
                    <div class="logo">
                      <img src={"./src/asset/logo.png"} alt="" />
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                  <div class="header_search">
                    <div class="header_search_content">
                      <div class="header_search_form_container">
                        <form action="#" class="header_search_form clearfix">
                          {" "}
                          <input
                            type="search"
                            required="required"
                            class="header_search_input"
                            placeholder="Tìm kiếm sản phẩm . . ."
                          />
                          <button
                            type="submit"
                            class="header_search_button trans_300"
                            value="Submit"
                          >
                            <img
                              src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918770/search.png"
                              alt=""
                            />
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                  <div class="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                    <div class="wishlist d-flex flex-row align-items-center justify-content-end">
                      <div class="wishlist_icon">
                        <img
                          src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918681/heart.png"
                          alt=""
                        />
                      </div>
                      <div class="wishlist_content">
                        <div class="wishlist_text">
                          <a href="#">Yêu thích</a>
                        </div>
                        <div class="wishlist_count">0</div>
                      </div>
                    </div>
                    <div class="cart">
                      <div class="cart_container d-flex flex-row align-items-center justify-content-end">
                        <div class="cart_icon">
                          {" "}
                          <img
                            src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918704/cart.png"
                            alt=""
                          />
                          <div class="cart_count">
                            <span>0</span>
                          </div>
                        </div>
                        <div class="cart_content">
                          <div class="cart_text">
                            <Link to="/checkout">
                              <a>Giỏ hàng</a>
                            </Link>
                          </div>
                          <div class="cart_price">$0</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <nav class="main_nav">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="main_nav_content d-flex flex-row">
                    <div class="main_nav_menu">
                      <ul class="standard_dropdown main_nav_dropdown">
                        <li>
                          <a href="#">
                            Home<i class="fas fa-chevron-down"></i>
                          </a>
                        </li>
                        <li class="hassubs">
                          {" "}
                          <a href="#">
                            Thể loại<i class="fas fa-chevron-down"></i>
                          </a>
                        </li>
                        <li class="hassubs">
                          {" "}
                          <a href="#">
                            Nổi bật<i class="fas fa-chevron-down"></i>
                          </a>
                        </li>
                        <li class="hassubs">
                          {" "}
                          <a href="#">
                            Pages<i class="fas fa-chevron-down"></i>
                          </a>
                        </li>
                        <li>
                          <a href="blog.html">
                            Blog<i class="fas fa-chevron-down"></i>
                          </a>
                        </li>
                        <li>
                          <a href="contact.html">
                            Contact<i class="fas fa-chevron-down"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="menu_trigger_container ml-auto">
                      <div class="menu_trigger d-flex flex-row align-items-center justify-content-end">
                        <div class="menu_burger">
                          <div class="menu_trigger_text">menu</div>
                          <div class="cat_burger menu_burger_inner">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Header;
