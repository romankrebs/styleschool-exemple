import React from "react";
import Grid from "@material-ui/core/Grid";
import { HorizontalForm } from "./forms";
import styles from "./styles-for-types";

export default function Callback(props) {
  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12} md={12}>
        <h2 style={props.garamond ? styles.h2garamond : styles.h2}>
          {props.title ? props.title : "Записаться на собеседование"}
        </h2>
        <HorizontalForm />
      </Grid>
    </Grid>
  );
}
