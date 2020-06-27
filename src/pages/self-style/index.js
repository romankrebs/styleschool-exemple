import React from "react";
import Helmet from "react-helmet";
import { Grid } from "@material-ui/core";
import Head from "./header";
import Screen1 from "./screen1";
import Dates from "./dates";
import Programma from "./programma";
import Why from "./why";
import Learn from "../../components/want-to-know";
import { HorizontalForm } from "../../components/forms";
import Banners from "./banners";
import Page from "../../components/page";

export default function SelfStyle() {
  return (
    <div>
      <Helmet>
        <title>Базовый курс &laquo;Сам себе стилист&raquo;</title>
        <meta name="keywords" content="ВШС: Базовый курс «Сам себе стилист»" />
      </Helmet>
      <Page lable="Сам себе стилист" lableMobile="Сам себе стилист">
        <Grid container>
          <Grid item xs={12} md={12}>
            <Head />
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          style={{
            maxWidth: 1000,
            margin: "0 auto"
          }}
          spacing={4}
        >
          <Grid item xs={12} md={12}>
            <Screen1 />
            <Dates />
          </Grid>
          <Grid item xs={12} md={10}>
            <Programma />
          </Grid>
          <Grid item xs={12} md={11}>
            <Why />
          </Grid>
          <Grid item xs={12} md={12}>
            <Learn fontHead="Lora" />
            <h2
              style={{
                textAlign: "center",
                fontSize: "2em",
                color: "rgb(100,100,100)",
                fontFamily: "Lora",
                fontWeight: 500
              }}
            >
              Записаться на собеседование
            </h2>
            <HorizontalForm />
            <Banners />
          </Grid>
        </Grid>
      </Page>
    </div>
  );
}
