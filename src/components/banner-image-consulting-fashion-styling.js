import React from "react";
import Banner from "./banner";
//import Icon from "@material-ui/core/Icon";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={<span>Курсы fashion стилистов. Профподготовка</span>}
      bkgImage="url(/img/banners/banner-pro-fashion-consult.jpg)"
      bkgHead="rgba(233,233,233,0.9)"
      content={text}
      slide={slide}
      //link="https://styleschool.ru/image-consulting-fashion-styling"
      link="/image-consulting-fashion-styling"
    />
  );
}
