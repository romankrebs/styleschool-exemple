import React from "react";
import Slider from "react-slick";

function Slide(props) {
  return (
    <div>
      <p
        style={{
          margin: 0,
          padding: 0
        }}
      >
        <img
          src={props.image}
          alt=""
          style={{
            height: "auto",
            width: "100%"
          }}
        />
      </p>
    </div>
  );
}

export default function SliderInHeader(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    accessibility: true
  };

  return (
    <Slider {...settings}>
      {props.slides.map((el, k) => (
        <Slide image={el} />
      ))}
    </Slider>
  );
}
