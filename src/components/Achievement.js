import React from "react";

//IMPORTING IMAGES
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
import logo4 from "../images/logo4.png";
import logo5 from "../images/logo5.png";

//COMPONENTS
import AchievementCard from "./AchievementCard";

export default function Achievement({ render_all }) {
  return (
    <section className="achievement">
      <h2>Our Achievements</h2>
      <div className="logos flex">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
      </div>
      <AchievementCard />
    </section>
  );
}
