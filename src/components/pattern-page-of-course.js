import React from "react";
import Helmet from "react-helmet";
import Page from "./page";
import { Grid, Paper } from "@material-ui/core";
import Socnets from "./want-to-know";
import { HorizontalForm } from "./forms";

export const styles = {
  h3: {
    fontSize: "1.2em",
    fontWeight: 600,
    color: "rgb(100,100,100)",
    textAlign: "center",
    fontFamily: "Roboto",
    padding: 12,
    margin: 0
  },
  button: {
    background: "rgb(123,143,87)",
    color: "rgb(255,255,255)",
    borderRadius: 6,
    padding: 12,
    margin: "0 auto",
    textAlign: "center",
    width: "fit-content"
  },
  p: {
    fontSize: "1em",
    fontWeight: 400,
    color: "rgb(100,100,100)",
    textAlign: "center",
    fontFamily: "Roboto",
    padding: 6,
    margin: 0
  },
  list: {
    fontSize: "1em",
    fontWeight: 400,
    color: "rgb(100,100,100)",
    textAlign: "left",
    fontFamily: "Roboto",
    lineHeight: "1.5em"
  },
  price: {
    fontSize: "1.4em",
    fontWeight: 500,
    color: "rgb(100,0,0)",
    textAlign: "center",
    fontFamily: "Roboto",
    margin: 0,
    padding: "24px 0"
  }
};

const Pattern = props => {
  const style = {
    h1: {
      fontSize: "1.8em",
      fontWeight: 700,
      color: "rgb(100,100,100)",
      textAlign: "center",
      fontFamily: props.font || "Roboto",
      padding: "24px 0",
      margin: 0
    },
    h2: {
      fontSize: "1.4em",
      fontWeight: 500,
      color: "rgb(100,100,100)",
      textAlign: "center",
      fontFamily: props.font || "Roboto",
      padding: "16px 0",
      margin: 0
    },
    text: {
      fontSize: "1em",
      fontWeight: 400,
      color: "rgb(100,100,100)",
      textAlign: "left",
      fontFamily: props.font || "Roboto",
      padding: 12,
      margin: 0,
      lineHeight: "1.8em"
    },
    h3: {
      fontSize: "1.2em",
      fontWeight: 600,
      color: "rgb(100,100,100)",
      textAlign: "center",
      fontFamily: props.font || "Roboto",
      padding: 12,
      margin: 0
    },
    button: {
      background: "rgb(123,143,87)",
      color: "rgb(255,255,255)",
      borderRadous: 6,
      padding: 12,
      margin: "0 auto",
      textAlign: "center",
      width: "fit-content"
    },
    image: {
      maxWidth: "100%"
    }
  };

  return (
    <div>
      <Helmet>
        <title>{props.title}</title>
        <meta name="keywords" content={"ВШСДТ: " + props.title} />
      </Helmet>
      <Page lable="" lableMobile="">
        {/* <Top faqultet={props.faq} /> */}
        <Grid container spacing={4} alignItems="flex-start" justify="center">
          <Grid item xs={12} md={12}>
            <h1 style={style.h1}>{props.title}</h1>
            <h2 style={style.h2}>{props.short}</h2>
          </Grid>
          <Grid item xs={12} md={7}>
            <div style={style.text}>{props.teacher.text}</div>
          </Grid>
          <Grid item xs={12} md={5} style={{ textAlign: "center" }}>
            <img
              src={props.teacher.img}
              alt={props.teacher.name}
              style={style.image}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <h2 style={style.h2}>Ближайший набор на курс</h2>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: 12 }}>{props.leftTile}</Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: 12 }}>{props.rightTile}</Paper>
          </Grid>
          <Grid item xs={12} md={10}>
            <h2 style={style.h2}>Программа курса</h2>
            {props.programm}
            {props.additional ? (
              <div>
                <div style={{ height: 64 }} />
                <Grid
                  container
                  alignItems="flex-start"
                  justify="center"
                  spacing={4}
                >
                  <Grid item xs={12} md={6}>
                    <h2 style={{ ...style.h2, textAlign: "left" }}>
                      {props.addTitle}
                    </h2>
                    {props.addText}
                  </Grid>
                  <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
                    <img
                      src={props.addImg}
                      alt={props.addName || " "}
                      style={{ maxWidth: 240 }}
                    />
                  </Grid>
                </Grid>
              </div>
            ) : null}
          </Grid>
          <Grid item xs={12} md={12}>
            {props.addDescript ? <p>{props.addDescript}</p> : null}
            <Socnets />
            <h2 style={style.h2}>Записаться на собеседование</h2>
            <HorizontalForm />
          </Grid>
        </Grid>
      </Page>
    </div>
  );
};

export default Pattern;
