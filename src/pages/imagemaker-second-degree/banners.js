import React from "react";
import Grid from "@material-ui/core/Grid";
import Modern from "../../components/banner-modern-moda-style2";
import Political from "../../components/banner-political-style";
import Interior from "../../components/banner-interior-prof";

export default function Banners(props) {
  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Grid item xs={12} md={12}>
        <h2
          style={{
            fontFamily: props.font ? props.font.title : "Lora",
            fontSize: "1.8em",
            fontWeight: 500,
            color: "rgb(80,80,80)",
            textAlign: "center",
            paddingTop: 30
          }}
        >
          Вас может заинтересовать
        </h2>
      </Grid>
      <Grid item xs={12} md={4}>
        <Modern />
      </Grid>
      <Grid item xs={12} md={4}>
        <Political />
      </Grid>
      <Grid item xs={12} md={4}>
        <Interior />
      </Grid>
    </Grid>
  );
}
