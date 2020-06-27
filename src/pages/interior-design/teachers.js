import React from "react";
import Grid from "@material-ui/core/Grid";
import { styles } from "./styles";

function Teacher(props) {
  return (
    <Grid container justify="center" alignItems="flex-start" spacing={2}>
      <Grid item xs={12} md={6}>
        <img src={props.image} alt={props.head} style={{ maxWidth: "100%" }} />
      </Grid>
      <Grid item xs={12} md={6}>
        <h3 style={styles.h3}>{props.head}</h3>
        <p style={styles.p}>{props.text}</p>
      </Grid>
    </Grid>
  );
}

export default function Teachers() {
  return (
    <Grid container justify="center" alignItems="stretch" spacing={1}>
      <Grid item xs={12} md={12}>
        <h2
          style={{ fontFamily: "Roboto", fontSize: "2em", textAlign: "left" }}
        >
          Ведущая курса
        </h2>
      </Grid>
      <Grid item xs={12} md={12}>
        <Teacher
          head="Марина Костарнова (Бельгия)"
          text="Дизайнер, декоратор. Член Международного Союза дизайнеров. 20 лет стаж преподавания"
          image="/img/teachers/kostarnova.jpg"
        />
      </Grid>
    </Grid>
  );
}
