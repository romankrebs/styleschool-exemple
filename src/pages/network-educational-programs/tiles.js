import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "../../components/styles-for-types";

const wStyles = theme => styles;

const Tiles = function(props) {
  const { classes } = props;
  return (
    <div>
      <h2 style={styles.h2garamond}>{props.head}</h2>
      <Grid container justify="space-between" spacing={2}>
        {props.tiles.map((d, i) => (
          <Grid
            item
            xs={12}
            md={4}
            className={
              i == 2
                ? classes.imgRight
                : i == 0
                  ? classes.imgLeft
                  : classes.imgCenter
            }
          >
            <img
              src={d.image}
              alt={d.alt}
              style={{ maxHeight: 100, maxWidth: 333 }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default withStyles(wStyles)(Tiles);
