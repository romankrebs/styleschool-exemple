import React from "react";
import Banner, { BannerBadge } from "./banner";
import { datas } from "../pages/political-style/date";

export default function Component() {
  const text = false; /* (
    <React.Fragment>
      <span style={{ fontSize: "1.3em", fontWeight: 700 }}>Дистанционно</span>
      <br />с {datas.online[0]}
    </React.Fragment>
  ); */
  const slide = (
    <React.Fragment>
      <BannerBadge>
        <img
          src="/img/calendar.svg"
          alt=""
          style={{ height: 16, marginBottom: -3 }}
        />{" "}
        3 мес.
      </BannerBadge>
    </React.Fragment>
  );

  return (
    <Banner
      head={
        <span>
          Формирование имиджа.
          <br />
          Инструменты политтехнологий
        </span>
      }
      bkgImage="url(/img/political-style/fullscreen.jpg)"
      bkgHead="rgba(200,200,200,0.8)"
      content={text}
      slide={slide}
      //link="https://styleschool.ru/political-style"
      link="/political-style"
    />
  );
}
