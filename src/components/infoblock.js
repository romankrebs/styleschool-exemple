import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export default function InfoBlock(props) {
  let head = "";
  if (props.head !== "") {
    head = (
      <Grid item xs={12} md={12} style={{ padding: 20 }}>
        <h2
          style={{
            fontFamily: "Lora",
            fontSize: "1.8em",
            color: "rgb(100,100,100)",
            textAlign: "center",
            fontWeight: 500,
            margin: 8,
            padding: "12px 0",
            ...props.headStyle
          }}
        >
          {props.head}
        </h2>
      </Grid>
    );
  }
  return (
    <Grid container spacing={4}>
      {head}
      <Grid item xs={12} md={4} style={{ padding: 20 }}>
        <Paper
          style={{
            background: props.bg,
            textAlign: "center",
            padding: 12,
            ...props.style
          }}
        >
          <img src={props.a.image} alt="" style={{ height: 18 }} />
          <br />
          {props.a.block}
          {props.a.head}
          <br />
          {props.a.text}
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 20 }}>
        <Paper
          style={{
            background: props.bg,
            textAlign: "center",
            padding: 12,
            ...props.style
          }}
        >
          <img src={props.b.image} alt="" style={{ height: 18 }} />
          <br />
          {props.b.block}
          {props.b.head}
          <br />
          {props.b.text}
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 20 }}>
        <Paper
          style={{
            background: props.bg,
            textAlign: "center",
            padding: 12,
            ...props.style
          }}
        >
          <img src={props.c.image} alt="" style={{ height: 18 }} />
          <br />
          {props.c.block}
          {props.c.head}
          <br />
          {props.c.text}
        </Paper>
      </Grid>
    </Grid>
  );
}
