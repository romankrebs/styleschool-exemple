import React from "react";
import Slider from "./slider";
import Video from "../../components/video";
import { Grid, Hidden } from "@material-ui/core";

function slidesCreate(arr) {
  var slides = new Array();

  arr.map(
    (el, k) =>
      (slides[k] = (
        <div>
          <Hidden smDown>
            <Grid container>
              <Grid item sm={12} md={6}>
                <Video link={el.link} w={300} h={300} />
              </Grid>
              <Grid item sm={12} md={6}>
                <div
                  style={{
                    background: "rgb(30,30,30)",
                    padding: "1rem",
                    color: "rgb(240,240,240)",
                    fontSize: "0.9rem",
                    fontFamily: "Roboto",
                    lineHeight: "1.4rem",
                    textAlign: "left",
                    margin: 0
                  }}
                >
                  {el.text}
                </div>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Video link={el.link} w={280} h={300} />
            <div
              style={{
                background: "rgb(30,30,30)",
                padding: "1rem",
                color: "rgb(240,240,240)",
                fontSize: "0.9rem",
                fontFamily: "Roboto",
                lineHeight: "1.4rem",
                textAlign: "left",
                margin: 0
              }}
            >
              {el.text}
            </div>
          </Hidden>
        </div>
      ))
  );
  return slides;
}

function Slides(props) {
  return <Slider slides={slidesCreate(props.videos)} />;
}

export default Slides;
