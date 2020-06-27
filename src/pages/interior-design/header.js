import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Header from "../../components/header-fullscreen";
import { datas } from "./date-education";

export default function Head() {
  return (
    <Header
      head1={
        <span>
          Интерьерный дизайн.
          <br />
          Интенсив
        </span>
      }
      descript={<span>От идеи до эскиз-проекта квартиры. Для начинающих.</span>}
      background="url(/img/interior-design/fullscreen.jpg) center center/cover no-repeat"
      styles={{
        lineColor: "rgb(255,255,255)",
        bkgBlockColor: "rgba(0,0,0,0.5)",
        textColor: "rgb(255,255,255)"
      }}
      formsEducation={false}
      bottomLine={<div style={{ height: 40 }} />}
    />
  );
}
