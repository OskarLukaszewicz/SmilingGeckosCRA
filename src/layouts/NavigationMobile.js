import React from "react";

import "../styles/NavigationMobile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

export const NavigationMobile = () => {
  return (
    <div className="navigationMobile">
      <FontAwesomeIcon className="mobileIcon" icon={faAnglesUp} />
    </div>
  );
};
