import React, { useState, useEffect } from "react";

//IMPORTING COMPONENTS
import FirstSection from "../components/FirstSection";
import NewsLetter from "../components/newsletter";
import Footer from "../components/Footer";
import Filters from "../components/Filters";
import Product from "../components/product";
import styled from "styled-components";

function Shop() {
  const [products, setProducts] = useState(null);
  // fetching the product data and creating product components from the result
  const getData = async () => {
    const request = await fetch("https://fakestoreapi.com/products");
    const data = await request.json();
    setProducts(data);
  };
  //loading the data when the page loads up
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Shop">
      <FirstSection title={"Home Shopping, Your Choice!"} btn_status={false} />
      <StyledShop>
        <Filters />
        <Products>
          {products &&
            products.map((product) => (
              <Product
                name={product["title"]}
                description={product["category"]}
                price={product["price"]}
                image={product["image"]}
                rating={product["rating"]["rate"]}
                key={product["id"]}
              />
            ))}
        </Products>
      </StyledShop>
      <NewsLetter />
      <Footer />
    </div>
  );
}

const Products = styled.div`
  display: grid;
  flex: 1;
  height: 120vh;
  overflow-y: scroll;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  row-gap: 2rem;
  column-gap: 2rem;
`;
const StyledShop = styled.div`
  position: relative;
  width: 90%;
  margin: 5rem auto;
  display: flex;
  gap: 5rem;
  flex-wrap: wrap;
`;

export default Shop;
