import React from "react";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "./styles-for-types";

const wStyles = theme => styles;

const Info = function(props) {
  const { classes } = props;
  return (
    <div>
      <Paper>
        <div className={classes.info}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill={props.color ? props.color : "rgb(123,143,87)"}
              d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"
            />
          </svg>
          <br />
          {props.text}
        </div>
      </Paper>
    </div>
  );
};

export default withStyles(wStyles)(Info);
