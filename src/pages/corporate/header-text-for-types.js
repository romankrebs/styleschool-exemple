import React from "react";
import { Grid, Paper } from "@material-ui/core";
import styles from "./styles-for-types";

const Head = function(props) {
  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={12} md={12}>
          <h1 style={{ ...styles.h1, color: props.colorText, padding: 0 }}>
            {props.head}
          </h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default Head;
