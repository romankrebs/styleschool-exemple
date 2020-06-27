import React from "react";
import { Grid, Paper } from "@material-ui/core";
// import ScrollableAnchor from "react-scrollable-anchor";
// import Button from "../../components/button-reserved";
// import Button from "../../components/button-with-form";
import { dates, DateToString } from "../shedule/dates";
import { withStyles } from "@material-ui/styles";
import { styles } from "./styles";

const wStyles = theme => styles;

function Dates(props) {
  const { classes } = props;

  return (
    <div className={classes.box}>
      <h2 className={classes.h2}>{props.head}</h2>
      <Grid container justify="center" alignItems="stretch" spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 10 }}>
            <h3 className={classes.h3Big}>Очно</h3>
            <p className={classes.descriptionTop} style={{ paddingTop: 0 }}>
              {DateToString(dates.fashionStyling.ofline, true)}
            </p>
            {/* <Button /> */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 10 }}>
            <h3 className={classes.h3Big}>Дистанционно</h3>
            <p className={classes.descriptionTop} style={{ paddingTop: 0 }}>
              {DateToString(dates.fashionStyling.online, true)}
            </p>
            {/* <Button /> */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(wStyles)(Dates);
