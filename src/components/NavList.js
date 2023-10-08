import React from "react";
import ActiveLink from "../utils/ActiveLink";

export const NavList = ({ pages, opened }) => {
  const Links = pages.map((page) => (
    <ActiveLink href={page.url} key={page.name}>
      <h3 style={opened ? { opacity: 1 } : undefined} id={page.id}>
        {page.name}
      </h3>
    </ActiveLink>
  ));
  return <>{Links}</>;
};
