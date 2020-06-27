import React from "react";
import Grid from "@material-ui/core/Grid";

import Base from "../../components/banner-base-image-style";
import Modern from "../../components/banner-modern-moda-style2";
import Imagemaker from "../../components/banner-imagemaker";

export default function Banners() {
  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Grid item xs={12} md={12}>
        <h2
          style={{
            fontFamily: "Lora",
            fontSize: "1.8em",
            color: "rgb(80,80,80)",
            textAlign: "center",
            fontWeight: 500,
            margin: 8,
            padding: "24px 0"
          }}
        >
          Вас может заинересовать
        </h2>
      </Grid>
      <Grid item xs={12} md={4}>
        <Base />
      </Grid>
      <Grid item xs={12} md={4}>
        <Modern />
      </Grid>
      <Grid item xs={12} md={4}>
        <Imagemaker />
      </Grid>
    </Grid>
  );
}
