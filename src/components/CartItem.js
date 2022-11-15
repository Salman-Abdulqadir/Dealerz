import React from "react";

//IMPORTING FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

//STYLED COMPONENTS
import styled from "styled-components";

function CartItem() {
  return (
    <StyledCartItem>
      <div className="item-image"></div>
      <div className="item-details">
        <h3>Tropical Playsuit</h3>
        <div className="size flex">
          <h5>size:</h5>
          <h5>M</h5>
        </div>
        <div className="flex">
          <h5>Quantity</h5>
          <div className="quantity">
            <button>-</button>
            <input type="text" placeholder="2" />
            <button>+</button>
          </div>
        </div>
        <div className="flex">
          <h2 className="orange-text">$99</h2>
          <div>
            <button className="orange-outline-btn">
              <FontAwesomeIcon icon={faTrash} color="#F86338" />
            </button>
            <button className="orange-outline-btn">
              Wish List
              <FontAwesomeIcon icon={faHeart} color="#F86338" />
            </button>
          </div>
        </div>
      </div>
    </StyledCartItem>
  );
}

const StyledCartItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  min-width: 40rem;
  margin-bottom: 2rem;
  .item-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .quantity {
      input,
      button {
        background-color: white;
        color: #f86338;
        border: none;
        width: 40px;
        height: 30px;
      }
      button:hover {
        color: white;
        background-color: #f86338;
      }
      input {
        text-align: center;
      }
    }
    .orange-outline-btn {
      margin-right: 1rem;
      background: transparent;
      border-width: 1px;
      padding: 10px 20px;
      font-size: 13px;
    }
  }
  .item-image {
    flex: 1;
    min-height: 15rem;
    min-width: 10rem;
    background-color: #e2e2ea;
  }
`;

export default CartItem;
