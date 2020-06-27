import React from "react";
import Grid from "@material-ui/core/Grid";

import Personal from "../../components/banner-personal-brand";
import Advertising from "../../components/banner-advertising-as-a-communication";
import International from "../../components/banner-international-communications";

export default function Banners() {
  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Grid item xs={12} md={4}>
        <Personal />
      </Grid>
      <Grid item xs={12} md={4}>
        <Advertising />
      </Grid>
      <Grid item xs={12} md={4}>
        <International />
      </Grid>
    </Grid>
  );
}
