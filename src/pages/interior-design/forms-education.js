import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Forms() {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={12}>
        <div style={{ padding: 20 }}>
          <div
            style={{
              padding: 0,
              paddingLeft: 20,
              border: 0,
              borderLeft: "2px solid rgb(160,160,160)"
            }}
          >
            <h3
              style={{
                fontSize: "1.5em",
                textAlign: "left"
              }}
            >
              Online
            </h3>
            <p
              style={{
                fontSize: "1.1em",
                textAlign: "left",
                paddingLeft: 0
              }}
            >
              Курс состоит из видео уроков и интерактивных он-лайн занятий
              (вебинаров). Изучаете курс в любое время и там, где есть ноутбук и
              доступ в интернет. На вебинарах с преподавателем разбираете
              домашние задания и актуальные вопросы по курсу. Занятия доступны в
              записи.
            </p>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={12}>
        <div style={{ padding: 20 }}>
          <div
            style={{
              padding: 0,
              paddingRight: 20,
              border: 0,
              borderRight: "2px solid rgb(160,160,160)"
            }}
          >
            <h3
              style={{
                fontSize: "1.5em",
                textAlign: "right"
              }}
            >
              Очно
            </h3>
            <p
              style={{
                fontSize: "1.1em",
                textAlign: "right",
                paddingRight: 0
              }}
            >
              Лекционные и практические занятия проходят в аудиториях ВШС.
              Доступно обучение в дневных и вечерних группах или группах
              выходного дня. Пропущенные занятия можно посетить с другой
              группой, или просмотреть аналогичные занятия в онлайн группах.
            </p>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
