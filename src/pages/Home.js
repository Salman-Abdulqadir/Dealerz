import React from "react";

//IMPORTING COMPONENTS
import Nav from "../components/Nav";
import FirstSection from "../components/FirstSection";
import PremiumCollection from "../components/PremiumCollection";

export default function Home() {
  return (
    <div className="App">
      <Nav />
      <FirstSection/>
      <PremiumCollection/>
    </div>
  );
}