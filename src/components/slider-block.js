import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

export default function SliderTeacher(props) {
  const content = props.content;
  const size = props.size;
  var sizeBlock;
  size === undefined ? (sizeBlock = 12) : (sizeBlock = size);
  return (
    <Slider autoplay={3400}>
      {content.map((slide, index) => (
        <div key={index}>
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ padding: 40 }}
          >
            <Grid item xs={12} md={sizeBlock}>
              <Grid container justify="center" alignItems="flex-start">
                <Grid item xs={5} md={3}>
                  {slide.link ? (
                    <Link to={slide.link}>
                      <img
                        src={slide.src}
                        style={{
                          maxHeight: "70vh",
                          maxWidth: "80%",
                          borderRadius: "50%"
                        }}
                        alt={slide.head}
                      />
                    </Link>
                  ) : (
                    <img
                      src={slide.src}
                      style={{
                        maxHeight: "70vh",
                        maxWidth: "80%",
                        borderRadius: "50%"
                      }}
                      alt={slide.head}
                    />
                  )}
                </Grid>
                <Grid item xs={5} md={7}>
                  {slide.link ? (
                    <Link to={slide.link}>
                      <h3
                        style={{
                          fontSize: 34,
                          color: "rgb(100,100,100)",
                          marginTop: 0,
                          paddingTop: 0
                        }}
                      >
                        {slide.head}
                      </h3>
                    </Link>
                  ) : (
                    <h3
                      style={{
                        fontSize: 34,
                        color: "rgb(100,100,100)"
                      }}
                    >
                      {slide.head}
                    </h3>
                  )}
                  <p style={{ color: "rgb(100,100,100)", fontSize: "1.2em" }}>
                    {slide.text}
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      ))}
    </Slider>
  );
}
