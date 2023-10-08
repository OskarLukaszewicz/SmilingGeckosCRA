import React from "react";
import "../styles/Index.css";
import ActiveLink from "../utils/ActiveLink";

export const Index = () => {
  return (
    <>
      <div className="banners">
        <ActiveLink href="/offer/gekony-lamparcie">
          <div className="indexBanner" style={{ cursor: "pointer" }}>
            <img src={require(`../images/lamparci.jpg`)} alt="lamparci" />
            <div className="bannerMask">
              <span className="bannerMaskText">GEKONY LAMPARCIE</span>
            </div>
          </div>
        </ActiveLink>
        <ActiveLink href="/offer/gekony-gruboogonowe">
          <div className="indexBanner" style={{ cursor: "pointer" }}>
            <img
              src={require(`../images/gruboogonowy.jpg`)}
              alt="gruboogonowy"
            />
            <div className="bannerMask">
              <span className="bannerMaskText">GEKONY GRUBOOGONOWE</span>
            </div>
          </div>
        </ActiveLink>
        <ActiveLink href="/offer/gekony-nowej-kaledonii">
          <div className="indexBanner" style={{ cursor: "pointer" }}>
            <img src={require(`../images/kaledonia.jpg`)} alt="kaledonia" />
            <div className="bannerMask">
              <span style={{ left: "50%" }} className="bannerMaskText">
                GEKONY NOWEJ KALEDONII
              </span>
            </div>
          </div>
        </ActiveLink>
      </div>
    </>
  );
};
