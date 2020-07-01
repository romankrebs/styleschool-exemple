import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";

function Short(props) {
  return (
    <p
      style={{
        // fontFamily: "Roboto",
        fontSize: "1.2em",
        color: "rgb(100,100,100)",
        textAlign: "center"
      }}
    >
      {props.text}
    </p>
  );
}

function Portret(props) {
  return (
    <div style={{ padding: 20, paddingTop: 0, textAlign: "center" }}>
      <img src={props.image} alt={props.name} style={{ width: 240 }} />
    </div>
  );
}

function Tile(props) {
  return (
    <div style={{ padding: 20 }}>
      <Paper style={{ padding: 8 }}>
        <p
          style={{
            textAlign: "left",
            // fontFamily: "Roboto",
            fontSize: "1em",
            fontWeight: 700,
            color: "rgb(100,100,100)",
            padding: 3,
            margin: 0
          }}
        >
          <img
            src={props.image}
            style={{ height: 20, marginBottom: -4 }}
            alt=""
          />
          &nbsp;
          <span>{props.title}</span>
        </p>
        <p
          style={{
            textAlign: "left",
            // fontFamily: "Roboto",
            fontSize: "0.85em",
            fontWeight: 400,
            color: "rgb(100,100,100)",
            padding: 3,
            margin: 0
          }}
        >
          {props.text}
        </p>
      </Paper>
    </div>
  );
}

function Content(props) {
  return (
    <div>
      {props.content.map((el, i) => (
        <div key={i}>
          {el.title !== "" ? (
            <h3
              style={{
                textAlign: "left",
                fontFamily: "Roboto",
                fontSize: "1.4em",
                fontWeight: 700,
                color: "rgb(100,100,100)"
              }}
            >
              {el.title}
            </h3>
          ) : null}
          <div
            style={{
              textAlign: "left",
              fontFamily: "Roboto",
              fontSize: "1em",
              fontWeight: 400,
              color: "rgb(100,100,100)"
            }}
          >
            {el.text}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Teacher(props) {
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
      <Grid container justify="center" alignItems="flex-start">
        <Grid item xs={12} md={12}>
          <h2
            style={{
              textAlign: "center",
              fontFamily: "Roboto",
              fontSize: "1.6em",
              fontWeight: 700,
              color: "rgb(100,100,100)",
              paddingTop: 0,
              marginTop: 0
            }}
          >
            {props.head}
          </h2>
          {props.short ? <Short text={props.short} /> : null}
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: 20 }}>
          <Portret name={props.head} image={props.image} />
          {props.banner ? (
            <div style={{ textAlign: "center" }}>
              <Link to={props.banner.link}>
                <img src={props.banner.image} alt="" />
              </Link>
            </div>
          ) : null}
          {props.tiles
            ? props.tiles.map((el, i) => (
                <Tile
                  image={el.image}
                  title={el.title}
                  text={el.text}
                  key={i}
                />
              ))
            : null}
        </Grid>
        <Grid item xs={12} md={8} style={{ padding: 20 }}>
          <Content content={props.content} />
        </Grid>
      </Grid>
    </div>
  );
}
