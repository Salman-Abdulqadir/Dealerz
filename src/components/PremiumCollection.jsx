import React from "react";

// IMPORTING COMPONENT
import CollectionCard from "./CollectionCard";

export default function PremiumCollection({ title }) {
  return (
    <section className="premium-collection">
      <h2>{title}</h2>
      <ul className="filters flex">
        <li className="active">All Products</li>
        <li>Coats & jackets</li>
        <li>Dressed</li>
        <li>Playsuit</li>
        <li>Short</li>
        <li>Skirt</li>
        <li>T-shirt</li>
      </ul>
      <div className="collection">
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
      </div>
      <button className="orange-btn"> Find out More</button>
    </section>
  );
}
