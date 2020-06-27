import React from "react";
import Banner, { BannerBadge } from "./banner";

export default function Component(props) {
  const text = false; /* (
    <span
      style={{
        color: "rgb(255,255,255)",
        fontFamily: "Roboto",
        fontSize: "1.2em",
        textAlign: "center"
      }}
    >
      <b>Дистанционно</b>
      <br />с 23 ноября 2017
    </span>
  ); */
  const slide = (
    <React.Fragment>
      <BannerBadge>
        <img
          src="/img/clock-outline.svg"
          alt=""
          style={{ height: 16, marginBottom: -3 }}
        />{" "}
        32&nbsp;академ.&nbsp;ч.
      </BannerBadge>
    </React.Fragment>
  );

  return (
    <Banner
      head={
        <span>
          Модная журналистика
          <br />
          (интенсив)
        </span>
      }
      bkgImage="url(/img/banners/banner_profi_fashion_journalism.jpg)"
      bkgHead="rgba(243,229,218,1.0)"
      content={text}
      slide={slide}
      //link="https://styleschool.ru/fashion-journalism"
      link="/fashion-journalism"
    />
  );
}
