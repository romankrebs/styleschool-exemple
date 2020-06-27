import React from "react";
// import Slider from "../../components/slider-images-2";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Project(props) {
  const imagesArr = [];
  const arrImages = () => {
    for (var i = 1; i < 34; i++) {
      if (i > 9) {
        imagesArr.push(<div data-src={`/img/interior-design/slide${i}.jpg`} />);
      } else {
        imagesArr.push(
          <div data-src={`/img/interior-design/slide0${i}.jpg`} />
        );
      }
    }
    return imagesArr;
  };

  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={3000}
      bullets={false}
    >
      {arrImages()}
    </AutoplaySlider>
    // <Slider
    //   content={arrImages()}
    //   mobileContent={arrImages()}
    // />
  );
}

export default Project;
