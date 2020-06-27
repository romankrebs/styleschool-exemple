import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { styles } from "./styles";

function InfoPaper(props) {
  return (
    <Paper
      style={{
        padding: "1em",
        minHeight: props.full ? "5em" : "8em" // "7em"
      }}
    >
      <Grid container alignItem="center" justify="center">
        {props.icon ? (
          <Grid item xs={props.full ? 2 : 4} md={props.full ? 2 : 4}>
            <div
              style={{
                textAlign: "center",
                paddingTop: props.paddingIcon || "3em"
              }}
            >
              {props.icon}
            </div>
          </Grid>
        ) : null}
        <Grid
          item
          xs={props.full ? 10 : props.icon ? 8 : 12}
          md={props.full ? 10 : props.icon ? 8 : 12}
        >
          <h3 style={props.full ? styles.h3Big : styles.h3}>{props.title}</h3>
          {props.text ? <p style={styles.pCenter}>{props.text}</p> : null}
        </Grid>
        {props.full ? (
          props.image ? (
            <Grid
              item
              xs={12}
              md={12}
              style={{ textAlign: "center", padding: "1em" }}
            >
              <img src={props.image} alt="" style={{ maxWidth: "100%" }} />
            </Grid>
          ) : null
        ) : null}
      </Grid>
    </Paper>
  );
}

export default InfoPaper;
