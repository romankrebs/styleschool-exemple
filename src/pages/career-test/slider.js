import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { Grid } from "@material-ui/core";

function SliderScreenOne(props) {
  return (
    <Slider autoplay={3000}>
      {props.slides.map((el, key) => (
        <Grid container key={key}>
          <Grid item xs={12} md={6}>
            {el.left}
          </Grid>
          <Grid item xs={12} md={6}>
            {el.right}
          </Grid>
        </Grid>
      ))}
    </Slider>
  );
}

export default SliderScreenOne;
