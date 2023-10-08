import { React, Component } from "react";
import { Content } from "../layouts/Content";
import { Footer } from "../layouts/Footer";
import { HeaderMobile } from "./HeaderMobile";
import NavigationMobile from "../layouts/NavigationMobile";
import { Route, Router } from "wouter";
import { Header } from "../layouts/Header";
import { Navigation } from "../layouts/Navigation";
import { Index } from "../pages/Index";
import { useLocationProperty, navigate } from "wouter/use-location";
import "../styles/App.css";

import useWindowSize from "../utils/useWindowSize";

// const StyleLoader = () => {
//   const appStyle = () => import("../styles/App.css");
//   const mobileStyle = () => import("../styles/MobileApp.css");
//   const { width } = useWindowSize();
//   return width > 768 ? <>{appStyle()}</> : <>{mobileStyle()}</>;
// };

const hashLocation = () => window.location.hash.replace(/^#/, "") || "/";

const hashNavigate = (to) => navigate("#" + to);

const useHashLocation = () => {
  const location = useLocationProperty(hashLocation);
  return [location, hashNavigate];
};

class App extends Component {
  state = {};
  render() {
    return (
      <Router hook={useHashLocation}>
        <div className="background">
          <div className="app">
            <DisplayWidth />
          </div>
          <DisplayBottom />
        </div>
      </Router>
    );
  }
}

const DisplayWidth = () => {
  const { width } = useWindowSize();
  // StyleLoader();

  return (
    <>
      {width > 768 ? (
        <>
          <Header />
          <Navigation />
          <Route path="/">
            <Index />
          </Route>
          <Content />
        </>
      ) : (
        <>
          <Content />
          <Route path="/">
            <HeaderMobile />
          </Route>
        </>
      )}
    </>
  );
};

const DisplayBottom = () => {
  const { width } = useWindowSize();

  return <>{width > 768 ? <Footer /> : <NavigationMobile />}</>;
};

export default App;
