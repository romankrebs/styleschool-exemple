import React from "react";
import { Grid, Paper } from "@material-ui/core";

const Text = props => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Paper
            style={{
              padding: 20,
              textAlign: "left",
              fontSize: "1.1em",
              color: "rgb(100,100,100)"
            }}
          >
            {props.text}
          </Paper>
          <p>{props.total}</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Text;
