import React from "react";
import Grid from "@material-ui/core/Grid";
import Socnet from "../../components/socnet-buttons";
import { VerticalForm } from "../../components/forms";

export default function Callback() {
  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12} md={6}>
        <VerticalForm />
      </Grid>
      <Grid item xs={12} md={6}>
        <Socnet />
      </Grid>
    </Grid>
  );
}
