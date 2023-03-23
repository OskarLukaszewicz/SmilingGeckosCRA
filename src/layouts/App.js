import React, { Component } from "react";
import "../styles/App.css";
import useWindowSize from "../utils/useWindowSize";

import { Content } from "../layouts/Content";
import { Footer } from "../layouts/Footer";
import { HeaderMobile } from "../layouts/Header";
import { NavigationMobile } from "../layouts/NavigationMobile";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="app">
        <DisplayWidth />
      </div>
    );
  }
}

const DisplayWidth = () => {
  const { width } = useWindowSize();

  return (
    <>
      {width > 768 ? (
        <>
          <Content></Content>
          <Footer />
        </>
      ) : (
        <>
          <HeaderMobile></HeaderMobile>
          <NavigationMobile></NavigationMobile>
        </>
      )}
    </>
  );
};

export default App;
