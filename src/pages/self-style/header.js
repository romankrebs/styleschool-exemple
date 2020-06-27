import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { dates, DateToString } from "../shedule/dates";
import Header from "../../components/header-fullscreen";

export default function Component() {
  return (
    <Header
      head1={<span>Сам себе стилист</span>}
      descript={<p style={{ textAlign: "center" }}>Курс-практикум</p>}
      background="url(/img/self-style/fullscreen.jpg) center center/cover no-repeat"
      styles={{
        lineColor: "rgb(255,255,255)",
        bkgBlockColor: "rgba(25,25,25,0.5)",
        textColor: "rgb(255,255,255)"
      }}
      formsEducation="{ Очно | Online }"
      bottomLine={
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          spacing={3}
          style={{ padding: 40 }}
        >
          <Grid item xs={12} md={3}>
            <Paper
              style={{
                background: "rgba(0,0,0,0.3)",
                color: "rgb(255,255,255)",
                borderRadius: 0,
                border: "1px solid rgb(255,255,255)",
                textAlign: "center",
                padding: "20px 10px",
                fontSize: "1em",
                minWidth: 120
              }}
            >
              Очно с {DateToString(dates.selfStyle.ofline)}
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper
              style={{
                background: "rgba(0,0,0,0.3)",
                color: "rgb(255,255,255)",
                borderRadius: 0,
                border: "1px solid rgb(255,255,255)",
                textAlign: "center",
                padding: "20px 10px",
                fontSize: "1em",
                minWidth: 160
              }}
            >
              Online с {DateToString(dates.selfStyle.online)}
            </Paper>
          </Grid>
        </Grid>
      }
    />
  );
}
