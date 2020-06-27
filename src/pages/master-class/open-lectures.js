import React from "react";
import { Grid } from "@material-ui/core";
import Profession from "./cards/profashion-interior-designer";
// import Pitfalls from "./cards/pitfalls-of-repair";
// import PsychologyColor from "./cards/psychology-color";
// import ChangingWorld from "./cards/changing-world-of-fashion";
// import NonVerbal from "./cards/non-verbal-communications";
import Smm from "./cards/smm";
// import PoorFashion from "./cards/poor-fashion";
import SRMTrands from "./cards/trands-in-accessuaries";
import SRMPhotographing from "./cards/photographing";
import SRMPresentation from "./cards/presentation";
import SRMSelection from "./cards/selection";

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
          <h2 style={props.styleHead || styles.head}>
            Ближайшие открытые лекции
          </h2>
        </Grid>
        {/* <Grid item xs={12} md={3}>
          <PoorFashion
            part="1"
            date="15 февраля"
            setBillingId={props.setBillingId}
            onlineIcon
            time="11:00"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ChangingWorld oflineIcon />
        </Grid> */}
        <Grid item xs={12} md={3}>
          <Profession onlineIcon />
        </Grid>
        <Grid item xs={12} md={3}>
          <SRMPresentation />
        </Grid>
        <Grid item xs={12} md={3}>
          <SRMPhotographing index={0} />
        </Grid>
        <Grid item xs={12} md={3}>
          <SRMTrands index={0} />
        </Grid>
        {/* <Grid item xs={12} md={3}>
          <SRMPhotographing index={1} />
        </Grid>
        <Grid item xs={12} md={3}>
          <SRMSelection />
        </Grid>
        <Grid item xs={12} md={3}>
          <SRMTrands index={1} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Smm setBillingId={props.setBillingId} onlineIcon />
        </Grid> */}
      </Grid>
    </div>
  );
}
