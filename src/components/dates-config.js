import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ScrollableAnchor from "react-scrollable-anchor";
import Button from "./button-reserved";

export default function Dates(props) {
  const styles = {
    h3: {
      fontFamily: props.font || "Roboto",
      fontSize: "1.6em",
      color: "rgb(100,100,100)",
      textAlign: "center",
      fontWeight: 500,
      margin: 0,
      padding: "12px 0"
    },
    h2: {
      textAlign: "left",
      color: "rgb(100,100,100)",
      ...props.styleHead
    }
  };

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={12}>
        <ScrollableAnchor id={props.anchor}>
          <h2 style={styles.h2}>{props.head}</h2>
        </ScrollableAnchor>
      </Grid>
      {props.content.map(
        (v, i) =>
          v.type ? (
            <Grid item xs={12} md={6} style={{ padding: 20 }}>
              <Paper
                style={{
                  padding: 10
                }}
              >
                <h3 style={styles.h3}>{v.title}</h3>
                <p
                  style={{
                    background: "rgb(240,240,240)",
                    fontSzie: "1em",
                    textAlign: "center",
                    color: "rgb(80,80,80)"
                  }}
                >
                  {v.date}
                </p>
                <p
                  style={{
                    fontSize: "0.9em",
                    textAlign: "center",
                    color: "rgb(100,100,100)"
                  }}
                >
                  {v.text}
                </p>
                <Button link={v.link} />
              </Paper>
            </Grid>
          ) : (
            <Grid item xs={12} md={6} style={{ padding: 20 }}>
              <Paper style={{ padding: "40px 10px", ...props.styeleBox }}>
                {v.text}
              </Paper>
            </Grid>
          )
      )}
    </Grid>
  );
}
