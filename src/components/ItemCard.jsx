import React from "react";

export default function ItemCard() {
  return (
    <div className="item">
      <span className="sale">SALE</span>
      <div className="item-card">
        <div className="image"></div>
        <div className="info">
          <h3>Tropical Suit Hyped</h3>
          <p>Apple cherry</p>
          <h4>
            $384 <span>$454</span>
          </h4>
        </div>
      </div>
    </div>
  );
}
