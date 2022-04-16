import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "../css/header.css";

function Header() {
  return (
    <div className="header">
      <img className="header_logo" src={"./src/asset/logo.png"} alt="logo" />

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_navbar">
        <div className="header_option">
          <span className="option_lineOne">Hello</span>
          <span className="option_lineTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="option_lineOne">Return</span>
          <span className="option_lineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="option_lineOne">Your</span>
          <span className="option_lineTwo">Prime</span>
        </div>
        <div className="header_OptionBasket">
          <span className="option_lineOne">Cart</span>
          <span className="header_OptionLineTwo
          header-basketCount"><ShoppingBasketIcon />0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
