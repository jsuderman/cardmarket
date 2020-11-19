import React from 'react';
import "./Navigation.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Navigation() {
  return (
    <nav className="header">
      <Link to="/">
        <img 
          className="header__logo" 
          src="data:image/jpeg;base64,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"
          alt="jordan 1"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <FontAwesomeIcon className="header__searchIcon" icon="search" />

      </div>
      
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne"> 1st line </span>
            <span className="header__optionLineTwo"> sign in </span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne"> 1st line </span>
            <span className="header__optionLineTwo"> sign in </span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne"> 1st line </span>
            <span className="header__optionLineTwo"> sign in </span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionCart">
            <FontAwesomeIcon className="header__shoppingCartIcon" icon="shopping-cart" />
            <span className="header__optionLineTwo header__cartCount" >0</span>
          </div>
        </Link>


      </div>

      
      
    </nav>
  )
}

export default Navigation
