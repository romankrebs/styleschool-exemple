import React from "react";
import { Grid, Paper } from "@material-ui/core";
import styles from "../../components/styles-for-types";
import { withStyles } from "@material-ui/styles";

const wStyles = theme => styles;

const Infew = function(props) {
  const { classes } = props;
  return (
    <div style={{ padding: props.garamond ? "3.2em 0" : "1.6em 0" }}>
      <Grid container justify="space-between" alignItems="stretch" spacing={2}>
        {props.content.map((d, i) => (
          <Grid item xs={12} md={props.size}>
            <Paper className={classes.infoPaperS}>
              <p className={classes.info}>{d}</p>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default withStyles(wStyles)(Infew);
