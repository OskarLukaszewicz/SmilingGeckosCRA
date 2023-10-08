import React from "react";
import ActiveLink from "../utils/ActiveLink";

export const GekHeader = () => {
  return (
    <div className="header">
      <ActiveLink href={"/offer/gekony-lamparcie"}>
        {" "}
        <ActiveLink href="/offer/gekony-nowej-kaledonii"></ActiveLink>
        <h3>GEKONY LAMPARCIE</h3>
      </ActiveLink>
      <ActiveLink href={"/offer/gekony-gruboogonowe"}>
        <h3>GEKONY GRUBOOGONOWE </h3>
      </ActiveLink>
      <ActiveLink href={"/offer/gekony-nowej-kaledonii"}>
        <h3>GEKONY NOWEJ KALEDONII</h3>
      </ActiveLink>
    </div>
  );
};
