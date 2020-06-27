import React from "react";
import { Grid } from "@material-ui/core";
import Socnets from "../../components/socnets-icons-buttons";

export default function SocnetsComponent() {
  return (
    <Grid container justify="center" alignItems="center" style={{}}>
      <Grid item xs={12} md={6} style={{ maxwidth: 500 }}>
        <div style={{ height: 40 }} />
        <h2
          style={{
            color: "rgb(100,100,100)",
            textAlign: "center",
            fontWeight: 500,
            margin: 8,
            padding: "24px 0"
          }}
        >
          Хотите узнать подробнее?
        </h2>
        <Socnets link="base-image-style" />
        <div style={{ margin: "0 auto", padding: 20, textAlign: "center" }}>
          <p
            style={{
              fontFamily: "Roboto",
              textAlign: "center",
              fontSize: "1em",
              color: "rgb(21,101,192)",
              fontWeight: 400
            }}
          >
            <a href="tel:+79160580091" style={{ color: "rgb(21,101,192)" }}>
              +7 (916) 058-00-92
            </a>
            <br />
            <span style={{ color: "rgb(100,100,100)" }}>
              (Специалист приемной комиссии Евгения Пименова)
            </span>
            <br />
            <br />
            <a href="tel:84952218935" style={{ color: "rgb(21,101,192)" }}>
              8 (495) 221-89-35
            </a>
            <br />
            <a href="tel:88005507893" style={{ color: "rgb(21,101,192)" }}>
              8 (800) 550-78-93
            </a>
          </p>
        </div>
        <div style={{ height: 40 }} />
      </Grid>
    </Grid>
  );
}
