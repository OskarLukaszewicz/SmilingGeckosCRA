import React from "react";
import { Link, useRoute } from "wouter";

const ActiveLink = (props) => {
  const [isActive] = useRoute(props.href);
  return (
    <Link {...props}>
      <span className={isActive ? "active" : ""}>{props.children}</span>
    </Link>
  );
};

export default ActiveLink;
