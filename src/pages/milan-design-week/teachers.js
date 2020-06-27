import React from "react";
import { Grid } from "@material-ui/core";
import { style } from "../../components/stylesCourse";
import { withStyles } from "@material-ui/styles";
import Teacher from "./teacher";

const wStyles = theme => style;

function Teachers(props) {
  const { classes } = props;

  return (
    <Grid container justify="center" alignItems="stretch">
      <Grid item xs={12} md={12}>
        <h2 className={classes.h2small}>{props.title}</h2>
      </Grid>
      <Grid item xs={12} md={12}>
        {props.teachers.map((teacher, key) => (
          <Teacher
            head={teacher.name}
            text={teacher.text}
            image={teacher.image}
          />
        ))}
      </Grid>
    </Grid>
  );
}

export default withStyles(wStyles)(Teachers);
