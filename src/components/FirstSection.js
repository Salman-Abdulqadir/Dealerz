import React from "react";

//IMPORTING IMAGES
import ellipse from "../images/Ellipse.png";

export default function FirstSection({ title, btn_status }) {
  const title_array = title.split(" ");

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
          {title_array[0] + " " + title_array[1]}
          <br />
          {title_array.map((element, index) => {
            if (index > 1) return element + " ";
            else return '';
          })}
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
          Deserunt natus, accusamus ipsum qui molestias et!
        </p>

        {/* RENDERING THE BUTTON ONLY IN THE HOME PAGE, AND THIS IS BY CHECKING THE "btn_status" */}
        <>
          {btn_status ? (
            <button className="orange-btn">Find out more</button>
          ) : (
            ""
          )}
        </>
      </div>
    </section>
  );
}
