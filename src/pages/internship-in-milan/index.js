import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import Helmet from "react-helmet";
import Head from "./header";
import Descript from "./description";
import Price from "./price";
import Programma from "./programma";
import Teachers from "./teachers";
import { HorizontalForm } from "../../components/forms";
import { style } from "../../components/stylesCourse";
import Want from "../../components/want-to-know";
import Page from "../../components/page";

const styles = theme => style;

const Component = props => {
  const name =
    "Шоппинг стажировка в Италии на Milan fashion week 17.02-23.02.2020";
  const { classes } = props;
  return (
    <div style={{ fontSize: 16 }}>
      <Helmet>
        <title>{name}</title>
        <meta name="keywords" content={"ВШСДТ: " + name} />
      </Helmet>
      <Page lable="Milan fashion week" lableMobile="">
        <Head head={name} />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12} style={{ padding: "0 20px" }}>
            <div style={{ height: "1.4em" }} />
            <Descript />
            <Price />
            <Programma />
            <Teachers />
            <h2 className={classes.h2small}>Записаться на собеседование</h2>
            <HorizontalForm />
            <Want noHead />
            {/* <h2 className={classes.h2small}>Вас могут заинтересовать</h2>
            <Banners /> */}
          </Grid>
        </Grid>
      </Page>
    </div>
  );
};

export default withStyles(styles)(Component);
