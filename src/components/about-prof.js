import React from "react";

import Grid from "@material-ui/core/Grid";

export default function AboutProf(props) {
  const styles = {
    head: {
      fontWeight: 700,
      fontSize: "1em",
      fontFamily: props.font ? props.font.title : "Lora",
      color: "rgb(100,100,100)",
      textAlign: "center",
      margin: 0,
      padding: 12
    },
    text: {
      font: "400 1em",
      color: "rgb(100,100,100)",
      textAlign: "left",
      margin: 0,
      padding: 12
    }
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="flex-start"
      style={{ padding: 50 }}
    >
      <Grid
        item
        xs={12}
        md={4}
        style={{
          padding: 30,
          paddingTop: 0
        }}
      >
        <h3 style={styles.head}>{props.a.head}</h3>
        <p style={styles.text}>{props.a.text}</p>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        style={{
          padding: 30,
          paddingTop: 0,
          borderLeft: "1px solid rgb(210,210,210)",
          borderRight: "1px solid rgb(210,210,210)",
          textAlign: "left"
        }}
      >
        <h3 style={styles.head}>{props.b.head}</h3>
        <p style={styles.text}>{props.b.text}</p>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        style={{
          padding: 30,
          paddingTop: 0,
          textAlign: "left"
        }}
      >
        <h3 style={styles.head}>{props.c.head}</h3>
        <p style={styles.text}>{props.c.text}</p>
      </Grid>
    </Grid>
  );
}
