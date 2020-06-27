import React from "react";
import Grid from "@material-ui/core/Grid";

import Interior from "../../components/banner-interior-prof";
import Base from "../../components/banner-base-image-style";
import Moda from "../../components/banner-modern-moda-style";

export default function Banners() {
  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Grid item xs={12} md={4}>
        <Interior />
      </Grid>
      <Grid item xs={12} md={4}>
        <Base />
      </Grid>
      <Grid item xs={12} md={4}>
        <Moda />
      </Grid>
    </Grid>
  );
}
