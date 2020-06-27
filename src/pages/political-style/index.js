import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Head from "./header";
import Theses from "./theses";
import Times from "./times";
import Teachers from "./teachers";
import About from "./about";
import Date from "./date";
import Illustration from "./illustration";
import Programma from "./programma";
import Forma from "./forma";
import Banners from "./banners";
import Page from "../../components/page";

export default function Component() {
  return (
    <div>
      <Helmet>
        <title>Формирование имиджа. Инструменты политтехнологий</title>
        <meta
          name="keywords"
          content="ВШС: Формирование имиджа. Инструменты политтехнологий"
        />
        <meta
          name="title"
          content="Интенсивный курс по специфике применения полит технологий для бизнеса и гос служащих"
        />
        <meta
          name="keywords"
          content="Интенсивный курс по специфике применения полит технологий для бизнеса и гос служащих"
        />
        <meta
          name="description"
          content="Интенсивный курс по специфике применения полит технологий для бизнеса и гос служащих"
        />
      </Helmet>
      <Page lable="Формирование имиджа" lableMobile="">
        <Head />
        <Grid container justify="center" alignItems="center" spacing={4}>
          <Grid item xs={12} md={12}>
            <Theses />
            <Times />
            <Teachers />
            <About />
            <Date />
          </Grid>
        </Grid>
        <Illustration />
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ padding: 20 }}
        >
          <Grid item xs={12} md={12}>
            <Programma />
            <Forma />
            <Banners />
          </Grid>
        </Grid>
      </Page>
    </div>
  );
}
