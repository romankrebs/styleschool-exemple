import React from "react";
import Grid from "@material-ui/core/Grid";

import H2 from "../../components/head1";

export default function Geo() {
  return (
    <div>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={12}>
          <H2 content="Наша география" />
          <p
            style={{
              // fontFamily: "Roboto",
              fontSize: "1.2em",
              fontWeight: 700,
              textAlign: "center",
              color: "rgb(100,100,100)"
            }}
          >
            у нас обучаются из 15 стран
          </p>
        </Grid>
        <Grid item xs={12} md={12} style={{ padding: 10 }}>
          <img src="/img/about/map.jpg" alt="" style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </div>
  );
}
