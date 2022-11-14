import React from "react";

//IMPORTING IMAGES
import ellipse from "../images/Ellipse.png";

export default function FirstSection() {
  return (
    <section className="first-section">
      <div className="vectors">
        <img src={ellipse} className="img1" alt="ellipse1" />
        <img src={ellipse} className="img2" alt="ellipse2" />
        <img src={ellipse} className="img3" alt="ellipse3" />
        <div className=" circle circle-1"></div>
        <div className=" circle circle-2"></div>
      </div>
      <div className="flex-column">
        <h2>
          Your Premium <br /> Sound, unpluged!
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
          Deserunt natus, accusamus ipsum qui molestias et!
        </p>
        <button className="orange-btn">Find out more</button>
      </div>
    </section>
  );
}
