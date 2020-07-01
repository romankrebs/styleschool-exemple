import React from "react";
import { Grid, Paper } from "@material-ui/core";
import Dates from "./date";
import ScrollableAnchor from "react-scrollable-anchor";

const DateEducation = props => {
  const subTitle = "Занятия:";

  const sale = dates => {
    return (
      <span>
        До <b>{dates}</b> действует скидка при раннем бронировании.
      </span>
    );
  };

  const content = [
    {
      date: "8 августа",
      title:
        ", организационное занятие и старт обучения на дистанционной и заочной формах обучения.",
      text: (
        <span>
          будни, утро или вечер по мск. Программа реализуется совместно с РГСУ,
          выпускники получают Университетский диплом + диплом&nbsp;ВШСДТ.
        </span>
      ),
      sale: sale("1 августа")
    },
    {
      date: "12 сентября",
      title:
        ", организационное занятие и старт обучения на дистанционной и заочной формах обучения.",
      text: "будни, утро или вечер по мск.",
      sale: sale("12 августа")
    },
    {
      date: "17 сентября",
      title: ", организационное занятие и старт обучения на очном отделении.",
      text: (
        <span>
          понедельник, среда, пятница, дневная и вечерняя группы. Программа
          реализуется совместно с РГСУ, выпускники получают Университетский
          диплом + диплом&nbsp;ВШСДТ.
        </span>
      ),
      sale: sale("1 августа")
    },
    {
      date: "14 октября",
      title: ", организационное занятие и старт обучения на очном отделении.",
      text: "понедельник, среда, пятница, дневная и вечерняя группы.",
      sale: sale("3 сентября")
    }
  ];

  return (
    <div>
      <ScrollableAnchor id="dates">
        <h2
          style={{
            fontFamily: props.font.title,
            fontSize: "1.8em",
            color: "rgb(100,0,0)",
            fontWeight: 500,
            textAlign: "center"
          }}
        >
          Расписание
        </h2>
      </ScrollableAnchor>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={9}>
          {content.map((el, k) => (
            <Dates
              date={el.date}
              title={el.title}
              subtitle={subTitle}
              text={el.text}
              sale={el.sale}
              key={k}
              font={{
                title: props.font.text,
                size: props.font.size
              }}
              bkg="rgb(241,246,243)"
            />
          ))}
        </Grid>
        <Grid item xs={12} md={3}>
          <a target="_blank" href="/shedule">
            <Paper
              style={{
                color: "rgb(255,255,255)",
                background: "rgb(123,143,87)",
                textAlign: "center",
                fontSize: "1.2em",
                fontWeight: 500,
                padding: 12
              }}
            >
              Расписание всех курсов
            </Paper>
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default DateEducation;
