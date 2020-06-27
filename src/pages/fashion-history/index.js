import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Page from "../../components/page";
import Head from "./header";
import About from "./about";
import History from "./historyxx";
import Forma from "./forma";
import Banners from "./banners";
import Socnets from "../../components/want-to-know";
import Dates from "./dates";

export default function Component() {
  return (
    <div>
      <Helmet>
        <title> История моды с Русланом Миграновым</title>
        <meta
          name="keywords"
          content="ВШС:  История моды с Русланом Миграновым"
        />
        <meta name="title" content="Курс Истории моды с Русланом Миграновым" />
        <meta
          name="keywords"
          content="История моды от своенравного модерна до гламурных 90-х. Как и почему меняется мода, основные характеристики костюма каждого десятилетия и многое другое. Записывайтесь!"
        />
        <meta
          name="description"
          content="История моды от своенравного модерна до гламурных 90-х. Как и почему меняется мода, основные характеристики костюма каждого десятилетия и многое другое. Записывайтесь!"
        />
      </Helmet>
      <Page lable="История моды" lableMobile="История моды">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12}>
            <Head />
            <About />
            <Dates />
            <History />
            <Socnets />
            <Forma />
            <Banners />
          </Grid>
        </Grid>
      </Page>
    </div>
  );
}
