import React from "react";
import { Grid } from "@material-ui/core";
import ButtonVideo from "./button-video";
import ButtonLink from "./button-black";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  h1: {
    fontFamily: "Roboto",
    fontSize: "2rem",
    fontWeight: 700,
    color: "rgb(80,80,80)",
    textAlign: "center",
    margin: 0,
    padding: "2rem 0",
    paddingTop: 0
  },
  h2: {
    fontFamily: "Roboto",
    fontSize: "1.6rem",
    fontWeight: 700,
    color: "rgb(100,100,100)",
    textAlign: "center",
    margin: 0,
    padding: "1.6rem 0 1.4rem 0"
  },
  h3Big: {
    fontFamily: "Roboto",
    fontSize: "1.3em",
    fontWeight: 700,
    color: "rgb(123,143,87)",
    textAlign: "center",
    margin: 0,
    padding: "1em 0"
  },
  h3: {
    fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 700,
    color: "rgb(100,100,100)",
    textAlign: "center",
    margin: 0,
    padding: "1em 0"
  },
  p: {
    fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 400,
    color: "rgb(100,100,100)",
    textAlign: "left",
    margin: 0,
    padding: 0,
    paddingBottom: "0.5em",
    lineHeight: "1.5em"
  },
  pJust: {
    fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 400,
    color: "rgb(100,100,100)",
    textAlign: "justify",
    margin: 0,
    padding: 0,
    paddingBottom: "0.5em",
    lineHeight: "1.5em"
  },
  pCenter: {
    fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 400,
    color: "rgb(100,100,100)",
    textAlign: "center",
    margin: 0,
    padding: 0,
    paddingBottom: "0.5em",
    lineHeight: "1.5em"
  },
  pIll: {
    fontFamily: "Roboto",
    fontSize: "0.8em",
    fontWeight: 400,
    color: "rgb(100,100,100)",
    textAlign: "center",
    margin: 0,
    padding: 0,
    lineHeight: "1.2em"
  },
  image: {
    width: 350
  },
  imageBox: {
    textAlign: "center"
  },
  "@media (max-width: 959px)": {
    image: {
      width: 280,
      height: "auto"
    }
  }
});

const Image = withStyles(styles)(props => {
  const { classes } = props;
  return (
    <div className={classes.pCenter}>
      <img src={props.image} alt={props.name} className={classes.image} />
    </div>
  );
});

const Text = withStyles(styles)(props => {
  const { classes } = props;

  return (
    <div>
      <h3 className={classes.h3}>{props.name}</h3>
      <p className={classes.p}>{props.text}</p>
      {props.instagram ? (
        <p className={classes.p + " " + classes.pCenter}>
          <a href={`https://www.instagram.com/${props.instagram}/`}>
            <img
              src="/img/green/instagram.svg"
              alt={props.instagram}
              style={{ height: 24, marginBottom: -6 }}
            />
          </a>
          &ensp;
          <a href={`https://www.instagram.com/${props.instagram}/`}>
            @{props.instagram}
          </a>
        </p>
      ) : null}
      {props.buttons ? (
        <Grid container justify="center">
          {props.buttons.detail ? (
            <Grid item xs={6} md={6}>
              <ButtonLink
                text="подробнее"
                center
                link={props.buttons.detail ? props.buttons.detail : false}
                linkInside={props.buttons.linkInside ? true : false}
              />
            </Grid>
          ) : null}
          {props.buttons.video ? (
            <Grid item xs={6} md={6} style={{ padding: "1rem" }}>
              <div style={{ margin: "0 auto", width: "max-content" }}>
                <ButtonVideo
                  text={
                    <span>
                      {props.buttons.videoText || "интервью"}
                      &emsp;&#9658;
                    </span>
                  }
                  linkVideo={props.buttons.video}
                />
              </div>
            </Grid>
          ) : null}
        </Grid>
      ) : null}
    </div>
  );
});

function Teacher(obj) {
  // const { classes } = props;
  const content = {
    image: <Image image={obj.image} name={obj.name} />,
    text: (
      <Text
        text={obj.text}
        name={obj.name}
        instagram={obj.instagram}
        buttons={obj.buttons}
      />
    )
  };
  return content;
}

export default Teacher;
