import React from "react";

import Grid from "@material-ui/core/Grid";

export default function Format(props) {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={12}>
        <h3>{props.head}</h3>
      </Grid>
      <Grid item xs={12} md={5} style={{ padding: 20 }}>
        <img src={props.a.image} alt="" style={{ height: 50 }} />
        <h3>{props.a.head}</h3>
        {props.a.list}
      </Grid>
      <Grid item xs={12} md={5} style={{ padding: 20 }}>
        <img src={props.b.image} alt="" style={{ height: 50 }} />
        <h3>{props.b.head}</h3>
        {props.b.list}
      </Grid>
      <Grid item xs={12} md={5} style={{ padding: 20 }}>
        <img src={props.c.image} alt="" style={{ height: 50 }} />
        <h3>{props.c.head}</h3>
        {props.c.list}
      </Grid>
      <Grid item xs={12} md={5} style={{ padding: 20 }}>
        <img src={props.d.image} alt="" style={{ height: 50 }} />
        <h3>{props.d.head}</h3>
        {props.d.list}
      </Grid>
    </Grid>
  );
}
