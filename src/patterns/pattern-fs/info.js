import React from "react";
import { Grid } from "@material-ui/core";
import { styles } from "./styles";
import { withStyles } from "@material-ui/styles";
import InfoPaper from "./info-block";

const wStyles = theme => styles;

function Info(props) {
  const { classes } = props;
  return (
    <div className={classes.box}>
      <Grid container justify="center" alignItems="center" spacing={2}>
        {props.text.map((el, i) => (
          <Grid item xs={12} md={props.size || 3} key={i}>
            <InfoPaper
              icon={props.icon || el.icon}
              text={el.text}
              small={props.small}
              styleBkg={props.styleBkg}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default withStyles(wStyles)(Info);
