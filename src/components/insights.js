import React from "react";

// IMPORTING COMPONENTS
import InsightCard from "./insightCard";

export default function Insights() {
  return (
    <section className="insights">
      <header className="flex">
        <h2>
          Get Better Insights <br /> From our Articles
        </h2>
        <h5>Read more</h5>
      </header>
      <div className="insight-cards">
        <InsightCard />
        <InsightCard />
        <InsightCard />
        <InsightCard />
      </div>
    </section>
  );
}
