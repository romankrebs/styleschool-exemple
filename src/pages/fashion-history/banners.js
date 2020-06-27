import React from "react";
import Grid from "@material-ui/core/Grid";

import Modern from "../../components/banner-modern-moda-style2";
import Fash from "../../components/banner-image-consulting-fashion-styling";
import Journalism from "../../components/banner-profi-fashion-journalist";
import H2 from "../../components/head1";

export default function Banners() {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      spacing={2}
      style={{ padding: 20 }}
    >
      <Grid item xs={12} md={12}>
        <H2 content="Вас может заинтересовать" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Modern />
      </Grid>
      <Grid item xs={12} md={4}>
        <Fash />
      </Grid>
      <Grid item xs={12} md={4}>
        <Journalism />
      </Grid>
    </Grid>
  );
}
