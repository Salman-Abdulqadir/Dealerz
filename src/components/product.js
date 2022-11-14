import React from "react";

// styled component
import styled from "styled-components";

// importing fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Product({ name, rating, description, price, image }) {
  //representing the rating in starts
  const getRating = (rating) => {
    let i = 0;
    let stars = [];
    for (i; i < Math.floor(rating); i++) {
      stars.push(faStar);
    }
    return stars;
  };
  return (
    <StyledProduct>
      <FontAwesomeIcon className="icon" icon={faHeart} color="#F3692E" />
      <div className="content">
        <div className="product-img">
          <img src={image} alt="" />
        </div>
        <h4>{name}</h4>
        <div className="rating">
          {getRating(rating).map((star) => (
            <FontAwesomeIcon icon={star} color="#F86338" />
          ))}{" "}
          ({rating})
        </div>
        <p className="description">{description}</p>
        <h3>${price}</h3>
      </div>
    </StyledProduct>
  );
}

const StyledProduct = styled.div`
  padding: 1rem;
  background-color: white;
  text-align: center;
  .icon {
    float: right;
  }
  p {
    margin: 2rem 0rem;
  }
  h3 {
    color: #f3692e;
  }
  .rating {
    margin: 1rem;
  }
  .product-img {
    height: 10rem;
    margin-bottom: 5rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export default Product;
