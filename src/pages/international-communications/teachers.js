import React from "react";
import { Grid } from "@material-ui/core";
import { style } from "../../components/stylesCourse";
import Teacher from "../../components/teacher-in-course";
import { prochorovich } from "../personal-brand/teachers";

export default function Teachers() {
  const styles = style;
  return (
    <Grid container justify="center" alignItems="stretch">
      <Grid item xs={12} md={12}>
        <h2 style={styles.h2small}>Автор и ведущая курса</h2>
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
