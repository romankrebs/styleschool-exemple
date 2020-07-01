import React from "react";
import { Hidden } from "@material-ui/core";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

export default function SliderImages(props) {
  const content = props.content;
  return (
    <div>
      <Hidden smDown>
        <Slider autoplay={3000} infinite={true} {...props.other}>
          {content.map((slide, index) => (
            <div
              key={index}
              style={{ padding: 0, margin: 0, height: "fit-content" }}
            >
              <img src={slide} alt="" style={{ width: "100%" }} />
            </div>
          ))}
        </Slider>
      </Hidden>
      <Hidden mdUp>
        <Slider autoplay={3000} infinite={true} {...props.other}>
          {props.mobileContent.map((slide, index) => (
            <div
              key={index}
              style={{ padding: 0, margin: 0, height: "fit-content" }}
            >
              <img src={slide} alt="" style={{ width: "100%" }} />
            </div>
          ))}
        </Slider>
      </Hidden>
    </div>
  );
}
