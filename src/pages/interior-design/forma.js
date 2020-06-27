import React from "react";
import Grid from "@material-ui/core/Grid";
import { HorizontalForm } from "../../components/forms";

export default function Callback() {
  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12} md={12}>
        <h2
          style={{
            fontSize: "1.8em",
            fontWeight: 700,
            color: "rgb(100,100,100)",
            textAlign: "left"
          }}
        >
          Записаться на собеседование
        </h2>
        <HorizontalForm />
      </Grid>
    </Grid>
  );
}
