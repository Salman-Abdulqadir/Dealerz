import React from "react";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <div>
      <nav>
        <h1>Dealerz.</h1>
        <ul>
          <li>
            <FontAwesomeIcon icon={faPhone} /> <span>Call Center</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            <span>Shipping and Returns</span>
          </li>
        </ul>
      </nav>
      <div className="links">
        <ul className="flex">
          <li>Shop</li>
          <li>Promo</li>
          <li>About</li>
          <li>Blog</li>
        </ul>
        <div className="search-input flex">
          <input type="text" placeholder="Search what you need" />
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="icons flex">
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faShoppingCart} />
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faBell} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
