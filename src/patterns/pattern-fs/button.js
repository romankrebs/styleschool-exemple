import React from "react";
import { withStyles } from "@material-ui/styles";
import { styles } from "./styles";

const wStyles = theme => styles;

function Button(props) {
  const { classes } = props;
  return (
    <a href={props.link}>
      <div className={classes.button}>{props.text}</div>
    </a>
  );
}

export default withStyles(wStyles)(Button);
