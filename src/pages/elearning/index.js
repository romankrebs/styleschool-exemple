import React from "react";
import { Grid } from "@material-ui/core";
import Helmet from "react-helmet";
import Page from "../../components/page";
import Process from "./process";
import Technology from "./technology";
import Short from "./short";

export default function Elearning() {
  return (
    <div>
      <Helmet>
        <title>Дистанционное обучение</title>
        <meta name="keywords" content="ВШС: Дистанционное обучение" />
      </Helmet>
      <Page lable="Дистанционное обучение" lableMobile="">
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} style={{ padding: 40 }}>
            <Short />
            <Technology />
            <Process />
          </Grid>
        </Grid>
      </Page>
    </div>
  );
}
