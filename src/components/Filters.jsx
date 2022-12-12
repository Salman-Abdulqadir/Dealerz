import React from "react";

//FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

//STYLED COMPONENTS
import styled from "styled-components";

function Filters() {
  return (
    <section className="shop-products">
      <div className="side-filters">
        <ProductSearch>
          <input type="text" placeholder="search products" />
          <FontAwesomeIcon icon={faSearch} />
        </ProductSearch>
        <Categories>
          <h3>Categories</h3>
          <select id="type">
            <option value="Coat">Coats and Jackets</option>
            <option value="jeans">trench Coats</option>
          </select>
          <select id="type">
            <option value="Coat">Dresses</option>
            <option value="jeans">trench Coats</option>
          </select>
          <select id="type">
            <option value="Coat">Playsuit</option>
            <option value="jeans">trench Coats</option>
          </select>
          <select id="type">
            <option value="Coat">Coats and Jackets</option>
            <option value="jeans">trench Coats</option>
          </select>
          <select id="type">
            <option value="Coat">Coats and Jackets</option>
            <option value="jeans">trench Coats</option>
          </select>
        </Categories>
        <div className="featured-products">
          <Card>
            <div className="card-img"></div>
            <div className="info">
              <h4>Tropical PlaySuite</h4>
              <p>$100</p>
            </div>
          </Card>
          <Card>
            <div className="card-img"></div>
            <div className="info">
              <h4>Tropical PlaySuite</h4>
              <p>$100</p>
            </div>
          </Card>
          <Card>
            <div className="card-img"></div>
            <div className="info">
              <h4>Tropical PlaySuite</h4>
              <p>$100</p>
            </div>
          </Card>
          <Card>
            <div className="card-img"></div>
            <div className="info">
              <h4>Tropical PlaySuite</h4>
              <p>$100</p>
            </div>
          </Card>
          <Card>
            <div className="card-img"></div>
            <div className="info">
              <h4>Tropical PlaySuite</h4>
              <p>$100</p>
            </div>
          </Card>
        </div>
      </div>
      <div className="products"></div>
    </section>
  );
}

const ProductSearch = styled.div`
  padding: 10px;
  margin: 2rem 0rem;
  border: 1px solid black;
  border-radius: 5px;
  width: fit-content;
  input {
    border: none;
    outline: none;
    width: 15rem;
  }
`;
const Categories = styled.div`
  h3 {
    margin: 2rem;
  }
  margin: 3rem 0rem;
  select {
    display: block;
    padding: 10px;
    width: 20rem;
    outline: none;
    border: none;
    background: #f4f7f8;
  }
`;
const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 1rem 0rem;
  .card-img {
    width: 5rem;
    height: 5rem;
    background-color: #e2e2ea;
    border-radius: 10px;
  }
  .info p {
    color: #f3692e;
  }
`;
export default Filters;
