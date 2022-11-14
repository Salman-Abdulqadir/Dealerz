import React from "react";

//IMPORTING COMPONENTS
import FirstSection from "../components/FirstSection";
import PremiumCollection from "../components/PremiumCollection";
import AchievementCard from "../components/AchievementCard";
import NewsLetter from "../components/newsletter";
import Footer from "../components/Footer";

export default function Gallery() {
  return (
    <div className="Home">
      <FirstSection title={"Our Gallery, Your Dreams!"} btn_status={false} />
      <PremiumCollection title={"Gallery"} />
      <AchievementCard />
      <NewsLetter />
      <Footer />
    </div>
  );
}
