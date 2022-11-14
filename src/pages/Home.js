import React from "react";

//IMPORTING COMPONENTS
import FirstSection from "../components/FirstSection";
import PremiumCollection from "../components/PremiumCollection";
import TopItems from "../components/TopItems";
import Story from "../components/story";
import Achievement from "../components/Achievement";
import Insights from "../components/insights";
import NewsLetter from "../components/newsletter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="Home">
      <FirstSection title={"Your Premium Sound, unpluged!"} btn_status={true} />
      <PremiumCollection title={"Our Premium Collection"} />
      <TopItems />
      <Story />
      <Achievement render_all={true}/>
      <Insights />
      <NewsLetter />
      <Footer />
    </div>
  );
}
