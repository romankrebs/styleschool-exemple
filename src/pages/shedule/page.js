import React from "react";
import { Grid } from "@material-ui/core";
import Helmet from "react-helmet";
import Man from "./man";
import { withStyles } from "@material-ui/styles";
import Page from "../../components/page";

const styles = theme => ({
  box: {
    padding: 0
  },
  "@media (max-width: 959px)": {
    box: {
      padding: "0 10px"
    }
  }
});

const ThePage = props => {
  const { classes } = props;

  return (
    <div>
      <Helmet>
        <title>Расписание</title>
        <meta name="keywords" content="ВШС: Расписание" />
      </Helmet>
      <Page lable="Расписание" lableMobile="Расписание">
        <Grid
          container
          alignItems="flex-start"
          spacing={3}
          className={classes.box}
        >
          <Grid item xs={12} md={12}>
            <h2
              style={{
                fontFamily: "inherit",
                fontSize: "1.6em",
                fontWeight: 700,
                textAlign: "left",
                color: "rgb(80,80,80)"
              }}
            >
              {props.head}
            </h2>
            <p
              style={{
                fontFamily: "inherit",
                fontSize: "1em",
                fontWeight: 400,
                textAlign: "left",
                color: "rgb(100,100,100)"
              }}
            >
              {props.descript}
            </p>
          </Grid>
          <Grid item xs={12} md={7}>
            {props.content}
          </Grid>
          <Grid item xs={12} md={5}>
            <Man index={props.index} inner={props.inner} />
          </Grid>
        </Grid>
      </Page>
    </div>
  );
};

export default withStyles(styles)(ThePage);
