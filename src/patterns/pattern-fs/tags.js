import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  box: {
    maxWidth: "100vw",
    boxSizing: "border-box",
    padding: 0,
    margin: 0
  },
  "@media (max-width: 959px)": {
    box: {
      padding: "0 1rem"
    }
  }
});

function Tags(props) {
  const { classes } = props;

  return (
    <div
      className={classes.box}
      style={{
        fontFamily: "Roboto", //"Alegreya Sans",
        fontSize: "1rem",
        textAlign: "center",
        color: "rgb(180,180,180)"
      }}
    >
      {props.text}
    </div>
  );
}

export default withStyles(styles)(Tags);
