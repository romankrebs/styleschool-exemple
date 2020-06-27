import React from "react";
import Grid from "@material-ui/core/Grid";
import styles from "./styles-for-types";

export default function Teachers(props) {
  return (
    <Grid container justify="center" alignItems="stretch" spacing={1}>
      <Grid item xs={12} md={12}>
        <h2 style={styles.h2}>{props.title ? props.title : "Ведущая курса"}</h2>
      </Grid>
      <Grid item xs={12} md={12}>
        <Grid container alignItems="stretch">
          <Grid item xs={12} md={5}>
            <img src={props.image} alt="" style={{ maxWidth: "100%" }} />
          </Grid>
          <Grid item xs={12} md={7}>
            <h3 style={{ ...styles.h3, paddingTop: 0 }}>{props.teacherName}</h3>
            {props.teacherText}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
