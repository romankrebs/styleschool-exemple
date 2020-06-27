import React from "react";
import Banner, { BannerBadge } from "./banner";

export default function Component() {
  const text = "";
  const slide = (
    <React.Fragment>
      <BannerBadge>
        <img
          src="/img/calendar.svg"
          alt=""
          style={{ height: 16, marginBottom: -3 }}
        />{" "}
        8&nbsp;мес.
      </BannerBadge>
    </React.Fragment>
  );

  return (
    <Banner
      head={
        <span>
          Модная журналистика.
          <br />
          Профподготовка
        </span>
      }
      bkgImage="url(/img/banners/banner-prof-journalism.jpg)"
      bkgHead="rgba(255,255,255,0.6)"
      content={text}
      slide={slide}
      //link="https://styleschool.ru/profi-fashion-journalist"
      link="/profi-fashion-journalist"
    />
  );
}
