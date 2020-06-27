import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import ScrollableAnchor from "react-scrollable-anchor";
import Button from "../../components/button-with-form"; // "../../components/button-reserved";
import { dates, DateToString } from "../shedule/dates";
//const axios = require("axios");

export const datas = {
  ofline: [
    {
      data: "с " + DateToString(dates.imagemaker.ofline) + " г.",
      link: "https://billing.styleschool.ru/event/TZvh7pmqQGXZZZfcF"
    }
  ],
  online: [
    {
      data: "с " + DateToString(dates.imagemaker.online) + " г.",
      link: "https://billing.styleschool.ru/event/bjNdXF3MYfMZRFHn3"
    }
  ]
};

const styles = {
  h3: {
    fontFamily: "Roboto",
    fontSize: "1.6em",
    color: "rgb(100,100,100)",
    textAlign: "center",
    fontWeight: 500,
    margin: 0,
    padding: "12px 0"
  },
  h2: {
    fontFamily: "Roboto",
    fontSize: "1.8em",
    color: "rgb(80,80,80)",
    textAlign: "center",
    fontWeight: 500,
    margin: 8,
    padding: "12px 0",
    paddingTop: 32
  }
};

const Tile = function(props) {
  return (
    <Paper
      style={{
        padding: 10,
        marginBottom: 10,
        marginTop: 10
      }}
    >
      <h3 style={styles.h3}>{props.head}</h3>
      <p
        style={{
          fontSzie: "1.2rem",
          fontFamily: "Roboto",
          color: "rgb(100,100,100)",
          fontWeight: 600,
          textAlign: "center"
        }}
      >
        {props.date}
      </p>
      {props.openLection ? (
        <p
          style={{
            fontFamily: "Roboto",
            fontSize: "1rem",
            fontWeight: 500,
            color: "rgb(100,100,100)",
            textAlign: "center",
            padding: "0.5rem",
            paddingBottom: "2rem",
            margin: 0
          }}
        >
          Открытое онлайн занятие {props.dateOpenLection}
        </p>
      ) : null}
      {/* <p
        style={{
          fontSize: "0.9em",
          textAlign: "center"
        }}
      >
        {props.price}
      </p>*/}
      <Button />
      <div style={{ height: "1rem" }} />
    </Paper>
  );
};

export default function Dates(props) {
  return (
    <div>
      <Grid container justify="center" alignItems="flex-start">
        <Grid item xs={12} md={12}>
          <ScrollableAnchor id="dates">
            <h2 style={styles.h2}>Ближайшие наборы на курс</h2>
          </ScrollableAnchor>
        </Grid>
      </Grid>
      {/* <Hidden implementation="css" smDown> */}
      <Grid container justify="center" alignItems="flex-start">
        <Grid item xs={12} md={6} style={{ padding: 20 }}>
          <Tile
            head="Дистанционно"
            date={datas.online[0].data}
            openLection
            dateOpenLection={DateToString(dates.imagemaker.openLection, true)}
            // link={datas.online[0].link}
          />
        </Grid>
        <Grid item xs={12} md={6} style={{ padding: 20 }}>
          <Tile
            head="Очно"
            date={datas.ofline[0].data}
            openLection
            dateOpenLection={DateToString(dates.imagemaker.openLection, true)}
            // link={datas.ofline[0].link}
          />
        </Grid>
      </Grid>
    </div>
  );
}
