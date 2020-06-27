import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles-for-types";

const wStyles = theme => styles;

const InFew = function(props) {
  const { classes } = props;
  return (
    <div
      style={{ textAlign: "center", padding: "1.4em 0", paddingTop: "1.6em" }}
    >
      {props.content.map((d, i) => (
        <span className={classes.h2inline}>{d}</span>
      ))}
    </div>
  );
};

export default withStyles(wStyles)(InFew);
