import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import { Helmet } from "react-helmet";
import { Header } from "./header";
import Dates from "./dates-tile";
import Socnets from "../../components/want-to-know"; // "./socnets";
import Format from "./format";
import ProffEdu from "./proff-education";
import Targets from "./programma-targets";
import Tesises from "./tesises";
import Programma from "./programma";
import BlocksComponent from "./blocks";
import Banners from "./banners";
import Title from "./title-page";
import TitleForm from "./title-form";
import Result from "./result";
import SystemPay from "./system-pay";
import System from "./system";
import AboutEducation from "./about-education";
import { HorizontalForm } from "../../components/forms";
import Line from "../../components/line";
import Video from "./video-block";
import Page from "../../components/page";

const font = {
  size: "1.2em",
  text: "Futura-Normal",
  title: "Roboto" // "Cormorant Garamond"
};

export default function Imagemaker(props) {
  return (
    <div>
      <Helmet>
        <title>Курсы имиджмейкеров как Второе высшее</title>
        <meta
          name="keywords"
          content="ВШС: Курсы имиджмейкеров как Второе высшее"
        />
        <meta
          name="title"
          content="Обучение стилистов-имиджмейкеров в Москве. Второе высшее"
        />
        <meta
          name="keywords"
          content="Обучение имиджмейкеров-стилистов в Москве за 10 месяцев. Очно и дистанционно. Диплом гос. университета. Получите право ведения профессиональной деятельности!"
        />
        <meta
          name="description"
          content="Обучение имиджмейкеров-стилистов в Москве за 10 месяцев. Очно и дистанционно. Диплом гос. университета. Получите право ведения профессиональной деятельности!"
        />
      </Helmet>
      <Page lable="Курсы имиджмейкеров" lableMobile="Курсы имиджмейкеров">
        <Header font={font} />
        <Grid
          container
          justify="center"
          style={{ maxWidth: 1000, margin: "0 auto" }}
        >
          <Grid item xs={12} md={12} style={{ padding: 12 }}>
            <Title font={font} />
            <Tesises font={font} />
            <Video
              videos={[
                {
                  link: "0s4k1IH3Pik",
                  comment:
                    "Интервью преподавателя ВШСДТ Татьяны Фоминой с выпускницей Еленой Малюшиной"
                },
                {
                  link: "npJ2B4syBMk",
                  comment:
                    "Интервью преподавателя ВШСДТ Татьяны Фоминой с выпускницей Эвелиной Коломыцыной"
                }
              ]}
            />
            <Dates font={font} />
            {/* <Anons /> */}
            <ProffEdu font={font} />
            <System font={font} />
            <Format font={font} />
            <TitleForm font={font} />
            <HorizontalForm target="imagemaker" />
            <div style={{ height: 42 }} />
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
            <Targets font={font} />
            <Programma font={font} />
            <Hidden implementation="css" smDown>
              <div style={{ height: 80 }} />
            </Hidden>
            <AboutEducation font={font} />
            <Hidden implementation="css" smDown>
              <div style={{ height: 80 }} />
            </Hidden>
            <SystemPay font={font} />
            <Result font={font} />
            <Socnets
              font={font}
              fontHead={font}
              colorHead="rgb(100,0,0)"
              noHead
              target={"imagemaker"}
            />
            <Hidden implementation="css" smDown>
              <div style={{ height: 80 }} />
            </Hidden>
            <Banners font={font} />
            <BlocksComponent />
          </Grid>
        </Grid>
      </Page>
    </div>
  );
}
