import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Banners(props) {
  return (
    <div style={{ paddingTop: "1.6em", paddingBottom: "1.4em" }}>
      <Grid container justify="center" alignItems="center" spacing={2}>
        <Grid item xs={12} md={4}>
          {props.banner1}
        </Grid>
        <Grid item xs={12} md={4}>
          {props.banner2}
        </Grid>
        <Grid item xs={12} md={4}>
          {props.banner3}
        </Grid>
      </Grid>
    </div>
  );
}
