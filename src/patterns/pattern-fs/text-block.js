import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  box: {
    maxWidth: "100vw",
    padding: 0,
    margin: 0,
    boxSizing: "border-box"
  },
  "@media (max-width: 959px)": {
    box: {
      padding: "0 1rem"
    }
  }
});

function TextBlock(props) {
  const { classes } = props;

  return (
    <div className={classes.box}>
      <Grid container justify="center">
        <Grid item xs={12} md={8}>
          <div
            style={{
              background: props.bkg || "rgb(255,255,255)",
              ...props.style
            }}
          >
            {props.content}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(TextBlock);
