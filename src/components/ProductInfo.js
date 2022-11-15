import React from "react";

//IMPORT STYLED COMPONENTS
import styled from "styled-components";

// importing fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

//a review component
const Review = () => {
  return (
    <StyledReview>
      <div className="pfp"></div>
      <div className="review-content">
        <div className="flex">
          <h4>Alex Harpor</h4>
          <div className="rating">
            <FontAwesomeIcon icon={faStar} color="#F3692E" />
            <FontAwesomeIcon icon={faStar} color="#F3692E" />
            <FontAwesomeIcon icon={faStar} color="#F3692E" />
            <FontAwesomeIcon icon={faStar} color="#F3692E" />
            <FontAwesomeIcon icon={faStar} color="#F3692E" />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dicta!
        </p>
        <div className="secondary-imgs">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quo
          corrupti sit sequi optio saepe quod quia necessitatibus excepturi est!
        </p>
      </div>
    </StyledReview>
  );
};

function ProductInfo() {
  return (
    <StyledInfo>
      <h3>Grocery &#62; Fruits &#62; Japan Oranges</h3>

      <Description>
        <div className="product-images">
          <div className="main-img"></div>
          <div className="secondary-imgs">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="product-details">
          <h2>Urbano Jacket</h2>
          <div className="rating">
            <FontAwesomeIcon icon={faStar} color="#F3692E" />
            <FontAwesomeIcon icon={faStar} color="#F3692E" />
            <FontAwesomeIcon icon={faStar} color="#F3692E" />
            <FontAwesomeIcon icon={faStar} color="#F3692E" />
            <FontAwesomeIcon icon={faStar} color="#F3692E" />
          </div>
          <h2 className="orange-text">$99</h2>
          <h3>Details Product</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            voluptate repudiandae, molestiae voluptates exercitationem, porro
            culpa placeat magni vero modi non accusantium, commodi rerum
            deserunt voluptatibus alias. Est, ducimus. Dolor.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            voluptate repudiandae, molestiae voluptates exercitationem, porro
            culpa placeat magni vero modi non accusantium, commodi rerum
            deserunt voluptatibus alias. Est, ducimus. Dolor.
          </p>
          <div className="flex">
            <h4>Quantity</h4>
            <div className="quantity">
              <button>-</button>
              <input type="text" placeholder="2" />
              <button>+</button>
            </div>
            <h4 className="orange-text">Add Note</h4>
          </div>
          <div className="flex">
            <h4>SubTotal</h4>
            <h4>$99</h4>
          </div>
          <div>
            <button className="orange-outline-btn">
              wishList <FontAwesomeIcon icon={faHeart} color="#F3692E" />
            </button>
            <button className="orange-btn">
              Add to cart{" "}
              <FontAwesomeIcon icon={faShoppingCart} color="white" />
            </button>
          </div>
        </div>
      </Description>
      <h3>Description</h3>
      <ReviewDescription>
        <div className="details">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            voluptate repudiandae, molestiae voluptates exercitationem, porro
            culpa placeat magni vero modi non accusantium, commodi rerum
            deserunt voluptatibus alias. Est, ducimus. Dolor. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Quidem tenetur veritatis
            consequuntur, ipsum reprehenderit ea consequatur cum optio eligendi
            nihil officia error omnis reiciendis recusandae exercitationem
            excepturi sapiente aut vitae.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            voluptate repudiandae, molestiae voluptates exercitationem, porro
            culpa placeat magni vero modi non accusantium, commodi rerum
            deserunt voluptatibus alias. Est, ducimus. Dolor.
          </p>
          <h4>
            Reviews <span>(2)</span>
          </h4>
          <Review />
          <Review />
        </div>
        <div className="big-image"></div>
      </ReviewDescription>
    </StyledInfo>
  );
}

const StyledInfo = styled.section`
  h3 {
    margin: 5rem 0rem;
  }
  width: 90%;
  margin: auto;
`;
const StyledReview = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  .pfp {
    flex: 1;
    max-width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #e2e2ea;
  }
  .review-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .secondary-imgs {
    margin: 2rem 0rem;
    display: flex;
    gap: 1rem;
    div {
      border-radius: 10px;
      background-color: #e2e2ea;
      width: 100px;
      height: 100px;
    }
  }
`;
const ReviewDescription = styled.div`
  margin: 4rem auto;
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  .details {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .big-image {
    background-color: #e2e2ea;
    border-radius: 10px;
    width: 100%;
    min-height: 80vh;
    flex: 1;
  }
`;
const Description = styled.div`
  margin: 4rem auto;
  display: flex;
  gap: 5rem;
  flex: 1;
  .product-images {
    flex: 1;
    .main-img {
      background-color: #e2e2ea;
      width: 100%;
      height: 70%;
    }
    .secondary-imgs,
    .review .secondary-imgs {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      margin-top: 2rem;
      height: 30%;
      width: 100%;

      div {
        height: 100%;
        width: 100%;
        background-color: #e2e2ea;
      }
    }
  }
  .product-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    .quantity {
      input,
      button {
        background-color: white;
        color: #f86338;
        border: none;
        width: 50px;
        height: 40px;
      }
      button:hover {
        color: white;
        background-color: #f86338;
      }
      input {
        text-align: center;
      }
    }
    div .orange-outline-btn {
      margin-right: 1rem;
    }
  }
`;

export default ProductInfo;
