import React from "react";
import Header from "../../components/fullscreen";

export default function Head(props) {
  return (
    <Header
      head={props.head}
      descript={props.descript}
      background="url(/img/internship-in-milan/fullscreen.jpg)"
      colorText="white"
      colorBkg="rgba(100,50,0,0.65)"
      formsEducation={false}
    />
  );
}
