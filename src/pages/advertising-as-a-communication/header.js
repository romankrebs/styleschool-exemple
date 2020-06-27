import React from "react";
import Header from "../../components/fullscreen";

export default function Head() {
  return (
    <Header
      head={<span>Реклама в индустрии моды и дизайна</span>}
      descript={
        <span>
          <br />
          <br />
          Рекламная кампания от идеи до воплощения
        </span>
      }
      background="url(/img/advertising-as-a-communication/fullscreen.jpg)"
      colorText="black"
      colorBkg="rgba(255,255,255,0.85)"
      formsEducation={false}
      bigHead
    />
  );
}
