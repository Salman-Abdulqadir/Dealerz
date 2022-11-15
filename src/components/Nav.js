import React from "react";

//STYLED COMPONENTS
import styled from "styled-components";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";

// REACT ROUTER
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  let activeLink = useLocation();

  //STYLING THE ACTIVE LINK
  const checkActive = (path) => {
    const style = {
      background: "#F86338",
      borderRadius: "10px",
      color: "white",
      padding: "10px",
    };
    return activeLink.pathname === path ? style : {};
  };

  return (
    <div className="navigation">
      <nav>
        <h1>
          <Logo to={"/"}>Dealerz.</Logo>
        </h1>
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
          <li>
            <StyledLink style={checkActive("/shop")} to={"/shop"}>
              Shop
            </StyledLink>
          </li>
          <li>
            <StyledLink style={checkActive("/gallery")} to={"gallery"}>
              Gallery
            </StyledLink>
          </li>
          <li>
            <StyledLink style={checkActive("/detail")} to={"/detail"}>
              Product Detail
            </StyledLink>
          </li>
          <li>
            <StyledLink style={checkActive("/cart")} to={"/cart"}>
              Cart
            </StyledLink>
          </li>
        </ul>
        <div className="search-input flex">
          <input type="text" placeholder="Search what you need" />
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="icons flex">
          <FontAwesomeIcon icon={faHeart} />
          <StyledLink to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </StyledLink>

          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faBell} />
        </div>
      </div>
    </div>
  );
};

const StyledLink = styled(Link)`
  transition: all 0.5s ease;
  text-decoration: none;
  color: black;
  cursor: pointer;
  &:hover {
    color: #f86338;
  }
`;
const Logo = styled(StyledLink)`
  display: block;
  color: #f86338;
`;
export default Nav;
