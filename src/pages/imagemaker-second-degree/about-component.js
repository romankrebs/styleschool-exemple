import React, { useState } from "react";
import { Grid } from "@material-ui/core";

const About = props => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{ borderBottom: "2px dotted rgb(240,240,240)", paddingBottom: 12 }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} style={{ textAlign: "center" }}>
          <img
            src={props.image}
            alt={props.name}
            style={{ maxHeight: 160, borderRadius: "50%", marginTop: 12 }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <h3
            style={{
              fontFamily: props.font ? props.font.title : "inherit",
              fontSize: "1.6em",
              fontWeight: 600,
              color: "rgb(100,0,0)",
              textAlign: "left",
              margin: 0,
              padding: 4
            }}
          >
            {props.name}
          </h3>
          <div
            style={{
              fontFamily: props.font ? props.font.text : "inherit",
              fontSize: props.font ? props.font.size : "1em",
              color: "rgb(100,100,100)"
            }}
          >
            {props.text}
          </div>
          <div
            style={{
              fontFamily: props.font ? props.font.text : "inherit",
              fontSize: props.font ? props.font.size : "1em",
              color: "rgb(50,50,100)",
              cursor: "pointer"
            }}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <span>
                Кратко&ensp;
                <span
                  style={{ fontSize: "0.5em", color: "rgba(50,50,100,0.5)" }}
                >
                  &#9650;
                </span>
              </span>
            ) : (
              <span>
                Подробнее&ensp;
                <span
                  style={{ fontSize: "0.5em", color: "rgba(50,50,100,0.5)" }}
                >
                  &#9660;
                </span>
              </span>
            )}
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={
            {
              // height: open ? 300 : 0,
              // transition: "height 1s",
              // display: open ? "block" : "none",
            }
          }
        >
          <div
            style={{
              maxHeight: open ? 1000 : 0,
              transition: "max-height 1s",
              color: "rgb(100,100,100)",
              borderRadius: 6,
              border: open ? "1px solid rgb(245,245,245)" : 0,
              overflowY: "auto"
            }}
          >
            <div style={{ padding: 8 }}>{props.textFull}</div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
