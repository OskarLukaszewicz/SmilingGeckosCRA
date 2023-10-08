import React, { Component } from "react";
import expandArrow from "../icons/expandArrow.svg";

const Arrow = (props) => {
  const arrowStyle = {
    transform: "rotate(0.5turn) translate(-10px, -8px)",
  };
  return (
    <img
      src={expandArrow}
      alt="arrow"
      style={props.opened ? arrowStyle : undefined}
      className="expandArrow"
    />
  );
};

class NavMenu extends Component {
  state = {
    opened: false,
  };

  onClickHandle = () => {
    this.setState({
      opened: !this.state.opened,
    });
  };

  style = {
    height: "160px",
  };

  render() {
    return (
      <>
        <div
          className="navMenuButton navDiv"
          style={this.state.opened ? this.style : undefined}
          onClick={this.onClickHandle}
        >
          <span>
            <h3>
              Oferta
              <Arrow opened={this.state.opened} />
            </h3>
          </span>

          <div className="navMenu">{this.props.children}</div>
        </div>
      </>
    );
  }
}

export default NavMenu;
