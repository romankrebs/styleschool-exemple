import React from "react";
import { Grid } from "@material-ui/core";
import { style } from "../../components/stylesCourse";
import { withStyles } from "@material-ui/styles";
import Teacher from "./teacher";
import { prochorovich } from "../personal-brand/teachers";

const wStyles = theme => style;

function Teachers(props) {
  const { classes } = props;

  return (
    <Grid container justify="center" alignItems="stretch">
      <Grid item xs={12} md={12}>
        <h2 className={classes.h2small}>Автор и ведущая курса</h2>
      </Grid>
      <Grid item xs={12} md={12}>
        <Teacher
          head="Прохорович Елена"
          text={prochorovich}
          image="/img/international-communications/prohorovich.jpg"
        />
      </Grid>
    </Grid>
  );
}

export default withStyles(wStyles)(Teachers);
