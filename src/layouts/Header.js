import React from "react";
import "../styles/Header.css";
import logo from "../images/logo.jpg";
import { Link } from "wouter";

export const Header = () => {
  return (
    <>
      <div className="logoWrapper">
        <Link href={"/"}>
          <img className="logoDesktop" src={logo} alt="SmilingGeckosLogo" />{" "}
        </Link>
      </div>
    </>
  );
};
