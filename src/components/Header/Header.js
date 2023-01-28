import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useStateValue } from "../StateProvider";

const Header = () => {
const [{ cart }] = useStateValue();
  console.log(cart);
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=" "
        />
        
      </Link>

      {/* search bar */}

      <div className="header_search">
        <input type="text" className="search_input" />
        <SearchIcon className="searchIcon" />
      </div>

      {/*3links  */}

      <div className="header_nav">
        {/* 1st link */}
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionOne">Hello</span>
            <span className="header_optionTwo">Sign In</span>
          </div>
        </Link>

        {/* 2nd link */}
        <Link to="/order" className="header_link">
          <div className="header_option">
            <span className="header_optionOne">Returns</span>
            <span className="header_optionTwo">&Orders</span>
          </div>
        </Link>

        {/* 3rd link */}
        <Link to="/prime" className="header_link">
          <div className="header_option">
            <span className="header_optionOne">Your</span>
            <span className="header_optionTwo">prime</span>
          </div>
        </Link>

        {/* 4ht link */}
        <Link to="/checkout" className="header_link">
          <div className="header_optionCart">
            {/* shopping basket icon */}

            <AddShoppingCartIcon />
            {/* number of items tems in cart */}

            <span className="header_optionTwo header_cartCount">{cart?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
