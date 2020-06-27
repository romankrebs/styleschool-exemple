import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "./styles-for-types";

const wStyles = theme => styles;

const Head = function(props) {
  const { classes } = props;

  return (
    <div>
      <Grid
        container
        style={{
          backgroundImage: props.background
        }}
      >
        <Grid item xs={12} md={12} className={classes.fullscreenBox}>
          <div className={classes.fullscreenBox}>
            <Grid container justify="center">
              <Grid item xs={12} md={6}>
                <Paper
                  className={classes.headBox}
                  style={{ background: props.colorBox }}
                >
                  <h1 className={classes.h1} style={{ color: props.colorText }}>
                    {props.head}
                  </h1>
                  <div
                    style={{
                      height: 1,
                      margin: "0 auto",
                      background: props.colorText,
                      width: "50%"
                    }}
                  />
                  <div
                    className={classes.descript}
                    style={{ color: props.colorText }}
                  >
                    {props.descript}
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(wStyles)(Head);
