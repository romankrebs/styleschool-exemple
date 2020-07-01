import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Component() {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      showStatus={false}
      showIndicators={true}
      autoPlay={true}
      interval={4000}
      transitionTime={500}
    >
      <div>
        <img src="/img/from-classic-to-postmodern/slide06.jpg" alt="" />
        <p className="legend" />
      </div>
      <div>
        <img src="/img/from-classic-to-postmodern/slide07.jpg" alt="" />
        <p className="legend" />
      </div>
      <div>
        <img src="/img/from-classic-to-postmodern/slide08.jpg" alt="" />
        <p className="legend" />
      </div>
      <div>
        <img src="/img/from-classic-to-postmodern/slide09.jpg" alt="" />
        <p className="legend" />
      </div>
      <div>
        <img src="/img/from-classic-to-postmodern/slide10.jpg" alt="" />
        <p className="legend" />
      </div>
    </Carousel>
  );
}
