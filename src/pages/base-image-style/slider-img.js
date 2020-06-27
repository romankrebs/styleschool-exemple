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
        <img src="/img/base-image-style/foto1.jpg" alt="" />
        <p className="legend" />
      </div>
      <div>
        <img src="/img/base-image-style/foto2.jpg" alt="" />
        <p className="legend" />
      </div>
      <div>
        <img src="/img/base-image-style/foto3.jpg" alt="" />
        <p className="legend" />
      </div>
      <div>
        <img src="/img/base-image-style/foto4.jpg" alt="" />
        <p className="legend" />
      </div>
      <div>
        <img src="/img/base-image-style/foto5.jpg" alt="" />
        <p className="legend" />
      </div>
      <div>
        <img src="/img/base-image-style/foto6.jpg" alt="" />
        <p className="legend" />
      </div>
      <div>
        <img src="/img/base-image-style/foto7.jpg" alt="" />
        <p className="legend" />
      </div>
      <div>
        <img src="/img/base-image-style/foto8.jpg" alt="" />
        <p className="legend" />
      </div>
      <div>
        <img src="/img/base-image-style/foto9.jpg" alt="" />
        <p className="legend" />
      </div>
    </Carousel>
  );
}
