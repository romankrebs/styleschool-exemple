import React from "react";
import { Grid } from "@material-ui/core";

function R(props) {
  return (
    <span style={{ color: "rgb(90,8,14)" }}>{props.children || props.c}</span>
  );
}

function Tile(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={props.image} alt="" style={{ width: "20%" }} />
      <p
        style={{
          font: "400 1em",
          textAlign: "center",
          color: "rgb(100,100,100)",
          margin: 0,
          padding: 0
        }}
      >
        {props.text}
      </p>
    </div>
  );
}

let styles = {
  redHead: {
    font: '500 2em "Lora"',
    color: "rgb(90,8,14)",
    textAlign: "center",
    margin: 0,
    padding: 0,
    paddingTop: 24
  },
  line12: {
    fontSize: "1.5em",
    fontWeight: 500,
    color: "rgb(100,100,100)",
    textAlign: "center",
    padding: "80px 12px",
    margin: 0
  },
  h3: {
    font: '500 1.8em "Lora"',
    color: "rgb(80,80,80)",
    textAlign: "center",
    margin: 0,
    padding: "0 0 48px 0"
  }
};

export default function Screen() {
  return (
    <div>
      <h2 style={styles.redHead}>
        Сам себе стилист &mdash; практический курс по созданию своего стиля с
        опытными преподавателями, практикующими имидж-стилистами
      </h2>
      <div style={styles.line12}>
        <R>12</R>
         шагов <R>|</R> <R c="12" />
         тем  <R c="∣" /> <R>12</R>
         часов <R c="|" /> в мини-группе или индивидуально
      </div>
      <h3 style={styles.h3}>Что вы получите?</h3>
      <Grid container alignItems="flex-start" spacing={4}>
        <Grid item xs={12} md={4}>
          <Tile
            image="/img/self-style/conversation.svg"
            text="Комфортное общение и песональный lookbook в конце курса"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Tile
            image="/img/self-style/fashion.svg"
            text="Практику создания модных и стильных решений «для себя»"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Tile
            image="/img/self-style/gift.svg"
            text="Подарок: практикум по макияжу и шопинг со стилистом"
          />
        </Grid>
      </Grid>
    </div>
  );
}
