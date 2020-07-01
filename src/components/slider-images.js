import React from "react";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

export default function SliderTeacher(props) {
  const content = props.content;
  return (
    <Slider autoplay={props.play} infinite={props.infinite} {...props.other}>
      {content.map((slide, index) => (
        <div
          key={index}
          style={{ padding: 0, margin: 0, height: "fit-content" }}
        >
          <img src={slide.src} alt="" style={{ width: "100%" }} />
        </div>
      ))}
    </Slider>
  );
}
