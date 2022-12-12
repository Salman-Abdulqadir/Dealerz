import React from "react";

//IMPORTING FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function CollectionCard() {
  return (
    <div className="collection-card flex-column">
      <div className="image"></div>
      <p>Category</p>
      <h3>Tropical Suit</h3>
      <button>
        <FontAwesomeIcon icon={faArrowRight} color="white" />
      </button>
    </div>
  );
}
