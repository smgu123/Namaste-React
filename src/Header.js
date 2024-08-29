import React from 'react'
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from 'react-router-dom';
import './header.css';
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header_logo">
          <StorefrontIcon
            className="header__logoImage"
            fontSize="large"
          ></StorefrontIcon>
          <h2 className="header__logoTitle">eshop</h2>
        </div>
      </Link>
      <div className="header_search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>
      <div className="header__nav">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo">signIn</span>
          </div>
        </Link>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">shop</span>
        </div>
        <Link to="/Checkout" style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon className="nav__itemBasket"></ShoppingBasketIcon>
            <span className="nav__itemLineTwo nav__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
