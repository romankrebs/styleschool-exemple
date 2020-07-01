import React from "react";
import Grid from "@material-ui/core/Grid";
import Imagemaker from "../../components/banner-imagemaker";
import Interior from "../../components/banner-interior-prof";
import PersonalBrand from "../../components/banner-personal-brand";

export default function Banners() {
  return (
    <Grid container justify="center" alignItems="center" spacing={4}>
      <Grid item xs={12} md={12}>
        <h2
          style={{
            fontFamily: "Roboto",
            fontSize: "1.6em",
            fontWeight: 700,
            color: "rgb(80,80,80)",
            textAlign: "center"
          }}
        >
          Вас может заинтересовать
        </h2>
      </Grid>
      <Grid item xs={12} md={4}>
        <Imagemaker />
      </Grid>
      <Grid item xs={12} md={4}>
        <Interior />
      </Grid>
      <Grid item xs={12} md={4}>
        <PersonalBrand />
      </Grid>
    </Grid>
  );
}
