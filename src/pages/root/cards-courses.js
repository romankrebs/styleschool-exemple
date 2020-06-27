import React from "react";
import { Grid } from "@material-ui/core";
import Imagemaker from "./cards/courses-imagemakers&stylists";
import Design from "./cards/design-interior-pro";
import Visual from "./cards/visual-merchandizing";
import MilanDesignWeek from "./cards/milan-design-week";

function Cards(props) {
  return (
    <div>
      <Grid container justify="flex-start" alignItems="flex-start" spacing={2}>
        <Grid item xs={12} md={12}>
          <h2
            style={
              props.styleHead || {
                fontSize: "2em",
                fontWeight: 700,
                fontFamily: "Roboto",
                textAlign: "center",
                padding: 8,
                margin: 0,
                marginTop: 30,
                color: "rgb(100,100,100)"
              }
            }
          >
            Профессиональное обучение в индустрии моды и дизайна
          </h2>
        </Grid>
        <Grid item xs={12} md={3}>
          <Imagemaker />
        </Grid>
        <Grid item xs={12} md={3}>
          <Design />
        </Grid>
        <Grid item xs={12} md={3}>
          <Visual />
        </Grid>
        <Grid item xs={12} md={3}>
          <MilanDesignWeek />
        </Grid>
      </Grid>
      <div style={{ height: "4em" }} />
    </div>
  );
}

export default Cards;
