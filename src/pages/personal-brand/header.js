import React from "react";
import Header from "../../components/fullscreen";

export default function Head(props) {
  return (
    <Header
      head="Личный бренд в индустрии моды и дизайна"
      descript={
        <span>
          <br />
          От визуализации до монетизации
        </span>
      }
      background="url(/img/personal-brand/fullscreen.jpg)"
      colorText="white"
      colorBkg="rgba(0,0,100,0.4)"
      formsEducation={false}
    />
  );
}
