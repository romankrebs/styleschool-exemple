import React from "react";
import { Grid } from "@material-ui/core";
// import PersonalBrand from "./cards/personal-brand";
import PsychologyColor from "./cards/psychology-color";
import Trands from "./cards/trands-trandsetter";
// import NonVerbal from "./cards/non-verbal-communications";
import PRAttacks from "./cards/pr-attacks";
// import PoorFashion from "./cards/poor-fashion";
import Accessuaries from "./cards/spectacular-look";

export default function June(props) {
  let styles = {
    head: {
      font: '700 2em "Roboto"',
      textAlign: "center",
      padding: 8,
      margin: 0,
      marginTop: 30,
      color: "rgb(100,100,100)"
    },
    subhead: {
      font: '500 1.2em "Roboto"',
      textAlign: "center",
      padding: 8,
      margin: 0,
      color: "rgb(100,100,100)"
    }
  };

  return (
    <div>
      <Grid
        container
        justify="flex-start"
        alignItems="flex-start"
        spacing={2}
        style={{ maxWidth: 1000, margin: "0 auto" }}
      >
        <Grid item xs={12} md={12}>
          <h2 style={styles.head}>
            Ближайшие авторские лекции и мастер-классы
          </h2>
        </Grid>
        <Grid item xs={12} md={3}>
          <PsychologyColor oflineIcon />
        </Grid>
        <Grid item xs={12} md={3}>
          <PRAttacks oflineIcon />
        </Grid>
        <Grid item xs={12} md={3}>
          <Accessuaries oflineIcon />
        </Grid>
        <Grid item xs={12} md={3}>
          <Trands oflineIcon />
        </Grid>
      </Grid>
    </div>
  );
}
