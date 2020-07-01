import React from "react";
import Banner, { BannerBadge } from "./banner";

export default function Component() {
  const text = "";
  const slide = (
    <React.Fragment>
      <BannerBadge>
        <img
          src="/img/clock-outline.svg"
          alt=""
          style={{ height: 16, marginBottom: -3 }}
        />{" "}
        96&nbsp;акад.&nbsp;ч.
      </BannerBadge>
      <BannerBadge>
        <img
          src="/img/calendar.svg"
          alt=""
          style={{ height: 16, marginBottom: -3 }}
        />{" "}
        3 мес
      </BannerBadge>
    </React.Fragment>
  );

  return (
    <Banner
      head={<span>Базовый курс по созданию имиджа и стиля</span>}
      bkgImage="url(/img/banners/banner_base_image_style.jpg)"
      bkgHead="rgba(243,229,218,1.0)"
      content={text}
      slide={slide}
      //link="https://styleschool.ru/image-style"
      link="/image-style"
    />
  );
}
