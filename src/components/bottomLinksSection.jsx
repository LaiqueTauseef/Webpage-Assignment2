import React from "react";

const BottomLinksSection = () => {
  return (
    <section id="bottomLinks">
      <ul className="bottom-links ">
        <li className="inline-link-items">Home</li>
        <li className="inline-link-items">Contact Us</li>
        <li className="inline-link-items">Privacy</li>
        <li className="inline-link-items">Terms & Conditions</li>
      </ul>
      <p className="section-white" style={{ fontSize: "small" }}>
        &#169; 2019 CHLELA INC. All rights reserved
      </p>
      <p className="section-white" style={{ fontSize: "small" }}>
        ♥ From San Francisco, CA
      </p>
    </section>
  );
};

export default BottomLinksSection;
