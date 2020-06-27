import React from "react";
import Banner from "./banner";
//import Icon from "@material-ui/core/Icon";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={<span>Этикет</span>}
      bkgImage="url(/img/banners/banner-aristotwist.jpg)"
      bkgHead="rgba(227,216,173,0.9)"
      content={text}
      slide={slide}
      link="/aristotwist"
    />
  );
}
