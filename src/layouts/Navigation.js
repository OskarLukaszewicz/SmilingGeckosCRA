import React from "react";
import { NavList } from "../components/NavList";
import "../styles/Navigation.css";
import NavMenu from "../components/NavMenu";

export const Navigation = () => {
  const pages = [
    { url: "/blog", name: "Blog" },
    { url: "/about", name: "O nas" },
    { url: "/contact", name: "Kontakt" },
    { url: "/storeregulations", name: "Regulamin" },
  ];
  const pages2 = [
    {
      url: "/offer/gekony-lamparcie",
      name: "GEKONY LAMPARCIE",
      id: "lampart",
    },
    {
      url: "/offer/gekony-gruboogonowe",
      name: "GEKONY GRUBOOGONOWE",
      id: "gruboogonowy",
    },
    {
      url: "/offer/gekony-nowej-kaledonii",
      name: "GEKONY NOWEJ KALEDONII",
      id: "kaledonia",
    },
  ];

  return (
    <>
      <div className="navigation">
        <div className="navDiv">
          <NavList pages={pages} />
        </div>
      </div>
      <div className="navigation">
        <NavMenu>
          <NavList pages={pages2} />
        </NavMenu>
      </div>
    </>
  );
};
