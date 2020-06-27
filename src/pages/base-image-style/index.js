import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Header from "./header";
import Socnet from "../../components/want-to-know";
import Paragraph from "./paragraph";
import Slider from "./slider-teutch";
import Program from "./programma";
import Dates from "./dates";
import Courses from "./courses";
import { HorizontalForm } from "../../components/forms";
import Page from "../../components/page";

export default function Imagemaker() {
  return (
    <div className="App">
      <Helmet>
        <title>Стили в одежде. Принципы подбора</title>
        <meta name="keywords" content="ВШС: Стили в одежде. Принципы подбора" />
        <meta
          name="title"
          content="Курсы стилистов-имиджмейкеров в Москве. От 9900 в месяц"
        />
        <meta
          name="keywords"
          content="Курсы имиджмейкеров-стилистов в Москве за 3 месяца. Очно и дистанционно. Диплом гос. университета. Получите право ведения профессиональной деятельности!"
        />
        <meta
          name="description"
          content="Курсы имиджмейкеров-стилистов в Москве за 3 месяца. Очно и дистанционно. Диплом гос. университета. Получите право ведения профессиональной деятельности!"
        />
      </Helmet>
      <Page lable="Стили в одежде" lableMobile="Курсы имиджа">
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ maxWidth: 1000, margin: "0 auto" }}
        >
          <Grid item xs={12} md={12} style={{ padding: 10 }}>
            <Header />
            <Paragraph />
            {/* <Buttons /> */}
            {/* <Button /> */}
            {/* <Blocks /> */}
            <Dates />
            <Program />
            <Slider />
            <Grid container>
              <Grid item xs={12} md={12} style={{ padding: 10 }}>
                <Socnet target="kursy_image_style" />
                {/* <h2>Заявка на обучение</h2> */}
              </Grid>
              <Grid item xs={12} md={12} style={{ padding: 10 }}>
                <HorizontalForm target="kursy_image_style" />
              </Grid>
            </Grid>
            <Courses />
          </Grid>
        </Grid>
      </Page>
    </div>
  );
}
