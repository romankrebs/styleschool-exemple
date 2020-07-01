import React from "react";

import Grid from "@material-ui/core/Grid";

export default function Practica(props) {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid
        item
        xs={12}
        md={10}
        style={{ border: "1px solid rgb(210,210,210)", padding: 20 }}
      >
        <h3 style={{ textAlign: "left" }}>{props.head}</h3>
        {props.list}
      </Grid>
    </Grid>
  );
}
