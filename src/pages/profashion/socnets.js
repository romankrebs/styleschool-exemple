import React from "react";
import { Grid, Hidden } from "@material-ui/core";

import SocnetButtons from "../../components/socnets-icons-buttons";
// import Button0 from "../../components/button0";

export default function SocnetsComponent() {
  return (
    <Grid container justify="center" alignItems="center" style={{}}>
      <Grid item xs={12} md={6} style={{ maxwidth: 500 }}>
        <Hidden implementation="css" smDown>
          <div style={{ height: 140 }} />
        </Hidden>
        <h2
          style={{
            fontFamily: "Lora",
            fontSize: "1.8em",
            color: "rgb(100,100,100)",
            textAlign: "center",
            fontWeight: 500,
            margin: 8,
            padding: "24px 0"
          }}
        >
          Хотите узнать подробнее?
        </h2>
        <SocnetButtons link="profashion" />
        <div style={{ height: 48 }} />
        <div style={{ margin: "0 auto", padding: 20, textAlign: "center" }}>
          <p
            style={{
              textAlign: "center",
              fontSize: "1em",
              color: "rgb(21,101,192)",
              fontWeight: 400
            }}
          >
            <a
              href="tel:8 (495) 221-89-35"
              style={{ color: "rgb(21,101,192)" }}
            >
              8 (495) 221-89-35
            </a>
            <br />
            <a
              href="tel:8 (800) 550-78-93"
              style={{ color: "rgb(21,101,192)" }}
            >
              8 (800) 550-78-93
            </a>
          </p>
        </div>
        <Hidden implementation="css" smDown>
          <div style={{ height: 120 }} />
        </Hidden>
      </Grid>
    </Grid>
  );
}
