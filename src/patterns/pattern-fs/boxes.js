import React from "react";
import { withStyles } from "@material-ui/styles";

const wStyles = theme => ({
  boxTop: {
    boxSizing: "border-box",
    margin: 0,
    padding: 0
  },
  boxMiddle: {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    paddingTop: "3rem"
  },
  boxBottom: {
    boxSizing: "border-box",
    margin: 0,
    padding: "3rem 0"
  },
  boxOuter: {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    paddingTop: "8rem"
  },
  boxOne: {
    boxSizing: "border-box",
    margin: 0,
    padding: 0
  },
  boxTwo: {
    boxSizing: "border-box",
    margin: 0,
    padding: 0
  },
  "@media (max-width: 959px)": {
    boxTop: {
      boxSizing: "border-box",
      margin: 0,
      padding: 0
    },
    boxMiddle: {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      paddingTop: "1.6rem"
    },
    boxBottom: {
      boxSizing: "border-box",
      margin: 0,
      padding: "1.6rem 0"
    },
    boxOuter: {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      paddingTop: "4rem"
    },
    boxTwo: {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      paddingTop: "3rem"
    }
  }
});

function Boxes(props) {
  const { classes } = props;
  let nameClass = classes.boxMiddle;

  if (props.top) nameClass = classes.boxTop;
  if (props.bottom) nameClass = classes.boxBottom;
  if (props.outer) nameClass = classes.boxOuter;
  if (props.one) nameClass = classes.boxOne;
  if (props.two) nameClass = classes.boxTwo;

  return <div className={nameClass}>{props.children}</div>;
}

export default withStyles(wStyles)(Boxes);
