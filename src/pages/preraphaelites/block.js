import React from "react";
import { styles } from "./styles";
import { withStyles } from "@material-ui/styles";

const wStyles = theme => styles;

function Block(props) {
  const { classes } = props;

  return (
    <div className={classes.box}>
      <h2 style={styles.h2}>{props.title}</h2>
      {props.text}
    </div>
  );
}

export default withStyles(wStyles)(Block);
