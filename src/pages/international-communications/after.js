import React from "react";
import Grid from "@material-ui/core/Grid";

export default function After() {
  return (
    <Grid container justify="center" alignItems="stretch" spacing={2}>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          padding: 20
        }}
      >
        <div
          style={{
            boxSizing: "border-box",
            padding: 20,
            textAlign: "center",
            fontSize: "1.1em",
            color: "rgb(80,80,80)",
            border: "5px dotted rgb(100,100,120)",
            height: "100%"
          }}
        >
          Успешное окончание курса позволит создать интерьер своей квартиры или
          продолжить обучение на курсе профессиональной переподготовки.
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          padding: 20
        }}
      >
        <div
          style={{
            boxSizing: "border-box",
            padding: 20,
            height: "100%",
            textAlign: "center",
            fontSize: "1.1em",
            color: "rgb(80,80,80)",
            border: "5px dotted rgb(100,100,120)"
          }}
        >
          Выпускникам курса выдается сертификат ВШС при условии выполнения
          итоговой работы. Данная работа будет считаться вступительной на
          годовой курс профподготовки.
        </div>
      </Grid>
    </Grid>
  );
}
