import React from "react";
import { Grid } from "@material-ui/core";
import Helmet from "react-helmet";
import Man from "./man";
import Head from "./header";
import Page from "../../components/page";

export default function Shedule() {
  return (
    <div>
      <Helmet>
        <title>Расписание</title>
        <meta name="keywords" content="ВШС: Расписание" />
      </Helmet>
      <Page lable="Расписание курсов" lableMobile="Расписание">
        <Grid
          container
          justify="flex-start"
          style={{ maxWidth: "100%", padding: 20, margin: "0 auto" }}
        >
          <Grid item xs={12} md={12}>
            <Head />
          </Grid>
          <Grid item xs={12} md={12}>
            <Man inner={false} index={false} />
          </Grid>
        </Grid>
      </Page>
    </div>
  );
}
