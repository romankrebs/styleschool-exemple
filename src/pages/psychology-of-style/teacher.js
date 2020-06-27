import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Teacher() {
  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12} md={6}>
        <h2
          style={{
            fontSize: "1.6em",
            color: "rgb(100,100,100)",
            textAlign: "center",
            fontWeight: 700
          }}
        >
          Автор курса Лиана Бахова
        </h2>
        <p
          style={{
            textAlign: "left",
            color: "rgb(100,100,100)",
            lineHeight: "1.5em",
            fontSize: "1em"
          }}
        >
          Имидж-консультант, профайлер, автор программ по управлению
          впечатлением в бизнесе и межличностных коммуникациях.
        </p>
        <p
          style={{
            textAlign: "left",
            color: "rgb(100,100,100)",
            lineHeight: "1.5em",
            fontSize: "1em"
          }}
        >
          Преподаватель курса повышения квалификации «Модный ассортимент» и
          курса профессиональной переподготовки «Имидж-консалтинг и
          fashion-styling»
        </p>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          padding: 20,
          paddingTop: 0,
          textAlign: "center"
        }}
      >
        <img
          src="/img/about/liana-bahova.jpg"
          alt="Лиана Бахова"
          style={{ maxWidth: 350 }}
        />
      </Grid>
    </Grid>
  );
}
