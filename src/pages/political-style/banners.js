import React from "react";
import Grid from "@material-ui/core/Grid";

import Modern from "../../components/banner-modern-moda-style2";
import Imagemaker from "../../components/banner-imagemaker";
import Journalism from "../../components/banner-base-image-style";

export default function Banners() {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={4} style={{ padding: 8 }}>
        <Modern />
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 8 }}>
        <Imagemaker />
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 8 }}>
        <Journalism />
      </Grid>
    </Grid>
  );
}
