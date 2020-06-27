import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  padding: {
    padding: 0
  },
  "@media (max-width: 959px)": {
    padding: {
      padding: "1rem"
    }
  }
});

function Blocks(props) {
  const { classes } = props;

  return (
    <div style={props.styleBox}>
      {props.mobileReverse ? (
        <div>
          <Hidden mdUp>
            <Grid container alignItems="center">
              <Grid item xs={12} md={6} className={classes.padding}>
                {props.right}
              </Grid>
              <Grid item xs={12} md={6} className={classes.padding}>
                {props.left}
              </Grid>
            </Grid>
          </Hidden>
          <Hidden smDown>
            <Grid container alignItems="stretch">
              <Grid item xs={12} md={6} className={classes.padding}>
                <div
                  style={{
                    position: "sticky",
                    top: 0
                  }}
                >
                  {props.left}
                </div>
              </Grid>
              <Grid item xs={12} md={6} className={classes.padding}>
                <div
                  style={{
                    position: "sticky",
                    top: 0
                  }}
                >
                  {props.right}
                </div>
              </Grid>
            </Grid>
          </Hidden>
        </div>
      ) : (
        <Grid container alignItems="stretch">
          <Grid item xs={12} md={6} className={classes.padding}>
            <div
              style={{
                position: "sticky",
                top: 0
              }}
            >
              {props.left}
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={classes.padding}>
            <div
              style={{
                position: "sticky",
                top: 0
              }}
            >
              {props.right}
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default withStyles(styles)(Blocks);
