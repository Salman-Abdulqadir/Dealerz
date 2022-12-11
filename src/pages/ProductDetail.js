import React from "react";

//COMPONENTS
import ProductInfo from "../components/ProductInfo";

import Footer from "../components/Footer";
import TopItems from "../components/TopItems";

function ProductDetail() {
  return (
    <section>
      <ProductInfo />
      <TopItems/>
      <Footer/>
    </section>
  );
}


export default ProductDetail;
