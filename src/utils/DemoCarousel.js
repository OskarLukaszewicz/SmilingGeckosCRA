import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import logo from "../images/logo.jpg";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        swipeable={false}
        centerMode={true}
        centerSlidePercentage={80}
        verticalSwipe="natural"
      >
        <div>
          <img src={logo} alt=" " />
        </div>
        <div>
          <img src={logo} alt=" " />
        </div>
        <div>
          <img src={logo} alt=" " />
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
