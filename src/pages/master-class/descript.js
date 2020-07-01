import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export default function Descript() {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={12} style={{ padding: 20 }}>
        <Paper
          style={{
            padding: 20,
            paddingTop: 4,
            background: "rgba(240,240,240,1)"
          }}
        >
          <p
            style={{
              fontFamily: "Roboto",
              fontSize: "1em",
              textAlign: "center",
              color: "rgb(100,100,100)",
              padding: 5,
              margin: 0
            }}
          >
            <span
              style={{
                color: "rgb(255,0,0)",
                fontSize: "2em",
                fontFamily: "Istok Web"
              }}
            >
              <sub>*</sub>
            </span>{" "}
            Время проведения занятий в Вашем часовом поясе отражается в личном
            кабинете
          </p>
          <p
            style={{
              fontFamily: "Roboto",
              fontSize: "1em",
              textAlign: "center",
              color: "rgb(100,100,100)",
              fontWeight: 700,
              padding: 5,
              margin: 0
            }}
          >
            Обратите внимание, что доступ к подписке будет открыт в течение 12
            часов с момента оплаты
          </p>
        </Paper>
      </Grid>
    </Grid>
  );
}
