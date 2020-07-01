import React from "react";
import { Grid, Paper } from "@material-ui/core";
import Paragraph from "../../components/p-array";
import { Link } from "react-router-dom";

function Anons(props) {
  return (
    <div>
      <Paper
        style={{
          padding: "2em"
        }}
      >
        <Grid container justify="center" alignItems="stretch" spacing={2}>
          <Grid item xs={12} md={6}>
            <h2
              style={{
                fontFamily: "Roboto",
                fontSize: "1.8rem",
                textAlign: "left",
                fontWeight: 500,
                margin: 0,
                padding: 0,
                paddingBottom: "1.8rem",
                color: "rgb(80,80,80)"
              }}
            >
              Кто меняет моду сегодня? Разбор профессий стилиста, имиджмейкера и
              шопера.
            </h2>
            <Paragraph
              style={{
                fontFamily: "Roboto",
                fontSize: "1rem",
                textAlign: "left",
                margin: 0,
                padding: "0.5rem 0",
                color: "rgb(100,100,100)"
              }}
              content={[
                "Лекция по трендам и Public Talk о профессии",
                "15 февраля в 14:00 по мск",
                "Москва, павильон Арт.Техноград, ВДНХ",
                "Для всех интересующихся модой и профессией",
                "Вход свободный"
              ]}
            />
            <p
              style={{
                fontFamily: "Roboto",
                fontSize: "1rem",
                textAlign: "left",
                margin: 0,
                padding: 0,
                paddingTop: "2rem"
                //color: "rgb(100,100,100)"
              }}
            >
              <Link to="/profession_imagemaker_stylist_shopper">
                подробнее…
              </Link>
            </p>
          </Grid>
          <Grid item xs={12} md={6}>
            <div
              style={{
                textAlign: "center"
              }}
            >
              <img
                src="/img/profession-imagemaker-stylist-shopper/fomina.png"
                alt="Татьяна Фомина"
                style={{ maxWidth: "100%" }}
              />
            </div>
            <p
              style={{
                fontFamily: "Roboto",
                fontSize: "0.9rem",
                color: "rgb(100,100,100)",
                textAlign: "center",
                margin: 0,
                padding: "1rem 0",
                lineHeight: "1rem"
              }}
            >
              Татьяна Фомина
              <br />
              Дизайнер одежды, имидж-стилист, куратор программ подготовки
              имиджмейкеров, стилистов «Высшей школы стилистики, дизайна и
              технологий»
            </p>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Anons;
