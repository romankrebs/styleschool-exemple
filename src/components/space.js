import React from "react";

import Grid from "@material-ui/core/Grid";

export default function Space(props) {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ background: "rgba(245,245,245,1.0)" }}
      spacing={4}
    >
      <Grid item xs={12} md={2} />
      <Grid item xs={12} md={4}>
        <p
          style={{
            color: "rgb(123,143,87)",
            font: "700 0.7em"
          }}
        >
          {props.epigraph}
        </p>
        <h2
          style={{
            font: "700 1.3em",
            fontFamily: props.font ? props.font.title : "Lora",
            color: "rgb(100,100,100)",
            textAlign: "left",
            margin: 0,
            padding: 12,
            ...props.styleHead
          }}
        >
          {props.head}
        </h2>
        {props.text}
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          background: props.image,
          height: "100vh"
        }}
      />
    </Grid>
  );
}
