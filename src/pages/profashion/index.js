import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Head from "./header";
import About from "./about";
import Condition from "./conditions";
import Programma from "./programma";
import Line from "../../components/line";
import Dates from "./dates";
import Teachers from "./teachers";
import Public from "./publication";
import TitleForm from "../../components/title-form";
import { HorizontalForm } from "../../components/forms";
import Banners from "./banners";
import Socnets from "../../components/want-to-know";
import Blocks from "./short-blocks";
import Price from "./price";
import Page from "../../components/page";

export default function Profashion() {
  return (
    <div>
      <Helmet>
        <title>Fashion-консультант</title>
        <meta name="keywords" content="ВШС: Fashion-консультант" />
        <meta name="title" content="Fashion-консультант" />
        <meta
          name="keywords"
          content="Fashion-консультант. Курс, обучение, очно, Online Высшая школа стилистики Профессиональное обучение"
        />
        <meta
          name="description"
          content="Курс Fashion-консультант. Москва, Высшая школа стилистики. Профессиональное обучение"
        />
      </Helmet>
      <Page lable="Fashion-консультант" lableMobile="Fashion-консультант">
        <Head />
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ maxWidth: 1000, margin: "0 auto" }}
        >
          <Grid item xs={12} md={12} style={{ padding: 20 }}>
            <About />
            <Dates />
            <Condition />
            <TitleForm
              style={{
                fontWeight: 500,
                color: "rgb(80,80,80)",
                fontFamily: "Lora",
                fontSize: "1.8em"
              }}
              text="Записаться на собеседование"
            />
            <HorizontalForm target="konsultant" />
            <Socnets link="profashion" fontHead="Lora" target="konsultant" />
            <Line />
            <div
              style={{
                marginTop: -40,
                fontSize: "1.2em",
                color: "rgb(100,100,100)",
                textAlign: "center"
              }}
            >
              <span
                style={{
                  background: "rgb(255,255,255)",
                  fontFamily: "inferit"
                }}
              >
                &emsp;*&emsp;
              </span>
            </div>
            <div style={{ height: 24 }} />
            <Programma />
            <Line />
            <Teachers />
            <Public />
            <Price />
            <Banners />
            <Blocks />
          </Grid>
        </Grid>
      </Page>
    </div>
  );
}
