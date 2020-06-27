import React from "react";
import Banner from "./banner";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={
        <span style={{ fontSize: "0.8em" }}>
          Международные коммуникации, презентация бренда на глобальном рынке
        </span>
      }
      bkgImage="url(/img/international-communications/ill1.jpg)"
      bkgHead="rgba(200,200,200,.8)"
      content={text}
      slide={slide}
      link="/international-communications"
    />
  );
}
