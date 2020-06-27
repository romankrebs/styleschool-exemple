import React from "react";
import { Grid } from "@material-ui/core";
import { style } from "./styles";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  imageBox: {
    textAlign: "center",
    paddingRight: "1.4em",
    paddingBottom: 0,
    position: "sticky",
    top: 1
  },
  image: {
    maxHeight: 420
  },
  "@media (max-width: 959px)": {
    imageBox: {
      paddingRight: 0,
      paddingBottom: "1.4em"
    },
    image: {
      maxHeight: "auto"
    }
  }
});

const Teacher = props => {
  const { classes } = props;

  return (
    <div>
      <Grid container justify="flex-start" alignItems="stretch">
        <Grid item xs={12} md={5}>
          <div className={classes.imageBox}>
            <img
              src={props.image}
              style={{
                ...props.styleImg
              }}
              className={classes.image}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <h3 style={{ ...style.h3, paddingTop: 0 }}>{props.head}</h3>
          {props.text}
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Teacher);
