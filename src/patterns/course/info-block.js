import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { styles } from "./styles";
import { withStyles } from "@material-ui/styles";

const wStyles = theme => styles;

function InfoBlock(props) {
  const { classes } = props;

  return (
    <Paper
      className={
        props.small === 5
          ? classes.paper5
          : props.small === 4
            ? classes.paper4
            : classes.paper
      }
      style={props.styleBkg ? { background: props.styleBkg } : {}}
    >
      <Grid container justify="center" alignItems="center">
        <Grid item xs={2} md={2} className={classes.iconPaper}>
          {props.icon}
        </Grid>
        <Grid item xs={10} md={10}>
          {props.title ? <h3 className={classes.h3}>{props.title}</h3> : null}
          <p className={`${classes.p} ${classes.center}`}>{props.text}</p>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default withStyles(wStyles)(InfoBlock);
