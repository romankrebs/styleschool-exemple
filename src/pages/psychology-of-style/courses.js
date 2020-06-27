import React from "react";
import Grid from "@material-ui/core/Grid";
import Imagemaker from "../../components/banner-imagemaker";
import Politycal from "../../components/banner-political-style-strategy";
import MasterClasses from "../../components/banner-modern-moda-style2";

export default function Component() {
  return (
    <Grid container spacing={3} justify="space-evenly">
      <Grid item xs={12} md={12} style={{ padding: 10 }}>
        <h2>Вас может заинтересовать</h2>
      </Grid>
      <Grid item xs={12} md={4}>
        <Imagemaker />
      </Grid>
      <Grid item xs={12} md={4}>
        <Politycal />
      </Grid>
      <Grid item xs={12} md={4}>
        <MasterClasses />
      </Grid>
    </Grid>
  );
}
