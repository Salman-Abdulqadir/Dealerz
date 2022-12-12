import React from "react";

//STYLED COMPONENTS
import styled from "styled-components";

function CartPayment() {
  return (
    <StyledCartPayment>
      <div className="coupon">
        <h3>Have a coupon</h3>
        <input type="text" placeholder="Enter your coupon here" />
        <button className="orange-btn">Apply</button>
      </div>
      <div className="cart-total">
        <h3>Cart Total</h3>
        <h4 className="flex">
          Subtotal: <span>$150</span>
        </h4>
        <h4 className="flex">
          Shipping: <span>Free shipping</span>
        </h4>
        <h4 className="flex">
          Total: <span>$300</span>
        </h4>
        <button className="orange-btn">Checkout</button>
      </div>
    </StyledCartPayment>
  );
}

const StyledCartPayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .coupon {
    padding: 2rem;
    width: fit-content;
    background-color: white;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    input,
    button {
      padding: 1rem;
      border-radius: 10px;
    }
    input {
      border: 1px solid #f86338;
      width: 20rem;
    }
  }
  .cart-total {
    width: fit-content;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;

    h4 span {
      font-weight: lighter;
      margin-left: 10rem;
    }
    .orange-btn {
      width: 100%;
      text-align: center;
    }
  }
`;

export default CartPayment;
