import React from "react";
import Banner from "./banner";

export default function Component(props) {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={<span>Лекции и мастер-классы</span>}
      bkgImage="url(/img/banners/banner_moda&style.jpg)"
      bkgHead="rgba(233,208,118,1.0)"
      content={text}
      slide={slide}
      link="/master-class"
    />
  );
}
