import React from "react";
import Grid from "@material-ui/core/Grid";

export default function About() {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid
        item
        xs={12}
        md={10}
        style={{
          fontSize: "1.1em",
          color: "rgb(100,100,100)",
          padding: 10
        }}
      >
        На курсе получите самые необходимые инструменты для работы с имиджем
        публичных персон: политиков, представителей государственных компаний и
        структур, руководителей бизнеса и лидеров общественного мнения с учетом
        политической и организационной российской культуры, специфики восприятия
        фигуры лидера российским обществом.
      </Grid>
    </Grid>
  );
}
