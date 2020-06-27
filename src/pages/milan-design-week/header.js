import React from "react";
import Header from "../../components/fullscreen";

export default function Head(props) {
  return (
    <Header
      head={props.head}
      descript={props.descript}
      background="url(/img/milan-design-week/fullscreen.jpg)"
      colorText="white"
      colorBkg="rgba(0,0,0,0.6)"
      formsEducation={false}
    />
  );
}
