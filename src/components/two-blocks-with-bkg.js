import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

export const grayBkg = "rgb(220,220,220)";

const wStyles = theme => ({
  leftText: {
    background: `linear-gradient(to right, rgb(255,255,255) 0%,\
      rgb(255,255,255) 80%, ${grayBkg} 80%, ${grayBkg} 100%)`,
    padding: "1rem"
  },
  rightText: {
    background: `linear-gradient(to right, ${grayBkg} 0%, ${grayBkg} 20%,\
      rgb(255,255,255) 20%, rgb(255,255,255) 100%)`,
    padding: "1rem"
  },
  white: {
    background: "rgb(255,255,255)",
    padding: "1rem"
  },
  mediaBlock: {
    background: grayBkg,
    padding: "1rem",
    textAlign: "center"
  },
  "@media (max-width: 959px)": {
    leftText: {
      background: "rgb(255,255,255)"
    },
    rightText: {
      background: "rgb(255,255,255)"
    }
  }
});

function TwoBlocks(props) {
  const { classes } = props;

  return (
    <div>
      <Grid container justify="center" alignItems={props.vertical || "stretch"}>
        <Hidden mdUp>
          <React.Fragment>
            <Grid item xs={12} sm={12} className={classes.white}>
              {props.textOnLeft ? props.left : props.right}
            </Grid>
            <Grid item xs={12} sm={12} className={classes.mediaBlock}>
              {props.textOnLeft ? props.right : props.left}
            </Grid>
          </React.Fragment>
        </Hidden>
        <Hidden smDown>
          <React.Fragment>
            <Grid
              item
              xs={12}
              md={props.sizeLeft || 6}
              className={
                props.textOnLeft
                  ? props.white
                    ? classes.white
                    : classes.leftText
                  : classes.mediaBlock
              }
            >
              {props.left}
            </Grid>
            <Grid
              item
              xs={12}
              md={props.sizeRight || 6}
              className={
                props.textOnLeft
                  ? classes.mediaBlock
                  : props.white
                    ? classes.white
                    : classes.rightText
              }
            >
              {props.right}
            </Grid>
          </React.Fragment>
        </Hidden>
      </Grid>
    </div>
  );
}

export default withStyles(wStyles)(TwoBlocks);
