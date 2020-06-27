import React from "react";
import Grid from "@material-ui/core/Grid";

import Marker from "../../components/marker-paper";

export const datas = {
  online: ["14 ноября 2019"]
};

export default function Date() {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={12} style={{ paddingLeft: 20 }}>
        <h2
          style={{ fontFamily: "Roboto", fontSize: "2em", textAlign: "left" }}
        >
          Ближайший набор
        </h2>
      </Grid>
      <Grid item xs={12} md={6} style={{ paddingBottom: 20 }}>
        <Marker
          head={{
            content: "Дистанционно",
            style: {}
          }}
          text={{
            content: (
              <div>
                <b>Cтоимость:</b>
                 60
                <sup style={{ fontSize: "0.8em" }}>000</sup> ₽<br />
                Дни: вторник, четверг
                <br />
                Рассрочка: до 10 месяцев
                <br />
                Занятия доступны в записи
              </div>
            ),
            style: { textAlign: "center" }
          }}
          marker={{
            content: datas.online[0],
            style: { textAlign: "center", background: "rgba(240,240,240,1)" }
          }}
          button={{
            image: "/img/file-document-edit_white.svg",
            message: "Забронировать"
          }}
          block={{
            style: { padding: 15 }
          }}
        />
      </Grid>
    </Grid>
  );
}
