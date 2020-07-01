import React from "react";
import { Grid } from "@material-ui/core";
import { styles } from "./styles";

function TwoBlocks(props) {
  return (
    <div>
      <Grid container justify="center" alignItems="stretch" spacing={2}>
        <Grid item xs={12} md={6}>
          <div style={styles.stratchBox}>{props.left}</div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={styles.stratchBox}>{props.right}</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default TwoBlocks;
