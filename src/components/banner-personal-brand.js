import React from "react";
import Banner from "./banner";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={<span style={{}}>Личный бренд в индустрии моды и дизайна</span>}
      bkgImage="url(/img/personal-brand/fullscreen.jpg)"
      bkgHead="rgba(220,180,230,.8)"
      content={text}
      slide={slide}
      link="/personal-brand"
    />
  );
}
