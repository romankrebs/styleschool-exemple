import React from "react";
import { Grid } from "@material-ui/core";
import Imagemaker from "../../components/banner-imagemaker";
import Modern from "../../components/banner-modern-moda-style2";
import Interior from "../../components/banner-interior-prof";

export default function Banners(params) {
  return (
    <div>
      <h2
        style={{
          font: '500 2em "Lora"',
          color: "rgb(90,90,90)",
          textAlign: "center",
          margin: 0,
          padding: 0,
          paddingTop: 48,
          paddingBottom: 24
        }}
      >
        Вас может заинтересовать
      </h2>
      <Grid container alignItems="flex-start" spacing={3}>
        <Grid item xs={12} md={4}>
          <Imagemaker />
        </Grid>
        <Grid item xs={12} md={4}>
          <Modern />
        </Grid>
        <Grid item xs={12} md={4}>
          <Interior />
        </Grid>
      </Grid>
    </div>
  );
}
