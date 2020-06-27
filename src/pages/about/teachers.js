import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import H2 from "../../components/head1";
import Slider from "../../components/slider-person";
import { teachers } from "../teachers/index";

export default function Teachers() {
  return (
    <Grid
      container
      justify="center"
      style={{
        background: "rgba(0,0,0,0.07)"
      }}
    >
      <Grid item xs={12} md={12}>
        <H2 content="Преподаватели" />
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        style={{
          padding: "20px 28px 30px"
          //background: "rgba(0,0,0,0.07)",
        }}
      >
        <Slider teachers={teachers} style={{}} />
      </Grid>
      <Grid item>
        <Link to="/teachers">
          <p
            style={{
              background: "rgb(123,143,87)",
              boxSizing: "border-box",
              height: 42,
              width: 200,
              color: "rgb(255,255,255)",
              fontSize: 18,
              borderRadius: 4,
              margin: "20 auto",
              textAlign: "center",
              paddingTop: 6
            }}
          >
            Все преподаватели
          </p>
        </Link>
      </Grid>
    </Grid>
  );
}
