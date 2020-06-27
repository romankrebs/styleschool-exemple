import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "./styles-for-types";

const wStyles = theme => styles;

const Descript = function(props) {
  const { classes } = props;

  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={props.image ? 7 : 12}>
          {props.text}
        </Grid>
        {props.image ? (
          <Grid item xs={12} md={5} className={classes.imageRight}>
            <img src={props.image} alt="" style={{ maxWidth: "100%" }} />
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
};

export default withStyles(wStyles)(Descript);
