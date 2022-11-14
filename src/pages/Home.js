import React from "react";

//IMPORTING COMPONENTS
import Nav from "../components/Nav";
import FirstSection from "../components/FirstSection";
import PremiumCollection from "../components/PremiumCollection";
import TopItems from "../components/TopItems";
import Story from "../components/story";

export default function Home() {
  return (
    <div className="App">
      <Nav />
      <FirstSection />
      <PremiumCollection />
      <TopItems />
      <Story/>

    </div>
  );
}
