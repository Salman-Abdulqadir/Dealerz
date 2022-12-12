import React from "react";

//Picture
import pic from "../images/pic-person.jpeg";

export default function AchievementCard() {
  return (
    <div className="achievement-card flex">
      <div className="image">
        <img src={pic} alt="" />
      </div>
      <div className="achievement-info">
        <h2>Good Seller!</h2>
        <p className="achievement-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus velit
          explicabo inventore laudantium nihil! Temporibus nisi aliquam debitis
          blanditiis vitae?
        </p>
        <h3>Anna Sarapova</h3>
        <p>your beloved buyer</p>
      </div>
    </div>
  );
}
