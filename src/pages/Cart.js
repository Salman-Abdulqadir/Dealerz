import React from "react";

//STYLED COMPONENT
import styled from "styled-components";
//IMPORTING COMPONENTS
import FirstSection from "../components/FirstSection";
import TopItems from "../components/TopItems";
import NewsLetter from "../components/newsletter";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import CartPayment from "../components/CartPayment";

function Cart() {
  return (
    <div className="Cart">
      <FirstSection title={"Your Cart"} btn_status={false} />
      <StyledTitle>
        <div className="flex">
          <p className="orange-text">1. Add To cart</p>
          <p>2. Checkout</p>
          <p>3. Order success</p>
        </div>
        <h2>Your Cart</h2>
      </StyledTitle>
      <StyledCart>
        <div className="cart-items">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <CartPayment />
      </StyledCart>

      <TopItems />
      <NewsLetter />
      <Footer />
    </div>
  );
}
const StyledTitle = styled.div`
  width: 90%;
  margin: 5rem auto;
  .flex {
    width: 50%;
    margin: 3rem 0rem;
  }
`;
const StyledCart = styled.div`
  width: 90%;
  margin: 5rem auto;
  display: flex;
  justify-content: space-between;
`;
export default Cart;
