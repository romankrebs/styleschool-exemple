import React from "react";
import Header from "../../components/fullscreen";

export default function Head() {
  return (
    <Header
      head={
        <span>
          Международные коммуникации,
          <br />
          презентация бренда на глобальном рынке
        </span>
      }
      descript={
        <span>
          <br />
          Профессиональное обучение для тех, кто хочет стать дипломированным
          специалистом по бизнес-коммуникациям и сделать карьеру в индустрии
          моды и дизайна.
        </span>
      }
      background="url(/img/international-communications/fullscreen.jpg)"
      colorText="white"
      colorBkg="rgba(0,0,0,0.4)"
      formsEducation={false}
      styleHead={{ fontSize: "1.8em" }}
    />
  );
}
