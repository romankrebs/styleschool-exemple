import React from "react";
import { Grid, Tooltip } from "@material-ui/core";
import { Link } from "react-router-dom";

/*
function Tile(props) {
  return(
    <div style={{
      padding: 10,
    }}>
      <Tooltip 
      disableFocusListener
      disableTouchListener
      title={props.descript}
      placement="top">
        <div style={{
          background: `url(${props.image}) top left / cover no-repeat`,
          height: 280,
          width: 200,
          paddingTop: 250,
          boxSizing: "border-box",
          borderRadius: 4,
        }}
        >
          <p style={{
            background: "rgba(0,0,0,0.6)",
            boxSizing: "border-box",
            color: "rgb(255,255,255)",
            fontFamily: "Roboto",
            fontSize: 14,
            textAlign: "center",
            height: 32,
            //margin: 0,
            paddingTop: 4,
            ...props.style,
          }}>
            {props.name}
          </p>
        </div>
      </Tooltip>
    </div>
  );
}

export default function Persones(props) {
  return (
    <Grid container justify="center" alignItems="flex-start">
      {props.teachers.map((a,i) => (
        <Grid item xs={12} sm={6} md={3} lx={2}>
          <a href ={a.link}>
            <Tile 
              name={a.name}
              descript={a.descript}
              image={a.image}
              key={i}
              style={props.style}
            />
          </a>
        </Grid>
      ))}
    </Grid>
  );
}
*/
function Tile(props) {
  return (
    <div
      style={{
        padding: 10
      }}
    >
      <Tooltip
        disableFocusListener
        disableTouchListener
        title={props.descript}
        placement="top"
      >
        <div
          style={{
            height: "auto",
            width: 200,
            //paddingTop: 250,
            boxSizing: "border-box",
            borderRadius: 4
          }}
        >
          <img
            src={props.image}
            alt=""
            style={{ width: 200, borderRadius: 4 }}
          />
          <p
            style={{
              background: "rgba(0,0,0,0.6)",
              boxSizing: "border-box",
              color: "rgb(255,255,255)",
              // fontFamily: "Roboto",
              fontSize: 14,
              textAlign: "center",
              height: 32,
              margin: 0,
              paddingTop: 4,
              position: "relative",
              bottom: 36,
              borderRadius: "0 0 4px 4px",
              ...props.style
            }}
          >
            {props.name}
          </p>
        </div>
      </Tooltip>
    </div>
  );
}

export default function Persones(props) {
  return (
    <Grid container justify="flex-start" alignItems="flex-start">
      {props.teachers.map((a, i) => (
        <Grid item xs={12} sm={6} md={3} lx={2}>
          <Link to={a.link}>
            <Tile
              name={a.name}
              descript={a.descript}
              image={a.image}
              key={i}
              style={props.style}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
