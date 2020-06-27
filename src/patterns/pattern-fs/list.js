import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const gold = "rgb(122,101,89)";

const styles = theme => ({
  box: {
    padding: 0
  },
  marker: {
    fontFamily: "Playfair Display",
    fontSize: "1rem",
    fontWeight: 500,
    borderRadius: "50%",
    height: "1.5rem",
    width: "1.5rem",
    textAlign: "center",
    // paddingTop: 2,
    paddingBottom: 2,
    border: "1px solid",
    borderColor: gold,
    color: gold
  },
  textBlock: {
    paddingLeft: "1rem",
    paddingBottom: "0.5rem",
    paddingTop: "0.5rem"
  },
  "@media (max-width: 959px)": {
    box: {
      padding: "0 1rem"
    }
  }
});

function List(props) {
  const { classes } = props;

  return (
    <div className={classes.box}>
      {props.arr.map((el, key) => (
        <Grid
          container
          alignItems="center"
          style={{
            backgroundColor: props.twoColor
              ? key % 2
                ? "rgb(245,245,245)"
                : "rgb(255,255,255)"
              : "rgb(255,255,255)"
          }}
        >
          <Grid item xs={1}>
            <div
              className={classes.marker}
              style={{ fontFamily: "Playfair Display" }}
              key={key}
            >
              {key + 1}
            </div>
          </Grid>
          <Grid item xs={11}>
            <div className={classes.textBlock}>{el}</div>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

export default withStyles(styles)(List);
