import React from "react";

//IMPORTING FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function NewsLetter() {
  return (
    <div className="news-letter">
      <h2>Join our News Letters</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, id
        velit. <br /> Mollitia fugit molestiae reiciendis.
      </p>
      <div className="newsletter-input">
        <input type="text" placeholder="Insert your mail here" />
        <button className="orange-btn">
          <FontAwesomeIcon icon={faArrowAltCircleRight} color="white" />
        </button>
      </div>
    </div>
  );
}
