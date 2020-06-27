import React from "react";
import Grid from "@material-ui/core/Grid";

import Line from "../../components/line";
import { props } from "bluebird";

export default function About(font) {
  return (
    <Grid
      container
      justify="center"
      alignItems="stretch"
      style={{ padding: 20 }}
    >
      <Grid item xs={12} md={12}>
        <p
          style={{
            fontFamily: props.font ? props.font : "inherit",
            fontSize: "1.4em",
            fontWeight: 400,
            color: "rgb(230,128,50)",
            textAlign: "center"
          }}
        >
          Курс посвящен одной из САМЫХ УВЛЕКАТЕЛЬНЫХ, ИНТРИГУЮЩИХ, ВЫЗЫВАЮЩИХ
          НЕИЗМЕННЫЙ ИНТЕРЕС И ПОСТОЯННО ПРИСУТСТВУЮЩИХ В НАШЕЙ ЖИЗНИ сфер
          &mdash; сфере моды.
        </p>
        <Line />
      </Grid>
      <Grid item xs={12} md={3}>
        <div style={{ textAlign: "center" }}>
          <a
            href="https://styleschool.ru/user/profile.php?id=12"
            style={{ color: "rgb(100,100,100)" }}
          >
            <img
              src="/img/history/teacher.jpg"
              style={{
                borderRadius: "50%",
                height: 200
              }}
              alt=""
            />
            <p
              style={{
                fontFamily: props.font ? props.font : "inherit",
                fontSize: "1.4em",
                fontWeight: 700,
                textAlign: "center"
              }}
            >
              Руслан
              <br />
              Мигранов
            </p>
          </a>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <p
          style={{
            fontFamily: props.font ? props.font : "inherit",
            fontSize: "1.1em",
            lineHeight: "1.5em",
            color: "rgb(100,100,100)",
            textAlign: "left",
            padding: 0,
            margin: 0
          }}
        >
          Как и почему меняется мода, мода как взгляд на эпоху, основные
          характеристики костюма каждого десятилетия, создатели моды, их идеи и
          образы, иконы стиля и &laquo;уличная&raquo; мода, развитие моды как
          развитие идей искусства и технологий XX века, суть творческого метода
          французских, итальянских, британских и американских дизайнеров-кутюрье
          &mdash; все это и еще многое другое в авторском цикле лекций
        </p>
        <p
          style={{
            fontFamily: "Roboto",
            fontSize: "1.1em",
            color: "rgb(123,143,87)",
            textAlign: "center",
            padding: 0,
            margin: 0
          }}
        >
          <a href="https://styleschool.ru/user/profile.php?id=12">
            <img
              src="/img/green/briefcase.svg"
              style={{
                marginBottom: -6
              }}
              alt=""
            />
            &nbsp; Руслана Мигранова
          </a>
        </p>
      </Grid>
      <Grid item xs={12} md={3}>
        <video controls width="100%">
          <source
            src="https://styleschool.ru/fm_ajax.php?action=get_standart_file&type=category&id=230&name=recomendation1.mp4"
            type="video/mp4"
          />
          <source
            src="https://styleschool.ru/fm_ajax.php?action=get_standart_file&type=category&id=230&name=recomendation.ogv"
            type="video/ogg"
          />
        </video>
      </Grid>
    </Grid>
  );
}
