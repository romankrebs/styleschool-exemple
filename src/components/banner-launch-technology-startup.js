import React from "react";
import Banner from "./banner";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={
        <span style={{ fontSize: "0.9em" }}>
          Технология запуска startup – проектов в индустрии моды и дизайна
        </span>
      }
      bkgImage="url(/img/launch-technology-startup/fullscreen.jpg)"
      bkgHead="rgba(200,100,0,.8)"
      content={text}
      slide={slide}
      link="/launch-technology-startup"
    />
  );
}
