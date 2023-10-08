import React from "react";

import "../styles/NavigationMobile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faAnglesUp } from "@fortawesome/free-solid-svg-icons";

import { NavList } from "../components/NavList";

class NavigationMobile extends React.Component {
  state = {
    opened: false,
  };

  onClickHandle = () => {
    this.setState({
      opened: !this.state.opened,
    });
  };

  pages = [
    { url: "/blog", name: "Blog" },
    { url: "/about", name: "O nas" },
    { url: "/offer", name: "Oferta" },
    { url: "/contact", name: "Kontakt" },
    { url: "/storeregulations", name: "Regulamin" },
  ];

  styles = { height: "56%", transition: "0.7s" };

  render() {
    return (
      <div
        className="navigationMobile"
        style={this.state.opened ? this.styles : undefined}
        onClick={this.onClickHandle}
      >
        {!this.state.opened ? (
          <FontAwesomeIcon className="mobileIcon" icon={faAnglesUp} />
        ) : (
          <FontAwesomeIcon className="mobileIcon" icon={faAnglesDown} />
        )}
        <NavList pages={this.pages} opened={this.state.opened} />
      </div>
    );
  }
}

export default NavigationMobile;
