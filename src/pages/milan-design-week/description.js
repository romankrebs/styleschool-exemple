import React from "react";
import { style } from "./styles";
import List from "../../components/list";
import Description from "../../components/descript4courses";

function Descript(props) {
  return (
    <Description
      block1={props.block1}
      block2={props.block2}
      slider
      slides={[
        "/img/internship-in-milan/fullscreen-q.jpg",
        "/img/internship-in-milan/slide02q.jpg",
        "/img/internship-in-milan/slide03q.jpg",
        "/img/internship-in-milan/slide04q.jpg",
        "/img/internship-in-milan/slide05q.jpg"
      ]}
      slidesMobile={[
        "/img/internship-in-milan/fullscreen.jpg",
        "/img/internship-in-milan/slide02.jpg",
        "/img/internship-in-milan/slide03.jpg",
        "/img/internship-in-milan/slide04.jpg",
        "/img/internship-in-milan/slide05.jpg"
      ]}
    />
  );
}

export default Descript;
