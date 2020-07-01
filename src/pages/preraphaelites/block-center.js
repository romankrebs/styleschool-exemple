import React from "react";
import { withStyles } from "@material-ui/styles";
import { styles } from "./styles";

const wStyles = theme => styles;

function CenterBlock(props) {
  const { classes } = props;

  return (
    <div className={classes.box}>
      <div className={classes.space} />
      <p className={classes.descriptionTop}>{props.title}</p>
      <p className={`${classes.p} ${classes.center}`}>{props.text}</p>
    </div>
  );
}

export default withStyles(wStyles)(CenterBlock);
