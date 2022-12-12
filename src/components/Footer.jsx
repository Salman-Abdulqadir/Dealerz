import React from "react";

//IMPORTING STYLED COMPONENTS
import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <div className="image"></div>
      <div className="footer-text">
        <div className="logo">
          <h2>Dealerz.</h2>
          <p>privacy policy</p>
          <p>Terms and conditions</p>
        </div>
        <h4>@2022 All rights reserved.</h4>
      </div>
      <div className="buttons">
        <button>YT</button>
        <button>FB</button>
        <button>TW</button>
        <button>IG</button>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  min-height: 40vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: white;
  padding: 3rem;
  .image {
    width: 100%;
    height: 15rem;
    margin-right: 3rem;
    background-color: #e2e2ea;
  }
  .footer-text {
    .logo {
      h2 {
        color: #f86338;
      }
    }
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  }
  .buttons button {
    border: none;
    background-color: #f86338;
    color: white;
    font-size: 10px;
    padding: 1rem;
    border-radius: 25px;
    margin: 2rem 10px;
  }
`;

export default Footer;
