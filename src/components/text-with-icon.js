import React from "react";
import { withStyles } from "@material-ui/styles";

const wStyles = theme => ({
  box: {
    display: "grid",
    gridTemplateColumns: "fit-content(100%) 1fr",
    gridTemplateRows: "1fr",
    maxWidth: "100%",
    alignItems: "start"
  },
  icon: {
    textAlign: "center",
    // width: "max-content",
    padding: "1rem"
  },
  text: {
    fontFamily: "Roboto",
    fontSize: "1rem",
    fontWeight: 400,
    textAlign: "justify",
    color: "rgb(100,100,100)",
    padding: "1rem"
  },
  boxWithBorder: {
    border: "1px solid rgb(100,100,100)",
    boxShadow:
      "1px 1px 10px 2px rgba(100,100,100,.2),\
                -1px 1px 10px 2px rgba(100,100,100,.2),\
                -1px -1px 10px 2px rgba(100,100,100,.2),\
                1px -1px 10px 2px rgba(100,100,100,.2)"
  }
});

function TextWithIcon(props) {
  const { classes } = props;

  return (
    <div
      className={
        props.border ? classes.box + " " + classes.boxWithBorder : classes.box
      }
    >
      <div className={classes.icon}>{props.icon}</div>
      <div className={classes.text}>{props.text}</div>
    </div>
  );
}

export default withStyles(wStyles)(TextWithIcon);
