import React from "react";
import { Hidden } from "@material-ui/core";
import Slider from "react-slick";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgb(160,160,160)",
        borderRadius: "50%"
      }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgb(160,160,160)",
        borderRadius: "50%"
      }}
      onClick={onClick}
    />
  );
}

function SliderImgs(props) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: props.autoplay ? props.autoplay : true,
    autoplaySpeed: props.playSpeed || 3000,
    accessibility: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  let settingsMobile = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: props.playSpeed || 3000,
    autoplay: props.autoplay ? props.autoplay : true,
    accessibility: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div style={{ maxWidth: "80%", margin: "0 auto" }}>
      <Hidden smDown>
        <Slider {...settings}>
          {props.slides.map((el, k) => (
            <div key={k}>{el}</div>
          ))}
        </Slider>
      </Hidden>
      <Hidden mdUp>
        <Slider {...settingsMobile}>
          {props.slides.map((el, k) => (
            <div key={k}>{el}</div>
          ))}
        </Slider>
      </Hidden>
    </div>
  );
}

export default SliderImgs;
