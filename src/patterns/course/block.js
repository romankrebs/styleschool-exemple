import React from "react";
import { styles } from "./styles";
import { withStyles } from "@material-ui/styles";

const wStyles = theme => styles;

function Block(props) {
  const { classes } = props;

  return (
    <div className={classes.box}>
      {props.title ? <h2 style={styles.h2}>{props.title}</h2> : null}
      {props.text}
    </div>
  );
}

export default withStyles(wStyles)(Block);
