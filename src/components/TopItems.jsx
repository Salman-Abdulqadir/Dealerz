import React from "react";

//IMPORTING COMPONENTS
import ItemCard from "./ItemCard";

//IMPORTING IMAGES
import dot from "../images/empty_circle.png";
import filled_dot from "../images/filled_circle.png";

export default function TopItems() {
  return (
    <section className="top-items">
      <h2>Top Items</h2>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        numquam doloremque esse impedit assumenda. At minima suscipit officia
        soluta alias.
      </p>
      <div className="items">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
      <div className="dots">
        <img src={dot} alt="" />
        <img src={dot} alt="" />
        <img src={filled_dot} alt="" />
        <img src={dot} alt="" />
        <img src={dot} alt="" />
      </div>
    </section>
  );
}
