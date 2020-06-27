import React from "react";
import { styles } from "./styles";
import { Grid } from "@material-ui/core";

function Block(props) {
  return (
    <div>
      <Grid container justify="center">
        <Grid xs={12} md={12}>
          <h2 style={styles.h2}>{props.head}</h2>
        </Grid>
        {props.left ? (
          <React.Fragment>
            <Grid item xs={12} md={6}>
              {props.left}
            </Grid>
            <Grid item xs={12} md={6}>
              {props.right}
            </Grid>
          </React.Fragment>
        ) : (
          <Grid item xs={12} md={12}>
            {props.content}
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default Block;
