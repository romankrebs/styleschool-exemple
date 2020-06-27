import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "../../components/styles-for-types";

const wStyles = theme => styles;

const Head = function(props) {
  const { classes } = props;
  return (
    <div>
      <Grid container justify="space-between" spacing={2} alignItems="stretch">
        <Grid item xs={12} md={7}>
          <div className={classes.type3headBox}>
            <h1
              className={classes.h1garamondLeft}
              style={{
                color: props.color,
                fontFamily: styles.h1garamondLeft.fontFamily
              }}
            >
              {props.head}
            </h1>
            <div
              style={{
                height: 1,
                background:
                  "linear-gradient(to right, rgba(100,100,100,1), rgba(255,255,255,1))"
              }}
            />
            <p style={styles.descriptLeft}>
              <span style={{ color: props.color }}>{props.descript}</span>
            </p>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          style={{
            background: "rgb(250,250,250)"
          }}
        >
          <div />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(wStyles)(Head);
