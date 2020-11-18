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
