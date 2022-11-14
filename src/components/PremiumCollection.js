import React from "react";

export default function PremiumCollection() {
  return (
    <section className="premium-collection">
      <h2>Our Premium Collection</h2>
      <ul className="filters flex">
        <li className="active">All Products</li>
        <li>Coats & jackets</li>
        <li>Dressed</li>
        <li>Playsuit</li>
        <li>Short</li>
        <li>Skirt</li>
        <li>T-shirt</li>
      </ul>
      <div className="collection"></div>
    </section>
  );
}
