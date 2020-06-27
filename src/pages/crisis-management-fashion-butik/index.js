import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Page from "../../components/page";
import Header from "./header";
import Socnet from "../../components/want-to-know";
import Paragraph from "./paragraph";
import Program from "./programma";
import Dates from "./dates";
import Courses from "./courses";
import { HorizontalForm } from "../../components/forms";

export default function Imagemaker() {
  return (
    <div className="App">
      <Helmet>
        <title>
          Антикризисное управление розничным магазином в индустрии моды
        </title>
        <meta
          name="keywords"
          content="ВШС: Антикризисное управление розничным магазином в индустрии моды"
        />
      </Helmet>
      <Page lable="Антикризисное управление" lableMobile=" ">
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ maxWidth: 1000, margin: "0 auto" }}
        >
          <Grid item xs={12} md={12} style={{ padding: 10 }}>
            <Header />
            <Paragraph />
            <Program />
            <Dates />
            <Grid container>
              <Grid item xs={12} md={12} style={{ padding: 10 }}>
                <Socnet />
                {/* <h2>Заявка на обучение</h2> */}
              </Grid>
              <Grid item xs={12} md={12} style={{ padding: 10 }}>
                <HorizontalForm />
              </Grid>
            </Grid>
            <Courses />
          </Grid>
        </Grid>
      </Page>
    </div>
  );
}
