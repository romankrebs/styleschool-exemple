import React from "react";
import { Grid, Hidden } from "@material-ui/core";

export default function Header(props) {
  return (
    <div
      style={{
        background:
          "url(/img/psychology-of-style/ill01.jpg) left top / 100% auto no-repeat",
        maxWidth: 1000,
        margin: "0 auto",
        marginBottom: 24
      }}
    >
      <Grid container justify="flex-start" alignItems="center">
        <Grid item xs={12} md={4} style={{ padding: 24 }}>
          <Hidden implementation="css" smDown>
            <div style={{ height: "10em" }} />
          </Hidden>
          <Hidden implementation="css" mdUp>
            <div style={{ height: "2em" }} />
          </Hidden>
          <h2
            style={{
              fontSize: "1.6em",
              textAlign: "left",
              color: "rgb(255,255,255)",
              fontWeight: 700
            }}
          >
            {props.title}
          </h2>
          <div
            style={{
              fontSize: "1.1em",
              textAlign: "left",
              color: "rgb(255,255,255)"
            }}
          >
            Авторский курс
            <br />
            Лианы Баховой
          </div>
          <Hidden implementation="css" smDown>
            <div style={{ height: "10em" }} />
          </Hidden>
          <Hidden implementation="css" mdUp>
            <div style={{ height: "2em" }} />
          </Hidden>
        </Grid>
      </Grid>
    </div>
    // <Head
    //   head={props.title}
    //   subtitle={<span>8 встреч | 32 академ. часа | ОЧНО | ONLINE</span>}
    // />
  );
}
