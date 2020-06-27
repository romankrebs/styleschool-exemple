import React from "react";
import { Grid } from "@material-ui/core";

export default function Why() {
  return (
    <Grid container justify="center" alignItems="flex-start" spacing={2}>
      <Grid item xs={12} md={12}>
        <h2
          style={{
            font: '500 2em "Lora"',
            color: "rgb(90,90,90)",
            textAlign: "center",
            margin: 0,
            padding: 0,
            paddingTop: 48,
            paddingBottom: 24
          }}
        >
          Почему «Сам себе стилист»?
        </h2>
      </Grid>
      <Grid item xs={12} md={6}>
        <h3
          style={{
            font: "600 1.2em",
            color: "rgb(90,90,90)",
            textAlign: "left",
            margin: 0,
            padding: 12,
            paddingLeft: 0,
            paddingTop: 0
          }}
        >
          Благодаря курсу «Сам себе стилист» вы создадите свои новые образы,
        </h3>
        <p
          style={{
            font: "400 1em",
            color: "rgb(100,100,100)",
            borderLeft: "12px solid rgb(230,230,230)",
            margin: 0,
            padding: 24
          }}
        >
          посмотрите на уже имеющиеся у вас вещи и аксессуары под необычным
          углом и сможете интереснее их миксовать, будете уверенно говорить о
          моде и стиле, если хотите – давать советы близким и друзьям! Более
          того, возможно, вы приятно измените свое представление о гардеробе и
          шопинге. Это ли не самое главное?
        </p>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src="/img/self-style/stylish.jpg"
          alt=""
          style={{ maxWidth: "100%" }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <p
          style={{
            font: '400 italic 1em "Lora"',
            color: "rgb(100,100,100)",
            margin: 0,
            padding: 0
          }}
        >
          Изменившись внешне, вы изменитесь и внутренне – в лучшую сторону.
        </p>
      </Grid>
      <Grid item md={6} />
    </Grid>
  );
}
