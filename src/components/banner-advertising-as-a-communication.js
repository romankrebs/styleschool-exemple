import React from "react";
import Banner from "./banner";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={<span style={{}}>Реклама в индустрии моды и дизайна</span>}
      bkgImage="url(/img/advertising-as-a-communication/i01.jpg)"
      bkgHead="rgba(255,255,255,.8)"
      content={text}
      slide={slide}
      link="/advertising-as-a-communication"
    />
  );
}
