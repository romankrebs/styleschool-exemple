import React from "react";
import Banner from "./banner";
//import Icon from "@material-ui/core/Icon";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={<span>Современная мода и стиль</span>}
      bkgImage="url(/img/banners/banner_moda&style.jpg)"
      bkgHead="rgba(233,208,118,1.0)"
      content={text}
      slide={slide}
      //link="https://styleschool.ru/modern-moda-style"
      link="/modern-fashion-style"
    />
  );
}
