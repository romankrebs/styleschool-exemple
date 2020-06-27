import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Page from "../../components/page";
import Header from "./header";
import Socnet from "../../components/want-to-know";
import Paragraph from "./paragraph";
import Slider from "./teacher";
import Program from "./programma";
import Dates from "./dates";
import { HorizontalForm } from "../../components/forms";

const title = "Fashion франчайзинг – основы успешного бизнеса";

export default function ThePage() {
  return (
    <div className="App">
      <Helmet>
        <title>{title}</title>
        <meta name="keywords" content={"ВШСДТ: " + title} />
      </Helmet>
      <Page lable="Fashion франчайзинг" lableMobile="">
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ maxWidth: 1000, margin: "0 auto" }}
        >
          <Grid item xs={12} md={12} style={{ padding: 10 }}>
            <Header title={title} />
            <Paragraph />
            <Dates />
            <Program />
            <Slider />
            <Socnet />
            <Grid container>
              <Grid item xs={12} md={12} style={{ padding: 10 }}>
                <h2 style={{ textAlign: "center" }}>
                  Записаться на собеседование
                </h2>
              </Grid>
              <Grid item xs={12} md={12} style={{ padding: 10 }}>
                <HorizontalForm />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Page>
    </div>
  );
}
