import React from "react";

import Head from "../../components/header-fullscreen";

export default function Header() {
  return (
    <Head
      background="url(/img/about/fullscreen.jpg) top center/cover no-repeat"
      styles={{
        fullscreen: {},
        bkgBlockColor: "rgba(0,0,0,0.7)",
        textColor: "rgb(255,255,255)",
        style: {
          marginBottom: 50
        },
        lineColor: "rgba(160,160,160,1)"
      }}
      head1="Высшая Школа Стилистики"
      descript={
        <span>
          Профессиональное образование в индустрии моды и дизайна
          <br />
          Очное, заочное и дистанционное обучение
        </span>
      }
      formsEducation=""
    />
  );
}
