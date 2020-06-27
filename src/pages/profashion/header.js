import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const style = theme => ({
  fullscreen: {
    backgroundImage: "url(/img/profashion/bkg.jpg)",
    backgroundPosition: "top right",
    backgroundSize: "auto 100%",
    backgroundColor: "rgb(236,236,226)",
    backgroundRepeat: "no-repeat",
    padding: "4em",
    maxHeight: "calc(100vh - 35px - 2.8em)"
  },
  h1: {
    fontFamily: "Lora",
    fontSize: "2.8em",
    fontWeight: 500,
    color: "white",
    textAlign: "center",
    padding: "1em 0 0 0",
    margin: 0
  },
  box: {
    background: "rgba(100,135,145,1)",
    padding: "1em"
  },
  line: {
    margin: "8px auto",
    width: "50%",
    height: 1,
    background: "rgb(255,255,255)"
  },
  descript: {
    fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 400,
    color: "white",
    textAlign: "center"
  },
  "@media (max-width: 959px)": {
    fullscreen: {
      padding: "1em",
      maxHeight: "auto",
      paddingTop: "4em",
      paddingBottom: "4em"
    },
    h1: {
      fontSize: "1.6em",
      padding: "1em 0"
    },
    descript: {
      fontSize: "0.9em"
    }
  }
});

function Header(props) {
  const { classes } = props;

  return (
    <div className={classes.fullscreen}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={10} md={7}>
          <Paper className={classes.box}>
            <h1 className={classes.h1} style={{ fontFamily: "Lora" }}>
              Имидж-консультант
            </h1>
            <p className={classes.descript} style={{ fontSize: "1.4em" }}>
              Обучение дипломированных имидж&#8209;консультантов
            </p>
            <div className={classes.line} />
            <p className={classes.descript}>
              Профессиональная подготовка по программе «Имидж&#8209;консалтинг»
              с выдачей диплома установленного государством образца с правом
              деятельности в выбранной области
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(style)(Header);
