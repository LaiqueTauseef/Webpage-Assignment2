import React from "react";
import Tweet from "../Assets/logo.png";

const TweetsSection = () => {
  return (
    <section className="section-blue">
      <div className="row">
        <div className="col">
          <h1>Tweets</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img className="center-block" src={Tweet} alt="" />
        </div>
      </div>
    </section>
  );
};

export default TweetsSection;
