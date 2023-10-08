import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";

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
        verticalSwipe="natural"
      >
        <div>
          <img src={slide3} className="sliderImage" alt=" " />
        </div>
        <div>
          <img src={slide2} className="sliderImage" alt=" " />
        </div>
        <div>
          <img src={slide1} className="sliderImage" alt=" " />
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
