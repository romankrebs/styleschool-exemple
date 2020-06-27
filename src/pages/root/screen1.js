import React from "react";
import { Grid, useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";
// import Events from "./upcominig-events";
import Courses from "./cards-courses";
// import Anons from "./anons";

const font = "Roboto";

const styleSchool = {
  color: "rgb(80,80,80)",
  fontFamily: font,
  fontWeight: 500
};

const Screen = props => {
  const s600 = useMediaQuery("(max-width:600px)");

  return (
    <div style={{ paddingBottom: 24 }}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            textAlign: "center",
            paddingTop: "6vh",
            paddingBottom: "2vh"
          }}
        >
          <img src="/img/logo.png" style={{ height: "25vh" }} alt="#ВШСДТ" />
        </Grid>
        <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
          <h1
            style={{
              fontFamily: "Alice",
              fontSize: s600 ? "2em" : "2.6em",
              fontWeight: "normal",
              color: "rgb(123,143,87)",
              textAlign: "center"
            }}
          >
            ВЫСШАЯ ШКОЛА СТИЛИСТИКИ,
            <br />
            ДИЗАЙНА И ТЕХНОЛОГИЙ
          </h1>
        </Grid>
        <Grid item xs={12} md={12}>
          <div
            style={{
              textAlign: "center",
              fontWeight: 500,
              fontFamily: font,
              color: "rgb(100,100,100)",
              fontSize: "2em",
              paddingTop: 24,
              paddingBottom: 48
            }}
          >
            От мечты к совершенству
          </div>
        </Grid>
        <Grid item xs={12} md={12}>
          {/* <Anons /> */}
          {/* <Events /> */}
          <Courses />
        </Grid>
        <Grid item xs={12} md={12}>
          <div
            style={{
              fontSize: s600 ? "1em" : "1.5em",
              fontWeight: 500,
              textAlign: "center",
              color: "rgb(150,150,150)"
            }}
          >
            {s600 ? (
              <span>
                <Link to="/styleschool">
                  <span style={styleSchool}>ШКОЛА СТИЛЯ</span>
                </Link>{" "}
                &bull;{" "}
                <Link to="/fashionschool">
                  <span style={styleSchool}>ШКОЛА МОДЫ</span>
                </Link>
                <br />
                <Link to="/schoolofdesign">
                  <span style={styleSchool}>ШКОЛА ДИЗАЙНА</span>
                </Link>{" "}
                &bull;{" "}
                <Link to="/artschool">
                  <span style={styleSchool}>ШКОЛА ИСКУССТВ</span>
                </Link>
                <br />
                <Link to="/schoolofmanagement">
                  <span style={styleSchool}>ШКОЛА УПРАВЛЕНИЯ</span>
                </Link>
              </span>
            ) : (
              <span>
                <Link to="/styleschool">
                  <span style={styleSchool}>ШКОЛА СТИЛЯ</span>
                </Link>{" "}
                &bull;{" "}
                <Link to="/fashionschool">
                  <span style={styleSchool}>ШКОЛА МОДЫ</span>
                </Link>{" "}
                &bull;{" "}
                <Link to="/schoolofdesign">
                  <span style={styleSchool}>ШКОЛА ДИЗАЙНА</span>
                </Link>
                <br />
                <Link to="/artschool">
                  <span style={styleSchool}>ШКОЛА ИСКУССТВ</span>
                </Link>{" "}
                &bull;{" "}
                <Link to="/schoolofmanagement">
                  <span style={styleSchool}>ШКОЛА УПРАВЛЕНИЯ</span>
                </Link>
              </span>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Screen;
