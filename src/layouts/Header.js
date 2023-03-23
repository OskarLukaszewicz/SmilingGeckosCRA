import React from "react";
import "../styles/Header.css";
import logo from "../images/logo.jpg";
import DemoCarousel from "../utils/DemoCarousel";

export const HeaderMobile = () => {
  return (
    <div className="headerMobile">
      <img className="logo" src={logo} alt="SmilingGeckosLogo" />
      <div className="demo-carousel">
        <DemoCarousel />
      </div>
      <h1>Smiling Geckos</h1>
    </div>
  );
};
