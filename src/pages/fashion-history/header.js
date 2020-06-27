import React from "react";
import { Grid, Paper, Hidden } from "@material-ui/core";

import Header from "../../components/header-fullscreen";

export default function Head() {
  return (
    <Header
      head1={<span>История моды с Русланом Миграновым</span>}
      descript={
        <p
          style={{
            textAlign: "center",
            padding: 5,
            margin: 0
          }}
        >
          <span
            style={{
              fontWeight: 700,
              color: "rgb(100,100,100)"
            }}
          >
            Мода XX века:
          </span>
          <br />
          путешествие от модерна до конца тысячелетия
        </p>
      }
      background="url(/img/history/fullscreen.jpg) center center/cover no-repeat"
      styles={{
        lineColor: "rgb(70,70,70)",
        bkgBlockColor: "rgba(240,240,240,0.7)",
        textColor: "rgb(50,50,50)"
      }}
      formsEducation="{ Курс доступен в формате видео-лекций }"
      bottomLine={
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ maxWidth: 1000, margin: "0 auto" }}
        >
          <Grid item xs={12} md={3} style={{ padding: 20 }}>
            <Paper
              style={{
                background: "rgba(240,240,240,0.7)",
                color: "rgb(80,80,80)",
                textAlign: "center",
                padding: 20,
                fontFamily: "inherit",
                fontSize: "1em",
                maxWidth: 140
              }}
            >
              Видео-лекции:
              <br />
              15 академ. часов
            </Paper>
          </Grid>
          {/* <Grid item xs={12} md={3} style={{ padding: 20 }}>
            <Paper
              style={{
                background: "rgba(240,240,240,0.7)",
                color: "rgb(80,80,80)",
                textAlign: "center",
                padding: 20,
                fontFamily: "inherit",
                fontSize: "1em",
                maxWidth: 200
              }}
            >
              Стоимость:
              <br />
              10 000 руб.
            </Paper>
          </Grid> */}
          <Hidden implementation="css" smDown>
            <Grid item xs={4} md={3} style={{ padding: 20 }} />
          </Hidden>
          <Grid item xs={12} md={3} style={{ padding: 20 }}>
            <Paper
              style={{
                background: "rgba(123,143,87,0.9)",
                color: "rgb(255,255,255)",
                textAlign: "center",
                padding: 20,
                fontFamily: "Roboto",
                fontSize: "1em",
                maxWidth: 200
              }}
            >
              <a
                href="https://styleschool.ru/mod/scorm/view.php?id=314"
                style={{
                  color: "rgb(255,255,255)"
                }}
              >
                <img
                  src="/img/camcorder-w.svg"
                  alt=""
                  style={{ marginBottom: -8 }}
                />{" "}
                Смотреть демо лекцию
              </a>
            </Paper>
          </Grid>
        </Grid>
      }
    />
  );
}
