import React from "react";
import Grid from "@material-ui/core/Grid";
import Marker from "../../components/marker-paper";

export const datas = {
  online: ["12 ноября 2019 г."],
  ofline: []
};

export default function Date() {
  return (
    <Grid container justify="center" alignItems="stretch" spacing={2}>
      <Grid item xs={12} md={12}>
        <h2
          style={{
            fontFamily: "Roboto",
            fontSize: "2em"
          }}
        >
          Ближайший набор
        </h2>
      </Grid>
      {datas.online[0] ? (
        <Grid item xs={12} md={6}>
          <Marker
            head={{
              content: "Online",
              style: {}
            }}
            text={{
              content:
                "Лекции и практические занятия с использованием современных дистанционных технологий обучения",
              style: { textAlign: "center" }
            }}
            marker={{
              content: datas.online[0],
              style: { textAlign: "center", background: "rgba(240,240,240,1)" }
            }}
            button={{
              image: "/img/file-document-edit_white.svg",
              message: "Записаться"
            }}
            block={{
              style: { padding: 15 }
            }}
          />
        </Grid>
      ) : null}
      {datas.ofline[0] ? (
        <Grid item xs={12} md={6}>
          <Marker
            head={{
              content: "Очно",
              style: {}
            }}
            text={{
              content:
                "Аудиторные лекционные и практические занятия + выездная практика и самостоятельная работа",
              style: { textAlign: "center" }
            }}
            marker={{
              content: datas.ofline[0],
              style: { textAlign: "center", background: "rgba(240,240,240,1)" }
            }}
            button={{
              image: "/img/file-document-edit_white.svg",
              message: "Записаться"
            }}
            block={{
              style: { padding: 15 }
            }}
          />
        </Grid>
      ) : null}
    </Grid>
  );
}
