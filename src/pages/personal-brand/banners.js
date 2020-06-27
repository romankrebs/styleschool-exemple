import React from "react";
import Grid from "@material-ui/core/Grid";

import StartUp from "../../components/banner-launch-technology-startup";
import Advertising from "../../components/banner-advertising-as-a-communication";
import International from "../../components/banner-international-communications";

export default function Banners() {
  return (
    <div style={{ paddingBottom: "1.4em" }}>
      <Grid container justify="center" alignItems="center" spacing={2}>
        <Grid item xs={12} md={4}>
          <StartUp />
        </Grid>
        <Grid item xs={12} md={4}>
          <Advertising />
        </Grid>
        <Grid item xs={12} md={4}>
          <International />
        </Grid>
      </Grid>
    </div>
  );
}
