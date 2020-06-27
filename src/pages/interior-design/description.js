import React from "react";
import { Grid } from "@material-ui/core";
import Slider from "./slider";
// import Paragraph from "../../components/text-image";

const style = {
  fontFamily: "Roboto",
  fontSize: "1em",
  margin: 0,
  padding: 0,
  lineHeight: "1.5em",
  color: "rgb(100,100,100)",
  fontWeight: 400,
  textAlign: "left"
};

export default function Descript() {
  return (
    <Grid container justify="center" alignItems="flex-start" spacing={2}>
      <Grid item xs={12} md={6}>
        <p style={{ ...style, paddingBottom: "1em" }}>
          Успешное окончание курса позволит создать интерьер своей квартиры или
          продолжить обучение на курсе профессиональной переподготовки.
        </p>
        <p style={style}>
          Выпускникам курса выдается Диплом ВШСДТ. Данная работа будет считаться
          вступительной на годовой курс профподготовки.
        </p>
      </Grid>
      <Grid item xs={12} md={6}>
        <Slider />
      </Grid>
    </Grid>
  );
}
