import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Page from "../../components/page";
import Head from "./header";
import InFew from "./infew";
import Descript from "./description";
import Dates from "./date-education";
import Teachers from "./teachers";
import Contents from "./contents";
import { HorizontalForm } from "../../components/forms";
import Banners from "./banners";
import { style } from "../../components/stylesCourse";
import { withStyles } from "@material-ui/styles";
import Want from "../../components/want-to-know";

const wStyles = theme => style;

function Component(props) {
  const name =
    "Международные коммуникации, презентация бренда на глобальном рынке";
  const { classes } = props;

  return (
    <div>
      <Helmet>
        <title>{name}</title>
        <meta name="keywords" content={"ВШСДТ: " + name} />
      </Helmet>
      <Page lable="Международные коммуникации" lableMobile="">
        <Head />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12} style={{ padding: "0 20px" }}>
            <InFew />
            <Descript />
            <Contents />
            <Dates />
            <Teachers />
            <h2 className={classes.h2small}>Записаться на собеседование</h2>
            <HorizontalForm />
            <Want noHead />
            <h2 className={classes.h2small}>Вас могут заинтересовать</h2>
            <Banners />
          </Grid>
        </Grid>
      </Page>
    </div>
  );
}

export default withStyles(wStyles)(Component);
