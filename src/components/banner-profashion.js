import React from "react";
import Banner, { BannerBadge } from "./banner";

export default function Component() {
  const slide = (
    <React.Fragment>
      <BannerBadge>
        <img
          src="/img/clock-outline.svg"
          alt=""
          style={{ height: 16, marginBottom: -3 }}
        />{" "}
        254&nbsp;академ.&nbsp;ч.
      </BannerBadge>
      <BannerBadge>
        <img
          src="/img/bell.svg"
          alt=""
          style={{ height: 16, marginBottom: -3 }}
        />{" "}
        60 занятий
      </BannerBadge>
      <BannerBadge>
        <img
          src="/img/calendar.svg"
          alt=""
          style={{ height: 16, marginBottom: -3 }}
        />{" "}
        6&nbsp;мес.
      </BannerBadge>
    </React.Fragment>
  );

  return (
    <Banner
      head={
        <span>
          Имидж-консультант
          <br />
          Профподготовка
        </span>
      }
      bkgImage="url(/img/banners/banner_image_consultant.jpg)"
      bkgPos="left 50% top 0"
      bkgPosHover="left 50% top -5px"
      bkgHead="rgba(240,240,240,0.8)"
      content=""
      slide={slide}
      link="/profashion"
    />
  );
}
