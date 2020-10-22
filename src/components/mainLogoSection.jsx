import React from "react";
import Logo from "../Assets/logo-2000x2000-white.png";

const MainLogoSection = () => {
  return (
    <section className="background1">
      <div className="row">
        <div className="col">
          <img className="top-logo" src={Logo} alt="Logo" />
        </div>
      </div>
      <div className="row bg1-div">
        <ul className="bg1-list">
          <li className="bg1-list-items">Web Development</li>
          <li className="bg1-list-items">Mobile Development</li>
          <li className="bg1-list-items">Software Consulting</li>
        </ul>
      </div>
    </section>
  );
};

export default MainLogoSection;
