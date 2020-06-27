import React from "react";
import { withStyles } from "@material-ui/styles";

const wStyles = theme => ({
  box: {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    paddingTop: "8rem"
  },
  "@media (max-width: 959px)": {
    box: {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      paddingTop: "4rem"
    }
  }
});

function Together(props) {
  const { classes } = props;

  return <div className={classes.box}>{props.children}</div>;
}

export default withStyles(wStyles)(Together);
