import React from "react";

//STYLED COMPONENT
import styled from "styled-components";
//IMPORTING COMPONENTS
import FirstSection from "../components/FirstSection";
import TopItems from "../components/TopItems";
import NewsLetter from "../components/newsletter";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";

function Cart() {
  return (
    <div className="Home">
      <FirstSection title={"Your Cart"} btn_status={false} />

      <StyledCart>
        <div className="cart-items">
          <CartItem />
        </div>
      </StyledCart>

      <TopItems />
      <NewsLetter />
      <Footer />
    </div>
  );
}
const StyledCart = styled.div``;
export default Cart;
